<template>
  <page-background>
    <project-header projectId="queuemein"/>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header', 'projects.queuemein')"
              :subheader="Strings.get('hero.subheader', 'projects.queuemein')"
            />
          </b-container>

          <project-features-list projectId="queuemein"/>

          <page-section>
            <div class="project-header">Team</div>
            <headshot-grid :members="getTeam(projectData.teamId)"/>
          </page-section>

          <project-learn-more projectId="queuemein"/>
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
      return this.Strings.get('', 'projects.queuemein');
    }
  }
};
</script>
