<template>
  <dti-project team-id="reviews" />
</template>

<script lang="ts">
import Vue from 'vue';

import DtiProject from '../../components/DtiProject.vue';

export default Vue.extend({
  components: { DtiProject },
  metaInfo: { title: 'Projects' }
});
</script>
