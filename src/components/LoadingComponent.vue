<template>
  <page-background class="background">
    <text-page-hero style="height: 100vh;">
      <div class="shapeshifter play" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
    </text-page-hero>
  </page-background>
</template>

<style lang="scss">
.page-header {
  background-color: white !important;
}

@keyframes play30 {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -24000px 0px;
  }
}
.shapeshifter {
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: steps(30);
  width: 800px;
  height: 800px;
  background-repeat: no-repeat;
}
.shapeshifter.play {
  animation-name: play30;
}
</style>

<script>
export default {
  data() {
    return {
      image: 'static/pages/loading/dtiloading.svg'
    };
  }
};
</script>
