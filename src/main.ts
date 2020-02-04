import { VueConstructor } from 'vue';
import { shared } from './shared';

import DtiFooter from '@/components/DtiFooter.vue';
import PageBackground from '@/components/PageBackground.vue';
import PageHero from '@/components/PageHero.vue';
import NovaHero from '@/components/NovaHero.vue';
import PageSublist from '@/components/PageSublist.vue';
import TextPageHero from '@/components/TextPageHero.vue';
import TextHero from '@/components/TextHero.vue';
import PageSection from '@/components/PageSection.vue';
import DTIProject from '@/templates/DTIProject.vue';

export default function(Vue: VueConstructor) {
  Vue.component('PageSublist', PageSublist);
  Vue.component('DtiFooter', DtiFooter);
  Vue.component('PageBackground', PageBackground);
  Vue.component('PageSection', PageSection);
  Vue.component('PageHero', PageHero);
  Vue.component('NovaHero', NovaHero);
  Vue.component('TextPageHero', TextPageHero);
  Vue.component('TextHero', TextHero);
  Vue.component('DtiProject', DTIProject);

  shared(Vue);
}
