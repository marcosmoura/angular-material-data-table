import path from 'path';

let joinPath = (...paths) => {
  return path.normalize(path.join.apply(this, paths));
};

let srcFolder = 'src';
let destFolder = 'dest';
let gulpFolder = 'gulp';
let demoFolder = 'demos';
let demoFiles = '**/*.{html,css}';
let mainFile = 'angular-material-data-table';
let mainScript = mainFile + '.js';
let mainStylesheet = mainFile + '.css';

export default {
  joinPath,
  srcFolder,
  destFolder,
  demoFolder,
  demoFiles,
  gulpScripts: [
    joinPath(gulpFolder, '**/*.js'),
    'gulpfile.babel.js'
  ],
  srcScripts: [
    joinPath(srcFolder, '**/*.js'),
    'index.js'
  ],
  mainFile,
  mainScript,
  mainStylesheet
};
