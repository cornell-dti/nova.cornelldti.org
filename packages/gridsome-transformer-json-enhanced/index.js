const JSONTransformer = require('@gridsome/transformer-json')

const cdnify = require('cdnify-json');

cdnify.init([]);

class EnhancedJSONTransformer extends JSONTransformer {
    static mimeTypes() {
        return ['application/json']
    }

    parse(source) {
        const data = super.parse(source)

        return cdnify(data);
    }
}

module.exports = EnhancedJSONTransformer;
