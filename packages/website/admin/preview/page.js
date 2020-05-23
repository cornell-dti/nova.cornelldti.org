/* eslint-disable @typescript-eslint/ban-ts-ignore */

import Vue from 'vue';

/**
 * @param {any} entry
 */
export function entryToStrings(entry) {
  return entry.getIn(['data']).toJS();
}

export default
/**
 * @param {string} name
 * @param {import('vue').VueConstructor} Widget
 * @param {any} [props]
 */
(name, Widget, props = {}) =>
  Vue.extend({
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
      const content = entryToStrings(cx.props.entry);

      return h(Widget, {
        props: {
          ...props,
          content
        }
      });
    }
  });
