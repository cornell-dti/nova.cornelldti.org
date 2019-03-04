<template>
  <div ref="circleProgressIndicator">
    <div class="circle-progress">
      <div class="circle">
        <div class="mask full">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill circle-svg"></svg>
        </div>
      </div>
      <div class="inset">
        <div class="inset-content">
          <slot class="inset-centered"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { PathTemplate } from '../path';

const OUTER_RADIUS = 150;
const INNER_RADIUS = 135;

const INNER_X_PARAM = 'innerX';
const INNER_Y_PARAM = 'innerY';
const OUTER_X_PARAM = 'outerX';
const OUTER_Y_PARAM = 'outerY';
const OUTER_RADIUS_PARAM = 'outerRadius';
const INNER_RADIUS_PARAM = 'innerRadius';
const LARGE_ARC_PARAM = 'largeArc';
const LARGE_ARC_INV_PARAM = 'largeArcInv'; // todo

// TODO Cleanup this api/utility

const INVERSE_ARC_TEMPLATE = new PathTemplate()
  .move(INNER_X_PARAM, INNER_Y_PARAM)
  .line(OUTER_X_PARAM, OUTER_Y_PARAM)
  .circulararc(
    OUTER_RADIUS_PARAM,
    LARGE_ARC_INV_PARAM,
    PathTemplate.ONE,
    OUTER_RADIUS_PARAM,
    PathTemplate.ZERO
  ) // todo toggle var
  .line(
    OUTER_RADIUS_PARAM,
    parameters =>
      parameters[OUTER_RADIUS_PARAM] - parameters[INNER_RADIUS_PARAM]
  )
  .circulararc(
    INNER_RADIUS_PARAM,
    LARGE_ARC_INV_PARAM,
    PathTemplate.ZERO,
    INNER_X_PARAM,
    INNER_Y_PARAM
  )
  .end();

const ARC_TEMPLATE = new PathTemplate()
  .move(
    OUTER_RADIUS_PARAM,
    parameters =>
      parameters[OUTER_RADIUS_PARAM] - parameters[INNER_RADIUS_PARAM]
  )
  .line(OUTER_RADIUS_PARAM, PathTemplate.ZERO)
  .circulararc(
    OUTER_RADIUS_PARAM,
    LARGE_ARC_PARAM,
    PathTemplate.ONE,
    OUTER_X_PARAM,
    OUTER_Y_PARAM
  ) // todo toggle var
  .line(INNER_X_PARAM, INNER_Y_PARAM)
  .circulararc(
    INNER_RADIUS_PARAM,
    LARGE_ARC_PARAM,
    PathTemplate.ZERO,
    OUTER_RADIUS_PARAM,
    parameters =>
      parameters[OUTER_RADIUS_PARAM] - parameters[INNER_RADIUS_PARAM]
  )
  .end();

export default {
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
    percentage(val) {
      this.setPercentage(val);
    }
  },
  methods: {
    getTemplateParameters(percentage) {
      const angle = Math.PI / 2 - percentage * 2 * Math.PI;

      const [xOffset, yOffset] = [Math.cos(angle), -Math.sin(angle)];

      const params = {};

      params[INNER_X_PARAM] = OUTER_RADIUS + INNER_RADIUS * xOffset;
      params[INNER_Y_PARAM] = OUTER_RADIUS + INNER_RADIUS * yOffset;
      params[OUTER_X_PARAM] = OUTER_RADIUS + OUTER_RADIUS * xOffset;
      params[OUTER_Y_PARAM] = OUTER_RADIUS + OUTER_RADIUS * yOffset;
      params[INNER_RADIUS_PARAM] = INNER_RADIUS;
      params[OUTER_RADIUS_PARAM] = OUTER_RADIUS;
      params[LARGE_ARC_INV_PARAM] = percentage < 0.5 ? 1 : 0;
      params[LARGE_ARC_PARAM] = percentage >= 0.5 ? 1 : 0;

      return params;
    },
    getPaths(percentage = 0.5) {
      const params = this.getTemplateParameters(percentage);

      return [
        ARC_TEMPLATE.commands(params),
        INVERSE_ARC_TEMPLATE.commands(params)
      ];
    },
    setPercentage(percentage1 = 0.5) {
      if (this.interval !== -1) {
        clearInterval(this.interval);
        this.interval = -1;
      }

      this.goalPercentage = percentage1;

      this.interval = setInterval(() => {
        const [commands, inverseCommands] = this.getPaths(
          this.currentPercentage
        );

        let pathData = '';

        for (const param of commands) {
          pathData += ` ${param}`;
        }

        let inversePathData = '';

        for (const param of inverseCommands) {
          inversePathData += ` ${param}`;
        }

        const svg = this.$refs.circleProgressIndicator.getElementsByTagNameNS(
          'http://www.w3.org/2000/svg',
          'svg'
        )[0]; // TODO don't rely on array index
        let path = svg.getElementById('circle-path');
        let inversePath = svg.getElementById('circle-path-inverse');

        if (path == null) {
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.id = 'circle-path';
          svg.appendChild(path);
        }

        if (inversePath == null) {
          inversePath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          );
          inversePath.id = 'circle-path-inverse';
          svg.appendChild(inversePath);
        }

        path.setAttributeNS(null, 'd', pathData);
        inversePath.setAttributeNS(null, 'd', inversePathData);
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
};
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

      .circle-svg {
        fill-rule: evenodd;
      }
    }
  }
}
</style>

<style lang="scss">
$circle-background-color: rgba(#ececec, 0.3);
$circle-fill-color: #ff324a;
$circle-border-color: grey;

#circle-path {
  fill: $circle-fill-color;
}

#circle-path-inverse {
  fill: rgb(236, 236, 236);
}
</style>

