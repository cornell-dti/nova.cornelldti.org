<template>
  <div id="app">
    <div class="page-background" :style="backgroundStyle">
      <base-layout :hero="hero">
        <dti-main-menu slot="header" :transparent='isTransparent' />
        <transition slot="body" :name="transition">
          <router-view />
        </transition>
      </base-layout>
    </div>
  </div>
</template>

<script>
import EventBus from "./bus";

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
      },
      pageBg: null,
      transition: "slide-left"
    };
  },
  computed: {
    backgroundStyle() {
      return this.pageBg === null
        ? "background-image: none;"
        : "background-image: url(" + this.pageBg + ")";
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      const routes = ["Home", "Projects", "Team", "Sponsor", "Apply"];
      const start = routes.indexOf(from.name.split("/")[0]);
      const end = routes.indexOf(to.name.split("/")[0]);

      this.transition = start > end ? "slide-left" : "slide-right";
      next();
    });
  },
  created() {
    EventBus.$on("define-page", page => {
      const bg = page.background;
      this.pageBg = bg !== null ? bg.image : null;
      const hero = page.hero;
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
