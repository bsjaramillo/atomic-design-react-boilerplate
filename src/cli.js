/* eslint-disable import/prefer-default-export */
import inquirer from 'inquirer';
import arg from 'arg';
import { createProject } from './main';

function parseArgumentIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    },
  );
  return {
    // skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    name: args._[0],
    runInstall: args['--install'] || true,
  };
}
async function promptForMissingOptions(options) {
  const defaultName = 'atomic-project';
  // if (options.skipPrompts) {
  // return {
  // ...options,
  // template: options.template || defaultTemplate,
  // };
  // }

  const questions = [];
  questions.push({
    type: 'list',
    name: 'template',
    message: 'Please choose which project template to use',
    choices: ['JavaScript', 'TypeScript'],
    default: 'JavaScript',
  });

  questions.push({
    type: 'confirm',
    name: 'git',
    message: 'Initialize a git repository?',
    default: false,
  });
  if (!options.name) {
    questions.push({
      type: 'input',
      name: 'projectName',
      message: 'Name of project? Default:',
      default: defaultName,
    });
  }
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: answers.template,
    name: options.name || answers.name,
    git: options.git || answers.git,
  };
}

export async function cli(args) {
  let options = parseArgumentIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
