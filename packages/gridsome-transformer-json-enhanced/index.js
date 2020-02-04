const JSONTransformer = require('@gridsome/transformer-json')

const cdnify = require('imgix-json');

cdnify.setup("cornelldti.imgix.net", process.env.IMGIX_API_KEY);

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