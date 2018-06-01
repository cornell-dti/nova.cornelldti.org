<template>
  <page-background>
    <text-page-hero :greyscale="true" :bg="`url(${img('heroes', 'projects-hero.jpg')})`">
      Projects
    </text-page-hero>

    <page-section>
      <b-row class="project-row" v-for="projectRow in projectRows" :key="projectRow.index"
        align-h="center">
        <b-col md="12" lg="4" class="justify-content" v-for="project in projectRow.members"
          :key="project.id">
          <router-link :to="{ path: project.id, params:{ project: project.name }}" append>
            <b-img :src="img(`projects/${project.id}`, 'card.png')" class="project-card" />
          </router-link>
        </b-col>
      </b-row>
    </page-section>

    <dti-footer />
  </page-background>
</template>

<style lang="scss" scoped>
.project-card {
  background-color: transparent;
  text-align: center;
  margin: 1vw 0vw;
  width: 100%;
  max-width: 100%;
  object-fit: cover;

  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.6);
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
