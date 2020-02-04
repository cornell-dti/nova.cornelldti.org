<template>
  <dti-project project="flux" />
</template>

<script lang="ts">
import Vue from 'vue';

import FluxJSON from '@/../data/projects/flux.json';
import { fromJSON } from '@/strings/json';

fromJSON('projects.flux', FluxJSON);

export default Vue.extend({});
</script>

<style lang="scss">
.product-flux {
  margin-top: -50%;
}
</style>
