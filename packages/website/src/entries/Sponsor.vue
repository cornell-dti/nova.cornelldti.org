<template>
  <sponsor-view :content="content" />
</template>

<page-query>
query Sponsor($id: ID!) {
  content: sponsorEntry(id: $id) {
    hero {
      lazy
      video {
        mp4
        webm
      }
      image
    }
    pitch {
      header
      description
    }
    callToAction {
      description
      button {
        text
      }
    }
    currentSponsors {
      header
    }
    tiers {
      header
      sponsor {
        benefit
        subheader
        tiers {
          bronze
          silver
          gold
          platinum
        }
      }
    }
    sponsors {
      check
      invision
      google
      cornellEngineeringAlumni
      capitalone
      zeplin
      asana
    }
    events {
      infoSesh
      googleLunch
    }
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import SponsorView from '@/views/Sponsor.vue';
import Entry from '@/entry';

import { SponsorContent } from '@/content';

@Component({
  metaInfo: {
    title: 'Sponsor'
  },
  components: {
    SponsorView
  }
})
class Sponsor extends Entry<SponsorContent> {}

export default Sponsor;
</script>
