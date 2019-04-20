<template>
  <div>
    <b-container fluid class="h-100">
      <b-row
        v-if="Strings.exists('footer', `${page}`)"
        class="contact-us"
        align-h="center"
        align-v="center"
      >
        <b-col sm="12" md="auto" align-self="center">
          <div class="contact-us-prompt">
            {{ (Strings.get('footer.prompt', `${page}`) || `Have a question or a great idea?
            Let us know!`) }}
          </div>
          <b-button
            :href="(Strings.get('footer.link', `${page}`) || 'mailto:hello@cornelldti.org')"
            class="contact-us-button"
          >{{ (Strings.get('footer.prompt', `${page}`) || `Contact Us`) }}</b-button>
        </b-col>
      </b-row>
      <b-row class="subfooter" align-v="start">
        <b-col cols="12">
          <b-row align-h="end" align-v="start" class="subfooter-wrapper">
            <b-col class="subfooter-col" md="6" sm="6">
              <div class="subfooter-text subfooter-text-gray">{{`Have a great idea?`}}</div>
              <div class="button-wrapper">
                <button class="subfooter-button subfooter-button-gray">{{`Contact Us`}}</button>
              </div>
            </b-col>
            <b-col class="subfooter-col" md="6" sm="6">
              <div class="subfooter-text subfooter-text-red">{{`Sign up for our newsletter!`}}</div>
              <div class="button-wrapper">
                <button class="subfooter-button subfooter-button-red">{{`Subscribe`}}</button>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="footer" align-v="start">
        <b-col cols="12">
          <b-row class="footer-row" align-v="center">
            <b-col sm="12" md="6">
              <b-row align-h="start">
                <img class="brand" :src="Strings.get('branding.wordmark', 'assets')">
              </b-row>
            </b-col>
            <b-col md="6" sm="12" class="social-icons-wrapper">
              <b-row class="social-icons">
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="https://www.facebook.com/cornelldti/">
                    <Facebook class="social-icon social-icon-blank"/>
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="https://github.com/cornell-dti/">
                    <Github class="social-icon social-icon-blank"/>
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="https://medium.com/cornell-design-tech-initiative/">
                    <Medium class="social-icon social-icon-blank"/>
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="http://appstore.com/cornelldti">
                    <!--TODO get the actual link-->
                    <AppStore class="social-icon social-icon-blank"/>
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a
                    href="https://play.google.com/store/apps/developer?id=Cornell+Design+%26+Tech+Initiative"
                  >
                    <GooglePlay class="social-icon social-icon-blank"/>
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row align-h="end" class="bottom">
            <div class="copyright">
              &copy; {{ new Date().getUTCFullYear() }} Cornell Design &amp; Tech
              Initiative
            </div>
            <span class="divider"></span>
            <div class="attribution">
              {{`Made with`}}
              <Heart class="heart-desktop" alt="love"/>
              <HeartMobile class="heart-mobile" alt="love"/>
              {{` in Ithaca`}}
            </div>
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
import Heart from '@/assets/footer/heart.svg';
import HeartMobile from '@/assets/footer/heart-mobile.svg';

export default {
  components: {
    AppStore,
    Facebook,
    Dribbble,
    Github,
    GooglePlay,
    Medium,
    Heart,
    HeartMobile
  },
  props: {
    page: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.subfooter {
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
  font-size: 24px;
}

.subfooter-col {
  @media (max-width: 767px) {
    padding: 0;
  }

  text-align: center;
  padding-bottom: 30px;

  &:first-of-type {
    @media (min-width: 768px) {
      border-right: 5px solid #6b6b6b;
    }

    height: 100%;
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.subfooter-wrapper {
  overflow: hidden;
  position: relative;
}

.subfooter-text {
  font-weight: 600;
  color: #4f4f4f;
  text-align: center;
  margin-bottom: 20px;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;

  &-red {
    color: #c93b4c;
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.subfooter-button {
  border-radius: 12px;
  box-sizing: border-box;
  border: 4px solid #505050;
  background: #505050;
  color: white;
  min-width: 170px;
  min-height: 50px;
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 767px) {
    background: #6f6f6f;
    height: 95px;
    width: 100%;
    border-radius: 0;
    border: none;
  }

  &-red {
    background: #c93b4c;
    border: 4px solid #c93b4c;
  }
}

.contact-us {
  min-height: 20vh;
  padding: 2vw 2rem 6vw;
  padding-left: 1rem;
  text-align: center;
  overflow: hidden;

  .contact-us-prompt {
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    text-overflow: wrap;
    letter-spacing: 0.3px;
    text-align: center;
    color: #000000;
  }

  .contact-us-button {
    margin-top: 1.2rem;
  }
}

@media (max-width: 767px) {
  .mobile-reversed {
    flex-direction: column-reverse;
  }
}

.brand {
  max-height: 110px;
  @media (max-width: 767px) {
    max-height: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}

.footer {
  font-size: 24px;
  background-color: #4a4a4a;
  margin-top: auto;
  padding: 40px 40px 40px 40px;

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
  }

  .footer-row {
    justify-content: space-between;
  }

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

  .copyright {
    padding-right: 10px;

    @media (max-width: 767px) {
      order: 1;
      margin-top: 20px;
    }
  }

  .attribution {
    @media (min-width: 768px) {
      padding-left: 10px;
      margin-right: -15px;
      margin-top: 0;
    }
  }

  .divider {
    display: inline-block;
    width: 0;
    margin-top: 6px;
    height: 18px;
    border-left: 1.5px solid #fff;
    border-right: 1.5px solid #fff;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .copyright,
  .attribution {
    display: inline;
    color: rgb(255, 255, 255);
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: right;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  .heart-desktop {
    margin-bottom: 2.5px;
    margin-left: 5px;
    margin-right: 5px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .heart-mobile {
    margin-bottom: 2.5px;
    margin-left: 2px;
    margin-right: 2px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .copyright,
    .attribution {
      text-align: center;
      padding-left: 0;
      padding-right: 0;
      width: 100%;
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

  .bottom {
    @media (max-width: 768px) {
      margin-top: 0;
      justify-content: center !important;
    }
    width: 100%;
    margin-left: 0;
    margin-top: 90px;
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

.social-icons {
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    max-width: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}

.social-icons-wrapper {
  @media (min-width: 768px) {
    min-width: 400px;
    max-width: 450px;
  }
}

.social-icon {
  width: 50px;
  height: 50px;
  padding: 0;

  &-wrapper {
    padding: 0;
  }

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }

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
