<template>
  <projects-view :content="content" :projects="projects" />
</template>

<page-query>
query DTIProjects($id: ID!) {
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

  content: projectsEntry(id: $id) {
    hero {
      lazy
      video {
        mp4
        webm
      }
      image
    }
    
  }
}
</page-query>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ProjectsView from '@/views/Projects.vue';

import Entry from '@/entry';

import { ProjectsContent } from '@/content';
import { Member, Project } from '@/shared';

interface ProjectsPage {
  projects: {
    edges: { node: Project }[];
  };
  members: {
    edges: { node: Member }[];
  };
}

@Component({
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ProjectsView
  }
})
class Projects extends Entry<ProjectsContent> {
  get members(): Member[] {
    const members = (this.$page as ProjectsPage).members.edges.map(e => e.node);
    return members;
  }

  get projects(): Project[] {
    const projects = (this.$page as ProjectsPage).projects.edges.map(e => e.node);
    return projects;
  }
}

export default Projects;
</script>
