<template>
  <alumni-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import AlumniView from '../../views/Alumni.vue';

@Component({
  metaInfo: { title: 'Alumni' },
  components: { AlumniView }
})
export default class Alumni extends Vue {}
</script>
