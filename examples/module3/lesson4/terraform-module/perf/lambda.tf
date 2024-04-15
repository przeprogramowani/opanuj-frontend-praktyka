# For Windows
# data "external" "lambda_builder_sh" {
#   program = ["cmd", "/C", "cd ${var.lambda_source_dir} && npm install >NUL 2>&1 && npm run build >NUL 2>&1 && echo {}"]
# }

# For Linux / MacOS
data "external" "lambda_builder_sh" {
  program = ["bash", "-c", "cd ${var.lambda_source_dir} && npm install > '/dev/null' 2>&1 && npm run build > '/dev/null' 2>&1 && echo \"{ }\" "]
}

resource "aws_iam_role" "iam_role_for_lambda" {
  name = "LambdaExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy" "lambda_logging_policy" {
  name = "LambdaPerfLoggingPolicy"
  role = aws_iam_role.iam_role_for_lambda.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "cloudwatch:PutMetricData",
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

resource "aws_iam_role_policy" "lambda_metric_policy" {
  name = "LambdaPerfMetricsPolicy"
  role = aws_iam_role.iam_role_for_lambda.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action   = "cloudwatch:PutMetricData",
        Effect   = "Allow",
        Resource = "*"
      },
    ]
  })
}

resource "aws_lambda_function" "perf_lambda" {
  depends_on    = [data.external.lambda_builder_sh]
  filename      = "${var.lambda_source_dir}/dist/lambda.zip"
  function_name = var.lambda_function_name
  role          = aws_iam_role.iam_role_for_lambda.arn
  handler       = "index.handler"

  source_code_hash = filesha256("${var.lambda_source_dir}/index.ts")

  runtime = "nodejs20.x"
}
