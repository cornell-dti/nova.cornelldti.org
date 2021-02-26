<template>
  <home-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import HomeView from '../views/Home.vue';

@Component({
  metaInfo: { title: 'Home' },
  components: { HomeView }
})
export default class Home extends Vue {}
</script>
