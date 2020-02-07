<template>
  <SponsorPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import SponsorPage from '@/views/Sponsor.vue';

import SponsorJSON from '@/../data/generated/pages/sponsor.json';

@Component({
  metaInfo: {
    title: 'Sponsor'
  },
  components: {
    SponsorPage
  }
})
class Sponsor extends Vue {
  Strings = fromJSON('sponsor', SponsorJSON);
}

export default Sponsor;
</script>
