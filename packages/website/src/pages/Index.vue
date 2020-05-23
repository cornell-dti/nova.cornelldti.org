<template>
  <home-view :content="content" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import HomeView from '../views/Home.vue';
import Page from '../page';

import { HomeContent } from '../content';

import json from '../../data/pages/home.json';

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
class Home extends Page<HomeContent>(json) {}

export default Home;
</script>
