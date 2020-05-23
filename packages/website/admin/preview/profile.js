/* eslint-disable @typescript-eslint/ban-ts-ignore */

import Vue from 'vue';

// @ts-ignore
import { Components } from 'website-components';

/**
 * 
 * @param {*} entry 
 */
export function entryToStrings(entry) {
  return entry.getIn(['data']).toJS();
}

export default Vue.extend({
  functional: true,
  /**
   * @param {*} h 
   * @param {import('vue').RenderContext<{ entry: any }>} cx
   */
  render(h, cx) {
    if (cx.props.entry) {
      const info = entryToStrings(cx.props.entry);

      const toggle = () => {
        const modal = /** @type {any} */ (cx.parent.$refs.modalRef);
        return modal.toggleModal();
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
