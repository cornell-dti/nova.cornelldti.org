<template>
  <team-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import TeamView from '../views/Team.vue';

@Component({
  metaInfo: { title: 'Team' },
  components: { TeamView }
})
export default class Team extends Vue {}
</script>
