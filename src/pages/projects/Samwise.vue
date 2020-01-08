<template>
  <team-base :Strings="Strings" project="samwise" />
</template>

<script lang="ts">
import TeamBase from './TeamBase.vue';
import { Component } from '../../shim';

export default Component({
  components: { TeamBase }
});
</script>
