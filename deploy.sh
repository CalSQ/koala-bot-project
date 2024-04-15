#!/bin/bash

# Load environment variables for deployment
# BACKEND_HOST=0.0.0.0/0 (Required)
# BACKEND_USER=user (Required)
# BACKEND_PATH=/var/www (Required)
# BACKEND_SSH_PORT=22 (Default: 22)
# BACKEND_SSH_KEY=~/.ssh/id_rsa (Default: none)
source api/.env

########################################################################

# Options
options=( "api" "client" )
indexes=( "${!options[@]}" )

# Display options
echo -e "[0] all"
for key in "${!options[@]}"; do
  echo "[$(($key+1))] ${options[$key]}"
done
read -p "Select an option to deploy > " -n 1 -r
echo; OPTION_INDEX=$REPLY

# Check for -y flag (yes to prompts)
while test $# -gt 0; do
  case "$1" in
    -y|--yes)
      SKIP_PROMPT=true
      break
      ;;
  esac
done

# Check if option is valid
if (($OPTION_INDEX >= 0 && $OPTION_INDEX <= indexes[-1]+1)); then
  OPTION_VALUE=${options[$(($OPTION_INDEX-1))]}
  
  # Check directory exists
  if [[ $OPTION_INDEX -eq 0 ]]; then
    for key in "${!options[@]}"; do
      if [ ! -d "${options[$key]}" ]; then
        echo "Deployment failed, the directory does not exist."; exit 1
      fi
    done
  else
    if [ ! -d "${OPTION_VALUE}" ]; then
      echo "Deployment failed, the directory does not exist."; exit 1
    fi
  fi

  # Prompt build files
  if [ ! $SKIP_PROMPT ]; then
    read -p "Create build files? [y/n] " -n 1 -r
    echo
  else
    REPLY="y"
  fi
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [[ $OPTION_INDEX -eq 0 ]]; then
      for key in "${!options[@]}"; do
        cd ${options[$key]}
        bun run build
        cd ..
      done
    else
      cd ${OPTION_VALUE}
      bun run build
      cd ..
    fi
    echo "Build successful."
  fi

  # Deploy selected option
  if [ ! $SKIP_PROMPT ]; then
    read -p "Deploy app? [y/n] " -n 1 -r
    echo
  else
    REPLY="y"
  fi
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [[ $OPTION_INDEX -eq 0 ]]; then
      for key in "${!options[@]}"; do
        echo "Deploying ${options[$key]}..."
        cd ${options[$key]}
        scp $([ -f $BACKEND_SSH_KEY ] && echo "-i $BACKEND_SSH_KEY") -P ${BACKEND_SSH_PORT:-22} -r dist/* $BACKEND_USER@$BACKEND_HOST:$BACKEND_PATH/${options[$key]}
        cd ..
      done
    else
      cd ${OPTION_VALUE}
      scp $([ $BACKEND_SSH_KEY ] && echo "-i $BACKEND_SSH_KEY") -P ${BACKEND_SSH_PORT:-22} -r dist/* $BACKEND_USER@$BACKEND_HOST:$BACKEND_PATH/$OPTION_VALUE
      cd ..
    fi
    echo "Deployment successful."
  fi
  echo "Finished."
else
  echo "Deployment failed, an invalid option was selected."; exit 1
fi
