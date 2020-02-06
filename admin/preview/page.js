import Vue from 'vue';
import { fromJSON } from '../lib/dti-nova.common';

export function entryToStrings(entry) {
  return entry.getIn(['data']).toJS();
}

export default (
  name,
  Widget,
  loadStrings = true
) => Vue.extend({
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

    let Strings = {};

    if (loadStrings) {
      Strings = fromJSON(name, info);
    }

    return h(
      Widget,
      {
        props: {
          dynamicStrings: Strings
        }
      }
    );
  }
});