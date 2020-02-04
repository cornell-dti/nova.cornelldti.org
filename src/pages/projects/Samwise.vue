<template>
  <dti-project project="samwise" />
</template>

<script lang="ts">
import Vue from 'vue';

import SamwiseJSON from '@/../data/projects/samwise.json';
import { fromJSON } from '@/strings/json';

fromJSON('projects.samwise', SamwiseJSON);

export default Vue.extend({});
</script>
