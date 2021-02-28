<template>
  <bubble-map height="500" width="500" id="alumniMap"></bubble-map>
</template>

<script lang="ts">
import Vue from 'vue';

import BubbleMap from '../components/BubbleMap';

export default Vue.extend({
  components: {
    BubbleMap
  }
});
</script>
