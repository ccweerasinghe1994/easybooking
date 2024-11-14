const { knexTypeFilter } = require('kanel-knex');
const { generateIndexFile } = require('kanel');
const knexConfig = require('./knexfile');
const outputPaths = './src/models';

/** @type {import('kanel').Config} */
module.exports = {
  connection: knexConfig.development.connection,

  outputPath: outputPaths,
  preDeleteOutputFolder: true,

  typeFilter: knexTypeFilter,
  preRenderHooks: [generateIndexFile],
};
