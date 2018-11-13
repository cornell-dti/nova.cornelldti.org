<template>
  <div>
    <b-modal
      lazy
      centered
      size="lg"
      ref="memberModal"
      id="memberModal"
      v-model="modalShow"
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
          <b-col lg="5" cols="12" class="border border-dark border-top-0 border-bottom-0 border-left-0">
            <b-img center rounded="circle" class="profile-image" :src="`${Strings.get('directories.members', 'assets')}/${profile.id+'.jpg'}`"/>
            <b-row>
              <b-col class="my-auto">
                <div class="profile-name-header">
                  <div v-if="typeof profile.info.name === 'undefined'">{{profile.info.firstName}} {{profile.info.lastName}}</div>
                  <div v-else>{{profile.info.name}}</div>
                </div>
                <div class="profile-role text-dark">{{profile.info.role}}</div>
              </b-col>
            </b-row>
            <b-row class="profile-facts" id="profile-spacing">
              <b-col cols="5" class="profile-label">
                Graduating
              </b-col>
              <b-col cols="7" class="profile-details">
                {{profile.info.graduation}}
              </b-col>
            </b-row>
            <b-row class="profile-facts">
              <b-col cols="5" class="profile-label">
                Major
              </b-col>
              <b-col cols="7" class="profile-details">
                {{profile.info.major}}
              </b-col>
            </b-row>
            <b-row class="profile-facts">
              <b-col cols="5" class="profile-label">
                Minor
              </b-col>
              <b-col cols="7" class="profile-details">
                {{profile.info.minor}}
              </b-col>
            </b-row>
            <b-row class="profile-facts">
              <b-col cols="5" class="profile-label">
                Hometown
              </b-col>
              <b-col cols="7" class="profile-details">
                {{profile.info.hometown}}
              </b-col>
            </b-row>
            <div v-if="profile.info.website !== ''">
              <b-row class="profile-facts">
                <b-col cols="5" class="profile-label">
                  Website
                </b-col>
                <b-col cols="7" class="profile-details">
                  <a href="profile.website">{{profile.info.website}}</a>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col class="social-media">
                  <a v-if="typeof profile.info.github !== 'undefined'" :href="profile.info.github">
                    <Github class="social-icon"/>
                  </a>
                  <a v-if="typeof profile.info.linkedin !== 'undefined'" :href="profile.info.linkedin">
                    <LinkedIn class="social-icon"/>
                  </a>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="7" sm="0">
            <b-col class="about-section">
              <b-row>
                <b-col>
                  <div class="member-modal-header">About Me</div>
                  <p id="about-p">{{profile.info.about}}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div id="teamwork" class="member-modal-header">Team Work</div>
                  <b-row v-for="team in profile.info.teams" :key="team.name">
                    <b-col v-if="team.logo" cols="2" class="team-logo my-auto">
                      <b-img :src="team.logo" :alt="team.name" height="64px" width="64px"/>
                    </b-col>
                    <b-col class="team-info my-auto">
                      <h4 v-if="team.logo || team.description">{{team.name}}</h4>
                      <p v-if="team.logo || team.description">{{team.description}}</p>
                      <ul class="team-info-list" v-else>
                        <li>
                          <h4>{{team.name}}</h4>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import Github from '@/assets/social/github.svg';
import Medium from '@/assets/social/medium.svg';

export default {
  components: {
    Github,
    Medium
  },
  model: {
    prop: 'modalShow',
    event: 'update:change'
  },
  props: {
    profile: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    modalShow: { type: Boolean, default: false }
  },
  watch: {
    modalShow($event) {
      console.log('show modal');
      this.$emit('update:change', $event);
    }
  },
  methods: {
    modalClose() {
      this.$refs.memberModal.hide();
    }
  }
};
</script>

<style lang="scss">
$radius: 25px;

#testing {
  background-color: pink;
}

#testing2 {
  background-color: blue;
}

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

  .about-section {
    margin-top: 10%;
  }

  #about-p {
    margin-top: 0.625rem;
    font-size: 0.875rem;
    font-family: Raleway;
  }

  #teamwork {
    margin-top: 1.25rem;
  }

  .profile-text {
    text-align: center;
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

  .social-media {
    margin-top: 1.25rem;
  }

  .social-icon {
    width: 2rem;
    height: 2rem;
    margin-left: 0.2rem;
    margin-right: 0.4rem;
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
    }

    @media (min-width: 768) {
      .modal-dialog{
        max-width:960px;
        margin:10%
      }
      .about-section {
        overflow-y: auto;
        max-height: inherit;
      }

      .profile-header-sm {
        display: none;
      }
    }

    @media (max-width: 767px) {
      .modal-dialog {
        max-width: 800px;
        margin: 10%;
      }

      .profile-header {
        text-align: center;
        background-color: pink;
      }

      .profile-header-md {
        display: none;
      }

      .modal-scroll {
        overflow-y: auto;
        max-height: 70vh;
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
    }
  }
}
</style>
