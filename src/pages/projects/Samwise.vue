<template>
  <page-background>
    <project-header projectId="samwise"/>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.samwise')"
              :subheader="Strings.get('hero.subheader', 'projects.samwise')"
            />
          </b-container>

          <project-features-list projectId="samwise"/>

          <page-section>
            <div class="project-header">Team</div>
            <headshot-grid :members="getTeam(projectData.teamId)"/>
          </page-section>

          <project-learn-more projectId="samwise"/>
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
      return this.Strings.get('', 'projects.samwise');
    }
  }
};
</script>
