<template>
  <page-background>
    <project-header projectId="flux" />
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.flux')"
              :subheader="Strings.get('hero.subheader', 'projects.flux')"
            />
          </b-container>

          <project-features-list projectId="flux" />

          <team-members :projectData="projectData"></team-members>

          <project-learn-more projectId="flux" />
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project" />
  </page-background>
</template>

<style lang="scss">
.product-flux {
  margin-top: -50%;
}
</style>

<script>
import TeamBaseVue from './TeamBase';

export default {
  extends: TeamBaseVue,
  computed: {
    projectData() {
      return this.Strings.get('', 'projects.flux');
    }
  }
};
</script>
