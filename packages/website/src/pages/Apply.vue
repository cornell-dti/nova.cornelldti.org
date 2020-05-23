<template>
  <apply-view :content="content" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ApplyView from '../views/Apply.vue';
import Page from '../page';

import { ApplyContent } from '../content';

import json from '../../data/pages/apply.json';

@Component({
  metaInfo: {
    title: 'Apply'
  },
  components: {
    ApplyView
  }
})
class Apply extends Page<ApplyContent>(json) {}

export default Apply;
</script>
