<template>
  <page-background v-if="content">
    <nova-hero
      :header="content.hero.header"
      :subheader="content.hero.subheader"
      :video="content.hero.video"
      :lazy="content.hero.lazy"
      :image="content.hero.image"
      page="projects"
    />

    <page-section class="project-page-main-section">
      <b-row
        class="project-row"
        v-for="projectRow in projectRows"
        :key="projectRow.index"
        align-h="center"
      >
        <b-col
          md="12"
          lg="4"
          class="justify-content"
          v-for="project in projectRow.members"
          :key="project.teamId"
        >
          <g-link :to="{ path: `/projects/${project.teamId}/` }">
            <b-img :src="project.card" class="project-card" />
          </g-link>
        </b-col>
      </b-row>
    </page-section>

    <dti-footer page="projects" />
  </page-background>
</template>

<style lang="scss" scoped>
.project-page-main-section {
  margin-top: 0 !important;
}

.projects-hero {
  height: 70vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.project-card {
  background-color: transparent;
  text-align: center;
  margin: 1vw 0vw;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.6);
}

.project-card:hover {
  width: 101%;
  max-width: 101%;
  margin: 0.75vw -0.25vw;
}
</style>

<script lang="ts">
import Vue from 'vue';

import { ProjectsContent } from '../content';
import { Project } from '../shared';
import allProjectsJSON from '../../data/projects/all-projects.json';
import projectsPageJSON from '../../data/pages/projects.json';

export default Vue.extend({
  computed: {
    projects(): readonly Project[] {
      return allProjectsJSON;
    },
    content(): ProjectsContent {
      return projectsPageJSON;
    },
    projectRows(): {
      index: number;
      members: Project[];
    }[] {
      const rows = [];
      let row = [];

      const { projects } = this;

      let rowIndex = 0;

      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].active === false) {
          continue;
        }

        row.push(projects[i]);

        if (row.length === 3 || rows.length * 3 === projects.length) {
          rows.push({ index: rowIndex, members: row });
          rowIndex += 1;
          row = [];
        }
      }

      if (row.length > 0) {
        rows.push({ index: rowIndex, members: row });
      }

      return rows;
    }
  }
});
</script>
