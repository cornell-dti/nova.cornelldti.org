<template class="applyPage">
  <page-background>
    <nova-hero
      v-if="Strings.get('join-information.applications-open')"
      :header="Strings.get('hero.header')"
      :subheader="Strings.get('hero.subheader')"
      page="apply"
    />
    <nova-hero
      v-else
      :header="Strings.get('hero-closed.header')"
      :subheader="Strings.get('hero-closed.subheader')"
      page="apply"
    />
    <page-section v-if="!Strings.get('join-information.applications-open')">
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
            <b-button @click="onSubscribe" type="submit">Subscribe</b-button>
          </b-col>
        </b-row>
      </b-container>
    </page-section>
    <b-row
      v-if="Strings.get('join-information.applications-open')"
      class="justify-content-center info-session-interjection"
    >
      <b-col class="info-session-description" sm="12" md="4" md-offset="1">
        <div class="header">{{ Strings.get('info-session.header') }}</div>
        <div class="subheader">{{ Strings.get('info-session.subheader') }}</div>
        <div class="description">{{ Strings.get('info-session.description') }}</div>
      </b-col>
      <b-col class="info-session-details" sm="12" md="auto" md-offset="1">
        <b-row class="h-100" align-h="center" align-v="center">
          <b-col cols="auto">
            <div class="info-session h-50">
              <div class="time">{{ Strings.get('info-sessions.1.time') }}</div>
              <div class="location location-desktop">
                {{ `${Strings.get('info-sessions.1.location')}${Strings.exists('info-sessions.1.link.url'
                ) ? ' • ' : ''}` }}
                <a
                  v-if="Strings.exists('info-sessions.1.link.url')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.1.link.url')"
                >{{Strings.get('info-sessions.1.link.text')}}</a>
              </div>
              <div class="location location-mobile">
                {{ `${Strings.get('info-sessions.1.location')}` }}
                <br />
                <a
                  v-if="Strings.exists('info-sessions.1.link.url')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.1.link.url')"
                >{{Strings.get('info-sessions.1.link.text')}}</a>
              </div>
            </div>
            <div class="info-session h-50">
              <div class="time">{{ Strings.get('info-sessions.2.time') }}</div>
              <div class="location location-desktop">
                {{ `${Strings.get('info-sessions.2.location')}${Strings.exists('info-sessions.2.link.url'
                ) ? ' • ' : ''}` }}
                <a
                  v-if="Strings.exists('info-sessions.2.link.url')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.2.link.url')"
                >{{Strings.get('info-sessions.2.link.text')}}</a>
              </div>
              <div class="location location-mobile">
                {{ `${Strings.get('info-sessions.1.location')}` }}
                <br />
                <a
                  v-if="Strings.exists('info-sessions.1.link.url')"
                  class="apply-link"
                  :href="Strings.get('info-sessions.1.link.url')"
                >{{Strings.get('info-sessions.1.link.text')}}</a>
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
        v-for="child of Strings.childrenOf(`application-info.id=${roleId}`)"
        :key="child"
        :header="Strings.get(`application-info.id=${roleId}.${child}.header`)"
        :rightHeader="
          Strings.get('join-information.applications-open')
            ? Strings.get(`application-info.id=${roleId}.${child}.right-header`)
            : ''
        "
      >
        <div
          v-if="Strings.exists(`application-info.id=${roleId}.${child}.sections.1`)"
          v-for="section of Strings.childrenOf(`application-info.id=${roleId}.${child}.sections`)"
          :key="section"
        >
          <div
            class="apply-header"
            v-if="Strings.exists(`application-info.id=${roleId}.${child}.sections.${section}.header`)"
          >{{ Strings.get(`application-info.id=${roleId}.${child}.sections.${section}.header`) }}</div>

          <div
            class="apply-list"
            v-if="
              Strings.exists(
                `application-info.id=${roleId}.${child}.sections.${section}.content.lines`
              )
            "
          >
            <div
              class="apply-list-item"
              v-for="line of Strings.childrenOf(
                 `application-info.id=${roleId}.${child}.sections.${section}.content.lines`
              )"
              :key="line"
            >{{ Strings.get(`application-info.id=${roleId}.${child}.sections.${section}.content.lines.${line}`) }}</div>
          </div>
          <div
            class="apply-description"
            v-else
          >{{Strings.get(`application-info.id=${roleId}.${child}.sections.${section}.content`)}}</div>
        </div>
        <b-row v-else>
          <b-col sm v-for="col of ['left', 'right']" :key="col">
            <div
              class="apply-header"
            >{{Strings.get(`application-info.id=${roleId}.${child}.sections.${col}.header`)}}</div>

            <div
              class="apply-list"
              v-if="Strings.exists(`application-info.id=${roleId}.${child}.sections.${col}.content.lines`)"
            >
              <div
                class="apply-list-item"
                v-for="line of Strings.childrenOf(`application-info.id=${roleId}.${child}.sections.${col}.content.lines`)"
                :key="line"
              >{{Strings.get(`application-info.id=${roleId}.${child}.sections.${col}.content.lines.${line}`)}}</div>
            </div>

            <div
              class="apply-description"
              v-else
            >{{Strings.get(`application-info.id=${roleId}.${child}.sections.${col}.content`)}}</div>
          </b-col>
        </b-row>

        <b-row
          class="justify-content-center"
          v-if="
        Strings.get(
          'join-information.applications-open'
        ) && Strings.exists(
          `application-info.id=${roleId}.${child}.call-to-action-button.closed`
        ) && !Strings.get(
          `application-info.id=${roleId}.${child}.call-to-action-button.closed`
        )
        "
        >
          <b-col cols="12">
            <b-row>
              <b-col md="auto" sm="12">
                <b-button
                  :href="Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button.link`)"
                  size="lg"
                  variant="primary"
                  class="call-to-action-button text-start"
                >{{Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button.content`)}}</b-button>
              </b-col>
              <b-col
                v-if="Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button-2.link`)"
                md="auto"
                sm="12"
              >
                <b-button
                  :href="Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button-2.link`)"
                  size="lg"
                  variant="primary"
                  class="call-to-action-button"
                >{{Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button-2.content`)}}</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row
          v-else-if="Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button.closed`)"
        >
          <b-col cols="12">
            <b-button
              disabled
              size="lg"
              variant="secondary"
              class="call-to-action-button text-center"
            >
              {{Strings.get(`application-info.id=${roleId}.${child}.call-to-action-button.content`
              )}} (Closed)
            </b-button>
          </b-col>
        </b-row>
      </timeline-section>
    </b-container>

    <dti-footer ref="footerRef" page="apply" />
  </page-background>
</template>

<script>
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
      this.$refs.footerRef.subscritionClick();
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/scss/pages/Apply.scss';
</style>
