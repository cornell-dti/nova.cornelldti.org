<template>

  <div>
    <b-modal lazy centered size="lg" ref="memberModal" id="memberModal" v-model="modalShow" :title="profile.name" header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" footer-text-variant="light" header-border-variant="dark" footer-border-variant="dark">
      <b-container fluid>
        <b-row>
          <b-button class="modal-close-button close" @click="modalClose()">x</b-button>
          <!--TODO use actual icon, not text -->

          <b-col cols="12" class="my-auto">
            <b-row class="profile-header">
              <b-col lg="3" md="auto" sm="12">
                <b-img rounded="circle" class="profile-image" :src="profile.image" />
              </b-col>
              <b-col class="my-auto">
                <h1>{{profile.name}}</h1>
                <h4 class="text-light">{{profile.role}}</h4>
              </b-col>
            </b-row>
          </b-col>

        </b-row>
        <br />
        <b-row class="modal-scroll">
          <b-col sm="12" md="8" class="about-section">
            <b-row>
              <b-col>
                <h3>About Me</h3>
                <p>{{typeof profile.about !== 'undefined' ? profile.about : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut leo bibendum lorem vestibulum laoreet eget vitae tortor. Phasellus mauris ante, euismod quis feugiat dignissim, fringilla et arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat accumsan nibh, eu imperdiet odio ornare et. Mauris feugiat magna a lacus tincidunt dapibus. Sed egestas, diam eget congue cursus, nibh ipsum lacinia nisl, nec imperdiet est ante vitae diam. Duis pulvinar vehicula fringilla. Nulla vel lobortis nulla. Maecenas nunc odio, ornare a semper nec, maximus a ex. Duis quis est id est bibendum volutpat eget at turpis. Nam porttitor vitae nunc at imperdiet. Nam rutrum leo bibendum lorem suscipit, sit amet aliquam ligula tristique. Aliquam erat volutpat."}}</p>
              </b-col>
            </b-row>
            <b-row v-if="typeof profile.teams !== 'undefined' && profile.teams.length > 0">
              <b-col>
                <h3>Team Work</h3>
                <b-row v-for="team in profile.teams" :key="team.teamname">
                  <b-col cols="2" class="my-auto">
                    <b-img :src="team.logo" :alt="team.teamname" height="64px" width="64px" />
                  </b-col>
                  <b-col class="team-info my-auto">
                    <h4>{{team.teamname}}</h4>
                    <p>{{team.description}}</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <h4 class="profile-header-md">Profile</h4>
            <h3 class="profile-header-sm">Profile</h3>
            <b-row v-if="typeof profile.major !== 'undefined'">
              <b-col>
                Major
              </b-col>
              <b-col>
                <p>{{profile.major}}</p>
              </b-col>
            </b-row>
            <b-row v-if="typeof profile.hometown !== 'undefined'">
              <b-col>
                Hometown
              </b-col>
              <b-col>
                <p>{{profile.hometown}}</p>
              </b-col>
            </b-row>
            <b-row v-if="typeof profile.year !== 'undefined'">
              <b-col>
                Year
              </b-col>
              <b-col>
                <p>{{profile.year}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="2" md="auto">
                Links
              </b-col>
              <b-col class="link-list">
                <b-row>
                  <a v-if="typeof profile.website !== 'undefined'" class="text-light" :href="profile.website">Website</a>
                </b-row>
                <b-row>
                  <a v-if="typeof profile.linkedin !== 'undefined'" class="text-light" :href="profile.linkedin">Linkedin</a>
                </b-row>
                <b-row>
                  <a v-if="typeof profile.github !== 'undefined'" class="text-light" :href="profile.github">GitHub</a>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modalShow",
    event: "update:change"
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
      this.$emit("update:change", $event);
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

.modal-backdrop {
  background-color: #fefefe;

  &.show {
    opacity: 0.9;
  }
}

#memberModal {
  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-close-button {
    opacity: 1;
    color: #fefefe;
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
    max-height: 80vh;

    .profile-image {
      height: 8.75rem;
      width: 8.75rem;
      border: 0.125rem white solid;
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

    .modal-footer {
      display: none;
    }

    @media (max-width: 767px) {
      .profile-header {
        text-align: center;
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

    .team-info {
      padding-left: 35px;
    }
  }
}
</style>
