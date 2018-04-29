<template>
  <div>
     <div class="project-view">
      <b-row class="project-row" v-for="projectRow in projectRows" :key="projectRow.index">
        <b-col class="justify-content" v-for="project in projectRow.members" :key="project.title">
          <div class="my-auto project-card">
            <p>{{project.title}}</p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.project-view {
  margin: 3vh;
}

.project-row {
  margin: 3vh;
}

.project-card {
  background-color: #999;
  text-align: center;
  width: 100%;
  padding-bottom: 30vh;
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
    projectRows: function() {
      let rows = [];
      let row = [];

      let random = Math.round(Math.random() * this.projects.length); // todo double check rounding

      if (this.projects.length > 0) {
        rows.push({
          index: random,
          members: [this.projects[random]]
        });
      }

      for (let i = 0; i < this.projects.length; i++) {
        if (i != random) {
          row.push(this.projects[i]);
        }

        if (row.length == 2 || rows.length * 2 == this.projects.length) {
          rows.push({ index: i, members: row });
          row = [];
        }
      }

      return rows;
    }
  }
};
</script>