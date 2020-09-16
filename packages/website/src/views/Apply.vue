<template class="applyPage">
  <page-background v-if="content">
    <strings-domain :value="content.joinInformation.applicationsOpen" #key="isOpen">
      <strings-domain :value="[content.hero, content.hero.closed]" #key="[hero, closed]">
        <nova-hero
          v-if="hero && isOpen"
          :header="hero.header"
          :subheader="hero.subheader"
          :video="hero.video"
          :lazy="hero.lazy"
          :image="hero.image"
          page="apply"
        />
        <nova-hero v-else :video="hero.video" :lazy="hero.lazy" :image="hero.image" page="apply" />
        <page-section v-if="!isOpen">
          <b-container class="email-form">
            <b-row align-h="center" class="no-gutters">
              <b-col cols="auto">
                <h2 class="email-header">{{ closed && closed.header }}</h2>
                <p>{{ closed && closed.subheader }}</p>
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
      </strings-domain>
      <b-row v-if="isOpen" class="justify-content-center info-session-interjection">
        <strings-domain :value="content.infoSession" #key="{header, subheader, description}">
          <b-col class="info-session-description" sm="12" md="4" md-offset="1">
            <div class="header">{{ header }}</div>
            <div class="subheader">{{ subheader }}</div>
            <div class="description">{{ description }}</div>
          </b-col>
        </strings-domain>
        <b-col class="info-session-details" sm="12" md="auto" md-offset="1">
          <b-row class="h-100" align-h="center" align-v="center">
            <b-col cols="auto">
              <strings-domain :value="content.infoSessions">
                <template #key="[session1, session2]">
                  <div class="info-session h-50">
                    <div class="time">{{ session1.time }}</div>
                    <div class="location location-desktop">
                      {{ `${session1.location}${session1.link && session1.link.url ? ' • ' : ''}` }}
                      <template v-if="session1.link && session1.link.url">
                        <a class="apply-link" :href="session1.link.url">{{ session1.link.text }}</a>
                      </template>
                    </div>
                    <div class="location location-mobile">
                      {{ `${session1.location}` }}
                      <br />
                      <a
                        v-if="session1.link && session1.link.url"
                        class="apply-link"
                        :href="session1.link.url"
                        >{{ session1.link.text }}</a
                      >
                    </div>
                  </div>
                  <div class="info-session h-50">
                    <div class="time">{{ session2.time }}</div>
                    <div class="location location-desktop">
                      {{ `${session2.location}${session2.link && session2.link.url ? ' • ' : ''}` }}
                      <a
                        v-if="session2.link && session2.link.url"
                        class="apply-link"
                        :href="session2.link.url"
                        >{{ session2.link.text }}</a
                      >
                    </div>
                    <div class="location location-mobile">
                      {{ `${session2.location}` }}
                      <br />
                      <a
                        v-if="session2.link && session2.link.url"
                        class="apply-link"
                        :href="session2.link.url"
                        >{{ session2.link.text }}</a
                      >
                    </div>
                  </div>
                </template>
              </strings-domain>
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

        <strings-domain v-for="child of sections" :key="child.id" :value="child.info">
          <template #key="info">
            <timeline-section v-if="info" :header="info.header" :rightHeader="info.rightHeader">
              <template v-if="Array.isArray(info.sections)">
                <div v-for="section of info.sections" :key="section.header">
                  <template v-if="section">
                    <div class="apply-header" v-if="section.header">{{ section.header }}</div>

                    <div
                      class="apply-list"
                      v-if="section.content && Array.isArray(section.content.lines)"
                    >
                      <div
                        class="apply-list-item"
                        v-for="line of section.content.lines"
                        :key="line"
                      >
                        {{ line }}
                      </div>
                    </div>
                    <div class="apply-description" v-else>{{ section.content }}</div>
                  </template>
                </div>
              </template>
              <b-row v-else>
                <b-col sm v-for="col of ['left', 'right']" :key="col">
                  <template v-if="info.sections && info.sections[col]">
                    <div class="apply-header">{{ info.sections[col].header }}</div>

                    <div class="apply-list" v-if="info.sections[col].content.lines">
                      <div
                        class="apply-list-item"
                        v-for="line of info.sections[col].content.lines"
                        :key="line"
                      >
                        {{ line }}
                      </div>
                    </div>
                    <div v-else class="apply-description">{{ info.sections[col].content }}</div>
                  </template>
                </b-col>
              </b-row>
              <strings-domain
                v-if="isOpen"
                #key="[primary, secondary]"
                :value="[info['callToActionButton']]"
              >
                <b-row class="justify-content-center">
                  <b-col cols="12">
                    <b-row>
                      <b-col v-if="primary && primary.link" md="auto" sm="12">
                        <b-button
                          :href="primary.link"
                          size="lg"
                          variant="primary"
                          class="call-to-action-button text-start"
                          >{{ primary.content }}</b-button
                        >
                      </b-col>
                      <b-col v-if="secondary && secondary.link" md="auto" sm="12">
                        <b-button
                          :href="secondary.link"
                          v-string="secondary.context"
                          size="lg"
                          variant="primary"
                          class="call-to-action-button"
                        ></b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </strings-domain>
            </timeline-section>
          </template>
        </strings-domain>
      </b-container>
    </strings-domain>
    <dti-footer ref="footerRef" page="apply" />
  </page-background>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import TimelineSection from '../components/TimelineSection.vue';
import RoleSelector from '../components/RoleSelector.vue';
import DtiFooter from '../components/DtiFooter.vue';

import { ApplyContent, ApplicationInfo } from '../content';

interface Apply {
  $refs: {
    footerRef: DtiFooter;
  };
}

@Component({
  components: {
    TimelineSection,
    RoleSelector
  }
})
class Apply extends Vue {
  email = '';
  msgContent = 'banana';
  msgShow = false;
  msgVariant = 'success';
  tabIndex = 0;
  roleId = '';

  @Prop({ required: true })
  content!: ApplyContent;

  onSubscribe(event: { preventDefault: () => void }): void {
    event.preventDefault();
    this.$refs.footerRef.subscriptionClick();
  }

  get sections(): readonly { readonly id: string; readonly info: ApplicationInfo }[] {
    const info = this.content.applicationInfo.find(a => a.id === this.roleId);

    if (!info) {
      return [];
    }

    return Object.keys(info).filter(id => id !== 'id').map(id => ({
      id,
      info: ((info as unknown) as { [id: string]: ApplicationInfo })[id] // TODO
    }));
  }
}

export default Apply;
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
