<template>
  <b-navbar ref="dtinavbar" fixed="top" :class="['navbar-dti ', 'navbar-dark ', transparent && !navShown ? 'bg-transparent' : 'bg-dark ']"
    toggleable="md">

    <b-navbar-brand class="navbar-branding-dti" href="#">
      <b-img class="brand-icon" src="/static/brand-icon.png" />
    </b-navbar-brand>

    <b-btn @click="navShown = !navShown" :class="['navbar-toggler', navShown ? 'collapsed' : '']"
      aria-controls="nav_collapse" :aria-expanded="navShown ? 'true' : 'false'">
      <transition>
        <b-img v-if="navShown" src="/static/menu-close-small.svg" />
        <b-img v-else src="/static/menu-small.svg" />
      </transition>
    </b-btn>

    <b-collapse is-nav id="nav_collapse" v-model="navShown">
      <b-navbar-nav class="ml-auto">
        <!-- todo look into ml-auto variants, also move routes to an actual file -->
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/Projects">Projects</b-nav-item>
        <b-nav-item to="/Initiatives">Initiatives</b-nav-item>
        <b-nav-item to="/Team">Team</b-nav-item>
        <b-nav-item to="/Sponsor">Sponsor</b-nav-item>
        <b-nav-item to="/Apply">Apply</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  data() {
    return {
      transparent: true,
      navShown: true
    };
  },
  methods: {
    onScroll(window) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (typeof this.$refs.dtinavbar !== 'undefined') {
        this.transparent = scrollTop <= this.$refs.dtinavbar.clientHeight;
      } else {
        this.transparent = false;
      }
    }
  },
  destroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.brand-icon {
  width: 8vh;
  height: 8vh;
}

.navbar-dti {
  transition: background-color 500ms linear;

  @media (min-width: 768px) {
    .navbar-nav > li {
      padding-left: 1vw;
      padding-right: 1vw;
    }
  }

  @media (max-width: 767px) {
    &.navbar {
      padding: 0;
    }

    .navbar-branding-dti,
    .navbar-toggler {
      margin: 0.5rem 1rem; // todo

      btn {
        float: right;
      }
    }

    .navbar-nav {
      float: none;
      text-align: center;
      padding-right: 0;

      .nav-item {
        padding: 0.5rem;
        border-top: 2px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>

