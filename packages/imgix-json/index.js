const ImgixClient = require("imgix-core-js");

let Images;

module.exports = function cdnify(json) {
    let entries;

    if (Array.isArray(json)) {
        entries = json;
        return entries.map(v => {
            if (typeof v === 'string' && v.startsWith('/public/')) {
                return Images.buildURL(
                    v
                        .replace(/^\/public/, "/static")
                    // .replace(/\.(.*?)$/, `.${extension}`)
                );
            } else if (typeof v === 'object') {
                return cdnify(v);
            } else {
                return v;
            }
        })
    } else {
        entries = Object.entries(json).map(([k, v]) => {
            if (typeof v === 'string' && v.startsWith('/public/')) {
                return [k,
                    Images.buildURL(
                        v
                            .replace(/^\/public/, "/static")
                        // .replace(/\.(.*?)$/, `.${extension}`)
                    )];
            } else if (typeof v === 'object') {
                return [k, cdnify(v)];
            } else {
                return [k, v];
            }
        });
        return Object.fromEntries(entries);

    }

}

module.exports.setup = function setup(url, apiKey) {
    Images = new ImgixClient({
        domain: url,
        secureURLToken: apiKey
    });
}