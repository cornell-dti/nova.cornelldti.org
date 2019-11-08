<template>
  <transition name="modal">
    <div v-if="profile && profile.info" v-show="isShowing">
      <b-modal
        lazy
        no-fade
        centered
        size="lg"
        ref="memberModalRef"
        id="memberModal"
        v-model="isShowing"
        :title="profile.info.name"
        header-bg-variant="light"
        header-text-variant="dark"
        body-bg-variant="light"
        body-text-variant="dark"
        footer-bg-variant="light"
        footer-text-variant="dark"
        header-border-variant="light"
        footer-border-variant="light"
      >
        <b-container fluid>
          <b-row>
            <b-col>
              <b-button class="modal-close-button close" @click="modalClose()">x</b-button>
              <!--TODO use actual icon, not text -->
            </b-col>
          </b-row>

          <b-row class="modal-scroll">
            <b-col col>
              <b-img
                v-if="display"
                center
                rounded="circle"
                class="profile-image"
                :src="`${AssetStrings.get('directories.members')}/${profile.id + '.jpg'}`"
                @error="display = !display"
              ></b-img>
              <div
                v-if="!display"
                center
                rounded="circle"
                class="profile-image rounded-circle mx-auto"
              >
                <MissingImage class="profile-image-missing" />
              </div>
              <b-row class="profile-main">
                <b-col class="my-auto">
                  <div class="profile-name-header">
                    <div v-if="typeof profile.info.name === 'undefined'">
                      {{ profile.info.firstName }} {{ profile.info.lastName }}
                    </div>
                    <div v-else>{{ profile.info.name }}</div>
                  </div>
                  <div class="profile-role text-dark">
                    {{ profile.info.roleDescription || 'No Profile Available' }}
                  </div>
                </b-col>
              </b-row>
              <b-row v-if="profile.info.graduation" class="profile-facts" id="profile-spacing">
                <b-col cols="5" class="profile-label">Graduating</b-col>
                <b-col cols="7" class="profile-details">{{ profile.info.graduation }}</b-col>
              </b-row>
              <b-row v-if="profile.info.major" class="profile-facts">
                <b-col cols="5" class="profile-label">Major</b-col>
                <b-col cols="7" class="profile-details">{{ profile.info.major }}</b-col>
              </b-row>
              <template v-if="profile.info.minor && profile.info.minor">
                <b-row class="profile-facts">
                  <b-col cols="5" class="profile-label">Minor</b-col>
                  <b-col cols="7" class="profile-details">{{ profile.info.minor }}</b-col>
                </b-row>
              </template>
              <b-row v-if="profile.info.hometown" class="profile-facts">
                <b-col cols="5" class="profile-label">Hometown</b-col>
                <b-col cols="7" class="profile-details">{{ profile.info.hometown }}</b-col>
              </b-row>
              <div v-if="profile.info.website">
                <b-row class="profile-facts">
                  <b-col cols="5" class="profile-label">Website</b-col>
                  <b-col cols="7" class="profile-details">
                    <a class="personalwebsite" :href="profile.info.website">{{
                      profile.info.website
                    }}</a>
                  </b-col>
                </b-row>
              </div>
              <div v-if="profile.info.github || profile.info.linkedin">
                <b-row>
                  <b-col class="social-media">
                    <a v-if="profile.info.github" :href="profile.info.github">
                      <Github class="social-icon" />
                    </a>
                    <a v-if="profile.info.linkedin" :href="profile.info.linkedin">
                      <LinkedIn class="social-icon" />
                    </a>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <template v-if="profile.info.about || profile.info.subteam">
              <b-col lg="1" cols="0">
                <div class="divider" />
              </b-col>
              <b-col lg="6" cols="0" class="left-shift">
                <div v-if="profile.info.about" class="about-section">
                  <b-row class="about-title">
                    <b-col class="member-modal-header left-space">About Me</b-col>
                  </b-row>
                  <b-row>
                    <b-col class="about-p left-space">{{ profile.info.about }}</b-col>
                  </b-row>
                </div>
                <b-row
                  v-if="
                    profile.info.subteam ||
                      (profile.info.otherSubteams && profile.info.otherSubteams.length > 0)
                  "
                >
                  <b-col>
                    <div id="teamwork" class="member-modal-header left-space">Team Work</div>
                    <ul class="team-info-list left-space">
                      <template
                        v-for="team of [profile.info.subteam, ...profile.info.otherSubteams]"
                      >
                        <li class="team-info-item my-auto" :key="team">
                          {{ getTeamName(team)[0] }}
                        </li>
                      </template>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </template>
          </b-row>
        </b-container>
      </b-modal>
    </div>
  </transition>
</template>

<script>
import Github from '@/assets/social/github.svg';
import LinkedIn from '@/assets/social/linkedin.svg';
import MissingImage from '@/assets/other/missing.svg';

export default {
  components: {
    Github,
    LinkedIn,
    MissingImage
  },
  data() {
    return { isShowing: false };
  },
  props: {
    profile: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    display: {
      type: Boolean,
      required: false,
      default() {
        return {};
      }
    }
  },
  methods: {
    modalClose() {
      this.$refs.memberModalRef.hide();
    },
    getTeamName(team) {
      const teamNames = [];

      this.getTeams().forEach(teamData => {
        if (typeof team === 'string' && teamData.id === team) {
          teamNames.push(teamData.name);
        } else if (typeof team === 'object' && teamData.id === team.id) {
          teamNames.push(teamData.name);
        }
      });

      return teamNames;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
  z-index: 1040;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
$radius: 25px;

#memberModal {
  .member-modal-header {
    font-size: 1.25rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #000000;
  }

  .left-space {
    margin-left: 0.625rem;
  }

  .about-p {
    margin-top: 0.625rem;
    font-size: 0.875rem;
    font-family: Raleway;
    margin-right: 0.625rem;
  }

  .left-shift {
    margin-left: -2.5%;
  }

  .profile-text {
    text-align: center;
  }

  .profile-main {
    margin-bottom: 5%;
  }

  .profile-name-header {
    text-align: center;
    margin-top: 0.625rem;
    font-size: 1.5rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #000000;
  }

  .profile-role {
    text-align: center;
    opacity: 0.8;
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #000000;
  }

  #profile-spacing {
    margin-top: 5%;
  }

  .profile-facts {
    margin-top: 0.3125rem;
    font-family: Raleway;
    font-size: 0.875rem;
  }

  .profile-label {
    font-weight: 600;
  }

  .profile-details {
    margin-left: -1.875rem;
    font-weight: 400;
  }

  .personalwebsite {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .social-media {
    display: inline;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .divider {
    background-color: #4a4a4a;
    opacity: 0.5;
    width: 0.125rem;
    height: 100%;
  }

  .social-icon {
    width: 2rem;
    height: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }

  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-close-button {
    opacity: 1;
    color: #4a4a4a;
    background-color: transparent;
    border: none;
    float: right;
    margin-left: auto;
  }

  .modal-header,
  .modal-footer {
    display: none;
  }

  .modal-scroll {
    overflow-y: auto;
    max-height: 70vh;
  }

  .modal-body {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
    border-bottom-left-radius: $radius;
    padding: 2em;
    overflow: hidden;

    .profile-image {
      height: 9.375rem;
      width: 9.375rem;
      border: 0.05rem #979797 solid;
      object-fit: cover;
    }

    .profile-image-missing {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }

    .about-section {
      margin-bottom: 1.25rem;
    }

    @media (min-width: 992) {
      .modal-dialog {
        max-width: 960px;
        margin: 10%;
      }
      .about-title {
        overflow-y: auto;
        max-height: inherit;
      }
    }

    @media (max-width: 991px) {
      .social-icon {
        margin-top: 10%;
      }

      .divider {
        background-color: white;
      }

      .about-title {
        margin-top: 10%;
      }

      .modal-dialog {
        max-width: 800px;
        margin: 10%;
      }

      .modal-scroll {
        overflow-y: auto;
        max-height: 70vh;
      }

      .left-space {
        margin-left: 0rem;
      }

      .mobile-modal-scroll {
        overflow-y: auto;
        max-height: 70vh;
      }

      .link-list {
        padding-left: 50px;
      }
    }

    /*put position:fixed on the main page behind the modal */
    .team-logo {
      padding-right: 2rem;
    }

    .team-info-list {
      padding-top: 0.2rem;
      list-style-type: none;
      margin-bottom: 0;
      padding-left: 0;
    }

    .team-info-item {
      margin-bottom: 0;
    }
  }
}
</style>
