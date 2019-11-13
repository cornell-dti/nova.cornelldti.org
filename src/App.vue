<template>
  <div id="app">
    <dti-main-menu />
    <div class="page-stack">
      <router-view />
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventbus';

export default {
  name: 'App',

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

    for (const element of Array.from(document.getElementsByTagName('title'))) {
      if (typeof this.$route.name !== 'undefined') {
        element.innerText = `${this.$route.name} | Cornell DTI`;
      } else {
        element.innerText = `Cornell DTI`;
      }
    }

    this.$router.afterEach(to => {
      const titleElements = Array.from(document.getElementsByTagName('title'));

      for (const element of titleElements) {
        if (typeof to.name !== 'undefined') {
          element.innerText = `${to.name} | Cornell DTI`;
        } else {
          element.innerText = `Cornell DTI`;
        }
      }
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
