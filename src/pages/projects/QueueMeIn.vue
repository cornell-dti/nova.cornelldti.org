<template>
  <dti-project project="queuemein" />
</template>

<script lang="ts">
import Vue from 'vue';

import QueueMeInJSON from '@/../data/projects/queuemein.json';
import { fromJSON } from '@/strings/json';

fromJSON('projects.queuemein', QueueMeInJSON);

export default Vue.extend({});
</script>
