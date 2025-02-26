#!/bin/bash

# Exit on error
set -e

echo "Setting up signals-angular-start project..."

# Navigate to the signals-angular-start directory if not already there
cd "$(dirname "$0")" || exit

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build and test the project
echo "Building and testing signals-angular-start..."
npm run test:single
npm run build

echo "Setup completed successfully!"
