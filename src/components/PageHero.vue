<template>
  <div :style="bg_()" :class="['page-header', 'page-hero', this.greyscale ? 'page-hero-greyscale' : '']">
    <div v-if="overlay" class="bg-overlay" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: ''
    },
    greyscale: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    bg_() {
      return `background: ${this.bg};`;
    }
  }
};
</script>


<style lang="scss" scoped>
.page-header {
  min-height: 10vh;
  background-size: cover !important;
  background-position: 0% 50% !important;

  .bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 60vh;
    height: 60vh;
    width: 100vw;
  }

  &.page-hero-greyscale {
    filter: grayscale(100%);
  }

  &.page-hero {
    overflow-y: hidden;
    padding-top: 10vh !important;
    min-width: 100%;
    min-height: 60vh;
    height: 60vh;
    transition: min-height 0.5s linear;
    background: #777;
  }
}
</style>
