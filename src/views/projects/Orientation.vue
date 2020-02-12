<template>
  <dti-project project="orientation" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import Strings from '@/strings/strings';

@Component({})
export default class Orientation extends Vue {
  @Prop({ required: true })
  Strings!: Strings;
}
</script>
