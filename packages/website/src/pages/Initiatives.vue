<template>
  <initiatives-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import InitiativesView from '../views/Initiatives.vue';

@Component({
  metaInfo: { title: 'Initiatives' },
  components: { InitiativesView }
})
export default class Initiatives extends Vue {}
</script>
