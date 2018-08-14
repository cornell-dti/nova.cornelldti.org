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
        <b-col cols="12">
          <b-row align-h="start" align-v="start" class="mobile-reversed">
            <b-col md="6" sm="12">
              <div class="find-us">Find Us</div>
            </b-col>
            <b-col md="6" sm="12" class="wordmark-container">
              <b-img class="wordmark" :src="Strings.get('branding.wordmark', 'assets')" />
            </b-col>
          </b-row>
          <b-row align-h="start" align-v="end">
            <b-col md="6" sm="12">
              <b-row>
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
            </b-col>
            <b-col sm="12" md="6" class="my-auto">

              <b-row align-h="end" align-v="end">
                <b-col>
                  <div class="copyright">&copy; {{ new Date().getUTCFullYear() }} Cornell Design &amp; Tech
                    Initiative
                  </div>
                </b-col>
              </b-row>
            </b-col>

          </b-row>
        </b-col>
      </b-row>
      <b-row align-v="end" align-h="center" class="footer-graphic">
        <b-col md="10" sm="11">
          <Footer class="graphic" />
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
import Footer from '@/assets/footer/footer.svg';

export default {
  components: {
    AppStore,
    Facebook,
    Dribbble,
    Github,
    GooglePlay,
    Medium,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.contact-us {
  min-height: 20vh;
  padding: 2vw 2rem 6vw;
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

.footer-graphic {
  background-color: #4a4a4a;
  overflow: hidden;

  .graphic {
    object-fit: contain;
    width: 100%;
  }
}

@media (max-width: 767px) {
  .mobile-reversed {
    flex-direction: column-reverse;
  }
}

.footer {
  background-color: #4a4a4a;
  margin-top: auto;
  padding: 2rem;
  padding-left: 1rem;
  min-height: 20vh;

  .find-us {
    font-size: 2.25rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.4px;
    color: #ffffff;
    text-align: left;

     @media (min-width: 768px) {
      padding-bottom: 3.125rem;
    }
  }

  @media (max-width: 767px) {
    .find-us {
      align-self: center;
      text-align: center;
    }
  }

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
    font-size: 1.125rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: right;


  }

  @media (max-width: 767px) {
    .copyright {
      text-align: center;
      margin-top: 2rem;
    }
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
    max-height: 3.75rem;
    height: 3.75rem;
    padding-bottom: 0.5rem;
    object-fit: contain;
  }

  .wordmark-container {
    text-align: right;
  }

  @media (max-width: 767px) {
    .wordmark-container {
      display: none;
      // text-align: center;
    }
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
