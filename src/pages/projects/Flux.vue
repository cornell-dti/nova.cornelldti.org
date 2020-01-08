<template>
  <team-base :Strings="Strings" project="flux" />
</template>

<script lang="ts">
import TeamBase from './TeamBase.vue';
import { Component } from '../../shim';

export default Component({
  components: { TeamBase }
});
</script>

<style lang="scss">
.product-flux {
  margin-top: -50%;
}
</style>
