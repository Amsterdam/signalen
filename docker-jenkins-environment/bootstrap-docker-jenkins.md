# bootstrap-docker-jenkins.sh

Script to clone Basis SIA Jenkins environment to Docker

## Overview

This script configures a local Docker environment with SIA pipelines.

Instructions

* Start the Jenkins docker environment and bootstrap it:
cd ~/docker-jenkins-environment/internals/jenkins
docker-compose up
./bootstrap_sia_jenkins_environment.sh

## Index

* [function jenkins_token_generate {](#function-jenkins_token_generate-)
* [log_info()](#log_info)
* [log_error()](#log_error)
* [function _get_response_code {](#function-_get_response_code-)
* [function _github_get {](#function-_github_get-)
* [function _jenkins_get {](#function-_jenkins_get-)
* [function _jenkins_post {](#function-_jenkins_post-)
* [function _jenkins_post_data {](#function-_jenkins_post_data-)
* [function _jenkins_post_json {](#function-_jenkins_post_json-)
* [function _check_command {](#function-_check_command-)
* [function _check_env_variable {](#function-_check_env_variable-)
* [function _jenkins_groovy {](#function-_jenkins_groovy-)
* [function github_user_details {](#function-github_user_details-)
* [function github_user_get {](#function-github_user_get-)
* [function github_repo_delete {](#function-github_repo_delete-)
* [function github_repository_exists {](#function-github_repository_exists-)
* [function github_webhook_get {](#function-github_webhook_get-)
* [function github_webhook_delete {](#function-github_webhook_delete-)
* [function github_webhook_create {](#function-github_webhook_create-)
* [function github_repo_fork {](#function-github_repo_fork-)
* [function production_jenkins_job_get {](#function-production_jenkins_job_get-)
* [function jenkins_plugin_install {](#function-jenkins_plugin_install-)
* [function jenkins_plugin_list {](#function-jenkins_plugin_list-)
* [function jenkins_safe_restart {](#function-jenkins_safe_restart-)
* [jenkins_job_get()](#jenkins_job_get)
* [jenkins_job_create()](#jenkins_job_create)
* [jenkins_job_delete()](#jenkins_job_delete)
* [jenkins_job_list()](#jenkins_job_list)
* [jenkins_credentials_global_add()](#jenkins_credentials_global_add)
* [function jenkins_job_build {](#function-jenkins_job_build-)
* [function bootstrap_sia_jenkins_environment {](#function-bootstrap_sia_jenkins_environment-)
* [function jenkins_parameter_replace {](#function-jenkins_parameter_replace-)
* [function prepare_github_repositories {](#function-prepare_github_repositories-)

### function jenkins_token_generate {

Generate a Jenkins Token.

#### Example

```bash
jenkins_token_generate
```

#### Arguments

* **$1** (string): A value to print

#### Exit codes

* **0**: If successful.
* **1**: If failed.

### log_info()

Log info.

#### Example

```bash
log_info "this will be logged to stdout"
```

#### Arguments

* **$1** (string): String to print

### log_error()

Log error.

#### Example

```bash
log_error "this will be logged to stdout"
```

#### Arguments

* **$1** (string): String to print

### function _get_response_code {

Make a GET request and return the response code.

#### Example

```bash
_get_response_code https://amsterdam.nl
```

#### Arguments

* **$1** (string): url - Url

### function _github_get {

Make an authorized GET request to GitHub.

#### Example

```bash
_github_get user
```

#### Arguments

* **$1** (string): url - Url

### function _jenkins_get {

Make an authorized GET request to Jenkins.

#### Example

```bash
_jenkins_get
```

#### Arguments

* **$1** (string): query - Query

### function _jenkins_post {

Make an authorized POST request to Jenkins.

#### Example

```bash
_jenkins_post safeRestart
```

#### Arguments

* **$1** (string): query - Query

### function _jenkins_post_data {

Make an authorized POST request with data to Jenkins.

#### Example

```bash
_jenkins_post_data "$query" "@cache/${job_xml}"
```

#### Arguments

* **$1** (string): query - Query
* **$2** (string): data - Data to post

### function _jenkins_post_json {

Make an authorized POST request with JSON data to Jenkins.

#### Example

```bash
_jenkins_post_json
```

#### Arguments

* **$1** (string): query - Query
* **$2** (string): json - JSON data to post

### function _check_command {

Check if command exists or exit.

#### Example

```bash
_check_command git
```

#### Arguments

* **$1** (string): command_name - Command to check

### function _check_env_variable {

Check if environment variable exists, otherwise print message and exit.

#### Example

```bash
_check_env_variable ENVIRONMENT_VARIABLE_NAME "description of environment variable"
```

#### Arguments

* **$1** (string): env_name - Name of the environment variable
* **$1** (string): message - Message to display when environment variable is empty

### function _jenkins_groovy {

Execute a Groovy script via the Jenkins rest API.

#### Example

```bash
_jenkins_groovy ./script.groovy
```

#### Arguments

* **$1** (string): script_name - Name of the Groovy script to execute

### function github_user_details {

Get user details from GitHub

#### Example

```bash
github_user_details
```

_Function has no arguments._

### function github_user_get {

Get user name from GitHub user details

#### Example

```bash
github_user_get
```

_Function has no arguments._

### function github_repo_delete {

Check if environment variable exists, otherwise print message and exit.

#### Example

```bash
github_repo_delete ENVIRONMENT_VARIABLE_NAME "description of environment variable"
```

#### Arguments

* **$1** (string): org - Name of Github repository owner/organization
* **$2** (string): repo - Name of GitHub repository

### function github_repository_exists {

Check if GitHub repository exists, otherwise log error and exit.

#### Example

```bash
github_repository_exists signals-frontend
```

#### Arguments

* **$1** (string): repository - Name of GitHub repository to check

### function github_webhook_get {

Get GitHub web hook details.

#### Example

```bash
github_webhook_get signals-frontend 123456
```

#### Arguments

* **$1** (string): repository - Name of GitHub repository
* **$2** (string): id - GitHub webhook id

### function github_webhook_delete {

Delete GitHub web hook.

#### Example

```bash
github_webhook_delete signals-frontend 280511274
```

#### Arguments

* **$1** (string): repository - Name of GitHub repository
* **$2** (string): id - GitHub webhook id

### function github_webhook_create {

Create GitHub web hook.

#### Example

```bash
github_webhook_create signals-frontend 123456
```

#### Arguments

* **$1** (string): repository - Name of GitHub repository
* **$2** (string): url - Url where the hooks will be delivered

### function github_repo_fork {

Fork GitHub repository.

#### Example

```bash
github_repo_fork Amsterdam signals-frontend
```

#### Arguments

* **$1** (string): org - Name of Github repository owner/organization
* **$2** (string): repo - Name of GitHub repository

### function production_jenkins_job_get {

Copy a Jenkins pipeline from production.

#### Example

```bash
production_jenkins_job_get SIA_Signalen_Amsterdam
production_jenkins_job_get signalen-release SIA_Signalen_Amsterdam
```

#### Arguments

* **$1** (string): job_name - Name of the Jenkins pipeline
* **$2** (string): folder_name - Name of the pipeline folder

### function jenkins_plugin_install {

Install a Jenkins plugin.

#### Example

```bash
jenkins_plugin_install git
```

#### Arguments

* **$1** (string): plugin_name - Name of the Jenkins plugin

### function jenkins_plugin_list {

List all installed Jenkins plugins.

#### Example

```bash
jenkins_plugin_list
```

_Function has no arguments._

### function jenkins_safe_restart {

Restart Jenkins.

#### Example

```bash
jenkins_safe_restart
```

_Function has no arguments._

### jenkins_job_get()

Copy a Jenkins pipeline.

#### Example

```bash
jenkins_job_get SIA_Signalen_Amsterdam
jenkins_job_get signalen-release SIA_Signalen_Amsterdam
```

#### Arguments

* **$1** (string): job_name - Name of the Jenkins pipeline
* **$2** (string): folder_name - Name of the pipeline folder

### jenkins_job_create()

Create or update a Jenkins pipeline.

#### Example

```bash
jenkins_job_create SIA_Signalen_Amsterdam
jenkins_job_create signalen-release SIA_Signalen_Amsterdam
```

#### Arguments

* **$1** (string): job_name - Name of the Jenkins pipeline
* **$2** (string): folder_name - Name of the pipeline folder

### jenkins_job_delete()

Delete a Jenkins pipeline.

#### Example

```bash
jenkins_job_delete SIA_Signalen_Amsterdam
jenkins_job_delete signalen-release SIA_Signalen_Amsterdam
```

#### Arguments

* **$1** (string): job_name - Name of the Jenkins pipeline
* **$2** (string): folder_name - Name of the pipeline folder

### jenkins_job_list()

List Jenkins pipelines.

#### Example

```bash
jenkins_job_list
```

_Function has no arguments._

### jenkins_credentials_global_add()

Add Jenkinst global GitHub credentials.

#### Example

```bash
jenkins_credentials_global_add jpoppe 3233243242343243242344
```

#### Arguments

* **$1** (string): github_user - Your GitHub user name
* **$2** (string): github_token - Your secret GitHub Token

### function jenkins_job_build {

Trigger a Jenkins pipeline build.

#### Example

```bash
jenkins_job_build signalen-acceptance SIA_Signalen_Amsterdam
```

#### Arguments

* **$1** (string): job_name - Name of the Jenkins pipeline
* **$2** (string): folder_name - Name of the pipeline folder
* **$3** (string): data - Job parameters could be json, url encoded or data file

### function bootstrap_sia_jenkins_environment {

Bootstap a SIA Docker Jenkins environment.

#### Example

```bash
bootstrap_sia_jenkins_environment
```

_Function has no arguments._

### function jenkins_parameter_replace {

Replace pipeline parameters in SIA Jenkinsfiles.

#### Example

```bash
jenkins_parameter_replace signalen/Jenkinsfile.acceptance JENKINS_NODE master
```

#### Arguments

* **$1** (string): jenkins_file - Path of Jenkinsfile
* **$2** (string): key - Key name which holds value to replace
* **$3** (string): value - Value to replace with

### function prepare_github_repositories {

Prepare the SIA GitHub repositories, this will clone and modify the SIA repositories.

#### Example

```bash
prepare_github_repositories
```

_Function has no arguments._

