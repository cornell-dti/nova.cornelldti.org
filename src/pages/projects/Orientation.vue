<template>
  <page-background>
    <project-header projectId="orientation" />
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.orientation')"
              :subheader="Strings.get('hero.subheader', 'projects.orientation')"
            />
          </b-container>

          <project-features-list projectId="orientation" />

          <team-members :projectData="projectData"></team-members>

          <project-learn-more projectId="orientation" />
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
      return this.Strings.get('', 'projects.orientation');
    }
  }
};
</script>
