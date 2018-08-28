<template>
  <page-section>
    <div class="project-header">Features</div>
    <b-row align-v="center">
      <b-col cols="7">
        <b-img class="product" :src="Strings.get(`projects.${projectId}.features.1`, 'assets')"
        />
      </b-col>
      <b-col cols="5">
        <div class="feature-header">{{Strings.get(`features.1.title`, `projects.${projectId}`)}}</div>
        <div class="project-description">{{Strings.get(`features.1.description`, `projects.${projectId}`)}}</div>
      </b-col>
    </b-row>
    <b-row class="feature-padding" />
    <b-row align-v="center">
      <b-col cols="5">
        <div class="feature-header">{{Strings.get(`features.2.title`, `projects.${projectId}`)}}</div>
        <div class="project-description">{{Strings.get(`features.2.description`, `projects.${projectId}`)}}</div>
      </b-col>
      <b-col cols="7">
        <b-img class="product" :src="Strings.get(`projects.${projectId}.features.2`, 'assets')"
        />
      </b-col>
    </b-row>
    <b-row class="feature-padding" />
    <b-row align-v="center">
      <b-col cols="7">
        <b-img class="product" :src="Strings.get(`projects.${projectId}.features.3`, 'assets')"
        />
      </b-col>
      <b-col cols="5">
        <div class="feature-header">{{Strings.get(`features.3.title`, `projects.${projectId}`)}}</div>
        <div class="project-description">{{Strings.get(`features.3.description`, `projects.${projectId}`)}}</div>
      </b-col>
    </b-row>
  </page-section>
</template>

<script>
export default {
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
  max-width: 100%;
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}
</style>
