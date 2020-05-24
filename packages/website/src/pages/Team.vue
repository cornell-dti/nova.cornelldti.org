<template>
  <team-view :content="content" :members="members" :diversity="diversity" />
</template>

<static-query>
query Members {
  members: allMember {
    edges {
      node {
        netid      
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
</static-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import TeamView from '../views/Team.vue';

import { Member } from '../shared';

import Page from '../page';

import { TeamContent } from '../content';

import DiversityJSON from '../../data/sets/diversity.json';

import json from '../../data/pages/team.json';

interface TeamPage {
  members: {
    edges: {
      node: Member;
    }[];
  };
}

@Component({
  metaInfo: {
    title: 'Team'
  },
  components: {
    TeamView
  }
})
class Team extends Page<TeamContent>(json) {
  diversity = DiversityJSON.diversity;

  get members(): Member[] {
    return (this.$static as TeamPage).members.edges.map(e => e.node).filter(e => e.name);
  }
}

export default Team;
</script>
