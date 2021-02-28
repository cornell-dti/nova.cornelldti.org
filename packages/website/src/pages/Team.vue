<template>
  <team-view :members="members" />
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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import TeamView from '../views/Team.vue';

import { Member } from '../shared';

interface TeamPage {
  members: {
    edges: {
      node: Member;
    }[];
  };
}

@Component({
  metaInfo: { title: 'Team' },
  components: { TeamView }
})
export default class Team extends Vue {
  get members(): Member[] {
    return (this.$static as TeamPage).members.edges.map(e => e.node).filter(e => e.name);
  }
}
</script>
