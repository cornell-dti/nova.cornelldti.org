<template>
  <dti-project project="reviews" />
</template>

<script lang="ts">
import Vue from 'vue';

import ReviewsJSON from '@/../data/projects/reviews.json';
import { fromJSON } from '@/strings/json';

fromJSON('projects.reviews', ReviewsJSON);

export default Vue.extend({});
</script>
