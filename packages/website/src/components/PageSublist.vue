<template>
  <div :class="['page-sublist', borderPadding ? '' : 'page-sublist-no-padding']">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    borderPadding: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.page-sublist > * {
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.page-sublist-no-padding > *:first-child {
  margin-top: 0;
}

.page-sublist-no-padding > *:last-child {
  margin-bottom: 0;
}
</style>
