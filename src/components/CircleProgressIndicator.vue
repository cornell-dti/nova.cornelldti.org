<template>
  <div ref="circleProgressIndicator">
    <div class="circle-progress">
      <div class="circle">
        <div class="mask full">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill circle-svg" />
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

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0.0
    }
  },
  data() {
    return { interval: -1, percentageLast: 0 };
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
    percentage(val) {
      this.setPercentage(val);
    }
  },
  methods: {
    percentagePtArr(percentage = 0.5) {
      const x = [];
      const y = [];

      const radius = 120;
      const diameter = radius * 2;

      const xOffset = Math.abs(
        radius * Math.cos(Math.PI / 2 - percentage * 2 * Math.PI)
      );
      const yOffset = Math.abs(
        radius * Math.sin(Math.PI / 2 - percentage * 2 * Math.PI)
      );

      x.push(radius);
      y.push(radius);

      if (percentage >= 0) {
        x.push(radius);
        y.push(0);

        if (percentage >= 0.25) {
          x.push(diameter, diameter, diameter);
          y.push(0, radius, diameter);

          if (percentage >= 0.5) {
            x.push(radius, 0);
            y.push(diameter, diameter);

            if (percentage >= 0.75) {
              // 75% -100%
              x.push(0, 0, radius - xOffset);
              y.push(radius, 0, radius - yOffset);
            } else {
              // 50-74%
              x.push(radius - xOffset);
              y.push(radius + yOffset);
            }
          } else {
            // 25% - 49%
            x.push(radius + xOffset);
            y.push(radius + yOffset);
          }
        } else {
          // 0 - 24%
          x.push(radius * 2, radius + xOffset, radius);
          y.push(0, radius - yOffset, radius);
        }
      }

      return [x, y];
    },
    setPercentage(percentage = 0.5) {
      if (this.interval !== -1) {
        clearInterval(this.interval);
      }

      let percentageIncr = this.percentageLast;
      this.percentageLast = percentage;

      this.interval = setInterval(() => {
        const [x, y] = this.percentagePtArr(percentageIncr);
        const params = [];

        params.push(`M${x[0]},${y[0]}`);

        for (let i = 1; i < Math.min(x.length, y.length); i += 1) {
          params.push(`L${x[i]},${y[i]}`);
        }
        params.push('Z');

        let pathData = '';

        for (const param of params) {
          pathData += ` ${param}`;
        }

        const svg = this.$refs.circleProgressIndicator.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'svg'
        )[0];
        let path = svg.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'path'
        )[0];

        if (path == null) {
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          svg.appendChild(path);
        }

        path.setAttributeNS(null, 'd', pathData);
        path.setAttributeNS(null, 'class', 'circle-path');

        if (Math.abs(percentageIncr - percentage) < 0.01) {
          clearInterval(this.interval);
        } else if (percentageIncr < percentage) {
          percentageIncr += 0.01;
        } else {
          percentageIncr -= 0.01;
        }
      }, 10);
    }
  }
};
</script>


<style lang="scss" scoped>
$circle-background-color: #ececec47;
$circle-fill-color: #ff324a;
$circle-border-color: grey;
$circle-size: 240px;
$inset-size: 180px;
$inset-color: #fefefe;

.circle-progress {
  background-color: $circle-background-color;
  width: $circle-size;
  height: $circle-size;
  border-radius: 50%;

  .inset {
    width: $inset-size;
    height: $inset-size;
    position: absolute;
    margin-left: ($circle-size - $inset-size) / 2;
    margin-top: ($circle-size - $inset-size) / 2;
    background-color: $inset-color;
    border-radius: 50%;
    border: $circle-border-color 1px solid;
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
      clip: rect(0px, $circle-size, $circle-size, $circle-size / 2);

      .fill {
        border: $circle-border-color 1px solid;
        background-color: $circle-background-color;
        width: $circle-size;
        height: $circle-size;
        border-radius: 50%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 2;
      }

      .circle-svg {
        fill: $circle-fill-color;
        stroke: $circle-border-color;
      }
    }
  }
}
</style>
