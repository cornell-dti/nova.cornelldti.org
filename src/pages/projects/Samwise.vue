<template>
  <SamwisePage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import SamwisePage from '@/views/projects/Samwise.vue';

import SamwiseJSON from '@/../data/projects/samwise.json';
import { fromJSON } from '@/strings/json';

@Component({ components: { SamwisePage } })
export default class Samwise extends Vue {
  Strings = fromJSON('projects.samwise', SamwiseJSON);
}
</script>
