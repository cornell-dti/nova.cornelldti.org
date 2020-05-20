const JSONTransformer = require('@gridsome/transformer-json');

class EnhancedJSONTransformer extends JSONTransformer {
    static mimeTypes() {
        return ['application/json'];
    }

    parse(source) {
        return super.parse(source);
    }
}

module.exports = EnhancedJSONTransformer;
