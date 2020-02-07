<template>
  <TeamPage :strings="Strings" :diversity="diversity" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import TeamPage from '@/views/Team.vue';

import DiversityJSON from '@/../data/sets/diversity.json';
import TeamJSON from '@/../data/generated/pages/team.json';

@Component({
  metaInfo: {
    title: 'Team'
  },
  components: {
    TeamPage
  }
})
class Team extends Vue {
  Strings = fromJSON('team', TeamJSON);

  diversity = DiversityJSON.diversity;
}

export default Team;
</script>
