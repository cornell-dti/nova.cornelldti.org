<template>
  <alumni-view :content="content" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import AlumniView from '../../views/Alumni.vue';
import Page from '../../page';

import { AlumniContent } from '../../content';

import json from '../../../data/pages/alumni.json';

@Component({
  metaInfo: {
    title: 'Alumni'
  },
  components: {
    AlumniView
  }
})
class Alumni extends Page<AlumniContent>(json) {}

export default Alumni;
</script>
