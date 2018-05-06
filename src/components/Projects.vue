<template>
  <page-background>
    <page-hero>
      <b-row align-h="center" no-gutters=true class="h-50">
        <slot />
        <b-col cols="auto" class="my-auto">
          <h2 class="">Projects</h2>

        </b-col>
      </b-row>
    </page-hero>
    <div class="project-view">
      <b-row class="project-row" v-for="projectRow in projectRows" :key="projectRow.index">
        <b-col class="justify-content" v-for="project in projectRow.members" :key="project.id">
          <router-link :to="{ path: project.id, params:{ project: project.name }}" append>
            <div class="project-card">
              <p class="my-auto">{{project.name}}</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </page-background>
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
import EventBus from "../bus";

export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  mounted() {
    EventBus.$emit("define-page", {
      background: null,
      hero: {
        type: "header",
        bg: "",
        header: "Projects",
        subheader: "",
        img: ""
      }
    });
  },
  computed: {
    projectRows() {
      const rows = [];
      let row = [];

      const random = Math.round(Math.random() * (this.projects.length - 1)); // todo double check rounding

      if (this.projects.length > 0) {
        rows.push({
          index: random,
          members: [this.projects[random]]
        });
      }

      for (let i = 0; i < this.projects.length; i += 1) {
        if (i !== random) {
          row.push(this.projects[i]);

          if (row.length === 2 || rows.length * 2 === this.projects.length) {
            rows.push({ index: i, members: row });
            row = [];
          }
        }
      }

      return rows;
    }
  }
};
</script>
