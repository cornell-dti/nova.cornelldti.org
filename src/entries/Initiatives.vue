<template>
  <initiatives-view :content="content" />
</template>

<page-query>
query InitiativesEntry ($id: ID!) {
  content: initiativesEntry(id: $id) {
    hero {
      lazy
      video {
        mp4
        webm
      }
      image
    }
    promo {
      makeathon
      halfbaked
      blueprint
    }
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import InitiativesView from '@/views/Initiatives.vue';
import Entry from '@/entry';

import { InitiativesContent } from '@/content';

@Component({
  metaInfo: {
    title: 'Initiatives'
  },
  components: {
    InitiativesView
  }
})
class Initiatives extends Entry<InitiativesContent> {}

export default Initiatives;
</script>
