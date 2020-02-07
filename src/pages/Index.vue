<template>
  <HomePage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import HomePage from '@/views/Home.vue';

import HomeJSON from '@/../data/generated/pages/home.json';

@Component({
  metaInfo: {
    title: 'Home'
  },
  components: {
    HomePage
  }
})
class Home extends Vue {
  Strings = fromJSON('home', HomeJSON);
}

export default Home;
</script>
