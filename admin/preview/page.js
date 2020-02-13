import Vue from 'vue';

export function entryToStrings(entry) {
  return entry.getIn(['data']).toJS();
}

export default (name, Widget) =>
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
      const info = entryToStrings(cx.props.entry);

      return h(Widget, {
        props: {
          info
        }
      });
    }
  });
