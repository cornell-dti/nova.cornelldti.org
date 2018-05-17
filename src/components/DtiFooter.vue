<template>
  <div>
    <b-container fluid class="h-100">
      <b-row class="footer" align-v="center">
        <b-col sm="12" md="6">
          <b-row align-h="start" align-v="center">
            <b-img class="wordmark" :src="img('branding', 'wordmark.png')" />
          </b-row>
          <b-row align-h="start" align-v="center">
            <p class="statement">creating technology for community impact</p>
          </b-row>

        </b-col>
        <b-col sm="12" md="6">
          <b-row align-h="end" align-v="center">
            <a href="https://www.facebook.com/cornelldti/">
              <Facebook class="social-icon" />
            </a>
            <a href="https://github.com/cornell-dti/">
              <Github class="social-icon" />
            </a>
            <a href="https://play.google.com/store/apps/developer?id=Cornell+Design+%26+Tech+Initiative">
              <GooglePlay class="social-icon-circle" />
            </a>
            <a href="http://appstore.com/cornelldti">
              <!--TODO get the actual link-->
              <AppStore class="social-icon-circle" />
            </a>
            <a href="https://medium.com/cornell-design-tech-initiative/">
              <Medium class="social-icon" />
            </a>
          </b-row>
          <b-row class="copyright" align-h="end" align-v="center">
            <p>&copy; {{ new Date().getUTCFullYear() }} Cornell Design &amp; Tech Initiative</p>
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
