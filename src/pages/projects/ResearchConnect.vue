<template>
  <page-background>
    <project-header projectId="researchconnect"/>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header')"
              :subheader="Strings.get('hero.subheader')"
            />
          </b-container>

          <project-features-list projectId="researchconnect"/>

          <team-members :projectData="projectData"></team-members>

          <project-learn-more projectId="researchconnect"/>
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project"/>
  </page-background>
</template>

<script>
import TeamBaseVue from './TeamBase';

import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const Strings = new StringsFrontend(new JSONStringsBackend('projects.researchconnect'));

export default {
  extends: TeamBaseVue,
  computed: {
    projectData() {
      return this.Strings.get('');
    }
  },
  data() {
    return {
      Strings: Strings
    }
  }
};
</script>
