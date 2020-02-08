<template>
  <dti-project project="samwise" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import Strings from '@/strings/strings';

@Component({})
export default class Samwise extends Vue {
  @Prop({ required: true })
  Strings!: Strings;
}
</script>
