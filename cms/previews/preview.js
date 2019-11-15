
import { StringsFrontendPreview } from '@/data/strings/strings';
import { JSONStringsBackendPreview } from '@/data/strings/jsonStringsBackend';

export default (name, keys, Page) => ({
  name: `${name}Preview`,
  props: {
    entry: {
      required: true
    }
  },
  functional: true,
  render(h, cx) {
    const info = {};

    if (cx.props.entry) {
      keys.forEach(m => {
        info[m] = cx.props.entry.getIn(['data', m]).toJS();
      });
    }

    const Strings = new StringsFrontendPreview(
      name,
      new JSONStringsBackendPreview()
    );

    Strings.initialize(info);

    return h({
      extends: Page,
      data() {
        return {
          Strings
        };
      },
    }, { attrs: { id: `${name}PagePreview` } }, cx.data, cx.children)
  }
});
