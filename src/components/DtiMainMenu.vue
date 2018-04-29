<template>

  <b-navbar :class="classObj" toggleable="md">

    <b-navbar-brand href="#">
      <b-img class="brand-icon" src="/static/brand-icon.png" /></b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <!-- todo look into ml-auto variants -->
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/Projects">Projects</b-nav-item>
        <b-nav-item to="/Team">Team</b-nav-item>
        <b-nav-item to="/Sponsor">Sponsor</b-nav-item>
        <b-nav-item to="/Apply">Apply</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  computed: {
    classObj: function() {
      if (this.transparent) {
        return [
          "dtiNavbarTransparent",
          "bg-transparent",
          "navbar-dti",
          "navbar-dark"
        ];
      } else {
        return ["dtiNavbar", "bg-dark", "navbar-dti", "navbar-dark"];
      }
    }
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
  padding-right: 10vw;

  @media (min-width: 768px) {
    .navbar-nav > li {
      padding-left: 1vw;
      padding-right: 1vw;
    }
  }

  @media (max-width: 767px) {
    .navbar-nav {
      float: right;
      text-align: right;
    }
  }
}
</style>

