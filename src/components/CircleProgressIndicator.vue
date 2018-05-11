<template>
  <div>
    <div class="circle-progress">
      <div class="circle">
        <div class="mask full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            class="fill-hider circle-svg" />
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
    this.setPercentage(this.percentage);
  },
  watch: {
    percentage(val) {
      this.setPercentage(val);
    }
  },
  methods: {
    // todo ensure I'm selecting the right z-indexed div (use ids/classes instead of finger crossing)
    percentageArr(percentage = 0.5) {
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
              x.push(0, 0, radius - xOffset);
              y.push(radius, 0, radius - yOffset);

              // 75% -100%
            } else {
              x.push(radius - xOffset);
              y.push(radius + yOffset);
            }
            // 50-74%
          } else {
            x.push(radius + xOffset);
            y.push(radius + yOffset);
          }
          // 25% - 49%
        } else {
          x.push(radius * 2, radius + xOffset, radius);
          y.push(0, radius - yOffset, radius);
        }

        // 0 - 24%
      }

      return [x, y];
    },
    setPercentage(percentage = 0.5) {
      const fillers = Array.from(document.querySelectorAll('.circle-svg'));

      if (this.interval !== -1) {
        clearInterval(this.interval);
      }

      let percentageIncr = this.percentageLast;
      this.percentageLast = percentage;

      this.interval = setInterval(() => {
        const [x, y] = this.percentageArr(percentageIncr);
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

        let path = document.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'path'
        )[0];
        if (path == null) {
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          fillers[0].appendChild(path);
        }

        path.setAttributeNS(null, 'd', pathData);
        path.setAttributeNS(null, 'style', 'fill: red;');

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
$circle-size: 240px;
$inset-size: 180px;
$inset-color: #fefefe;

.circle-progress {
  background-color: $circle-background-color;
  width: $circle-size;
  height: $circle-size;
  border-radius: 50%;
  z-index: 10;

  .inset {
    width: $inset-size;
    height: $inset-size;
    position: absolute;
    margin-left: ($circle-size - $inset-size) / 2;
    margin-top: ($circle-size - $inset-size) / 2;
    background-color: $inset-color;
    border-radius: 50%;
    border: grey 1px solid;
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
    z-index: 10;

    .mask {
      clip: rect(0px, $circle-size, $circle-size, $circle-size / 2);

      .fill {
        background-color: $circle-fill-color;
        width: $circle-size;
        height: $circle-size;
        border-radius: 50%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition: clip-path 100ms linear;
        border: grey 1px solid;

        z-index: 3;
      }

      .fill-hider {
        border: grey 1px solid;
        background-color: $circle-background-color;
        width: $circle-size;
        height: $circle-size;
        border-radius: 50%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

        z-index: 2;
      }
    }
  }
}
</style>
