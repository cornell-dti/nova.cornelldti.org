<template>
  <div>
    <b-modal
      lazy
      centered
      size="lg"
      ref="memberModal"
      id="memberModal"
      v-model="modalShow"
      :title="profile.name"
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

        <b-row>
          <b-col cols="5">
            <b-img center rounded="circle" class="profile-image" :src="`${Strings.get('directories.members', 'assets')}/${profile.image}`"/>
            <b-row>
              <b-col class="my-auto">
                <div class="profile-name-header">{{profile.name}}</div>
                <div class="profile-role text-dark">{{profile.role}}</div>
              </b-col>
            </b-row>
            <b-row class="profile-facts">
              <b-col cols="4" class="my-auto">
                Major:
                <br>
                Year:
                <br>
                Hometown:
                <div v-if="typeof profile.website !== 'undefined'">
                  Website:
                </div>
              </b-col>
              <b-col cols="8" id="profile-details" class="my-auto">
                {{profile.major}}
                <br>
                {{profile.year}}
                <br>
                {{profile.hometown}}
                <br>
                <a v-if="typeof profile.website !== 'undefined'" :href="profile.website">{{profile.website}}</a>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="social-media">
                  <a v-if="typeof profile.github !== 'undefined'" :href="profile.github">
                    <Github class="social-icon"/>
                  </a>
                  <a v-if="typeof profile.linkedin !== 'undefined'" :href="profile.linkedin">
                    <LinkedIn class="social-icon"/>
                  </a>
              </b-col>
            </b-row>
          </b-col>
          <v-divider vertical></v-divider>
          <b-col class="modal-scroll">
            <b-col sm="12" md="12" class="about-section">
              <b-row>
                <b-col>
                  <div class="member-modal-header">About Me</div>
                  <p id="about-p">{{profile.about}}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div id="teamwork" class="member-modal-header">Team Work</div>
                  <b-row v-for="team in profile.teams" :key="team.name">
                    <b-col v-if="team.logo" cols="2" class="team-logo my-auto">
                      <b-img :src="team.logo" :alt="team.name" height="64px" width="64px" />
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
<!--
          <b-col cols="12" class="my-auto">
            <b-row class="profile-header">
              <b-col lg="3" md="auto" sm="12">
                <b-img
                  rounded="circle"
                  class="profile-image"
                  :src="`${Strings.get('directories.members', 'assets')}/${profile.image}`"
                />
              </b-col>
              
              <b-col class="my-auto">
                <div class="profile-name-header">{{profile.firstName}} {{profile.lastName}}</div>
                <div class="profile-role text-dark">{{profile.role}}</div>
              </b-col>
            </b-row>
          </b-col>
          -->
<!--
        <b-row class="modal-scroll">
          <b-col sm="12" md="8" class="about-section">
            <b-row>
              <b-col v-if="typeof profile.about !== 'undefined'">
                <div class="member-modal-header">About Me</div>
                <p>{{profile.about}}</p>
              </b-col>
            </b-row>
            <b-row v-if="typeof profile.teams !== 'undefined' && profile.teams.length > 0">
              <b-col>
                <div class="member-modal-header">Team Work</div>
                <b-row v-for="team in profile.teams" :key="team.name">
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
          <b-col>
            <h4 class="profile-header-md">Profile</h4>
            <h3 class="profile-header-sm">Profile</h3>
            <b-row v-if="typeof profile.major !== 'undefined'">
              <b-col>Major</b-col>
              <b-col>
                <p>{{profile.major}}</p>
              </b-col>
            </b-row>
            <b-row v-if="typeof profile.hometown !== 'undefined'">
              <b-col>Hometown</b-col>
              <b-col>
                <p>{{profile.hometown}}</p>
              </b-col>
            </b-row>
            <b-row v-if="typeof profile.year !== 'undefined'">
              <b-col>Year</b-col>
              <b-col>
                <p>{{profile.year}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="2" md="auto">Links</b-col>
              <b-col class="link-list">
                <b-row>
                  <a
                    v-if="typeof profile.website !== 'undefined'"
                    class="text-dark"
                    :href="profile.website"
                  >Website</a>
                </b-row>
                <b-row>
                  <a
                    v-if="typeof profile.linkedin !== 'undefined'"
                    class="text-dark"
                    :href="profile.linkedin"
                  >Linkedin</a>
                </b-row>
                <b-row>
                  <a
                    v-if="typeof profile.github !== 'undefined'"
                    class="text-dark"
                    :href="profile.github"
                  >GitHub</a>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row> -->

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
    Medium,
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

#testing{
  background-color: pink; 
}

#testing2{
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

  .about-section{
    margin-top:10%;
  }

  #about-p{
    margin-top:0.625rem;
    font-size:0.875rem;
    font-family:Raleway;
  }

  #teamwork{
    margin-top:1.25rem;
  }

  .profile-text{
    text-align: center; 
  }

  .profile-name-header {
    text-align:center;
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
    font-size: 1.0rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #000000;
  }

  .profile-facts{
    margin-top:1.25rem;
    font-family:Raleway;
    font-size:0.875rem;
    font-weight:600;
  }

  #profile-details{
    margin-left:-0.625rem;
  }

  .social-media{
    margin-top:1.25rem;
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

    @media (min-width: 768px) {
      .about-section {
        overflow-y: scroll;
        max-height: 50vh;
      }

      .profile-header-sm {
        display: none;
      }
    }

    @media (max-width: 767px) {
      .profile-header {
        text-align: center;
        background-color:pink;
      }

      .profile-header-md {
        display: none;
      }

      .modal-scroll {
        overflow-y: scroll;
        max-height: 30vh;
      }

      .link-list {
        padding-left: 50px;
      }
    }

    .team-logo {
      padding-right: 2rem;
    }

    .team-info-list {
      padding-top: 0.2rem;
    }
  }
}
</style>
