<template>
    <div>

        <div :class="hero.type !== 'none' ? ['page-header', 'page-hero'] : ['page-header', 'page-no-hero']" :style="heroBgUrl">
            <slot name="header" />

            <b-row v-if="hero.type === 'header'" align-h="center" no-gutters=true class="h-50">
                <slot />
                <b-col cols="auto" class="my-auto">
                    <h2 class="">{{hero.header}}</h2>
                    <p>{{hero.subheader}}</p>
                </b-col>
            </b-row>
            <b-row v-else-if="hero.type === 'productDisplay'" align-h="center" no-gutters=true class="h-50">
                <slot />
                <b-col sm="auto" md="8" class="my-auto">
                    <b-row no-gutters=true class="project-hero-header">
                        <b-col cols="auto" class="project-hero-logo">
                            <b-img :src="hero.img" />
                        </b-col>
                        <b-col>
                            <h3>{{hero.header}}</h3>
                        </b-col>
                    </b-row>
                    <p class="project-hero-description">{{hero.subheader}}</p>
                    <b-button v-b-modal.downloadModal>Download</b-button>
                </b-col>
            </b-row>
            <b-row v-else />
        </div>
        <slot name="body" />
    </div>
</template>

<style lang="scss" scoped>
.page-header {
  min-height: 10vh;

  &.page-hero {
    min-width: 100%;
    min-height: 50vh;
    transition: min-height 0.5s linear;
    background: #777;
  }
}
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

