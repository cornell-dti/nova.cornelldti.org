<template>
  <page-background>
    <nova-hero header="See What We Do!" subheader="We are Cornell Design &amp; Tech Initiative. But indivdually, we are a talented, diverse group
              of students from different colleges and countries striving to make a difference in our community."
      page="projects" />

    <page-section>
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

    <dti-footer />
  </page-background>
</template>

<style lang="scss" scoped>
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
