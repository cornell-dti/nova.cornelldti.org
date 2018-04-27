<template>

    <b-navbar :class="classObj" id="navbar" toggleable="md">
       <b-navbar-nav class="ml-auto"> <!-- todo look into ml-auto variants -->
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
        return ["dtiNavbarTransparent", "bg-transparent", "navbar-dark"];
      } else {
        return ["dtiNavbar", "bg-dark", "navbar-dark"];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../main.scss";

#navbar {
  padding-right: 10vw;
}
</style>

