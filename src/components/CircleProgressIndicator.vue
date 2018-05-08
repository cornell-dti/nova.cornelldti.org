<template>
    <div class="circle-progress" style="z-index: 102;">
        <div class="circle" style="z-index: 101;">
            <div class="mask full" style="z-index: 100;">

                <div class="fill" style="z-index: 1;" />
                <div class="fill-hider" style="z-index: 2;" />
                <div class="fill" style="z-index: 3;" />
                <div class="fill-hider" style="z-index: 4;" />
            </div>
        </div>
        <div class="inset" style="z-index: 200;" />
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
  mounted() {
    this.setPercentage(this.percentage);
  },
  methods: {
    // todo ensure I'm selecting the right z-indexed div (use ids/classes instead of finger crossing)

    setPercentage(percentage = 0.5) {
      let percentageDeg = Math.round(percentage * 360);

      const fillHiders = Array.from(document.querySelectorAll('.fill-hider'));
      const fillers = Array.from(document.querySelectorAll('.fill'));

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

  .inset {
    width: $inset-size;
    height: $inset-size;
    position: absolute;
    margin-left: ($circle-size - $inset-size) / 2;
    margin-top: ($circle-size - $inset-size) / 2;
    background-color: $inset-color;
    border-radius: 50%;
  }
  .circle {
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
      }
    }
  }
}
</style>
