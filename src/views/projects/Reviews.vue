<template>
  <dti-project project="reviews" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import Strings from '@/strings/strings';

@Component({})
export default class Reviews extends Vue {
  @Prop({ required: true })
  Strings!: Strings;
}
</script>
