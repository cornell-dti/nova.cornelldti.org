<template>
  <page-background>
    <project-header projectId="reviews" />
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header')"
              :subheader="Strings.get('hero.subheader')"
            />
          </b-container>

          <project-features-list projectId="reviews" />

          <team-members :projectData="projectData"></team-members>

          <project-learn-more projectId="reviews" />
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project" />
  </page-background>
</template>

<script>
import TeamBaseVue from './TeamBase';

export default {
  extends: TeamBaseVue,
  computed: {
    projectData() {
      return this.Strings.get('');
    }
  }
};
</script>
