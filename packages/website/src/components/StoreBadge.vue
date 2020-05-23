<template>
  <a v-if="store === 'appstore'" :href="url">
    <AppStoreBadge></AppStoreBadge>
  </a>
  <a v-else :href="url">
    <GooglePlayBadge></GooglePlayBadge>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

import AppStoreBadge from '../assets/stores/app-store.svg';
import GooglePlayBadge from '../assets/stores/google-play.svg';

export default Vue.extend({
  components: { AppStoreBadge, GooglePlayBadge },
  props: { store: String, url: String }
});
</script>
