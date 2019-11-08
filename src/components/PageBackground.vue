<template>
  <div class="page-background">
    <div class="nav-listener" :id="this.$route.path" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-background {
  background-color: #fff;
}
</style>
