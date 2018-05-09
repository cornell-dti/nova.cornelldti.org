<template>
    <page-hero>
        <b-row align-h="center" class="h-50 no-gutters">
            <b-col cols="auto" class="my-auto">
                <h2 v-if="header !== ''" :v-html="header" />
                <h2 v-else>
                    <slot />
                </h2>
                <p v-if="subheader !== ''" :v-html="subheader" />
            </b-col>
        </b-row>
    </page-hero>
</template>

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
