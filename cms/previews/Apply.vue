<template>
  <WrappedApply id="applyPagePreview" :entry="entryData" />
</template>

<script>
import { StringsFrontendPreview } from '@/data/strings/strings';
import { JSONStringsBackendPreview } from '@/data/strings/jsonStringsBackend';
import Apply from '@/pages/Apply';

export default {
  name: 'ApplyPreview',
  props: {
    entry: {
      required: true
    }
  },
  components: {
    WrappedApply: {
      extends: Apply,
      props: {
        entry: {
          required: true
        }
      },
      computed: {
        Strings: {
          get() {
            const StringsInstance = new StringsFrontendPreview(
              'apply',
              new JSONStringsBackendPreview()
            );
            
            StringsInstance.initialize(this.entry);

            return StringsInstance;
          }
        }
      }
    }
  },
  computed: {
    entryData: {
      get() {
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

        return JSON.parse(JSON.stringify(info));
      }
    }
  }
};
</script>
