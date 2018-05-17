<template>
    <b-img :src="store === 'appstore' ? img('thirdparty', 'app-store-download-badge.svg') : img('thirdparty', 'google-play-badge.svg')">
        <a :href='url' />
    </b-img>
</template>

<script>
export default { props: { store: String, url: String } };
</script>
