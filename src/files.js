import fs from 'fs';

import path from 'path';

export const getCurrentDirectoryBase = () => process.cwd();
export const getRootDirectoryBase = () => path.resolve(__dirname);
export const directoryExists = (nameFolder) => {
  try {
    return fs.statSync(nameFolder).isDirectory();
  } catch (err) {
    return false;
  }
};
export const setProjetDirectory = (nameFolder) => {
  try {
    fs.mkdirSync(nameFolder);
    process.chdir(nameFolder);
    return process.cwd();
  } catch (err) {
    return process.cwd();
  }
};
export const fileExists = (file) => {
  try {
    return fs.statSync(file).isFile();
  } catch (err) {
    return false;
  }
};
