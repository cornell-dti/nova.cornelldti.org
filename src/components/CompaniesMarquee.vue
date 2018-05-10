<template>
  <div>
    <div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item">

              <b-img class="company-logo" v-for="company of shuffledCompanies.slice(0, Math.round((shuffledCompanies.length - 1) / 2))"
                :key="`topFirst${company.logo}`" :src="img(`companies/${company.logo}`)"
                :alt="company.name" rounded="true" width="200" height="75" />
            </div>
            <div class="marquee-item">
              <b-img class="company-logo" v-for="company of shuffledCompanies.slice(0, Math.round((shuffledCompanies.length - 1) / 2))"
                :key="`topSecond${company.logo}`" :src="img(`companies/${company.logo}`)"
                :alt="company.name" rounded="true" width="200" height="75" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation-reverse': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item offset-t">

              <b-img class="company-logo" v-for="company of shuffledCompanies.slice(Math.round((shuffledCompanies.length - 1) / 2),shuffledCompanies.length)"
                :key="`bottomFirst${company.logo}`" :src="img(`companies/${company.logo}`)"
                :alt="company.name" rounded="true" width="200" height="75" />
            </div>
            <div class="marquee-item offset-b">
              <b-img class="company-logo" v-for="company of shuffledCompanies.slice(Math.round((shuffledCompanies.length - 1) / 2),shuffledCompanies.length)"
                :key="`bottomSecond${company.logo}`" :src="img(`companies/${company.logo}`)"
                :alt="company.name" rounded="true" width="200" height="75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$animation-speed: 20s;

.offset-t {
  margin-left: -12.5vw;
}

.offset-b {
  margin-left: 0vw !important;
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
        min-width: 100%;

        .company-logo {
          white-space: nowrap;
          margin: 10px;
          border-radius: 25px;
        }
      }
    }
  }
}

.marquee-animation {
  -webkit-animation: marquee $animation-speed linear infinite;
  animation: marquee $animation-speed linear infinite;
}

.marquee-animation-reverse {
  -webkit-animation: marquee-reverse $animation-speed linear infinite;
  animation: marquee-reverse $animation-speed linear infinite;
}

@-webkit-keyframes marquee-reverse {
  0% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
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
      enabled: true,
      shuffledCompanies: []
    };
  },
  props: {
    companies: {
      type: Array,
      default() {
        return [
          { name: 'Google' },
          { name: 'Amazon' },
          { name: 'eBay' },
          { name: 'Elsewhere' }
        ];
      }
    }
  },
  mounted() {
    this.shuffle();
  },
  methods: {
    shuffle() {
      const copy = [...this.companies];

      for (let i = copy.length - 1; i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
      }

      this.shuffledCompanies = copy;
    }
  }
};
</script>
