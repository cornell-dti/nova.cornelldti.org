import { Component, FunctionalComponentOptions } from 'vue';
import { StringsFrontendPreview } from '@/data/strings/strings';
import { JSONStringsBackendPreview } from '@/data/strings/jsonStringsBackend';

export function entryToStrings(entry) {
  return entry.getIn(['data']).toJS();
}

interface Props {
  entry: { required: true };
}

export default (
  name: string,
  Widget: Component,
  loadStrings = true
): FunctionalComponentOptions<Props> => ({
  name: `${name}Preview`,
  props: {
    entry: {
      required: true
    }
  },
  functional: true,
  render(h, cx) {
    if (!cx.props.entry) {
      return h('div');
    }

    // Netlify CMS uses immutable.js so we have to convert the data.
    const info = entryToStrings(cx.props.entry);

    let data: () => { Strings?: StringsFrontendPreview };

    if (loadStrings) {
      const Strings = new StringsFrontendPreview(name, new JSONStringsBackendPreview());

      Strings.initialize(info);
      data = () => {
        return {
          Strings
        };
      };
    } else {
      data = () => ({});
    }

    return h(
      {
        extends: Widget,
        data
      },
      { attrs: { id: `${name}Preview` } },
      cx.data,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cx.children
    );
  }
});
