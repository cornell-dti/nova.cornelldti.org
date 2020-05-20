const JSONTransformer = require('@gridsome/transformer-json')

const cdnify = require('cdnify-json');
const { CloudFront } = cdnify;

cdnify.init([
    {
        pattern: /^\/public\/.*\.(webm|m4v|mp4)/g,
        provider: CloudFront({
            url: "d2ytxic79evey7.cloudfront.net"
        }),
    }
]);

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
