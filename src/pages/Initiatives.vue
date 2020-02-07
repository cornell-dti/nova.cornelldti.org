<template>
  <InitiativesPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import InitiativesPage from '@/views/Initiatives.vue';

import InitiativesJSON from '@/../data/generated/pages/initiatives.json';

@Component({
  metaInfo: {
    title: 'Initiatives'
  },
  components: {
    InitiativesPage
  }
})
class Initiatives extends Vue {
  Strings = fromJSON('initiatives', InitiativesJSON);
}

export default Initiatives;
</script>
