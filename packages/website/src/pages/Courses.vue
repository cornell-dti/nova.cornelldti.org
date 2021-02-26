<template>
  <courses-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import CoursesView from '../views/Courses.vue';

@Component({
  metaInfo: { title: 'Courses' },
  components: { CoursesView }
})
export default class Courses extends Vue {}
</script>
