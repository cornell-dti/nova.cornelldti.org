<template>
  <team-base :Strings="Strings" project="queuemein" />
</template>

<script lang="ts">
import TeamBase from './TeamBase.vue';
import { Component } from '../../shim';

export default Component({
  components: { TeamBase }
});
</script>
