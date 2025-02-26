#!/bin/bash

# Exit on error
set -e

echo "Setting up design-tokens project..."

# Navigate to the design-tokens directory if not already there
cd "$(dirname "$0")" || exit

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building design tokens..."
npm run build

echo "Setup completed successfully!"
