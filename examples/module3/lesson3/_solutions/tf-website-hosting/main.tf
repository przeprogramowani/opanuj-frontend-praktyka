terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40.0"
    }
  }

  required_version = ">= 1.5.0"

  # Usuń komentarz aby przeprowadzić migrację stanu
  # backend "s3" {
  #   bucket         = "ofe-terraform-state-bucket"
  #   key            = "state/terraform.tfstate"
  #   region         = "eu-central-1"
  #   encrypt        = true
  #   dynamodb_table = "terraform-state-lock"
  # }
}

provider "aws" {
  region = "eu-central-1"
}
