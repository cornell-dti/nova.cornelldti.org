<template>
  <div>
    <!-- TODO Fix performance -->
    <div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item">

              <h1 class="company-logo" :key="`topFirst${company.name}`" v-html="company.name" v-for="company of shuffledCompanies.slice(0, Math.round((shuffledCompanies.length - 1) / 2))"
              />
            </div>
            <div class="marquee-item">
              <h1 class="company-logo" :key="`topSecond${company.name}`" v-html="company.name"
                v-for="company of shuffledCompanies.slice(0, Math.round((shuffledCompanies.length - 1) / 2))"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation-reverse': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item offset offset-original">
              <h1 class="company-logo" v-for="company of shuffledCompanies.slice(Math.round((shuffledCompanies.length - 1) / 2),shuffledCompanies.length)"
                :key="`bottomFirst${company.name}`" v-html="company.name" />
            </div>
            <div class="marquee-item offset offset-duplicate">
              <h1 class="company-logo" v-for="company of shuffledCompanies.slice(Math.round((shuffledCompanies.length - 1) / 2),shuffledCompanies.length)"
                :key="`bottomSecond${company.name}`" v-html="company.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shuffledCompanies: []
    };
  },
  props: {
    enabled: {
      type: Boolean,
      default() {
        return true;
      }
    },
    companies: {
      type: Array,
      default() {
        return [];
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


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Playfair+Display|Roboto+Slab|Titan+One|Titillium+Web|Abel|Abril+Fatface|Acme|Pacifico|Shadows+Into+Light');

$animation-speed: 20s;

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
          width: 200px;
          height: 75px;
        }

        h1:nth-child(0) {
          font-family: 'Pacifico', cursive;
        }
        h1:nth-child(1) {
          font-family: 'Abel', sans-serif;
        }
        h1:nth-child(2) {
          font-family: 'Shadows Into Light', cursive;
        }
        h1:nth-child(3) {
          font-family: 'Abril Fatface', cursive;
        }
        h1:nth-child(4) {
          font-family: 'Acme', sans-serif;
        }

        &.offset {
          h1:nth-child(0) {
            font-family: 'Roboto Slab', serif !important;
          }
          h1:nth-child(1) {
            font-family: 'Titan One', cursive !important;
          }
          h1:nth-child(2) {
            font-family: 'Playfair Display', serif !important;
          }
          h1:nth-child(3) {
            font-family: 'Titillium Web', sans-serif !important;
          }
          h1:nth-child(4) {
            font-family: 'Indie Flower', cursive !important;
          }

          &.offset-original {
            margin-left: -12.5vw;
          }

          &.offset-duplicate {
            margin-left: 0vw !important;
          }
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
    -webkit-transform: translate3d(-100%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-100%);
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
    -webkit-transform: translate3d(-100%, 0, 0);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
