/* eslint-disable import/named */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import chalk from 'chalk'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'
import execa from 'execa'
import Listr from 'listr'
import { projectInstall } from 'pkg-install'
import { getCurrentDirectoryBase, getRootDirectoryBase, setProjetDirectory } from '../files'

const access = promisify(fs.access)
const copy = promisify(ncp)

async function copyTemplateFiles (options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
    filter: (folder) => (!folder.match('node_modules'))
  })
}
async function initGit (options) {
  const result = await execa('git', ['init'], {
    cwd: options.targetDirectory
  })
  if (result.failed) {
    return Promise.reject(new Error('Failed to initialize git'))
  }
}
async function configPackageJson (options) {
  try {
    const pathFile = `${getCurrentDirectoryBase()}\\package.json`
    // eslint-disable-next-line prefer-const
    let jsonPackage = await JSON.parse(fs.readFileSync(pathFile, 'utf-8'))
    jsonPackage.name = options.name
    fs.writeFileSync('package.json', JSON.stringify(jsonPackage, null, 2))
  } catch (err) {
    console.error('%s Configure project with default name ', chalk.yellow('ERROR'))
  }
}
export async function createProject (options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || setProjetDirectory(options.name)
  }
  const templateDir = path.resolve(getRootDirectoryBase(),
    '../templates',
    options.template.toLowerCase())
  options.templateDirectory = templateDir
  try {
    await access(templateDir, fs.constants.R_OK)
  } catch (err) {
    console.error('%s Invalid template name ', chalk.red.bold('ERROR'))
    process.exit(1)
  }

  const tasks = new Listr([
    {
      title: 'Creating project files',
      task: () => copyTemplateFiles(options)
    },
    {
      title: 'Initialize git',
      task: () => initGit(options),
      enabled: () => options.git
    },
    {
      title: 'Initialize package.json',
      task: () => configPackageJson(options)
    },
    {
      title: 'Install npm dependencies',
      task: () => projectInstall({
        cwd: options.targetDirectory
      }),
      skip: () => (!options.runInstall ? '--install omited, manually install dependencies' : undefined)
    }
  ])
  await tasks.run()
  console.log('%s Project Ready at /%s', chalk.green.bold('DONE'), chalk.cyan.bold(options.name))
  if (options.runInstall) {
    console.log('%s to %s and %s or %s ', chalk.cyan.bold('cd'), chalk.cyan.bold(options.name), chalk.blueBright('npm run start'), chalk.blueBright('yarn start'))
  }
  console.log('by ~%s ', chalk.green.bold('@bsjaramillo'))
  return true
}
