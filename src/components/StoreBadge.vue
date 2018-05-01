<template>
    <b-img :src="store === 'appstore' ? 'static/app-store-download-badge.svg' : 'static/google-play-badge.svg'">
        <a :href='url' />
    </b-img>
</template>

<script>
export default { props: { store: String, url: String } };
</script>
