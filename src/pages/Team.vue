<template>
  <TeamPage :strings="Strings" :members="members" :diversity="diversity" />
</template>

<page-query>
query Members {
  members: allMember {
    edges {
      node {
        netid
        image       
        firstName
        lastName
        name
        graduation
        major
        linkedin
        github
        hometown
        about
        subteam
        otherSubteams
        website
        roleId
        roleDescription
      }
    }
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import TeamPage from '@/views/Team.vue';

import { Member } from '@/shared';

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

  get members(): Member[] {
    return (this.$page as any).members.edges.map((e: any) => e.node).filter((e: any) => e.name);
  }
}

export default Team;
</script>
