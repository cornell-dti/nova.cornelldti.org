<template>
  <team-view :content="content" :members="members" :diversity="diversity" />
</template>

<page-query>
query Members($id: ID!) {
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

  content: teamEntry(id: $id) {
    hero {
      header
      subheader
      lazy
      video {
        mp4
        webm
      }
      image
    }

    team {
      header
    }

    diversity {
     header
    description
    gender {
      header
    }
    stats {
      underclassmen {
        stat
        description
      }
      majors {
        stat
        description
      }
      colleges {
        stat
        description
      }
    }
    }
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import TeamView from '@/views/Team.vue';

import { Member } from '@/shared';

import Entry from '@/entry';

import { TeamContent } from '@/content';

import DiversityJSON from '@/../data/sets/diversity.json';

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
class Team extends Entry<TeamContent> {
  diversity = DiversityJSON.diversity;

  get members(): Member[] {
    return (this.$page as TeamPage).members.edges.map(e => e.node).filter(e => e.name);
  }
}

export default Team;
</script>
