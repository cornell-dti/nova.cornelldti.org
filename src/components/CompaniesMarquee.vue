<template>
  <div>
    <div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item">
              <b-img class="company-logo" v-for="company in companies" :key="company.name" :src="company.logo" :alt="company.name" rounded="true" blank width="150" height="75" blank-color="#777" />
            </div>
            <div class="marquee-item">
              <b-img class="company-logo" v-for="company in companies" :key="company.name" :src="company.logo" :alt="company.name" rounded="true" blank width="150" height="75" blank-color="#777" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item offset">
              <b-img class="company-logo" v-for="company in companies" :key="company.name" :src="company.logo" :alt="company.name" rounded="true" blank width="150" height="75" blank-color="#777" />
            </div>
            <div class="marquee-item offset">
              <b-img class="company-logo" v-for="company in companies" :key="company.name" :src="company.logo" :alt="company.name" rounded="true" blank width="150" height="75" blank-color="#777" />
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<style lang="scss" scoped>
$animation-speed: 20s;

.offset {
  margin-left: 12.5vw;
}

.marquee-outer {
  height: 100px;
  width: 100%;

  .marquee-content {
    overflow: hidden;
    width: 100%;

    .marquee-inner {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;

      .marquee-item {
        flex: 0 0 auto;
        display: flex;
        justify-content: space-around;
        width: 100%;

        .company-logo {
          white-space: nowrap;
          margin: 10px;
        }
      }
    }
  }
}

.marquee-animation {
  -webkit-animation: marquee $animation-speed linear infinite;
  animation: marquee $animation-speed linear infinite;
}

@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

<script>
export default {
  data() {
    return {
      enabled: true
    };
  },
  props: {
    companies: {
      type: Array,
      default: [
        { name: "Google" },
        { name: "Amazon" },
        { name: "eBay" },
        { name: "Elsewhere" }
      ]
    }
  }
};
</script>