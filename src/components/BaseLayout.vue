<template>
    <div>
        <div :class="hero.type !== 'none' ? 'page-hero' : 'page-header'" :style="heroBgUrl">
            <slot name="header" />

            <b-row v-if="hero.type === 'header'" no-gutters=true class="content justify-content-center">
                <slot />
                <b-col md="6" sm="12">
                    <h2>{{hero.header}}</h2>
                    <p>{{hero.subheader}}</p>
                </b-col>
            </b-row>
            <b-row v-else-if="hero.type === 'productDisplay'" align-h="center">
                <slot />
                <b-col cols="6" class="my-auto">
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
        </div>

        <slot name="body" />
    </div>
</template>

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
      return "background-image: url('" + this.hero.bg + "');"; //eslint-disable-line
    }
  }
};
</script>

