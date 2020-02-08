<template>
  <EventsPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import EventsPage from '@/views/projects/Events.vue';

import EventsJSON from '@/../data/projects/events.json';
import { fromJSON } from '@/strings/json';

@Component({ components: { EventsPage } })
export default class Events extends Vue {
  Strings = fromJSON('projects.events', EventsJSON);
}
</script>
