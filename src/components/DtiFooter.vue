<template>
  <div>
    <b-container fluid class="h-100">
      <b-row class="contact-us" align-h="center" align-v="center">
        <b-col cols="auto" align-self="center">
          <div class="contact-us-prompt">
            Have a question or a great idea? Let us know!
          </div>
          <b-button class="contact-us-button">Contact Us</b-button>
        </b-col>
      </b-row>
      <b-row class="footer" align-v="center">
        <b-col sm="12" md="6" class="my-auto">
          <b-img class="wordmark" :src="Strings.get('branding.wordmark', 'assets')" />
        </b-col>
        <b-col sm="12" md="6">
          <b-row align-h="end" align-v="center">
            <b-col cols="auto">
              <a href="https://www.facebook.com/cornelldti/">
                <Facebook class="social-icon social-icon-blank" />
              </a>
            </b-col>
            <b-col cols="auto">
              <a href="https://github.com/cornell-dti/">
                <Github class="social-icon social-icon-blank" />
              </a>
            </b-col>
            <b-col cols="auto">
              <a href="https://play.google.com/store/apps/developer?id=Cornell+Design+%26+Tech+Initiative">
                <GooglePlay class="social-icon social-icon-blank" />
              </a>
            </b-col>
            <b-col cols="auto">

              <a href="http://appstore.com/cornelldti">
                <!--TODO get the actual link-->
                <AppStore class="social-icon social-icon-blank" />
              </a>
            </b-col>
            <b-col cols="auto">
              <a href="https://medium.com/cornell-design-tech-initiative/">
                <Medium class="social-icon social-icon-blank" />
              </a>
            </b-col>
          </b-row>
          <b-row class="copyright" align-h="end" align-v="center">
            <b-col cols="auto">
              <div>&copy; {{ new Date().getUTCFullYear() }} Cornell Design &amp; Tech
                Initiative
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Facebook from '@/assets/social/facebook.svg';
import Dribbble from '@/assets/social/dribbble.svg';
import Github from '@/assets/social/github.svg';
import GooglePlay from '@/assets/social/google-play.svg';
import AppStore from '@/assets/social/app-store.svg';
import Medium from '@/assets/social/medium.svg';

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
.contact-us {
  min-height: 20vh;
  margin-top: auto;
  padding: 5rem 2rem;
  padding-left: 1rem;
  text-align: center;

  .contact-us-prompt {
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #000000;
  }

  .contact-us-button {
    margin-top: 1.2rem;
  }
}

.footer {
  background-color: #4a4a4a;
  margin-top: auto;
  padding: 2rem;
  padding-left: 1rem;
  min-height: 20vh;

  @media (max-width: 767px) {
    .row {
      margin: 0.5rem;
      justify-content: center !important;
      text-align: center;
    }
  }

  .copyright {
    margin-top: 0.1rem;
    color: rgb(255, 255, 255);
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
  width: 2rem;
  height: 2rem;
  margin-left: 0.2rem;

  &.social-icon-blank {
    fill: white;
  }

  &.social-icon-circle {
    fill: #4a4a4a;
    background-color: white;
    border-radius: 50%;
    padding: 0.5rem;
  }
}
</style>
