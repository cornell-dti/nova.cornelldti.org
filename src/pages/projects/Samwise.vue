<template>
  <page-background>
    <project-header projectId="samwise" />
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <b-container fluid>
            <text-hero
              :header="Strings.get('hero.header')"
              :subheader="Strings.get('hero.subheader')"
            />
          </b-container>

          <project-features-list projectId="samwise" />

          <team-members :projectData="projectData"></team-members>

          <project-learn-more projectId="samwise" />
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project" />
  </page-background>
</template>

<script lang="ts">
import TeamBaseVue from './TeamBase.vue';
import { Component } from '../../shim';

export default Component({
  extends: TeamBaseVue
});
</script>
