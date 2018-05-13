<template>
  <div>
    <b-container fluid class="h-100">
      <b-row class="footer" align-v="center">
        <b-col sm="12" md="6">
          <b-row align-h="start" align-v="center">
            <b-img class="wordmark" :src="img('wordmark.png')" />
          </b-row>
          <b-row align-h="start" align-v="center">
            <p class="statement">creating technology for community impact</p>
          </b-row>

        </b-col>
        <b-col sm="12" md="6">
          <b-row align-h="end" align-v="center">
            <Facebook class="social-icon" />
            <Dribbble class="social-icon" />
            <Github class="social-icon" />
            <GooglePlay class="social-icon-circle" />
            <AppStore class="social-icon-circle" />
            <Medium class="social-icon" />
          </b-row>
          <b-row class="copyright" align-h="end" align-v="center">
            <p>&copy; 2018 Cornell Design &amp; Tech Initiative</p>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Facebook from '@/assets/social/facebook-with-circle.svg';
import Dribbble from '@/assets/social/dribbble-with-circle.svg';
import Github from '@/assets/social/github-with-circle.svg';
import GooglePlay from '@/assets/social/google-play.svg';
import AppStore from '@/assets/social/app-store.svg';
import Medium from '@/assets/social/medium-with-circle.svg';

export default {
  components: {
    AppStore,
    Facebook,
    Dribbble,
    Github,
    GooglePlay,
    Medium
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #4a4a4a;
  margin-top: auto;
  padding: 2rem;
  padding-left: 1rem;
  min-height: 15vh;

  @media (max-width: 767px) {
    .row {
      margin: 0.5rem;
      -webkit-box-pack: center !important;
      -ms-flex-pack: center !important;
      justify-content: center !important;
      text-align: center;
    }
  }

  .copyright {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .statement {
    margin-left: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 767px) {
    .statement {
      display: none;
    }
  }

  .wordmark {
    max-height: 8vh;
    height: 8vh;
  }
}
.social-icon {
  width: 3rem;
  height: 3rem;
  fill: white;
  margin: 0.1rem;
}

.social-icon-circle {
  width: 3rem;
  height: 3rem;
  fill: #4a4a4a;

  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0.1rem;
}
</style>
