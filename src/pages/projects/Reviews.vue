<template>
  <ReviewsPage :strings="Strings" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import ReviewsPage from '@/views/projects/Reviews.vue';

import { fromJSON } from '@/strings/json';
import ReviewsJSON from '@/../data/projects/reviews.json';

@Component({ components: { ReviewsPage } })
export default class Reviews extends Vue {
  Strings = fromJSON('projects.reviews', ReviewsJSON);
}
</script>
