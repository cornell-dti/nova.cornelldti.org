<template>
  <div ref="circleProgressIndicator">
    <div class="circle-progress">
      <div class="circle">
        <div class="mask full">
          <donut-graph
            :margin="10"
            id="diversityWheel"
            :width="300"
            :height="300"
            :outerRadius="150"
            :innerRadius="135"
            :data="{ female: currentPercentage, male: 1 - currentPercentage }"
          />
        </div>
      </div>
      <div class="inset">
        <div class="inset-content">
          <slot class="inset-centered" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DonutGraph from './DonutGraph';

export default Vue.extend({
  components: {
    DonutGraph
  },
  props: {
    percentage: {
      type: Number,
      default: 0.0
    }
  },
  data() {
    return {
      interval: -1,
      goalPercentage: 0,
      currentPercentage: 0
    };
  },
  beforeDestroy() {
    if (this.interval !== -1) {
      clearInterval(this.interval);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setPercentage(this.percentage);
    });
  },
  watch: {
    percentage(val: number): void {
      this.setPercentage(val);
    }
  },
  methods: {
    setPercentage(percentage1 = 0.5): void {
      if (this.interval !== -1) {
        clearInterval(this.interval);
        this.interval = -1;
      }

      this.goalPercentage = percentage1;

      this.interval = setInterval(() => {
        const diff = Math.abs(this.goalPercentage - this.currentPercentage);

        if (diff <= 0.005) {
          clearInterval(this.interval);
          this.interval = -1;

          this.currentPercentage = this.goalPercentage;
        } else if (this.currentPercentage < this.goalPercentage) {
          this.currentPercentage += Math.min(0.01, diff);
        } else {
          this.currentPercentage -= Math.min(0.01, diff);
        }
      }, 5);
    }
  }
});
</script>

<style lang="scss" scoped>
$circle-background-color: #ececec;
$circle-fill-color: #ff324a;
$circle-border-color: grey;
$circle-size: 300px;
$inset-size: 270px;
$inset-color: #fefefe;

.circle-progress {
  width: $circle-size;
  height: $circle-size;

  .inset {
    width: $inset-size;
    height: $inset-size;
    position: absolute;
    margin-left: ($circle-size - $inset-size) / 2;
    margin-top: ($circle-size - $inset-size) / 2;

    overflow: hidden;
    z-index: 10;

    .inset-content {
      padding: $inset-size / 4.5 $inset-size / 18;
      overflow: hidden;
      margin: 0 $inset-size / 18;
      height: $inset-size;
    }
  }
  .circle {
    .mask {
      .fill {
        width: $circle-size;
        height: $circle-size;

        position: absolute;

        backface-visibility: hidden;
        z-index: 2;
      }
    }
  }
}
</style>
