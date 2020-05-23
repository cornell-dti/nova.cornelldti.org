<template>
  <div id="app">
    <dti-main-menu />
    <router-view />
  </div>
</template>

<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>

<script script="ts">
import EventBus from './eventbus';
import DtiMainMenu from './components/DtiMainMenu.vue';

export default {
  name: 'App',
  metaInfo: {
    title: ''
  },
  components: {
    DtiMainMenu
  },
  mounted() {
    this.$root.$on('bv::modal::show', () => {
      const root = document.getElementsByTagName('html')[0];
      if (root && !root.classList.contains('modal-open')) {
        root.classList.add('modal-open');
      }
    });

    this.$root.$on('bv::modal::hide', () => {
      const root = document.getElementsByTagName('html')[0];
      if (root) {
        root.classList.remove('modal-open');
      }
    });

    this.$router.beforeEach((to, from, next) => {
      EventBus.$emit('reset-navbar', {});

      next();
    });
  }
};
</script>

<style lang="scss">
@import './index.scss';

body {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
