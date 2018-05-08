<template>
  <div class="circle-progress">
    <div class="circle">
      <div class="mask full">

        <div class="fill lower" />
        <div class="fill-hider lower" />
        <div class="fill upper" />
        <div class="fill-hider upper" />
      </div>
    </div>
    <div class="inset" />
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
    return { interval: -1 };
  },
  mounted() {
    // let i = 0;
    // this.interval = setInterval(() => {
    //  this.setPercentage(i >= 1.0 ? (i = 0.0) : (i += 0.05));
    // }, 100);
    //this.setPercentage(0.0);

    setTimeout(() => {
      this.setPercentage(0.7);
    }, 1000);

    setTimeout(() => {
      this.setPercentage(0.2);
    }, 7000);
  },
  destroyed() {
    //clearInterval(this.interval);
    //this.setPercentage(0.0);
  },
  methods: {
    // todo ensure I'm selecting the right z-indexed div (use ids/classes instead of finger crossing)

    setPercentage(percentage = 0.5) {
      const fillHiders = Array.from(document.querySelectorAll('.fill-hider'));
      const fillers = Array.from(document.querySelectorAll('.fill'));

      // TODO Don't use javascript "hax" for animations, just meant to illustrate the current progress.

      let e = fillers[0];
      e.style = '';
      e = fillers[1];
      e.style = '';
      let element = fillHiders[0];
      element.style = '';
      element = fillHiders[1];
      element.style = '';

      let percentageDeg = Math.round(percentage * 360);

      // todo convert some to actual css

      if (percentageDeg >= 180) {
        let e = fillers[0];
        e.style.transform = `rotate(-180deg)`;
        e = fillers[1];
        e.style.transform = `rotate(0deg)`;

        let element = fillHiders[0];

        element.style['-webkit-transform'] = ` rotate(${-percentageDeg}deg)`;
        element.style.transform = `rotate(${-percentageDeg}deg)`;

        element = fillHiders[1];

        element.style['-webkit-transform'] = ` rotate(-180deg)`;
        element.style.transform = `rotate(-180deg)`;

        element.style.visibility = 'hidden';
      } else {
        let e = fillers[0];

        e.style.transform = `rotate(0deg)`;
        e.style.clip = 'rect(0px, 119px, 59px, 0px)';

        e = fillers[1];

        e.style.transform = 'rotate(-180deg)';
        e.style.clip = 'rect(0px, 119px, 59px, 0px)';

        let element = fillHiders[0];

        element.style['-webkit-transform'] = ` rotate(${-percentageDeg}deg)`;
        element.style.transform = `rotate(${-percentageDeg}deg)`;

        element = fillHiders[1];

        element.style['-webkit-transform'] = ` rotate(-180deg)`;
        element.style.transform = `rotate(-180deg)`;
      }
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
        clip: rect(0px, $circle-size, $circle-size / 2, 0px);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition: transform 3s linear, visibility 0s linear 3s;

        &.upper {
          z-index: 3;
        }

        &.lower {
          transition: transform 3s linear 3s, visibility 0s linear 3s;
          z-index: 1;
        }
      }

      .fill-hider {
        background-color: $circle-background-color;
        width: $circle-size;
        height: $circle-size;
        border-radius: 48.5%;
        position: absolute;
        clip: rect(0px, $circle-size, $circle-size / 2, 0px);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition: transform 3s linear, visibility 0s linear 3s;

        &.upper {
          z-index: 4;
        }

        &.lower {
          z-index: 2;
        }
      }
    }
  }
}
</style>
