<template>
  <initiatives-view :content="content" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import InitiativesView from '../views/Initiatives.vue';
import Page from '../page';

import { InitiativesContent } from '../content';

import json from '../../data/pages/initiatives.json';

@Component({
  metaInfo: {
    title: 'Initiatives'
  },
  components: {
    InitiativesView
  }
})
class Initiatives extends Page<InitiativesContent>(json) {}

export default Initiatives;
</script>
