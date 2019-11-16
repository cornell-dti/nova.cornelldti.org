// TODO Unify this and main.js

import Vue from 'vue';

/* CSS for Node Modules */

import DtiMainMenu from '@/components/DtiMainMenu';
import PageBackground from '@/components/PageBackground';
import PageHero from '@/components/PageHero';
import NovaHero from '@/components/NovaHero';
import PageSublist from '@/components/PageSublist';
import TextPageHero from '@/components/TextPageHero';
import TextHero from '@/components/TextHero';
import PageSection from '@/components/PageSection';
import StoreBadge from '@/components/StoreBadge';

import DtiFooter from './fillers/DtiFooter';

import AssetStrings from '../src/shared';

// polyfill because the CMS lacks Vue Router
Vue.prototype.$route = { name: 'Preview', path: 'nowhere/' };

Vue.mixin({
  methods: {
    aws(asset) {
      // Prevent issuesfor now...
      if (!asset) {
        return '';
      }
      return this.joinPath(
        `https://s3.us-east-2.amazonaws.com/dti-nova-website/static/`,
        `${asset.replace('/public', '')}`
      );
    }
  }
});

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
