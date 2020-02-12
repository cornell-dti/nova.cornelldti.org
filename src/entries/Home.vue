<template>
  <home-view :content="content" />
</template>

<page-query>
query HomeEntry ($id: ID!) {
  content: homeEntry(id: $id) {
    textHero { header subheader }
    hero {
      lazy
      video {
        mp4
        webm
      }
      image
    }
    quicklinks {
      team {
        header
        subheader
        link
        image
     }
     projects {
        header
        subheader
        link
        image
      }
      initiatives {
         header
         subheader
         link
         image
      }
    }
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import HomeView from '@/views/Home.vue';
import Entry from '@/entry';

import { HomeContent } from '@/content';

interface HomePage {
  content: HomeContent;
}

@Component({
  metaInfo: {
    title: 'Home'
  },
  components: {
    HomeView
  }
})
class Home extends Entry<HomeContent> {}

export default Home;
</script>
