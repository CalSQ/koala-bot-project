#!/bin/bash

# Load environment variables for deployment
# BACKEND_HOST=0.0.0.0/0 (Required)
# BACKEND_USER=user (Required)
# BACKEND_PATH=/var/www (Required)
# BACKEND_SSH_PORT=22 (Default: 22)
# BACKEND_SSH_KEY=~/.ssh/id_rsa (Default: none)
source .env

# Options
sync_nginx_docker=true
options=( "api" "client" )
indexes=( "${!options[@]}" )

########################################################################

Reset='\033[0m'
Bold="\033[1m"
Underline="\033[4m"
Flash="\033[5m"
Black='\033[0;30m'
Red='\033[0;31m'
Green='\033[0;32m'
Yellow='\033[0;33m'
Blue='\033[0;34m'
Purple='\033[0;35m'
Cyan='\033[0;36m'
White='\033[0;37m'
Gray='\033[1;30m'

########################################################################

# Display options
echo -e "$Gray[0]$Reset all"
for key in "${!options[@]}"; do
  echo -e "$Gray[$(($key+1))]$Reset ${options[$key]}"
done
read -p "$(echo -e ${Yellow}"Select an option to deploy > "${Reset})" -n 1 -r OPTION_INDEX
echo

# Check for -y flag (yes to prompts)
while test $# -gt 0; do
  case "$1" in
    -y|--yes)
      SKIP_PROMPT=true
      break
      ;;
    -a|--all)
      echo "Incomplete flag"
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
        echo -e "${Red}${Bold}[ Error ] Deployment failed, the directory does not exist.${Reset}"; exit 1
      fi
    done
  else
    if [ ! -d "${OPTION_VALUE}" ]; then
      echo -e "${Red}${Bold}[ Error ] Deployment failed, the directory does not exist.${Reset}"; exit 1
    fi
  fi

  # Prompt build files
  if [ ! $SKIP_PROMPT ]; then
    read -p "$(echo -e $Yellow"Create build files? [y/n] "$Reset)" -n 1 -r
    echo
  else
    REPLY="y"
  fi
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [[ $OPTION_INDEX -eq 0 ]]; then
      for key in "${!options[@]}"; do
        if [ -f "${options[$key]}/package.json" ]; then
          cd ${options[$key]}
          bun run build
          cd ..
        else
          echo -e "${Red}${Bold}[ Error ] No package.json found in ${options[$key]}, skipping.${Reset}"
        fi
      done
    else
      cd ${OPTION_VALUE}
      bun run build
      cd ..
    fi
    echo -e "${Green}Build successful.${Reset}"
  fi

  # Deploy selected option
  if [ ! $SKIP_PROMPT ]; then
    read -p "$(echo -e $Yellow"Deploy app? [y/n] "$Reset)" -n 1 -r
    echo
  else
    REPLY="y"
  fi
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [[ $OPTION_INDEX -eq 0 ]]; then
      for key in "${!options[@]}"; do
        echo -e "${Gray}Deploying ${options[$key]}...${Reset}"
        scp $([ -f $BACKEND_SSH_KEY ] && echo "-i $BACKEND_SSH_KEY") -P ${BACKEND_SSH_PORT:-22} -r ${options[$key]}/{dist,Dockerfile,package.json} $BACKEND_USER@$BACKEND_HOST:$BACKEND_PATH/${options[$key]}
      done
    else
      scp $([ $BACKEND_SSH_KEY ] && echo "-i $BACKEND_SSH_KEY") -P ${BACKEND_SSH_PORT:-22} -r $OPTION_VALUE/{dist,Dockerfile,package.json} $BACKEND_USER@$BACKEND_HOST:$BACKEND_PATH/$OPTION_VALUE
    fi
    echo -e "${Green}Deployment successful.${Reset}"
  fi

  # Sync nginx & docker configuration
  if [ $sync_nginx_docker ]; then
    if [ ! $SKIP_PROMPT ]; then
      read -p "$(echo -e $Yellow"Sync nginx and docker configuration? [y/n] "$Reset)" -n 1 -r
      echo
    else
      REPLY="y"
    fi
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      scp $([ $BACKEND_SSH_KEY ] && echo "-i $BACKEND_SSH_KEY") -P ${BACKEND_SSH_PORT:-22} -r ./{nginx,docker-compose-production.yml,.env} $BACKEND_USER@$BACKEND_HOST:$BACKEND_PATH
      echo -e "${Green}Sync successful.${Reset}"
    fi
  fi

  echo -e "${Green}${Bold}Finished!${Reset}"
else
  echo -e "${Red}${Bold}[ Error ] Deployment failed, an invalid option was selected.${Reset}"; exit 1
fi