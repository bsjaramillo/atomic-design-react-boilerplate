/* eslint-disable import/prefer-default-export */
import inquirer from 'inquirer';
import arg from 'arg';
import { createProject } from './main';

function parseArgumentIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    },
  );
  return {
    git: args['--git'] || false,
    name: args._[0],
    runInstall: args['--install'] || false,
  };
}
async function promptForMissingOptions(options) {
  const defaultName = 'atomic-project';
  const questions = [];
  if (!options.name) {
    questions.push({
      type: 'input',
      name: 'projectName',
      message: 'Name of project? Default:',
      default: defaultName,
    });
  }
  questions.push({
    type: 'list',
    name: 'template',
    message: 'Please choose which project template to use',
    choices: ['JavaScript', 'TypeScript'],
    default: 'JavaScript',
  });
  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    });
  }
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: answers.template,
    runInstall: options.runInstall,
    name: options.name || answers.projectName,
    git: options.git || answers.git,
  };
}

export async function cli(args) {
  let options = parseArgumentIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
