<template>
  <div :style="bg_(bg)" class="page-header page-hero">
    <div class="bg-overlay" />
    <div class="nav-padding" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: ''
    }
  },
  methods: {
    bg_() {
      return `background-image: url('${this.bg}');`;
    }
  }
};
</script>


<style lang="scss" scoped>
.page-header {
  min-height: 10vh;
  background-position-y: -35vh !important; // todo
  background-size: cover !important;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  .bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 60vh;
    height: 60vh;
    width: 100vw;
  }

  &.page-hero {
    min-width: 100%;
    min-height: 60vh;
    height: 60vh;
    transition: min-height 0.5s linear;
    background: #777;
  }
}
</style>
