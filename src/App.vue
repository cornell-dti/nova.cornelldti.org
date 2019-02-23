<template>
  <div id="app">
    <dti-main-menu/>
    <div class="page-stack">
      <router-view/>
    </div>
    <!-- Load low quality heros before pages are loaded -->
    <div
      v-for="page of ['team', 'projects', 'initiatives', 'sponsor', 'courses', 'apply']"
      :key="page"
    >
      <img style="display: none;" :src="Strings.get(`pages.${page}.hero.lazy`, `assets`)">
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventbus';

const Pages = [
  'Home',
  'Team',
  'Projects',
  'Initiatives',
  'Courses',
  'Sponsor',
  'Apply'
];

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

    for (const element of Array.from(document.getElementsByTagName('title'))) {
      if (typeof this.$route.name !== 'undefined') {
        element.innerText = `${this.$route.name} | Cornell DTI`;
      } else {
        element.innerText = `Cornell DTI`;
      }
    }

    // TODO clean this up
    this.$router.beforeEach((to, from, next) => {
      EventBus.$emit('reset-navbar', {});

      next();
    });

    this.$router.afterEach(to => {
      for (const element of Array.from(
        document.getElementsByTagName('title')
      )) {
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
