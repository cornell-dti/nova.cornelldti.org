// @ts-check

const { readFileSync, writeFileSync, readdirSync } = require('fs');
const { join } = require('path');

const generateAggregateArray = (
  /** @type {string} */ subDirectory,
  /** @type {string} */ finalName
) => {
  const membersDirectory = join('data', subDirectory);
  writeFileSync(
    join(membersDirectory, finalName),
    JSON.stringify(
      readdirSync(membersDirectory)
        .filter(it => it.endsWith('json') && !it.includes(finalName))
        .map(it => join(membersDirectory, it))
        .map(path => JSON.parse(readFileSync(path).toString())),
      undefined,
      /* tabWidth */ 2
    ) + '\n'
  );
};

generateAggregateArray('projects', 'all-projects.json');
