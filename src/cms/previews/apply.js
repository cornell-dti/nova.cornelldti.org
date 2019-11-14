import Vue from 'vue';
import { StringsFrontendPreview } from "@/data/strings/strings";
import { JSONStringsBackendPreview } from "@/data/strings/jsonStringsBackend";
import Apply from "@/pages/Apply"

const ApplyPreview = Vue.component('ApplyPreview', {
  name: 'ApplyPreview',
  props: {
    entry: {
      required: true
    }
  },
  render(h) {
    const info = {};

    if (this.entry) {
      [
        'join-information',
        'main-menu',
        'hero',
        'info-session',
        'info-sessions',
        'application-info'
      ].forEach(m => {
        info[m] = this.entry.getIn(['data', m]);
      });
    }
    const StringInstance = new StringsFrontendPreview('apply', new JSONStringsBackendPreview());

    // TODO Get rid of the immutable.js cruft
    StringInstance.initialize(JSON.parse(JSON.stringify(info)));

    return h({
      extends: Apply,
      data() {
        return {
          Strings: StringInstance
        };
      }
    });
  }
});

export default ApplyPreview;
