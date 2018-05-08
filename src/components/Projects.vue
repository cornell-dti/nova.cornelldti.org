<template>
  <page-background>
    <text-page-hero>
      Projects
    </text-page-hero>

    <page-section>
      <b-row class="project-row" v-for="projectRow in projectRows" :key="projectRow.index"
        align-h="center">
        <b-col md="12" lg="6" class="justify-content" v-for="project in projectRow.members"
          :key="project.id">
          <router-link :to="{ path: project.id, params:{ project: project.name }}" append>
            <b-img :src="img(project.badge)" class="project-card" />
          </router-link>
        </b-col>
      </b-row>
    </page-section>
  </page-background>
</template>

<style lang="scss" scoped>
.project-card {
  background-color: transparent;
  text-align: center;
  padding: 3vh 0vh;
  height: 100%;
  max-width: 100%;
}
</style>


<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  computed: {
    projectRows() {
      const rows = [];
      let row = [];

      for (let i = 0; i < this.projects.length; i += 1) {
        row.push(this.projects[i]);

        if (row.length === 2 || rows.length * 2 === this.projects.length) {
          rows.push({ index: i, members: row });
          row = [];
        }
      }

      return rows;
    }
  }
};
</script>
