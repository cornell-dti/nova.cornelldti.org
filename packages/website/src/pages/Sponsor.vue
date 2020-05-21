<template>
  <sponsor-view :content="content" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import SponsorView from '@/views/Sponsor.vue';
import Page from '@/page';

import { SponsorContent } from '@/content';

import json from '../../data/pages/sponsor.json';

@Component({
  metaInfo: {
    title: 'Sponsor'
  },
  components: {
    SponsorView
  }
})
class Sponsor extends Page<SponsorContent>(json) {}

export default Sponsor;
</script>
