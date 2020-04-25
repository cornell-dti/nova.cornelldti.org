import Vue from 'vue';
import { Components } from '../lib/dti-nova.common';

export function entryToStrings(entry) {
  return entry.getIn(['data']).toJS();
}

export default Vue.extend({
  functional: true,
  render(h, cx) {
    if (cx.props.entry) {
      const info = entryToStrings(cx.props.entry);

      const toggle = () => {
        return cx.parent.$refs.modalRef.toggleModal();
      };

      return h('div', [
        h(
          'button',
          {
            domProps: {
              innerHTML: 'Show Modal'
            },
            on: {
              click: () => {
                toggle();
              }
            }
          },
          [
            h(Components.MemberProfileModal, {
              ref: 'modalRef',
              props: {
                isStatic: true,
                display: true,
                profile: {
                  id: info.netid || undefined,
                  info
                }
              }
            })
          ]
        )
      ]);
    }

    return h('div');
  }
});
