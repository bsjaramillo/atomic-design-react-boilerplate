/* eslint-disable import/prefer-default-export */
import program from 'commander'
import inquirer from 'inquirer'
import * as fs from 'fs'
import * as path from 'path'
import arg from 'arg'
import { createProject } from './commands/InitProject'
import chalk from 'chalk'

const packageConfig = fs.readFileSync(path.join(__dirname, '..', 'package.json')).toString()
const VERSION = JSON.parse(packageConfig).version
function parseArgumentIntoOptions (rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--install': Boolean,
      '--gen': String,
      '-g': '--git',
      '-i': '--install'
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    git: args['--git'] || false,
    component: args['--gen'] || null,
    // command: args._[0] || 'gen',
    command: 'new',
    name: args._[0],
    runInstall: args['--install'] || false
  }
}
async function promptForMissingOptions (options) {
  const defaultName = 'atomic-project'
  const { name, git } = options
  const questions = []
  if (!name) {
    questions.push({
      type: 'input',
      name: 'projectName',
      message: 'Name of project? Default:',
      default: defaultName
    })
  }
  questions.push({
    type: 'list',
    name: 'template',
    message: 'Please choose which project template to use',
    choices: ['JavaScript', 'TypeScript'],
    default: 'JavaScript'
  })
  if (!git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false
    })
  }
  const answers = await inquirer.prompt(questions)
  return {
    ...options,
    template: answers.template,
    runInstall: options.runInstall,
    name: options.name || answers.projectName,
    git: options.git || answers.git
  }
}

export async function cli (args) {
  program.version(VERSION)
  try {
    var options = parseArgumentIntoOptions(args)
    switch (options.command) {
      case 'new':
        options = await promptForMissingOptions(options)
        await createProject(options)
        break
      // case 'gen':
        // console.log('new gen')
        // break
      default:
        console.log(chalk.yellow('ERROR Missing propierties'))
    }
  } catch (err) {
    if (err.code === 'ARG_UNKNOWN_OPTION') {
      console.log(chalk.yellow(err.message))
    } else {
      throw err
    }
  }
}
