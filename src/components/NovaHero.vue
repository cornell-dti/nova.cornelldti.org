<template>
  <div class="nova-hero">
    <div class="nova-hero-visual-container">
      <div class="nova-hero-overlay" />

      <visual :video="aws(Strings.get(`pages.${page}.hero.video`, 'assets'))" :poster="Strings.get(`pages.${page}.hero.lazy`, 'assets')"
        background="cover" :fallback="aws(Strings.get(`pages.${page}.hero.image`, 'assets'))"
        class="nova-hero-visual" align="top left" autoplay :loop="true" :muted="true"
        preload=auto :fill="true" load-video='visible' :load-poster='true' />

    </div>
    <b-container fluid>
      <text-hero :header="header" :subheader="subheader" />
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.nova-hero-header {
  font-size: 5rem;
  font-weight: bold;
}

.nova-hero-subheader {
  font-size: 2rem;
}

.nova-hero-visual-container {
  position: relative;
}

$height: 65vh;

.nova-hero-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: $height;
  width: 100vw;
}

.nova-hero-visual {
  height: $height;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.nova-hero {
  width: 100vw;
  position: relative;
  overflow: hidden;
}
</style>


<script>
export default {
  props: {
    page: {
      type: String
    },
    header: {
      type: String
    },
    subheader: {
      type: String
    }
  }
};
</script>

