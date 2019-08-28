<template class="applyPage">
  <page-background>
    <nova-hero
      v-if="Strings.get('join-information.applications-open', 'apply')"
      :header="Strings.get('hero.header', 'apply')"
      :subheader="Strings.get('hero.subheader', 'apply')"
      page="apply"
    />
    <nova-hero
      v-else
      :header="Strings.get('hero-closed.header', 'apply')"
      :subheader="Strings.get('hero-closed.subheader', 'apply')"
      page="apply"
    />
    <page-section v-if="!Strings.get('join-information.applications-open', 'apply')">
      <b-container class="email-form">
        <b-row align-h="center" class="no-gutters">
          <b-col cols="auto">
            <h2 class="email-header">Applications are currently closed.</h2>
            <p>Subscribe to our newsletter to stay updated on the application process.</p>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-alert :show="msgShow" :variant="msgVariant" v-html="msgContent"></b-alert>
        </b-row>
        <b-row align-h="center">
          <b-col cols="auto">
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
          </b-col>
        </b-row>
      </b-container>
    </page-section>
    <b-row
      v-if="Strings.get('join-information.applications-open', 'apply')"
      class="justify-content-center info-session-interjection"
    >
      <b-col class="info-session-description" sm="12" md="4" md-offset="1">
        <div class="header">{{ Strings.get('info-session.header', 'apply') }}</div>
        <div class="subheader">{{ Strings.get('info-session.subheader', 'apply') }}</div>
        <div class="description">{{ Strings.get('info-session.description', 'apply') }}</div>
      </b-col>
      <b-col class="info-session-details" sm="12" md="auto" md-offset="1">
        <b-row class="h-100" align-h="center" align-v="center">
          <b-col cols="auto">
            <div class="info-session h-50">
              <div class="time">{{ Strings.get('info-sessions.1.time', 'apply') }}</div>
              <div class="location location-desktop">
                {{ `${Strings.get('info-sessions.1.location', 'apply')}${Strings.exists('info-sessions.1.link.url',
                'apply') ? ' • ' : ''}` }}
                <a
                  v-if="Strings.exists('info-sessions.1.link.url', 'apply')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.1.link.url', 'apply')"
                >{{Strings.get('info-sessions.1.link.text', 'apply')}}</a>
              </div>
              <div class="location location-mobile">
                {{ `${Strings.get('info-sessions.1.location', 'apply')}` }}
                <br>
                <a
                  v-if="Strings.exists('info-sessions.1.link.url', 'apply')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.1.link.url', 'apply')"
                >{{Strings.get('info-sessions.1.link.text', 'apply')}}</a>
              </div>
            </div>
            <div class="info-session h-50">
              <div class="time">{{ Strings.get('info-sessions.2.time', 'apply') }}</div>
              <div class="location location-desktop">
                {{ `${Strings.get('info-sessions.2.location', 'apply')}${Strings.exists('info-sessions.2.link.url',
                'apply') ? ' • ' : ''}` }}
                <a
                  v-if="Strings.exists('info-sessions.2.link.url', 'apply')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.2.link.url', 'apply')"
                >{{Strings.get('info-sessions.2.link.text', 'apply')}}</a>
              </div>
              <div class="location location-mobile">
                {{ `${Strings.get('info-sessions.1.location', 'apply')}` }}
                <br>
                <a
                  v-if="Strings.exists('info-sessions.1.link.url', 'apply')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.1.link.url', 'apply')"
                >{{Strings.get('info-sessions.1.link.text', 'apply')}}</a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-container>
      <role-selector
        class="application-role-selector"
        v-model="roleId"
        dropdownText="I want to apply for..."
        :centered="true"
        :bold="true"
        :showAll="false"
      />

      <timeline-section
        v-for="child of Strings.childrenOf(`application-info.${roleId}`, `apply`)"
        :key="child"
        :header="Strings.get(`application-info.${roleId}.${child}.header`, `apply`)"
        :rightHeader="Strings.get('join-information.applications-open', 'apply') ? Strings.get(`application-info.${roleId}.${child}.right-header`, `apply`) : ''"
      >
        <div
          v-if="Strings.exists(`application-info.${roleId}.${child}.sections.1`, 'apply')"
          v-for="section of Strings.childrenOf(`application-info.${roleId}.${child}.sections`, 'apply')"
          :key="section"
        >
          <div
            class="apply-header"
            v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.header`, 'apply')"
          >{{Strings.get(`application-info.${roleId}.${child}.sections.${section}.header`, 'apply')}}</div>

          <div
            class="apply-list"
            v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.content.lines`, 'apply')"
          >
            <div
              class="apply-list-item"
              v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${section}.content.lines`, 'apply')"
              :key="line"
            >
              {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content.lines.${line}`,
              'apply')}}
            </div>
          </div>
          <div class="apply-description" v-else>
            {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content`,
            'apply')}}
          </div>
        </div>
        <b-row v-else>
          <b-col sm v-for="col of ['left', 'right']" :key="col">
            <div class="apply-header">
              {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.header`,
              'apply')}}
            </div>

            <div
              class="apply-list"
              v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${col}.content.lines`, 'apply')"
            >
              <div
                class="apply-list-item"
                v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${col}.content.lines`, 'apply')"
                :key="line"
              >
                {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content.lines.${line}`,
                'apply')}}
              </div>
            </div>

            <div
              class="apply-description"
              v-else
            >{{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content`, 'apply')}}</div>
          </b-col>
        </b-row>

        <b-row
          class="justify-content-center"
          v-if="
        Strings.get(
          'join-information.applications-open',
          'apply'
        ) && Strings.exists(
          `application-info.${roleId}.${child}.call-to-action-button.closed`,
          'apply'
        ) && !Strings.get(
          `application-info.${roleId}.${child}.call-to-action-button.closed`,
          'apply'
        )
        "
        >
          <b-col cols="12">
            <b-row>
              <b-col md="auto" sm="12">
                <b-button
                  :href="Strings.get(`application-info.${roleId}.${child}.call-to-action-button.link`, 'apply')"
                  size="lg"
                  variant="primary"
                  class="call-to-action-button text-start"
                >
                  {{Strings.get(`application-info.${roleId}.${child}.call-to-action-button.content`,
                  'apply')}}
                </b-button>
              </b-col>
              <b-col
                v-if="Strings.get(`application-info.${roleId}.${child}.call-to-action-button-2.link`, 'apply')"
                md="auto"
                sm="12"
              >
                <b-button
                  :href="Strings.get(`application-info.${roleId}.${child}.call-to-action-button-2.link`, 'apply')"
                  size="lg"
                  variant="primary"
                  class="call-to-action-button"
                >
                  {{Strings.get(`application-info.${roleId}.${child}.call-to-action-button-2.content`,
                  'apply')}}
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row
          v-else-if="Strings.get(`application-info.${roleId}.${child}.call-to-action-button.closed`, 'apply')"
        >
          <b-col cols="12">
            <b-button
              disabled
              size="lg"
              variant="secondary"
              class="call-to-action-button text-center"
            >
              {{Strings.get(`application-info.${roleId}.${child}.call-to-action-button.content`,
              'apply')}} (Opens 9/3)
            </b-button>
          </b-col>
        </b-row>
      </timeline-section>
    </b-container>

    <dti-footer page="apply"/>
  </page-background>
</template>

<script>
import axios from 'axios';
import TimelineSection from '@/components/TimelineSection';
import RoleSelector from '@/components/RoleSelector';

export default {
  components: {
    TimelineSection,
    RoleSelector
  },
  data() {
    return {
      email: '',
      msgContent: 'banana',
      msgShow: false,
      msgVariant: 'success',
      tabIndex: 0,
      roleId: ''
    };
  },
  computed: {},
  methods: {
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
  }
};
</script>


<style scoped lang="scss">
.application-role-selector {
  margin: 2rem 0;
}

.call-to-action-button {
  margin-top: 0.5rem;
  word-wrap: break-word;
  max-width: 90%;
  white-space: normal;
}

.email-form {
  .email-header {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    & + p {
      font-size: 1.5rem;
    }
  }
}

.info-session-interjection {
  overflow: hidden;
  background-color: rgb(255, 71, 92);
  color: #fff;
  margin: 4vw 0;
  padding: 5rem 4vw;

  .info-session-description {
    padding-right: 4vw;

    .header {
      font-size: 3rem;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.3px;
    }

    .subheader {
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.4;
      letter-spacing: 0.3px;
    }

    .description {
      margin-top: 2.5rem;
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.4;
      letter-spacing: 0.3px;
    }
  }

  .info-session-details {
    padding-left: 4vw;

    .info-session {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;

      .time {
        margin-bottom: 0.3125rem;
        font-size: 2rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.3px;

        @media (max-width: 768px) {
          letter-spacing: 0.5vw;
          text-align: center;
        }

        @media (max-width: 500px) {
          font-size: 5vw;
          text-align: center;
        }
      }

      @media (max-width: 767px) {
        .location-desktop {
          display: none !important;
        }
      }

      @media (min-width: 768px) {
        .location-mobile {
          display: none !important; // TODO fix this
        }
      }

      .location {
        margin-top: 0.3125rem;
        font-size: 1.25rem;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.3px;

        @media (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }
}

.apply-link {
  color: #fff;
}

.apply-description {
  margin: 0.25rem 0 2.5rem;
}

.apply-list {
  margin-bottom: 1rem;
}

.apply-header {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #000000;
}
.apply-list-item {
  margin-bottom: 0.1rem;
}

.apply-hero {
  height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.apply-top {
  font-size: 48px;
  text-align: center;

  h2 {
    margin-bottom: 43px;
  }

  p {
    font-size: 24px;
    letter-spacing: 0.4px;
  }
}
.row.apply-dates {
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3,
  p {
    font-size: 20px;
  }
}
.alert {
  display: block;
  margin-top: 1em;
}
.apply-pills {
  width: 100%;

  .card-header {
    background-color: transparent !important;
    border-bottom: none;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    li a,
    li a.active {
      background-color: transparent;
      color: black;
      font-weight: 600;
      line-height: 1.06;
      letter-spacing: 0.3px;
      text-decoration: none;

      &.active {
        border-bottom: 2px solid black;
        border-radius: 0px;
      }
    }

    button.apply-button {
      color: #ffffff;
      font-size: 32px;
      font-weight: 500;
      height: 38px;
      padding: 12px 39px;
      letter-spacing: 0.2px;
      text-align: left;
      width: 81px;
    }

    .tab-content {
      .card-body {
        .tab-roleSpecific-content {
          padding-left: 120px;
          border-left: 5px solid black;

          h2,
          p {
            margin: 0;
          }
          h2 {
            font-size: 22px;
          }
          p {
            font-size: 18px;
          }
          h2 + p {
            margin-top: 22px;
          }

          p + h2 {
            margin-top: 40px;
          }

          & + .row {
            margin-top: 52px;
          }

          @media screen and (max-width: 768px) {
            padding-left: 5px;
          }
        }
      }
    }
  }
  button.apply-button {
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
    height: 38px;
    padding: 12px 39px;
    letter-spacing: 0.2px;
    text-align: left;
    width: 81px;
  }
}

button[type='submit'] {
  margin-left: 15px;
}
.col,
div[class*='col-'] {
  &.left-col-text {
    text-align: left;
  }
  &.right-col-text {
    color: grey;
    font-weight: bold;
    text-align: right;
  }
}
.container-section-heading {
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
}

#newsletterEmailSubscribeInput {
  border-radius: 5px;
}
.text-header {
  color: #fff;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

  & + p {
    color: grey;
  }
}

@media screen and (max-width: 768px) {
  .col,
  div[class*='col-'] {
    &.right-col-text {
      color: grey;
      font-weight: bold;
      text-align: left;
    }
  }
}
</style>
