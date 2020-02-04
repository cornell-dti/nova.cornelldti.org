// @ts-check

const fs = require('fs');
const path = require('path');
const cdnify = require('imgix-json');

cdnify.setup("cornelldti.imgix.net", process.env.IMGIX_API_KEY);

function buildMembers() {
    const memberFiles = fs.readdirSync(path.join(__dirname, 'data', 'members'));

    const members =
        memberFiles
            .filter(f => f.endsWith(".json"))
            .map(f => path.join(__dirname, 'data', 'members', f))
            .map(f => fs.readFileSync(f, { encoding: 'utf-8' }))
            .map(contents => {
                try {
                    const parsed = JSON.parse(contents);

                    parsed.image = cdnify({ picture: `/public/members/${parsed.netid}.jpg` }).picture;

                    return parsed;
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

function buildPages() {
    const pageFiles = fs.readdirSync(path.join(__dirname, 'data', 'pages'));

    pageFiles
        .filter(f => f.endsWith(".json"))
        .map(f => [f, path.join(__dirname, 'data', 'pages', f)])
        .map(([f, path]) => [f, fs.readFileSync(path, { encoding: 'utf-8' })])
        .map(([f, contents]) => {
            try {
                return [f, JSON.parse(contents)];
            } catch (err) {
                console.error(err);
                return null;
            }
        })
        .filter(([, contents]) => contents != null)
        .map(([f, contents]) => [f, cdnify(contents)])
        .forEach(([f, contents]) => {
            const out = path.join(__dirname, 'data', 'generated', 'pages');

            if (!fs.existsSync(out)) {
                fs.mkdirSync(out);
            }

            const outFile = path.join(out, f);

            fs.writeFileSync(outFile, JSON.stringify(contents, null, 4));
        });


}

module.exports = function () {
    console.log("Building members...");
    buildMembers();
    console.log("Members built!");

    console.log("Building pages...");
    buildPages();
    console.log("Pages built!");
}