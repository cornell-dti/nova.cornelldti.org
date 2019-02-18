<template>
  <page-background>
    <project-header projectId="reviews"/>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.reviews')"
              :subheader="Strings.get('hero.subheader', 'projects.reviews')"
            />
          </b-container>

          <project-features-list projectId="reviews"/>

          <page-section>
            <div class="project-header">Team</div>
            <headshot-grid :members="getTeam(projectData.teamId)"/>
          </page-section>

          <project-learn-more projectId="reviews"/>
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
      return this.Strings.get('', 'projects.reviews');
    }
  }
};
</script>
