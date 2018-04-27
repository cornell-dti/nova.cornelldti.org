<template>

    <b-navbar v-if="transparent" id="navbar" type="transparent" toggleable="md">
       <b-navbar-nav class="ml-auto"> <!-- todo look into ml-auto variants -->
         <b-nav-item to="/">Home</b-nav-item>
         <b-nav-item to="/Projects">Projects</b-nav-item>
         <b-nav-item to="/Team">Team</b-nav-item>
         <b-nav-item to="/Sponsor">Sponsor</b-nav-item>
         <b-nav-item to="/Apply">Apply</b-nav-item>
       </b-navbar-nav>
    </b-navbar>

    <b-navbar v-else id="navbar" type="transparent" toggleable="md">
       <b-navbar-nav class="ml-auto"> <!-- todo look into ml-auto variants -->
         <b-nav-item to="/">Home</b-nav-item>
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
  }
};
</script>

<style lang="scss" scoped>
@import "../main.scss";
</style>

