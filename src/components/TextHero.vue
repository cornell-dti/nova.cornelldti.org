<template>
  <page-section>
    <b-row align-h="center">
      <b-col sm="12" md="11">
        <div class="text-hero-header text-center">{{ header }}</div>
      </b-col>
      <b-col sm="12" md="8">
        <div class="text-hero-header-subtext text-center">
          <slot />{{ subheader }}
        </div>
      </b-col>
    </b-row>
  </page-section>
</template>

<script>
export default {
  props: {
    header: {
      type: String
    },
    subheader: {
      type: String
    }
  }
};
</script>


<style lang="scss" scoped>
.text-hero-header {
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}

.text-hero-header-subtext {
  font-size: 1.5rem;
  padding-top: 0.5rem;
}
</style>

