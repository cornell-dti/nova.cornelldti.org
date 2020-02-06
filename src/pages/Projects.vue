<template>
  <page-background>
    <strings strings="hero" #strings="{ header, subheader, video, lazy, image}">
      <nova-hero
        :header="header"
        :subheader="subheader"
        :video="video"
        :lazy="lazy"
        :image="image"
        page="projects"
      />
    </strings>

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
          :key="project.id"
        >
          <router-link :to="{ path: project.teamId }" append>
            <b-img :src="project.card" class="project-card" />
          </router-link>
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

<page-query>
query DTIProjects {
  projects: allDtiProject {
    edges {
      node {
           id
           active
           teamId
           card
      }
    }
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

// eslint-disable-next-line
import ProjectsJSON from '@/../data/generated/pages/projects.json';

import { fromJSON } from '@/strings/json';

import Strings from '@/strings/strings';

import { Member } from '@/shared';

export default Vue.extend({
  data() {
    return {
      staticStrings: fromJSON('projects', ProjectsJSON)
    };
  },
  props: {
    dynamicStrings: {
      default: null
    } as PropValidator<null | Strings>
  },
  computed: {
    Strings(): Strings {
      return this.dynamicStrings || this.staticStrings;
    },
    projectRows(): {
      index: number;
      members: Member[];
    }[] {
      const rows = [];
      let row = [];

      const projects = this.$page.projects.edges.map((e: { node: any }) => e.node);

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
