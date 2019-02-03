<template>
  <b-navbar
    :class="['navbar-dti ', ...(transparent && !navShown ? [ (light ? 'navbar-light' : 'navbar-dark'), 'bg-transparent'] : ['navbar-dti-light', 'navbar-light', 'bg-light'])]"
    ref="dtinavbar"
    fixed="top"
    toggleable="md"
    type="none"
  >
    <b-navbar-brand class="navbar-branding-dti" href="#">
      <b-img class="brand-icon" :src="Strings.get('branding.icon', 'assets')"/>
    </b-navbar-brand>

    <b-nav-text :style="{display: navShown ? '' : 'none'}" v-html="this.$route.name"/>

    <b-btn
      @click="navShown = !navShown"
      :class="['navbar-toggler', navShown ? 'collapsed' : '']"
      aria-controls="nav_collapse"
      :aria-expanded="navShown ? 'true' : 'false'"
    >
      <transition>
        <svg
          v-if="navShown"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
          xml:space="preserve"
        >
          <path fill="none" d="M0,0h24v24H0V0z"></path>
          <path
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z"
          ></path>
        </svg>
        <svg
          v-else
          height="36"
          viewBox="0 0 24 24"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
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
        <b-nav-item
          v-if="Strings.get('main-menu.advertisement.open', 'apply')"
          to="/Apply"
          class="override-apply-color"
        >
          <b-button class="apply-button" variant="primary">Apply Now!</b-button>
        </b-nav-item>
        <b-nav-item v-else to="/Apply">Apply</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import EventBus from "@/eventbus";

export default {
  data() {
    return {
      transparent: true,
      navShown: false,
      light: false
    };
  },
  methods: {
    onScroll(window) {
      const yOffset =
        window.pageYOffset ||
        window.scrollY ||
        pageYOffset ||
        scrollY ||
        document.documentElement.scrollTop;
      const scrollTop = yOffset - (document.documentElement.clientTop || 0);

      if (typeof this.$refs.dtinavbar !== "undefined") {
        this.transparent = scrollTop <= this.$refs.dtinavbar.clientHeight;
      } else {
        this.transparent = false;
      }
    }
  },
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);

    EventBus.$on("set-navbar-light", () => {
      this.light = true;
    });

    EventBus.$on("reset-navbar", () => {
      this.light = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.navbar-dark {
  .apply-button {
    padding-top: 0.325rem;
    padding-bottom: 0.325rem;
    margin-top: 0.175rem;
    margin-bottom: 0.175rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
}

.override-apply-color {
  a {
    padding-top: 0;
    padding-bottom: 0;
  }
}

.brand-icon {
  width: 7.5vh;
  height: 7.5vh;
  border-radius: 12.5%;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.3);
}

.navbar-dti {
  transition: background-color 500ms linear;

  .navbar-toggler {
    outline: none !important;
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
  }

  &.navbar-dti-light {
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.3);
  }

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
        border-top: 0.5px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>

