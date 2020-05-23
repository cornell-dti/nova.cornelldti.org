<template>
  <div class="page-background">
    <div class="nav-listener" :id="this.$route.path" />
    <slot />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.page-background {
  background-color: #fff;
}
</style>
