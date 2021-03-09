<template>
  <privacy-view :policies="policies" />
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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import PrivacyView from '../views/Privacy.vue';

import EventBus from '../eventbus';

import { PrivacyPolicy } from '../content';

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
  metaInfo: { title: 'Privacy' },
  components: { PrivacyView }
})
export default class Privacy extends Vue {
  get policies(): PrivacyPolicy[] {
    return (this.$static as PolicyPage).policies.edges.map(e => e.node);
  }

  mounted(): void {
    EventBus.$emit('hide-navbar', { source: this });
  }
}
</script>
