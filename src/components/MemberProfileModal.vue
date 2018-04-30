<template>

  <div>
    <b-modal lazy centered size="lg" ref="memberModal" id="memberModal" v-model="modalShow" :title="profile.name" header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" footer-text-variant="light" header-border-variant="dark" footer-border-variant="dark">
      <b-container fluid class="modal-scroll">
        <b-row>
          <b-col cols="10" class="my-auto">
            <b-row>
              <b-col lg="3" md="auto" sm="12">
                <b-img rounded="circle" class="profile-image" :src="profile.image" />
              </b-col>
              <b-col class="my-auto">
                <h1>{{profile.name}}</h1>
                <h4 class="text-light">{{profile.role}}</h4>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="2">
            <b-button class="modal-close-button close" @click="modalClose()">x</b-button>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col sm="12" md="8" class="about-section">
            <b-row>
              <b-col>
                <h3>About Me</h3>
                <p>{{profile.about != null ? profile.about : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut leo bibendum lorem vestibulum laoreet eget vitae tortor. Phasellus mauris ante, euismod quis feugiat dignissim, fringilla et arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat accumsan nibh, eu imperdiet odio ornare et. Mauris feugiat magna a lacus tincidunt dapibus. Sed egestas, diam eget congue cursus, nibh ipsum lacinia nisl, nec imperdiet est ante vitae diam. Duis pulvinar vehicula fringilla. Nulla vel lobortis nulla. Maecenas nunc odio, ornare a semper nec, maximus a ex. Duis quis est id est bibendum volutpat eget at turpis. Nam porttitor vitae nunc at imperdiet. Nam rutrum leo bibendum lorem suscipit, sit amet aliquam ligula tristique. Aliquam erat volutpat."}}</p>
              </b-col>
            </b-row>
            <b-row v-if="profile.teams != null && profile.teams.length > 0">
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
            <h4>Profile</h4>
            <b-row v-if="profile.major != null">
              <b-col>
                Major
              </b-col>
              <b-col>
                <p>{{profile.major}}</p>
              </b-col>
            </b-row>
            <b-row v-if="profile.hometown != null">
              <b-col>
                Hometown
              </b-col>
              <b-col>
                <p>{{profile.hometown}}</p>
              </b-col>
            </b-row>
            <b-row v-if="profile.year != null">
              <b-col>
                Year
              </b-col>
              <b-col>
                <p>{{profile.year}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                Links
              </b-col>
              <b-col>
                <a v-if="profile.website != null" :href="profile.website">Website</a>
                <a v-if="profile.linkedin != null" :href="profile.linkedin">Linkedin</a>
                <a v-if="profile.github != null" :href="profile.github">GitHub</a>
              </b-col>
            </b-row>

          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<style lang="scss">
$radius: 25px;

#memberModal {
  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-close-button {
    opacity: 1;
    color: #fff;
    float: right;
  }

  .modal-header {
    display: none;
  }

  .modal-body {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
    border-bottom-left-radius: $radius;
    padding: 2em;

    .modal-row {
      margin-left: 0;
      margin-right: 0;
    }

    .profile-image {
      height: 140px;
      width: 140px;
      border: 2px white solid;
    }

    @media (min-width: 768px) {
      .about-section {
        overflow-y: scroll;
        max-height: 60vh;
      }
    }

    @media (max-width: 767px) {
      .modal-scroll {
        overflow-y: scroll;
        max-height: 80vh;
      }
    }

    .team-info {
      padding-left: 20px;
    }
  }

  .modal-footer {
    display: none;
  }
}
.modal-backdrop {
  background-color: #fefefe;

  &.show {
    opacity: 0.9;
  }
}
</style>


<script>
export default {
  model: {
    prop: "modalShow",
    event: "update:change"
  },
  props: {
    profile: { type: Object, required: false, default: {} },
    modalShow: Boolean
  },
  data() {
    return { modalShow: this.value };
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

