// @ts-check

const fs = require('fs');
const path = require('path');
const cdnify = require('cdnify-json');
const { Imgix, CloudFront } = cdnify;

cdnify.init([
    {
        pattern: /^\/public\/.*\.(png|jpg)/,
        provider: Imgix({
            url: "cornelldti.imgix.net", key: process.env.IMGIX_API_KEY
        }),
    },
    {
        pattern: /^\/public\/.*\.(webm|m4v|mp4)/,
        provider: CloudFront({
            url: "d2ytxic79evey7.cloudfront.net"
        }),
    }
]);

function buildMembers() {
    const memberFiles = fs.readdirSync(path.join(__dirname, 'data', 'members'));

    const out = path.join(__dirname, 'data', 'generated');

    if (!fs.existsSync(out)) {
        fs.mkdirSync(out);
    }

    const members =
        memberFiles
            .filter(f => f.endsWith(".json"))
            .map(f => [f, path.join(__dirname, 'data', 'members', f)])
            .map(([f, resolved]) => [f, fs.readFileSync(resolved, { encoding: 'utf-8' })])
            .map(([f, contents]) => {
                try {
                    const parsed = JSON.parse(contents);

                    parsed.image = cdnify({ picture: `/public/members/headshots/${parsed.netid}.jpg` }, {
                        h: 500
                    }).picture;

                    // We need to enforce certain fields for search purposes.
                    const fixed = {
                        netid: parsed.netid || "",
                        image: parsed.image || "",
                        firstName: parsed.firstName || "",
                        lastName: parsed.lastName || "",
                        name: parsed.name || "",
                        graduation: parsed.graduation || "",
                        major: parsed.major || "",
                        linkedin: parsed.linkedin || "",
                        github: parsed.github || "",
                        hometown: parsed.hometown || "",
                        about: parsed.about || "",
                        subteam: parsed.subteam || "",
                        otherSubteams: parsed.otherSubteams || [],
                        website: parsed.website || "",
                        roleId: parsed.roleId || "",
                        roleDescription: parsed.roleDescription || ""
                    };

                    return [f, fixed];
                } catch (err) {
                    console.error(err);
                    return [f, null];
                }
            })
            .filter(([, contents]) => contents != null)
            .forEach(([f, contents]) => {
                const out = path.join(__dirname, 'data', 'generated', 'members');

                if (!fs.existsSync(out)) {
                    fs.mkdirSync(out);
                }

                const outFile = path.join(out, f);

                fs.writeFileSync(outFile, JSON.stringify(contents, null, 4));
            });;

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