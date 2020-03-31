<template>
  <courses-view :content="content" />
</template>

<page-query>
query CoursesEntry ($id: ID!) {
  content: coursesEntry(id: $id) {
    hero {
      header
      subheader
      lazy
      video {
        mp4
        webm
      }
      image
    }

    content {
    id
    header
    subtitle
    description
    image
    buttons {
      apply {
        title
        link
        icon
      }
    }
    }
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import CoursesView from '@/views/Courses.vue';
import Entry from '@/entry';

import { CoursesContent } from '@/content';

@Component({
  metaInfo: {
    title: 'Courses'
  },
  components: {
    CoursesView
  }
})
class Courses extends Entry<CoursesContent> {}

export default Courses;
</script>
