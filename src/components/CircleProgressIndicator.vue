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
    percentagePathVar(percentage = 0.5, inverse = false) {
      const outerRadius = 120;
      const innerRadius = 110;

      const xOffset = Math.cos(Math.PI / 2 - percentage * 2 * Math.PI);
      const yOffset = -Math.sin(Math.PI / 2 - percentage * 2 * Math.PI);

      const outerX = outerRadius + outerRadius * xOffset;
      const outerY = outerRadius + outerRadius * yOffset;

      const innerX = outerRadius + innerRadius * xOffset;
      const innerY = outerRadius + innerRadius * yOffset;

      const largeArc = (inverse ? percentage < 0.5 : percentage >= 0.5) ? 1 : 0;

      return [
        outerRadius,
        innerRadius,
        outerX,
        outerY,
        innerX,
        innerY,
        largeArc
      ];
    },
    inversePercentagePath(percentage = 0.5) {
      const [
        outerRadius,
        innerRadius,
        outerX,
        outerY,
        innerX,
        innerY,
        largeArc
      ] = this.percentagePathVar(percentage, true);

      const commands = [];

      commands.push(`M ${innerX} ${innerY}`);
      commands.push(`L ${outerX} ${outerY}`);

      commands.push(
        `A ${outerRadius} ${outerRadius} 0  ${largeArc} 1  ${outerRadius} ${0}`
      );
      commands.push(`L ${outerRadius} ${outerRadius - innerRadius}`);

      commands.push(
        `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerX} ${innerY}`
      );

      commands.push(`Z`);

      return commands;
    },
    percentagePath(percentage = 0.5) {
      const [
        outerRadius,
        innerRadius,
        outerX,
        outerY,
        innerX,
        innerY,
        largeArc
      ] = this.percentagePathVar(percentage);
      const commands = [];

      commands.push(`M ${outerRadius} ${outerRadius - innerRadius}`);
      commands.push(`L ${outerRadius} 0`);

      commands.push(
        `A ${outerRadius} ${outerRadius} 0  ${largeArc} 1  ${outerX} ${outerY}`
      );
      commands.push(`L ${innerX} ${innerY}`);

      commands.push(
        `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${outerRadius} ${outerRadius -
          innerRadius}`
      );

      commands.push(`Z`);

      return commands;
    },
    setPercentage(percentage = 0.5) {
      if (this.interval !== -1) {
        clearInterval(this.interval);
      }

      let percentageIncr = this.percentageLast;
      this.percentageLast = percentage;

      this.interval = setInterval(() => {
        const commands = this.percentagePath(percentageIncr);

        const commands1 = this.inversePercentagePath(percentageIncr);

        let pathData = '';

        for (const param of commands) {
          pathData += ` ${param}`;
        }

        let pathData1 = '';

        for (const param of commands1) {
          pathData1 += ` ${param}`;
        }

        const svg = this.$refs.circleProgressIndicator.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'svg'
        )[0];
        let path = svg.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'path'
        )[0];
        let path1 = svg.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'path'
        )[1];

        if (path == null) {
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          svg.appendChild(path);
        }

        if (path1 == null) {
          path1 = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          );
          svg.appendChild(path1);
        }

        path.setAttributeNS(null, 'd', pathData);
        path.id = 'circle-path';

        path1.setAttributeNS(null, 'd', pathData1);
        path1.id = 'circle-path1';

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
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 2;
      }

      .circle-svg {
        fill-rule: evenodd;
      }
    }
  }
}
</style>

<style lang="scss">
$circle-background-color: #ececec47;
$circle-fill-color: #ff324a;
$circle-border-color: grey;
#circle-path {
  fill: $circle-fill-color;

  //stroke: $circle-border-color;
}

#circle-path1 {
  fill: rgb(236, 236, 236);
  //stroke: greenyellow;
}
</style>

