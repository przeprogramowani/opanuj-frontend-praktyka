resource "aws_s3_bucket" "ofe_state_bucket" {
  bucket = "ofe-terraform-state-bucket"
}

resource "aws_s3_bucket_versioning" "ofe_state_bucket_versioning" {
  bucket = aws_s3_bucket.ofe_state_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_ownership_controls" "ofe_state_bucket_ownership" {
  bucket = aws_s3_bucket.ofe_state_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "ofe_state_bucket_acl" {
  depends_on = [aws_s3_bucket_ownership_controls.ofe_state_bucket_ownership]

  bucket = aws_s3_bucket.ofe_state_bucket.id
  acl    = "private"
}

resource "aws_dynamodb_table" "ofe_state_lock_table" {
  name         = "terraform-state-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}
