<template>
  <div id="app">
    <div class="page-background" :style="backgroundStyle">
      <dti-main-menu :transparent="isTransparent" />
      <router-view/>
    </div>
  </div>
</template>

<script>
const BACKGROUND_IMAGE_STYLE =
  "background: url('/static/new-header-bg.jpg') no-repeat center center/cover;";
const BACKGROUND_BLANK_STYLE = "background: none;";

export default {
  name: "App",
  data() {
    return {
      bgStyle: BACKGROUND_BLANK_STYLE,
      navbarTransparent: false
    };
  },
  mounted() {
    this.$router.afterEach(to => {
      this.updateBackground(to.name);
    });

    this.updateBackground(this.$route.name);
  },
  computed: {
    isTransparent() {
      return this.navbarTransparent;
    },
    backgroundStyle() {
      return this.bgStyle;
    }
  },
  methods: {
    updateBackground(routeName) {
      if (routeName === "Home") {
        this.navbarTransparent = true;
        this.bgStyle = BACKGROUND_IMAGE_STYLE;
      } else {
        this.navbarTransparent = false;
        this.bgStyle = BACKGROUND_BLANK_STYLE;
      }
    }
  }
};
</script>

<style lang="scss">
@import "main.scss";

body {
  margin: 0;
}
</style>
