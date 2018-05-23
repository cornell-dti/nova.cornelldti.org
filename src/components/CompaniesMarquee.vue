<template>
  <div>
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
    <div class="marquee-outer">
      <div class="marquee-content">
        <div :class="{'marquee-animation-reverse': enabled}">
          <div class="marquee-inner">
            <div class="marquee-item offset offset-original">
              <div class="company-logo" v-for="company of shuffledCompanies.slice(Math.round((shuffledCompanies.length - 1) / 2),shuffledCompanies.length)"
                :key="`bottomFirst${company.name}`">
                <h1>{{company.name}}</h1>
              </div>
            </div>
            <div class="marquee-item offset offset-duplicate">
              <div class="company-logo" v-for="company of shuffledCompanies.slice(Math.round((shuffledCompanies.length - 1) / 2),shuffledCompanies.length)"
                :key="`bottomSecond${company.name}`">
                <h1>{{company.name}}</h1>
              </div>
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
  mounted() {
    this.shuffle();
  },
  methods: {
    shuffle() {
      // const copy = [...this.getCompanies()];
      // for (let i = copy.length - 1; i > 0; i -= 1) {
      //   const randomIndex = Math.floor(Math.random() * (i + 1));
      //   [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
      // }
      //this.shuffledCompanies = copy;
    }
  }
};
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Playfair+Display|Roboto+Slab|Titan+One|Titillium+Web|Abel|Abril+Fatface|Acme|Pacifico|Shadows+Into+Light');

$animation-speed: 20s;
$percentagea: -1.75%;

.marquee-outer {
  width: 100%;
  border-color: white;
  border-width: 0px;
  border-top-width: 5px;
  border-style: solid;

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
        min-width: 100%;

        .company-logo {
          white-space: nowrap;
          width: 100%;
          clip-path: polygon(15% 0, 0 100%, 85% 100%, 100% 0);
          text-align: center;
          color: white;
        }

        .company-logo h1 {
          height: 100%;
          margin: 0.5rem;
        }

        div:nth-child(0) {
          font-family: 'Pacifico', cursive;
          background-color: #fafafa;
          color: black;
          margin-left: $percentagea;
          margin-right: $percentagea;
        }
        div:nth-child(1) {
          font-family: 'Abel', sans-serif;
          background-color: #212121;

          margin-left: $percentagea;
          margin-right: $percentagea;
        }
        div:nth-child(2) {
          font-family: 'Shadows Into Light', cursive;
          background-color: #e0e0e0;
          color: black;
          margin-left: $percentagea;
          margin-right: $percentagea;
        }
        div:nth-child(3) {
          font-family: 'Abril Fatface', cursive;
          background-color: #757575;
          margin-left: $percentagea;
          margin-right: $percentagea;
        }
        div:nth-child(4) {
          font-family: 'Acme', sans-serif;
          background-color: #eeeeee;
          color: black;
          margin-left: $percentagea;
          margin-right: $percentagea;
        }

        &.offset {
          div:nth-child(0) {
            font-family: 'Roboto Slab', serif !important;
            background-color: #424242;
          }
          div:nth-child(1) {
            font-family: 'Titan One', cursive !important;
            background-color: #bdbdbd;
          }
          div:nth-child(2) {
            font-family: 'Playfair Display', serif !important;
            background-color: #616161;
            color: white;
          }
          div:nth-child(3) {
            font-family: 'Titillium Web', sans-serif !important;
            background-color: #fafafa;
            color: black;
          }
          div:nth-child(4) {
            font-family: 'Indie Flower', cursive !important;
            background-color: #9e9e9e;
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

.marquee-animation:hover,
.marquee-animation-reverse:hover {
  animation-play-state: paused;
}

.marquee-animation {
  animation: marquee $animation-speed linear infinite;
}

.marquee-animation-reverse {
  animation: marquee-reverse $animation-speed linear infinite;
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
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

