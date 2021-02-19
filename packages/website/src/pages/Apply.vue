<template>
  <apply-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ApplyView from '../views/Apply.vue';

@Component({
  metaInfo: { title: 'Apply' },
  components: { ApplyView }
})
export default class Apply extends Vue {}
</script>
