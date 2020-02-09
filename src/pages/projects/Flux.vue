<template>
  <FluxPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import FluxPage from '@/views/projects/Flux.vue';

import FluxJSON from '@/../data/projects/flux.json';
import { fromJSON } from '@/strings/json';

@Component({
  metaInfo: {
    title: 'Flux'
  },
  components: { FluxPage }
})
export default class Flux extends Vue {
  Strings = fromJSON('projects.flux', FluxJSON);
}
</script>

<style lang="scss">
.product-flux {
  margin-top: -50%;
}
</style>
