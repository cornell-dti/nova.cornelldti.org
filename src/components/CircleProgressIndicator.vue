<template>
    <div class="circle-progress">
        <div class="circle">
            <div class="mask full">
                <div class="fill" />
            </div>
        </div>
        <div class="inset" />
    </div>
</template>

<script>
export default {
  methods: {
    setPercentage() {
      const rotation = Math.floor(Math.random() * 360);

      Array.from(document.querySelectorAll('.circle .fill')).forEach(
        element => {
          // element.style["-webkit-transform"] = ` rotate(${rotation})`;
          // element.style.transform = `rotate(${rotation})`;

          element.setAttribute(
            'style',
            `${
              element.style
            } -webkit-transform: rotate(${rotation}); transform: rotate(${rotation});`
          );
        }
      );
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
    mask {
      clip: rect(0px, $circle-size, $circle-size, $circle-size / 2);

      .fill {
        clip: rect(0px, $circle-size/2, $circle-size, 0px);
      }
    }
  }
  .circle .fill {
    background-color: $circle-fill-color;
    width: $circle-size;
    height: $circle-size;
    border-radius: 50%;
    position: absolute;
    clip: rect(0px, $circle-size / 2, $circle-size, 0px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}
</style>
