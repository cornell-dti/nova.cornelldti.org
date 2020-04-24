<template>
  <privacy-view :content="content" :policies="policies" />
</template>

<page-query>
query Privacy($id: ID!) {
  content: privacyEntry(id: $id) {
    header
    subheader
  }

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
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import PrivacyView from '@/views/Privacy.vue';

import EventBus from '@/eventbus';
import Entry from '@/entry';

import { PrivacyContent, PrivacyPolicy } from '@/content';

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
class Privacy extends Entry<PrivacyContent> {
  get policies(): PrivacyPolicy[] {
    return (this.$page as PolicyPage).policies.edges.map(e => e.node);
  }

  mounted() {
    EventBus.$emit('hide-navbar', {});
  }
}

export default Privacy;
</script>
