<template>
  <dti-project project="flux" />
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';

import Strings from '@/strings/strings';

@Component({})
export default class Flux extends Vue {
  @Prop({ required: true })
  Strings!: Strings;
}
</script>

<style lang="scss">
.product-flux {
  margin-top: -50%;
}
</style>
