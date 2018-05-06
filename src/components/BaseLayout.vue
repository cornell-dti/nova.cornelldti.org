<template>
    <div>
        <slot name="header" />
        <slot name="body" />
    </div>
</template>

<style lang="scss" scoped>

</style>


<script>
export default {
  props: {
    hero: {
      default() {
        return { type: "none", bg: "" };
      },
      type: Object
    }
  },
  computed: {
    heroBgUrl() {
      return this.hero.bg == null
        ? "background-image: none;  "
        : "background-image: url('" + this.hero.bg + "');"; //eslint-disable-line
    }
  }
};
</script>

