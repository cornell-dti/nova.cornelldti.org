// @ts-check

const fs = require('fs');
const path = require('path');

function buildMembers() {
  const memberFiles = fs.readdirSync(path.join(__dirname, 'data', 'members'));

  const members =
    memberFiles
      .filter(f => f.endsWith(".json"))
      .map(f => path.join(__dirname, 'data', 'members', f))
      .map(f => fs.readFileSync(f, { encoding: 'utf-8' }))
      .map(contents => {
        try {
          return JSON.parse(contents);
        } catch (err) {
          console.error(err);
          return null;
        }
      })
      .filter(f => f != null);

  const out = path.join(__dirname, 'data', 'generated');

  if (!fs.existsSync(out)) {
    fs.mkdirSync(out);
  }

  const outFile = path.join(out, 'members.json');

  fs.writeFileSync(outFile, JSON.stringify(members, null, 4));
}

console.log("Building members...");
buildMembers();
console.log("Members built!");