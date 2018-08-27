<template>
  <page-background>
    <page-hero :overlay="false" :bg="`linear-gradient(to right, ${projectData.heroStartingColor}, ${projectData.heroEndingColor})`">
      <b-row align-h="center" class="h-100 no-gutters">
        <b-col sm="auto" md="6" class="project-hero">
          <b-row class="h-100 project-hero-header no-gutters" align-h="center" align-v="center">
            <b-col class="project-hero-header-left" cols="auto">
              <h3 class="project-hero-text-header">{{projectData.header}}</h3>
              <p class="project-hero-description">{{projectData.subheader}}</p>
              <b-button class="btn-light visit-btn" v-b-modal.downloadModal>Download</b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6" class="project-hero-logo">
          <b-img class="product" :src="Strings.get(`projects.${projectData.id}.hero-image`, 'assets')"
          />
        </b-col>
      </b-row>
    </page-hero>

    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <page-section>
            <div class="project-header">Why we built this</div>
            <div class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor
              sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
              adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </page-section>
          <page-section>
            <div class="project-header">Features</div>
            <b-row>
              <b-col cols="7">
                <b-img class="product" :src="Strings.get(`projects.${projectData.id}.features.1`, 'assets')"
                />
              </b-col>
              <b-col cols="5">
                <div class="feature-header">Lorem ipsum dolor sit amet, consectetur</div>
                <div class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit</div>
              </b-col>
            </b-row>
            <b-row class="feature-padding" />
            <b-row>
              <b-col cols="5">
                <div class="feature-header">Lorem ipsum dolor sit amet, consectetur</div>
                <div class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit</div>
              </b-col>
              <b-col cols="7">
                <b-img class="product" :src="Strings.get(`projects.${projectData.id}.features.2`, 'assets')"
                />
              </b-col>
            </b-row>
            <b-row class="feature-padding" />
            <b-row>
              <b-col cols="7">
                <b-img class="product" :src="Strings.get(`projects.${projectData.id}.features.3`, 'assets')"
                />
              </b-col>
              <b-col cols="5">
                <div class="feature-header">Lorem ipsum dolor sit amet, consectetur</div>
                <div class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit</div>
              </b-col>
            </b-row>
          </page-section>
          <page-section>
            <div class="project-header">Team</div>
            <headshot-grid :members="getTeam(projectData.teamId).members" />

          </page-section>
          <!--<h3>{{ipsum(projectData.header1, 20)}}</h3>
            <p> {{ipsum(projectData.description1, 80)}}</p>

            <h3>{{ipsum(projectData.header2, 20)}}</h3>
            <p> {{ipsum(projectData.description2, 60)}}</p>-->

          <page-section v-if="typeof projectData.links !== 'undefined'">
            <div class="project-header">Learn More</div>
            <b-row>
              <b-col cols="auto">

                <b-row>

                  <b-col cols="auto" v-if="typeof projectData.links.github !== 'undefined'">
                    <a :href="projectData.links.github" />
                  </b-col>
                  <b-col cols="auto" v-if="typeof projectData.links.medium !== 'undefined'">
                    <a :href="projectData.links.medium" />
                  </b-col>

                  <b-col cols="auto" v-if="typeof projectData.links.playstore !== 'undefined'">
                    <store-badge store="playstore" :url="projectData.links.playstore" />
                  </b-col>
                  <b-col cols="auto" v-if="typeof projectData.links.appstore !== 'undefined'">
                    <store-badge store="appstore" :url="projectData.links.appstore" />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </page-section>
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project" />
  </page-background>
</template>

<script>
import HeadshotGrid from '@/components/HeadshotGrid';
import EventBus from '@/eventbus';

export default {
  props: {
    project: {
      type: String,
      required: true
    }
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
      return this.Strings.get('', 'projects.rescuer');
    }
  },
  mounted() {
    EventBus.$emit('set-navbar-light', {});
  },
  methods: {
    getTeam(team) {
      let teamA = null;

      this.getTeams().forEach(teamData => {
        if (teamData.id === team) {
          teamA = teamData;
        }
      });

      return teamA;
    },
    getProject(project) {
      let projectA = null;

      this.getProjects().forEach(projectData => {
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
.project-hero {
  .project-hero-logo {
    margin: 1vw;
  }

  .project-hero-description {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40vw;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .project-hero-text-header {
    font-size: 3rem;
    font-weight: 600;
  }

  .project-hero-header-left {
    padding-bottom: 10vh;
  }
}

.project-header {
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.project-description {
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.feature-header {
  padding-bottom: 1.25rem;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.product {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}

.visit-btn {
  box-shadow: 0 10px 20px 0 rgba(216, 216, 216, 0.5);
}
</style>
