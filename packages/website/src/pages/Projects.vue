<template>
  <projects-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ProjectsView from '../views/Projects.vue';

@Component({
  metaInfo: { title: 'Projects' },
  components: { ProjectsView }
})
export default class Projects extends Vue {}
</script>
