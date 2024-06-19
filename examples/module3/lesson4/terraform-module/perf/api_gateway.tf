resource "aws_iam_role_policy_attachment" "api_gateway_service_role_logs_policy" {
  role       = aws_iam_role.iam_role_api_gateway.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"
}

resource "aws_iam_role" "iam_role_api_gateway" {
  name = "APIGatewayRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "apigateway.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy" "api_gateway_logging" {
  name = "APIGatewayLoggingPolicy"
  role = aws_iam_role.iam_role_api_gateway.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Effect   = "Allow",
        Resource = "arn:aws:logs:*:*:*"
      },
    ]
  })
}

resource "aws_api_gateway_account" "account" {
  cloudwatch_role_arn = aws_iam_role.iam_role_api_gateway.arn
}

resource "aws_api_gateway_rest_api" "api" {
  name        = "WebsiteLoadTimeAPI"
  description = "API for website load time monitoring"
}

resource "aws_api_gateway_resource" "monitoring_resource" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "monitoring"
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.perf_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.api.execution_arn}/*/*/*"
}

resource "aws_api_gateway_deployment" "api_deployment" {
  rest_api_id = aws_api_gateway_rest_api.api.id

  depends_on = [
    aws_api_gateway_method.api_post_method,
    aws_api_gateway_integration.lambda_integration
  ]

  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.api.body))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_cloudwatch_log_group" "api_prod_log" {
  name              = "/aws/api-gateway/${aws_api_gateway_rest_api.api.id}"
  retention_in_days = 7
}

resource "aws_api_gateway_stage" "prod_stage" {
  deployment_id = aws_api_gateway_deployment.api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.api.id
  stage_name    = "prod"

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_prod_log.arn
    format          = file("${path.module}/access_log_format.json")
  }
}
