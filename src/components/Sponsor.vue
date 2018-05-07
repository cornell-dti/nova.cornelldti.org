<template>
  <page-background>
    <text-page-hero>
      Sponsor
    </text-page-hero>
    <div class="project-view">
      <b-row class="project-row" v-for="projectRow in projectRows" :key="projectRow.index" align-h="center">
        <b-col md="12" lg="6" class="justify-content" v-for="project in projectRow.members" :key="project.id">
          <router-link :to="{ path: project.id, params:{ project: project.name }}" append>
            <b-img :src="img(project.badge)" class="project-card" />
          </router-link>
        </b-col>
      </b-row>
    </div>
  </page-background>
</template>

