<template>
  <div>
    <p>{{project}}</p>

    <div v-for="projectData in projects" :key="projectData.subUrl">
      <div v-if="projectData.subUrl === project">
        <section>
          <div class="project-hero">
            <h1 class="my-auto project-hero-text">{{projectData.header}}</h1>
            <p class="my-auto project-hero-text">{{projectData.description}}</p>

            <b-button v-b-modal.downloadModal>Download</b-button>
          </div>
        </section>
        <section>
          <h1>{{projectData.header1}}</h1>
          <p> {{projectData.description1}}</p>
        </section>
        <section>
          <h1>{{projectData.header2}}</h1>
          <p> {{projectData.description2}}</p>

          <b-row>
            <b-col sm="12" md="3">
              <b-img :src="currentScreenshot" />
            </b-col>
            <b-col sm="12" md="7">
              <b-button>{{projectData.feature1}}</b-button>
              <b-button>{{projectData.feature2}}</b-button>
              <b-button>{{projectData.feature3}}</b-button>

              <p>{{currentFeatureDescription}}</p>
            </b-col>
          </b-row>
        </section>

        <section>

          <h1>Team</h1>

          <div class="d-flex flex-row flex-wrap justify-content-center" v-for="team of teams" :key="team.name"
            v-if="team.teamname === projectData.team">

            <headshot-card class="flexible-item" v-for="teamMember of team.members" :key="teamMember.name" :image="teamMember.image"
              :name="teamMember.name" :role="teamMember.role" background="solid" />

          </div>
        </section>

        <section>
          <h3>Find us on</h3>
          <a v-if="typeof projectData.github !== 'undefined'" href="projectData.github" />
          <a v-if="typeof projectData.medium !== 'undefined'" href="projectData.medium" />

          <b-row>
            <b-col>
              <b-row>
                <b-col>
                  <store-badge store="playstore" :url="projectData.playstore" />
                </b-col>
                <b-col>
                  <store-badge store="appstore" :url="projectData.appstore" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </section>

        <b-modal ref="downloadModal" id="downloadModal">
          <b-container fluid>
            <b-row>
              <b-col>
                <p>Download on</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-row v-if="typeof projectData.playstore !== 'undefined'">
                  <b-col>
                    <store-badge store="playstore" :url="projectData.playstore" />
                  </b-col>
                </b-row>
                <b-row v-if="typeof projectData.appstore !== 'undefined'">
                  <b-col>
                    <store-badge store="appstore" :url="projectData.appstore" />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import HeadshotCard from "./HeadshotCard";

export default {
  props: {
    project: {
      type: String,
      required: true
    },
    projects: Array,
    teams: Array
  },
  components: { HeadshotCard },
  data() {
    return {
      currentFeatureDescription: "",
      currentScreenshot: ""
    };
  }
};
</script>


<style lang="scss" >
$radius: 20px;

#downloadModal {
  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-header,
  .modal-footer {
    display: none;
  }
}
</style>
