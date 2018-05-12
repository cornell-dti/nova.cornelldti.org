<template>
  <page-background>
    <page-hero :bg="img(`projects/${projectData.id}/hero.jpg`)">
      <b-row align-h="center" class="no-gutters h-50">
        <b-col sm="auto" md="8" class="my-auto">
          <b-row class="project-hero-header no-gutters">
            <b-col cols="auto" class="project-hero-logo">
              <b-img :src="projectData.logo" />
            </b-col>
            <b-col>
              <h3>{{projectData.header}}</h3>
            </b-col>
          </b-row>
          <p class="project-hero-description">{{projectData.subheader}}</p>
          <b-button v-b-modal.downloadModal>Download</b-button>
        </b-col>
      </b-row>
    </page-hero>

    <b-container fluid>
      <b-row>
        <b-col cols="2">
          <div class="h-100 project-content-border-left" />
        </b-col>
        <b-col>
          <b-row>
            <h3>{{ipsum(projectData.header1, 20)}}</h3>
            <p> {{ipsum(projectData.description1, 80)}}</p>

            <h3>{{ipsum(projectData.header2, 20)}}</h3>
            <p> {{ipsum(projectData.description2, 60)}}</p>

            <b-col sm="12" md="auto">
              <b-img :src="currentScreenshot" blank width="300" height="400" blank-color="#aaa"
              />
            </b-col>
            <b-col sm="12" md="auto">
              <!-- TODO ADD LOGIC -->
              <b-row>
                <b-button variant="link" class="filter-btn">{{projectData.feature1}}</b-button>
                <b-button variant="link" class="filter-btn">{{projectData.feature2}}</b-button>
                <b-button variant="link" class="filter-btn">{{projectData.feature3}}</b-button>
              </b-row>
              <p>{{currentFeatureDescription}}</p>
            </b-col>
          </b-row>

          <h1>Team</h1>
          <headshot-grid :members="getTeam(projectData.teamId).members" :teams="teams" />

          <b-row align-h="center">
            <b-col cols="auto">

              <b-row align-h="center">
                <b-col cols="auto">
                  <h3>Find us on</h3>
                </b-col>
              </b-row>

              <b-row align-h="center">
                <b-col>
                  <a v-if="typeof projectData.github !== 'undefined'" href="projectData.github" />
                </b-col>
                <b-col>
                  <a v-if="typeof projectData.medium !== 'undefined'" href="projectData.medium" />
                </b-col>
              </b-row>

              <b-row align-h="center">
                <b-col>
                  <store-badge store="playstore" :url="projectData.playstore" />
                </b-col>
                <b-col>
                  <store-badge store="appstore" :url="projectData.appstore" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="2">
          <div class="h-100 project-content-border-right" />
        </b-col>
      </b-row>
      <b-modal ref="downloadModal" id="downloadModal">
        <b-container fluid>
          <b-row align-h="center">
            <b-col cols="auto">
              <p>Download on</p>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="auto">
              <b-row align-h="center" v-if="typeof projectData.playstore !== 'undefined'">
                <b-col cols="auto">
                  <store-badge store="playstore" :url="projectData.playstore" />
                </b-col>
              </b-row>
              <br />
              <b-row align-h="center" v-if="typeof projectData.appstore !== 'undefined'">
                <b-col cols="auto">
                  <store-badge store="appstore" :url="projectData.appstore" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

    </b-container>

    <dti-footer />
  </page-background>
</template>

<script>
import HeadshotGrid from '@/components/HeadshotGrid';

export default {
  props: {
    project: {
      type: String,
      required: true
    },
    projects: Array,
    teams: Array
  },
  components: { HeadshotGrid },
  data() {
    return {
      currentFeatureDescription: '',
      currentScreenshot: ''
    };
  },
  computed: {
    projectData() {
      return this.getProject(this.project);
    }
  },
  methods: {
    getTeam(team) {
      let teamA = null;

      this.teams.forEach(teamData => {
        if (teamData.id === team) {
          teamA = teamData;
        }
      });

      return teamA;
    },
    getProject(project) {
      let projectA = null;

      this.projects.forEach(projectData => {
        if (projectData.id === project) {
          projectA = projectData;
        }
      });

      return projectA;
    }
  }
};
</script>


<style lang="scss" scoped>
.page-header {
  min-height: 10vh;

  &.page-hero {
    min-width: 100%;
    min-height: 50vh;
    transition: min-height 0.5s linear;
    background: #777;
  }
}
.project-hero-logo {
  margin: 1vw;
}

.project-hero {
  height: 50vh;
  background-color: #aaa;
}

.project-hero-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40vw;
}
</style>

<style lang="scss">
@import '../index.scss';

$radius: 20px;

#downloadModal {
  @include media-breakpoint-up(md) {
    max-width: 80vw;
  }

  max-width: 20vw;

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
