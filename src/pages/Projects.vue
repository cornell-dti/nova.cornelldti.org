<template>
  <page-background>
    <nova-hero
      :header="Strings.get('hero.header')"
      :subheader="Strings.get('hero.subheader')"
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
          :key="project"
        >
          <router-link :to="{ path: project }" append>
            <b-img :src="AssetStrings.get(`projects.${project}.card`)" class="project-card"/>
          </router-link>
        </b-col>
      </b-row>
    </page-section>

    <dti-footer page="projects"/>
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


<script>
import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const Strings = new StringsFrontend(new JSONStringsBackend('projects'));
const AssetStrings = new StringsFrontend(new JSONStringsBackend('assets'));

export default {
  computed: {
    projectRows() {
      const rows = [];
      let row = [];

      const projects = Strings.get('projects');

      for (let i = 0; i < projects.length; i += 1) {
        row.push(projects[i]);

        if (row.length === 3 || rows.length * 3 === projects.length) {
          rows.push({ index: i, members: row });
          row = [];
        }
      }

      if (row.length > 0) {
        rows.push({ index: rows.length + 4, members: row });
      }

      return rows;
    }
  },
  data() {
    return {
      AssetStrings: AssetStrings,
      Strings: Strings
    }
  }
};
</script>
