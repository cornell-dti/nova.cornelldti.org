<template>
  <page-hero :bg="bg" :greyscale="greyscale" :overlay="overlay">
    <b-row align-h="center" class="h-50 no-gutters">
      <b-col cols="auto" class="my-auto">
        <h2 class="text-header" v-if="header !== ''" :v-html="header" />
        <h2 class="text-header" v-else>
          <slot />
        </h2>
        <p class="text-subheader" v-if="subheader !== ''" :v-html="subheader" />
      </b-col>
    </b-row>
  </page-hero>
</template>

<style lang="scss" scoped>
.text-header {
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
}

.text-subheader {
  color: #ddd;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
}
</style>

<script>
import PageHero from './PageHero';

export default {
  extends: PageHero,
  props: {
    header: { type: String, default: '' },
    subheader: { type: String, default: '' }
  }
};
</script>
