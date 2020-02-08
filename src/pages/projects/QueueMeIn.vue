<template>
  <QueueMeInPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import QueueMeInPage from '@/views/projects/QueueMeIn.vue';

import QueueMeInJSON from '@/../data/projects/queuemein.json';
import { fromJSON } from '@/strings/json';

@Component({ components: { QueueMeInPage } })
export default class QueueMeIn extends Vue {
  Strings = fromJSON('projects.queuemein', QueueMeInJSON);
}
</script>
