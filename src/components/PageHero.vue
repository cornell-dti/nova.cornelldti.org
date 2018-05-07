<template>
    <div class="page-header page-hero">
        <div class="nav-padding" />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.page-header {
  min-height: 10vh;

  &.page-hero {
    min-width: 100%;
    min-height: 50vh;
    height: 50vh;
    transition: min-height 0.5s linear;
    background: #777;
  }
}
</style>
