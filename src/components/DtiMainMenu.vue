<template>

  <b-navbar :class="classObj" toggleable="md">
    <b-navbar-nav class="ml-auto">
      <!-- todo look into ml-auto variants -->
      <b-nav-item to="/" exact>Home</b-nav-item>
      <b-nav-item to="/Projects">Projects</b-nav-item>
      <b-nav-item to="/Team">Team</b-nav-item>
      <b-nav-item to="/Sponsor">Sponsor</b-nav-item>
      <b-nav-item to="/Apply">Apply</b-nav-item>
    </b-navbar-nav>
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
@import "../main.scss";

.navbar-dti {
  transition: background-color 500ms linear;
  padding-right: 10vw;

  .navbar-nav > li {
    padding-left: 1vw;
    padding-right: 1vw;
  }
}

</style>

