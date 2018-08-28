<template>
  <page-hero :overlay="false" :bg="`linear-gradient(282deg, ${Strings.get('heroStartingColor', `projects.${projectId}`)}, ${Strings.get('heroEndingColor', `projects.${projectId}`)})`">
    <b-row align-h="center" class="h-100 no-gutters">
      <b-col sm="auto" md="6" class="project-hero">
        <b-row class="h-100 project-hero-header no-gutters" align-h="center" align-v="center">
          <b-col class="project-hero-header-left" cols="auto">
            <h3 class="project-hero-text-header">{{ Strings.get(`header`, `projects.${projectId}`) }}</h3>
            <p class="project-hero-description">{{ Strings.get(`subheader`, `projects.${projectId}`) }}</p>
            <project-go-to :projectId="projectId" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6" class="project-hero-logo">
        <b-img class="product" :src="Strings.get(`projects.${projectId}.hero-image`, 'assets')"
        />
      </b-col>
    </b-row>
  </page-hero>
</template>


<script>
import ProjectGoTo from './ProjectGoTo';

export default {
  components: { ProjectGoTo },
  props: {
    projectId: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.project-hero {
  .project-hero-logo {
    margin: 1vw;
  }

  .project-hero-description {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40vw;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .project-hero-text-header {
    font-size: 3rem;
    font-weight: 600;
  }

  .project-hero-header-left {
    padding-bottom: 10vh;
  }
}

.project-header {
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.project-description {
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.feature-header {
  padding-bottom: 1.25rem;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.product {
  max-width: 75%;
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}
</style>
