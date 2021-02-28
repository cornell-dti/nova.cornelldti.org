<template>
  <sponsor-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SponsorView from '../views/Sponsor.vue';

@Component({
  metaInfo: { title: 'Sponsor' },
  components: { SponsorView }
})
export default class Sponsor extends Vue {}
</script>
