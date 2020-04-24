<template>
  <apply-view :content="content" />
</template>

<page-query>
query ApplyEntry ($id: ID!) {
  content: applyEntry(id: $id) {
    joinInformation {
      applicationsOpen
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
    infoSession {
      header
      subheader
      description
    }
    infoSessions {
      time
      location
      link {
        url
        text
      }
    }
    applicationInfo {
      id
      apply {
        header
        rightHeader
        sections
          {
            header
            content
          }
         
        callToActionButton {
          closed
          content
        }
      }
      nextSteps {
        header
        rightHeader
        sections
          {
            header
            content
          }
      }
      decision {
        header
        rightHeader
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
