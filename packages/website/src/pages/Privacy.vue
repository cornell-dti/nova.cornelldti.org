<template>
  <privacy-view :content="content" :policies="policies" />
</template>

<static-query>
query Privacy {
  policies: allPrivacyPolicy(sortBy: "name", order: ASC) {
    edges {
      node {
        id
        name
        content
      }
    }
  }
}
</static-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import PrivacyView from '@/views/Privacy.vue';

import EventBus from '@/eventbus';
import Page from '@/page';

import { PrivacyContent, PrivacyPolicy } from '@/content';

import json from '../../data/pages/privacy.json';

interface PolicyPage {
  policies: {
    edges: { node: PrivacyPolicy }[];
  };
  content: {
    header: string;
    subheader: string;
  };
}

@Component({
  metaInfo: {
    title: 'Privacy'
  },
  components: {
    PrivacyView
  }
})
class Privacy extends Page<PrivacyContent>(json) {

  get policies(): PrivacyPolicy[] {
    return (this.$static as PolicyPage).policies.edges.map(e => e.node);
  }

  mounted() {
    EventBus.$emit('hide-navbar', { source: this });
  }
}

export default Privacy;
</script>
