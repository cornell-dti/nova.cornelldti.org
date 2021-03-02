// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const $AssetsJSON = require('./data/assets.json');

/** @type import('@tyankatsu0105/types-gridsome').Server */
module.exports = api => {
  api.loadSource(({ addSchemaTypes, addMetadata }) => {
    // Define the member schema.

    addSchemaTypes(`
      type Member implements Node {
        netid: String
        firstName: String
        lastName: String
        name: String
        graduation: String
        major: String
        linkedin: String
        github: String
        hometown: String
        about: String
        subteam: String
        otherSubteams: [String]
        website: String
        roleId: String
        roleDescription: String
      }
    `);

    // assets.json

    Object.entries($AssetsJSON).forEach(([k, v]) => {
      addMetadata(k, v);
    });
  });
};
