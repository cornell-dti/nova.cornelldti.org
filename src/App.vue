<template>
  <div id="app">
    <div class="page-background" :style="backgroundStyle">
      <base-layout :hero="hero">
        <dti-main-menu slot="header" :transparent='isTransparent' />
        <router-view slot="body" />
      </base-layout>
    </div>
  </div>
</template>

<script>
import bus from "./bus";

export default {
  name: "App",
  data() {
    return {
      hero: {
        type: "none",
        bg: "",
        header: "test",
        subheader: "test2",
        img: ""
      }
    };
  },
  created() {
    bus.$on("update-hero", hero => {
      this.hero.type = hero.type;
      this.hero.bg = hero.bg;
      this.hero.header = hero.header;
      this.hero.subheader = hero.subheader;
      this.hero.img = hero.img;
    });
  }
};
</script>

<style lang="scss">
@import "./index.scss";

body {
  margin: 0;
}
</style>
