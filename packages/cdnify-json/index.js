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
                if (v['cdnify:image']) {
                    for (let [pattern, provider] of providers) {
                        if (pattern.test(v['cdnify:image'])) {
                            return provider.transform(v['cdnify:image'], v.options || {});
                        }
                    }
                }

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
                if (v['cdnify:image']) {
                    for (let [pattern, provider] of providers) {
                        if (pattern.test(v['cdnify:image'])) {
                            return [k, provider.transform(v['cdnify:image'], v.options || {})];
                        }
                    }
                }

                return [k, cdnify(v, options)];
            } else {
                return [k, v];
            }
        }).reduce((prev, [k, v]) => Object.assign(prev, { [k]: v }), {});
    }
}

module.exports.init = function init(providers) {
    for (const provider of providers) {
        providerMap.set(provider.pattern, provider.provider);
    }
}
