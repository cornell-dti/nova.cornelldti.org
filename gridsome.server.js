// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
if (process.env.NODE_ENV !== 'production') {
  console.log("Loading environment variables with .env in development environment.");
  require('dotenv').config();
}

const express = require('express');
const path = require('path');

const $AssetsJSON = require("./data/assets.json");

const build = require('./build.js');

/** @type import('@tyankatsu0105/types-gridsome').Server */
module.exports = function (api) {
  // for gridsome build
  api.beforeBuild(() => {
    build();
  });

  // for gridsome develop
  api.configureServer(app => {
    // webpack won't host these files in development mode.
    app.use('/admin/lib', express.static(path.join(__dirname, 'admin/lib')));

    build();
  });

  api.loadSource(async store => {
    Object.entries($AssetsJSON).forEach(([k, v]) => {
      store.addMetadata(k, v);
    });
  });
}
