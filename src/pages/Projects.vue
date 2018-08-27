<template>
  <page-background>
    <nova-hero header="We Are Our Products" subheader="We've learned that tackling the hardest problems is the only way to truly create value for the people around us. Each of our projects address an unfulfilled need that exists in our community using human-centered design and software engineering."
      page="projects" />

    <page-section class="project-page-main-section">
      <b-row class="project-row" v-for="projectRow in projectRows" :key="projectRow.index"
        align-h="center">
        <b-col md="12" lg="4" class="justify-content" v-for="project in projectRow.members"
          :key="project.id">
          <router-link :to="{ path: project.id, params:{ project: project.name }}" append>
            <b-img :src="Strings.get(`projects.${project.id}.card`, 'assets')" class="project-card"
            />
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


<script>
export default {
  computed: {
    projectRows() {
      const rows = [];
      let row = [];

      const projects = this.getProjects();

      for (let i = 0; i < projects.length; i += 1) {
        row.push(projects[i]);

        if (row.length === 3 || rows.length * 3 === projects.length) {
          rows.push({ index: i, members: row });
          row = [];
        }
      }

      return rows;
    }
  }
};
</script>
