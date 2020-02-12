<template>
  <apply-view :content="content" />
</template>

<page-query>
query ApplyEntry ($id: ID!) {
  content: applyEntry(id: $id) {
      join_information {
    applications_open
  }
  main_menu {
    advertisement {
      open
    }
  }
  hero {
    closed {
      header
      subheader
    }
    header
    subheader
    lazy
    video {
      webm
      mp4
    }
    image
  }
  info_session {
    header
    subheader
    description
  }
  info_sessions {
      time
      location
      link {
        url
        text
      }
    }
  application_info 
    {
      id
      apply {
        header
        right_header
        sections
          {
            header
            content
          }
         
        call_to_action_button {
          closed
          content
        }
      }
      next_steps {
        header
        right_header
        sections
          {
            header
            content
          }
      }
      decision {
        header
        right_header
        sections
          {
            header
            content
          }
      }
    }
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ApplyView from '@/views/Apply.vue';
import Entry from '@/entry';

import { ApplyContent } from '@/content';

@Component({
  metaInfo: {
    title: 'Apply'
  },
  components: {
    ApplyView
  }
})
class Apply extends Entry<ApplyContent> {}

export default Apply;
</script>
