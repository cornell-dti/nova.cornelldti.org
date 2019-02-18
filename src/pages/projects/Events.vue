<template>
  <page-background>
    <project-header :customGoTo="true" projectId="events">
      <b-row align-v="center">
        <b-col md="8" sm="12">
          <div class="events-interested-prompt">Sign up for early access</div>
        </b-col>
        <b-col md="4" sm="12">
          <b-button class="events-button" href="https://dticornell.typeform.com/to/B5Flgp">Sign Up</b-button>
        </b-col>
      </b-row>
    </project-header>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.events')"
              :subheader="Strings.get('hero.subheader', 'projects.events')"
            />
          </b-container>

          <project-features-list projectId="events"/>

          <page-section>
            <div class="project-header">Team</div>
            <headshot-grid :members="getTeam(projectData.teamId)"/>
          </page-section>

          <project-learn-more :enableAll="true" projectId="events"/>
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project"/>
  </page-background>
</template>

<script>
import TeamBaseVue from './TeamBase';

export default {
  extends: TeamBaseVue,
  computed: {
    projectData() {
      return this.Strings.get('', 'projects.events');
    }
  }
};
</script>


<style lang="scss" scoped>
.events-interested-prompt {
  font-size: 1.5rem;
}

.events-button {
  color: #fd4f54;
  background-color: #fff;
  border-radius: -5%;
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0 0 4px 3px rgba(255, 255, 255, 0.2);

  @media (max-width: 767px) {
    margin-top: 0.5rem;
  }
}

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
