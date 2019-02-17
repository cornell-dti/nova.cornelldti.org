<template>
  <page-background>
    <project-header projectId="researchconnect"/>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.researchconnect')"
              :subheader="Strings.get('hero.subheader', 'projects.researchconnect')"
            />
          </b-container>

          <project-features-list projectId="researchconnect"/>

          <page-section>
            <div class="project-header">Team</div>
            <headshot-grid :members="getTeam(projectData.teamId).members"/>
          </page-section>

          <project-learn-more projectId="researchconnect"/>
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project"/>
  </page-background>
</template>

<script>
import HeadshotGrid from '@/components/HeadshotGrid';
import EventBus from '@/eventbus';
import ProjectFeaturesList from '@/components/ProjectFeaturesList';
import ProjectLearnMore from '@/components/ProjectLearnMore';
import ProjectHeader from '@/components/ProjectHeader';

export default {
  props: {
    project: {
      type: String,
      required: true
    }
  },
  components: {
    HeadshotGrid,
    ProjectFeaturesList,
    ProjectLearnMore,
    ProjectHeader
  },
  data() {
    return {
      currentFeatureDescription: '',
      currentScreenshot: ''
    };
  },
  computed: {
    projectData() {
      return this.Strings.get('', 'projects.researchconnect');
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
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}

.visit-btn {
  box-shadow: 0 10px 20px 0 rgba(216, 216, 216, 0.5);
}
</style>
