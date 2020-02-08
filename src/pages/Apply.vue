<template>
  <ApplyPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import ApplyPage from '@/views/Apply.vue';

import ApplyJSON from '@/../data/generated/pages/apply.json';

@Component({
  metaInfo: {
    title: 'Apply'
  },
  components: {
    ApplyPage
  }
})
class Apply extends Vue {
  Strings = fromJSON('apply', ApplyJSON);
}

export default Apply;
</script>
