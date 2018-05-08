<template>
  <div>
    <div class="circle-progress">
      <div class="circle">
        <div class="mask full">

          <div class="fill" />
          <div class="fill-hider" />

        </div>

      </div>
      <div class="inset" />

    </div>
    <p>{{i}} </p>
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
    return { interval: -1, i: 0 };
  },
  mounted() {
    this.i = 0;

    this.interval = setInterval(() => {
      this.setPercentage(this.i >= 1.0 ? (this.i = 0) : (this.i += 0.01));
    }, 300);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    // todo ensure I'm selecting the right z-indexed div (use ids/classes instead of finger crossing)

    setPercentage(percentage = 0.5) {
      const fillers = Array.from(document.querySelectorAll('.fill'));

      // TODO Don't use javascript "hax" for animations, just meant to illustrate the current progress.

      let e = fillers[0];
      e.style = '';

      const x = [];
      const y = [];

      const radius = 60;

      x.push(radius);
      y.push(radius);

      if (percentage >= 0) {
        x.push(radius);
        y.push(0);

        if (percentage >= 0.25) {
          x.push(radius * 2);
          y.push(0);
          x.push(radius * 2);
          y.push(radius);
          x.push(radius * 2);
          y.push(radius * 2);

          if (percentage >= 0.5) {
            x.push(radius);
            y.push(radius * 2);
            x.push(0);
            y.push(radius * 2);

            if (percentage >= 0.75) {
              x.push(0);
              y.push(radius);
              x.push(0);
              y.push(0);

              x.push(
                radius -
                  Math.abs(
                    radius * Math.cos(Math.PI / 2 - percentage * 2 * Math.PI)
                  )
              );
              y.push(
                radius -
                  Math.abs(
                    radius * Math.sin(Math.PI / 2 - percentage * 2 * Math.PI)
                  )
              );

              // 75% -100%
            } else {
              x.push(
                radius -
                  Math.abs(
                    radius * Math.cos(Math.PI / 2 - percentage * 2 * Math.PI)
                  )
              );
              y.push(
                radius +
                  Math.abs(
                    radius * Math.sin(Math.PI / 2 - percentage * 2 * Math.PI)
                  )
              );
            }
            // 50-74%
          } else {
            // x.push(radius * 2);
            // y.push(radius + (percentage - 0.25) * 4 * radius);

            x.push(
              radius +
                Math.abs(
                  radius * Math.cos(Math.PI / 2 - percentage * 2 * Math.PI)
                )
            );
            y.push(
              radius +
                Math.abs(
                  radius * Math.sin(Math.PI / 2 - percentage * 2 * Math.PI)
                )
            );
          }
          // 25% - 49%
        } else {
          x.push(radius * 2);
          y.push(0);

          // x.push(radius * 2);
          // y.push(percentage * 4 * radius);

          x.push(
            radius +
              Math.abs(
                radius * Math.cos(Math.PI / 2 - percentage * 2 * Math.PI)
              )
          );
          y.push(
            radius -
              Math.abs(
                radius * Math.sin(Math.PI / 2 - percentage * 2 * Math.PI)
              )
          );

          x.push(radius);
          y.push(radius);
        }

        // 0 - 24%
      }

      let polygon = 'polygon(';

      for (let i = 0; i < Math.min(x.length, y.length); i += 1) {
        polygon += `${x[i]}px ${y[i]}px,`;
      }

      polygon = `${polygon.substring(0, polygon.length - 1)})`;

      fillers[0].style['clip-path'] = polygon;
    }
  }
};
</script>


<style lang="scss" scoped>
$circle-background-color: #d6dadc;
$circle-fill-color: #ff0000;
$circle-size: 120px;
$inset-size: 90px;
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

    z-index: 10;
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
        // clip: rect(0px, $circle-size, $circle-size / 2, 0px);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition: clip-path 300ms linear;

        z-index: 3;
      }

      .fill-hider {
        background-color: $circle-background-color;
        width: $circle-size;
        height: $circle-size;
        border-radius: 48.5%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition: transform 3s linear, visibility 0s linear 3s;

        z-index: 2;
      }
    }
  }
}
</style>
