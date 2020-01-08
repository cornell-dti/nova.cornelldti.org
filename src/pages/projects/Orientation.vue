<template>
  <team-base :Strings="Strings" project="orientation" />
</template>

<script lang="ts">
import TeamBaseVue from './TeamBase.vue';
import { Component } from '../../shim';

export default Component({
  components: { TeamBaseVue }
});
</script>
