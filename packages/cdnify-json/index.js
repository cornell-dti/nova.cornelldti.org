const URL = require('url');
const ImgixClient = require("imgix-core-js");

/** @type {Map.<RegExp, { transform(s: string): string }>} */
const providerMap = new Map();

module.exports = function cdnify(json) {
    let entries;

    if (Array.isArray(json)) {
        entries = json;
        return entries.map(v => {
            if (typeof v === 'string') {
                for (let [pattern, provider] of Array.from(providerMap.entries())) {
                    if (pattern.test(v)) {
                        return provider.transform(v);
                    }
                }

                return v;
            } else if (typeof v === 'object') {
                return cdnify(v);
            } else {
                return v;
            }
        })
    } else {
        entries = Object.entries(json).map(([k, v]) => {
            if (typeof v === 'string') {
                for (let [pattern, provider] of Array.from(providerMap.entries())) {
                    if (pattern.test(v)) {
                        return [k,
                            provider.transform(v)];
                    }
                }

                return [k, v];
            } else if (typeof v === 'object') {
                return [k, cdnify(v)];
            } else {
                return [k, v];
            }
        });

        return Object.fromEntries(entries);
    }
}

class ImgixProvider {
    constructor(url, apiKey) {
        this._Images = new ImgixClient({
            domain: url,
            secureURLToken: apiKey
        });
    }

    transform(url) {
        return this._Images.buildURL(
            url
                .replace(/^\/public/, "/static")
        );
    }
};

class CloudFrontProvider {
    constructor(url) {
        this._baseUrl = url;
    }

    transform(url) {
        return `https://${this._baseUrl}/${url.replace(/^\/public\//, '')}`;
    }
}

module.exports.Imgix = function ({ url, key }) {
    return new ImgixProvider(url, key);
}

module.exports.CloudFront = function ({ url }) {
    return new CloudFrontProvider(url);
}

module.exports.init = function init(providers) {
    for (const provider of providers) {
        providerMap.set(provider.pattern, provider.provider);
    }
}