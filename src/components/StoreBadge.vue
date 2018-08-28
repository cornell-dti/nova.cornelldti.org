<template>
    <a v-if="store === 'appstore'" :href='url'>
        <AppStoreBadge>
        </AppStoreBadge>
    </a>
    <a v-else :href='url'>
        <GooglePlayBadge>
        </GooglePlayBadge>
    </a>
</template>

<script>
import AppStoreBadge from '@/assets/stores/app-store.svg';
import GooglePlayBadge from '@/assets/stores/google-play.svg';

export default {
  components: { AppStoreBadge, GooglePlayBadge },
  props: { store: String, url: String }
};
</script>
