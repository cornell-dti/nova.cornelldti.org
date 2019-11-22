// TODO Unify this and main.js

import Vue from 'vue';

/* CSS for Node Modules */

import DtiMainMenu from '@/components/DtiMainMenu.vue';
import PageBackground from '@/components/PageBackground.vue';
import PageHero from '@/components/PageHero.vue';
import NovaHero from '@/components/NovaHero.vue';
import PageSublist from '@/components/PageSublist.vue';
import TextPageHero from '@/components/TextPageHero.vue';
import TextHero from '@/components/TextHero.vue';
import PageSection from '@/components/PageSection.vue';
import StoreBadge from '@/components/StoreBadge.vue';

import DtiFooter from './fillers/DtiFooter.vue';

import AssetStrings from '../src/shared';

// polyfill because the CMS lacks Vue Router
Vue.prototype.$route = { name: 'Preview', path: 'nowhere/' };

Vue.component('PageSublist', PageSublist);
Vue.component('DtiMainMenu', DtiMainMenu);
Vue.component('DtiFooter', DtiFooter);
Vue.component('PageBackground', PageBackground);
Vue.component('PageSection', PageSection);
Vue.component('PageHero', PageHero);
Vue.component('NovaHero', NovaHero);
Vue.component('StoreBadge', StoreBadge);
Vue.component('TextPageHero', TextPageHero);
Vue.component('TextHero', TextHero);

Vue.config.productionTip = false;

export default AssetStrings;
