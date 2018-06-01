<template>

  <!-- TODO Fix performance -->
  <div class="marquee-outer">
    <div class="marquee-content">
      <div :class="{'marquee-animation': enabled}">
        <div class="marquee-inner">
          <div class="marquee-item">
            <div class="company-logo" :key="`topFirst${company.name}`" v-for="company of shuffledCompanies.slice(0, Math.round((shuffledCompanies.length - 1) / 2))">
              <h1>{{company.name}}</h1>
            </div>
          </div>
          <div class="marquee-item">
            <div class="company-logo" :key="`topSecond${company.name}`" v-for="company of shuffledCompanies.slice(0, Math.round((shuffledCompanies.length - 1) / 2))">
              <h1>{{company.name}}</h1>
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
      shuffledCompanies: [
        { name: 'Facebook', logo: 'facebook.svg' },
        { name: 'Twitter', logo: 'twitter.svg' },
        { name: 'Google', logo: 'google.svg' },
        { name: 'IBM', logo: 'ibm.svg' },
        { name: 'JP Morgan', logo: 'jpmorgan.svg' },
        { name: 'Snapchat', logo: 'snapchat.svg' },
        { name: 'Adobe', logo: 'adobe.svg' },
        { name: 'Microsoft', logo: 'microsoft.svg' }
      ]
    };
  },
  props: {
    enabled: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  mounted() {}
};
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Playfair+Display|Roboto+Slab|Titan+One|Titillium+Web|Abel|Abril+Fatface|Acme|Pacifico|Shadows+Into+Light');

$animation-speed: 60s;
$percentagea: -1.75%;

.marquee-outer {
  width: 100%;

  .marquee-content {
    overflow: hidden;
    width: 100%;

    .marquee-inner {
      display: flex;
      justify-content: space-between;
      margin: 0 0;

      .marquee-item {
        flex: 0 0 auto;
        display: flex;
        justify-content: space-around;
        margin: 0 1vw;

        .company-logo {
          white-space: nowrap;
          width: 100%;
          font-size: 3rem;
          font-weight: normal;
          text-align: center;
          color: black;
        }

        .company-logo h1 {
          height: 100%;
          margin: 0 0.5rem;
        }

        &.offset {
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

.marquee-animation:hover {
  animation-play-state: paused;
}

.marquee-animation {
  animation: marquee $animation-speed linear infinite;
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

