const URL = require('url');
const ImgixClient = require("imgix-core-js");

/** @type {Map.<RegExp, { transform(s: string): string }>} */
const providerMap = new Map();

module.exports = function cdnify(json, options) {
    const providers = Array.from(providerMap.entries());
    if (Array.isArray(json)) {
        return json.map(v => {
            if (typeof v === 'string') {
                for (let [pattern, provider] of providers) {
                    if (pattern.test(v)) {
                        return provider.transform(v, options);
                    }
                }

                return v;
            } else if (typeof v === 'object') {
                return cdnify(v, options);
            } else {
                return v;
            }
        });
    } else {
        return Object.entries(json).map(([k, v]) => {
            if (typeof v === 'string') {
                for (let [pattern, provider] of providers) {
                    if (pattern.test(v)) {
                        return [k, provider.transform(v, options)];
                    }
                }

                return [k, v];
            } else if (typeof v === 'object') {
                return [k, cdnify(v, options)];
            } else {
                return [k, v];
            }
        }).reduce((prev, [k, v]) => Object.assign(prev, { [k]: v }), {});
    }
}

class ImgixProvider {
    constructor(url, apiKey) {
        this._Images = new ImgixClient({
            domain: url,
            secureURLToken: apiKey
        });
    }

    transform(url, options = {}) {
        return this._Images.buildURL(
            url
                .replace(/^\/public/, "/static"),
            options
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