siali (experimental CLI for SIA) :unicorn:
=====

SIA CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/siali.svg)](https://npmjs.org/package/siali)
[![Downloads/week](https://img.shields.io/npm/dw/siali.svg)](https://npmjs.org/package/siali)
[![License](https://img.shields.io/npm/l/siali.svg)](https://github.com/jpoppe/siali/blob/master/package.json)

* https://developer.github.com/v3/repos/commits/#compare-two-commits


<!-- toc -->
* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Prerequisites

The SIALI script connects to both Github and Jira and for both services you'll need access tokens. Without access tokens, the script cannot create a release branch and corresponding pull request and it won't be able to retrieve the Jira ticket statuses.

Note: the script depends on the Jira account language settings to be English (US).

# Installation
<!-- installation -->
- When the package is NOT yet published to npmjs.org
   ```sh-session
   $ cd packages/siali
   $ npm link
   ```

-  When the package IS published to npmjs.org
   ```sh-session
   $ npm install -g @signalen/siali
   ```

# Usage
<!-- usage -->
```sh-session
$ siali COMMAND
running command...
$ siali (-v|--version|version)
@signalen/siali/0.0.1 linux-x64 node-v14.3.0
$ siali --help [COMMAND]
USAGE
  $ siali COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`siali help [COMMAND]`](#siali-help-command)
* [`siali release`](#siali-release)

## `siali help [COMMAND]`

display help for siali

```
USAGE
  $ siali help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `siali release`

SIA Release Manager

```
USAGE
  $ siali release

OPTIONS
  -h, --help                 show release help
  --gitHubToken=gitHubToken  GitHub Personal Access Token
  --jiraToken=jiraToken      Jira API Token
  --jiraUrl=jiraUrl          Jira API Url
  --jiraUser=jiraUser        Jira User (e-mail)
  --repository=repository    Repository slug
```

_See code: [src/commands/release.ts](./src/commands/release.ts)_
<!-- commandsstop -->
