resource "aws_cloudwatch_dashboard" "perf_dashboard" {
  dashboard_name = "Performance_Dashboard"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 12
        height = 6

        properties = {
          metrics = [
            [
              "RMCatalogMetrics", "WebsiteLoadTime",
            ]
          ]
          period = 86400 * 7
          stat   = "p95"
          view   = "singleValue"
          region = "eu-central-1"
          title  = "Load Time (P95)"
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 0
        width  = 12
        height = 6

        properties = {
          metrics = [
            [
              "RMCatalogMetrics", "WebsiteLoadTime",
            ]
          ]
          view    = "timeSeries"
          stacked = false,
          region  = "eu-central-1"
          title   = "Load Time Metric"
        }
      }
    ]
  })
}
