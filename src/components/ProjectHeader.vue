<template>
  <page-hero
    :overlay="false"
    :bg="
      `linear-gradient(282deg, ${Strings.get('heroStartingColor')}, ${Strings.get(
        'heroEndingColor'
      )})`
    "
  >
    <b-row align-h="center" class="project-hero-header-left-mobile h-100 no-gutters">
      <b-col sm="auto" md="6" class="project-hero">
        <b-row class="h-100 project-hero-header no-gutters" align-h="end" align-v="center">
          <b-col class="project-hero-header-left" md="10" sm="12">
            <b-row class="no-gutters">
              <b-col cols="12">
                <h3 class="project-hero-text-header">{{ Strings.get(`header`) }}</h3>
                <p class="project-hero-description">{{ Strings.get(`subheader`) }}</p>
              </b-col>
            </b-row>
            <project-go-to class="no-gutters" v-if="!customGoTo" :projectId="projectId" />
            <slot class="no-gutters" v-else />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6" class="project-hero-logo">
        <b-img
          :class="['product', `product-${projectId}`]"
          :src="AssetStrings.get(`projects.${projectId}.hero-image`)"
        />
      </b-col>
    </b-row>
  </page-hero>
</template>

<script>
import StringsFrontend from '@/strings/strings';
import SingleBackend from '@/strings/lib';
import ProjectGoTo from './ProjectGoTo.vue';

export default {
  components: { ProjectGoTo },
  props: {
    projectId: {
      type: String,
      required: true
    },
    customGoTo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      Strings: new StringsFrontend(`projects.${this.projectId}`, SingleBackend)
    };
  }
};
</script>

<style lang="scss" scoped>
.project-hero-header-left-mobile {
  @media (max-width: 767px) {
    margin-left: 10vw;
  }
}

.project-hero-logo {
  height: 50vh;
}

.project-hero {
  .project-hero-description {
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 80vw;
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

  @media (max-width: 767px) {
    display: none !important;
  }
}

.feature-padding {
  margin: 3vh;
}
</style>
