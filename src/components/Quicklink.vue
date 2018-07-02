<template>
  <b-row>
    <b-col cols="12">
      <div class="quicklink-container">
        <div class="quicklink-overlay" />
        <visual width="100vw" height="40vh" background="cover" :image="image" align="middle center">

          <div class="quicklink-internal">
            <div class="quicklink-text quicklink-text-header">{{header}}</div>
            <div class="quicklink-text quicklink-text-subheader">{{subheader}}</div>
          </div>
        </visual>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
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
.quicklink-container {
  position: relative;

  .quicklink-overlay {
    height: 40vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  .quicklink-internal {
    z-index: 20;
    position: relative;

    .quicklink-text {
      &.quicklink-text-header {
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        color: #fff;
      }

      &.quicklink-text-subheader {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.3px;
        text-align: center;
        color: #ededed;
      }
    }
  }
}
</style>
