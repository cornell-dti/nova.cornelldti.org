/* eslint-disable no-param-reassign */

import BootstrapVue from 'bootstrap-vue';

import { VueConstructor, CreateElement, RenderContext } from 'vue';

export { Project, Member, Team, Company, Role } from './types';

export function initializeVue(Vue: VueConstructor) {
  Vue.component('StringsDomain', {
    name: 'StringsDomain',
    functional: true,
    props: {
      value: {
        required: true
      }
    },
    render(h: CreateElement, cx: RenderContext<{ value: unknown }>) {
      const { key: slot } = cx.scopedSlots;

      if (slot) {
        const node = slot(cx.props.value);

        if (node) {
          return node;
        }
      }

      return h();
    }
  });

  Vue.use(BootstrapVue);

  return [];
}
