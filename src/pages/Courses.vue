<template>
  <CoursesPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import CoursesPage from '@/views/Courses.vue';

import CoursesJSON from '@/../data/generated/pages/courses.json';

@Component({
  metaInfo: {
    title: 'Courses'
  },
  components: {
    CoursesPage
  }
})
class Courses extends Vue {
  Strings = fromJSON('courses', CoursesJSON);
}

export default Courses;
</script>
