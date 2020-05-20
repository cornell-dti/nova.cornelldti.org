// @ts-check

const fs = require('fs');
const path = require('path');

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
                    const parsed = JSON.parse(contents);

                    parsed.image = `/static/members/${parsed.netid}.jpg`;

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

                    return { file: f, member: fixed };
            })
            .filter(({ member }) => member != null)
            .map(({ file: f, member }) => {
                const out = path.join(__dirname, 'data', 'generated', 'members');

                if (!fs.existsSync(out)) {
                    fs.mkdirSync(out);
                }

                const outFile = path.join(out, f);

                fs.writeFileSync(outFile, JSON.stringify(member, null, 4));

                return member;
            });;

    const outFile = path.join(out, 'members.json');

    fs.writeFileSync(outFile, JSON.stringify(members, null, 4));
}

module.exports = function () {
    console.log("Building members...");
    buildMembers();
    console.log("Members built!");
}
