<template>
  <b-row :no-gutters="true">
    <b-col cols="12">
      <div
        class="quicklink-container"
        :style="`backgroundSize: cover; backgroundImage: url(${image})`"
      >
        <div class="quicklink-overlay" />
        <div class="quicklink-visual-dimensions">
          <a :href="link">
            <div class="quicklink-internal">
              <div class="quicklink-text quicklink-text-header">{{ header }}</div>
              <div class="quicklink-text quicklink-text-subheader">{{ subheader }}</div>
            </div>
          </a>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    image: {
      type: String
    },
    header: {
      type: String
    },
    subheader: {
      type: String
    },
    link: {
      type: String
    }
  }
});
</script>

<style lang="scss" scoped>
$height: 50vh;

.quicklink-container {
  position: relative;

  a,
  a:hover {
    text-decoration: none !important;
  }

  .quicklink-visual-dimensions {
    height: $height;
    object-fit: cover;
  }

  .quicklink-overlay {
    height: $height;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .quicklink-internal {
    z-index: 20;
    position: relative;
    height: $height;

    .quicklink-text {
      &.quicklink-text-header {
        padding-top: 15vh; // TODO Don't just pad the top.
        font-size: 3rem;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.5px; // TODO
        text-align: center;
        color: #fff;
      }

      &.quicklink-text-subheader {
        margin-top: 1.25rem;
        font-size: 1.5rem;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.3px;
        text-align: center;
        color: #ededed;
      }
    }
  }
}
</style>
