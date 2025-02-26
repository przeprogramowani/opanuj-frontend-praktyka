#!/bin/bash

# Exit on error
set -e

echo "Setting up signals-angular-finish project..."

# Navigate to the signals-angular-finish directory if not already there
cd "$(dirname "$0")" || exit

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build and test the project
echo "Building and testing signals-angular-finish..."
npm run test:single
npm run build

echo "Setup completed successfully!"
