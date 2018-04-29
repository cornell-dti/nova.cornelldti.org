<template>

  <div>
    <b-modal lazy centered size="lg" ref="memberModal" id="memberModal" v-model="modalShow" :title="profile.name" header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" footer-text-variant="light" header-border-variant="dark" footer-border-variant="dark">
      <b-container fluid>
        <b-row>
          <b-col cols="2">
            <b-img rounded="circle" height="100px" width="100px" :src="profile.image" />
          </b-col>
          <b-col cols="8">
            <h1>{{profile.name}}</h1>
            <h4>{{profile.role}}</h4>
          </b-col>
          <b-col cols="2">
            <b-button class="modal-close-button close text-light" @click="modalClose()">x</b-button>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col cols="8">
            <b-row>
              <h3>About Me</h3>
              <p class="my-4">{{profile.about}}</p>
            </b-row>
            <b-row v-if="profile.teams != null && profile.teams.length > 0">
              <h3>Team Work</h3>
              <b-row v-for="team in profile.teams" :key="team.name">
                <b-col cols="4">
                  <b-img :src="team.logo" height="32px" width="32px" />
                </b-col>
                <b-col>
                  <h3>{{team.name}}</h3>
                  <p>{{team.description}}</p>
                </b-col>
              </b-row>
            </b-row>
          </b-col>
          <b-col cols="4">
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

