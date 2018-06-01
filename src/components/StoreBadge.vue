<template>
    <AppStoreBadge v-if="store === 'appstore'">
        <a :href='url' />
    </AppStoreBadge>
    <GooglePlayBadge v-else>
        <a :href='url' />
    </GooglePlayBadge>
</template>

<script>
import AppStoreBadge from '@/assets/stores/app-store.svg';
import GooglePlayBadge from '@/assets/stores/google-play.svg';

export default {
  components: { AppStoreBadge, GooglePlayBadge },
  props: { store: String, url: String }
};
</script>
