#!/bin/bash

echo "Running custom setup scripts..."

# Configuration for custom script execution
# Add new entries to this array without changing execution logic
CONFIG_JSON='[
  {
    "directory": "./examples/module4/lesson2/design-tokens",
    "script": "setup.sh"
  }
]'
# Add more configurations by adding entries to the JSON array above

# Loop through each config entry
echo "$CONFIG_JSON" | jq -c '.[]' | while read -r entry; do
  DIR=$(echo "$entry" | jq -r '.directory')
  SCRIPT=$(echo "$entry" | jq -r '.script')

  # Check if this directory exists in the repository
  if [ -d "$DIR" ]; then
    echo "Executing script: $SCRIPT for directory: $DIR"

    # Check if script path is absolute or relative
    SCRIPT_PATH="$DIR/$SCRIPT"
    if [[ "$SCRIPT" == /* ]]; then
      # If script path is absolute, use it directly
      SCRIPT_PATH="$SCRIPT"
    fi

    if [ -f "$SCRIPT_PATH" ]; then
      # Navigate to the directory and run the script
      cd "$DIR" && bash "$SCRIPT"
      # Return to the original directory
      cd - > /dev/null
    else
      echo "Warning: Script $SCRIPT_PATH not found"
    fi
  else
    echo "Warning: Directory $DIR not found"
  fi
done