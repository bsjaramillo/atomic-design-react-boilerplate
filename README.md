# Atomic-Design-React Boilerplate

**cad-br** is a cli tool to generate application structure with javascript or typescript.

The following guide is followed for creation of application strucuture.

## Installation

Use the package manager npm to install **cad-br**

```bash
npm install @bsjaramillo/cad-br
```

## Usage

Create a new project.
```bash
cad-br name-of-project
```
Next will you answers the prompts.

1. Choice a template (JS or TS)
2. Init a git repository (y/N) 

The structure created by this command is the followed:
```bash
name-of-project
|
|__public
|__src
|__.babelrc
|__package.json
|__package-lock.json
|__webpack.config.js

```

This command will create a project without install npm dependencies.
You will install manually npm dependencies.

The folder src will contain the structure for the atomic design with an example based in the boilerplate [react-atomic-structure](https://github.com/Rulox/react-atomic-structure)

## Modifiers
**For initialize automatically git repository**

```bash
    > cad-br name-of-project --git 
or  > cad-br name-of-project -g

```
**For install automatically npm dependencies**

```bash
    > cad-br name-of-project --install
or  > cad-br name-of-project -i

```
Optionally you can create a new project only with the command:
```bash
    > cad-br

```
Next will you answers the prompts.

1. Choice a template (JS or TS)
2. Init a git repository (y/N) 
3. Input the project name

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
