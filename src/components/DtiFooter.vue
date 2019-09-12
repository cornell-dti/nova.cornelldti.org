<template>
  <div>
    <b-container fluid class="h-100">
      <b-row v-if="!hideSubfooter" class="subfooter" align-v="start">
        <b-col cols="12">
          <b-row align-h="end" align-v="start" class="subfooter-wrapper">
            <b-col class="subfooter-col" md="6" sm="6">
              <div class="subfooter-text subfooter-text-gray">{{`Have a great idea?`}}</div>
              <a
                class="button-wrapper"
                :href="(Strings.get('footer.link', `${page}`) || 'mailto:hello@cornelldti.org')"
              >
                <button class="subfooter-button subfooter-button-gray">{{`Contact Us`}}</button>
              </a>
            </b-col>
            <b-col class="subfooter-col" md="6" sm="6">
              <div class="subfooter-text subfooter-text-red">{{`Sign up for our newsletter!`}}</div>
              <a class="button-wrapper">
                <button
                  @click="subscritionClick"
                  class="subfooter-button subfooter-button-red"
                >{{`Subscribe`}}</button>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="footer" align-v="start">
        <b-col cols="12">
          <b-row class="footer-row" align-v="center">
            <b-col lg="12" xl="6">
              <b-row align-h="start">
                <img class="brand" :src="Strings.get('branding.wordmark', 'assets')" />
              </b-row>
            </b-col>
            <b-col lg="12" xl="6" class="social-icons-wrapper">
              <b-row class="social-icons">
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="https://www.facebook.com/cornelldti/">
                    <Facebook class="social-icon social-icon-blank" />
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="https://github.com/cornell-dti/">
                    <Github class="social-icon social-icon-blank" />
                  </a>
                </b-col>
                <b-col cols="auto">
                  <a href="https://play.google.com/store/apps/dev?id=8943927778040647949">
                    <GooglePlay class="social-icon social-icon-blank" />
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a href="http://appstore.com/cornelldti">
                    <!--TODO get the actual link-->
                    <AppStore class="social-icon social-icon-blank" />
                  </a>
                </b-col>
                <b-col cols="auto" class="social-icon-wrapper">
                  <a
                    href="https://play.google.com/store/apps/developer?id=Cornell+Design+%26+Tech+Initiative"
                  >
                    <GooglePlay class="social-icon social-icon-blank" />
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
              <Heart class="heart-desktop" alt="love" />
              <HeartMobile class="heart-mobile" alt="love" />
              {{` in Ithaca`}}
            </div>
          </b-row>
        </b-col>
      </b-row>
      <b-modal v-model="isSubscribing" :hide-footer="true" :hide-header="true">
        <b-form inline @submit="onSubscribe">
          <b-input-group>
            <label class="sr-only" for="newsletterEmailSubscribeInput">Email</label>
            <b-input
              required
              id="newsletterEmailSubscribeInput"
              v-model="email"
              type="email"
              placeholder="Email"
            />
          </b-input-group>
          <b-button type="submit">Subscribe</b-button>
        </b-form>
      </b-modal>
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

import axios from 'axios';

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
    },
    hideSubfooter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    subscritionClick() {
      this.isSubscribing = !this.isSubscribing;
    },
    onSubscribe(event) {
      event.preventDefault();
      axios
        .post('/email', {
          email: this.email
        })
        .then(
          response => {
            this.msgContent = response.data.msg;
            this.msgVariant = 'success';
            this.msgShow = true;
          },
          () => {
            this.msgContent =
              'There was an error subscribing you to the email list!';
            this.msgVariant = 'error';
            this.msgShow = true;
          }
        );
    }
  },
  data() {
    return {
      isSubscribing: false,
      email: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.subfooter {
  @media (min-width: 1201px) {
    margin-bottom: 4vh;
  }
  font-size: 2.25rem;
}

.subfooter-col {
  @media (max-width: 1200px) {
    padding: 0;
  }

  text-align: center;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-of-type {
    @media (min-width: 1201px) {
      border-right: 3px solid #6b6b6b;
    }

    position: absolute;
    left: 0;
    top: 0;
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
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;

  &-red {
    color: #c93b4c;
  }

  @media (max-width: 1200px) {
    display: none;
  }
}

.subfooter-button {
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  box-sizing: border-box;
  background: #505050;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;

  @media (max-width: 1200px) {
    background: #6f6f6f;
    height: 6rem;
    width: 100%;
    border-radius: 0;
    border: none;
  }

  &-red {
    background: #c93b4c;
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

@media (max-width: 1200px) {
  .mobile-reversed {
    flex-direction: column-reverse;
  }
}

.brand {
  max-height: 4.5rem;
  @media (max-width: 1200px) {
    max-height: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
}

.footer {
  font-size: 1.25rem;
  background-color: #4a4a4a;
  margin-top: auto;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;

  @media (max-width: 1200px) {
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

    @media (min-width: 1201px) {
      padding-bottom: 3.125rem;
    }
  }

  @media (max-width: 1200px) {
    .find-us {
      align-self: center;
      text-align: center;
    }
  }

  .copyright {
    padding-right: 0.75rem;

    @media (max-width: 1200px) {
      order: 1;
    }
  }

  .attribution {
    @media (min-width: 1201px) {
      padding-left: 0.75rem;
      margin-right: -1rem;
      margin-top: 0;
    }
  }

  .divider {
    display: inline-block;
    width: 0;
    margin-top: 0.25rem;
    height: 1rem;
    border-left: 1.5px solid #fff;
    border-right: 1.5px solid #fff;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  .copyright,
  .attribution {
    display: inline;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: right;

    @media (max-width: 1200px) {
      font-size: 1.25rem;
      margin-top: 1.5rem;
    }
  }

  .heart-desktop {
    margin-bottom: 0.25rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .heart-mobile {
    margin-bottom: 0.25rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;

    @media (min-width: 1201px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
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

  @media (max-width: 1200px) {
    .statement {
      display: none;
    }
  }

  .bottom {
    @media (max-width: 1200px) {
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

  @media (max-width: 1200px) {
    .wordmark-container {
      display: none;
      // text-align: center;
    }
  }
}

.social-icons {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    max-width: 18rem;
    margin-left: auto;
    margin-right: auto;
  }
}

.social-icons-wrapper {
  @media (min-width: 1201px) {
    min-width: 25rem;
    max-width: 28rem;
  }
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;

  &-wrapper {
    padding: 0;
  }

  @media (max-width: 1200px) {
    width: 2.25rem;
    height: 2.25rem;
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
