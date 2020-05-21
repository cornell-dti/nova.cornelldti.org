<template>
  <courses-view :content="content" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import CoursesView from '@/views/Courses.vue';
import Page from '@/page';

import { CoursesContent } from '@/content';

import json from '../../data/pages/courses.json';

@Component({
  metaInfo: {
    title: 'Courses'
  },
  components: {
    CoursesView
  }
})
class Courses extends Page<CoursesContent>(json) {}

export default Courses;
</script>
