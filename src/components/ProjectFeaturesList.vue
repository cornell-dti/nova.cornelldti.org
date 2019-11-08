<template>
  <page-section>
    <div class="project-header">Features</div>
    <b-row align-v="center" class="mobile-space">
      <b-col md="7">
        <div class="feature-header" id="mobile">{{ Strings.get(`features.1.title`) }}</div>
        <b-img class="product" :src="AssetStrings.get(`projects.${projectId}.features.1`)" />
      </b-col>
      <b-col md="5">
        <div class="feature-header" id="hide">{{ Strings.get(`features.1.title`) }}</div>
        <div class="project-description">{{ Strings.get(`features.1.description`) }}</div>
      </b-col>
    </b-row>
    <b-row class="feature-padding" />
    <b-row align-v="center" class="mobile-space">
      <b-col md="5" class="switch1">
        <div class="feature-header" id="hide">{{ Strings.get(`features.2.title`) }}</div>
        <div class="project-description">{{ Strings.get(`features.2.description`) }}</div>
      </b-col>
      <b-col md="7" class="switch2">
        <div class="feature-header" id="mobile">{{ Strings.get(`features.2.title`) }}</div>
        <b-img class="product" :src="AssetStrings.get(`projects.${projectId}.features.2`)" />
      </b-col>
    </b-row>
    <b-row class="feature-padding" />
    <b-row align-v="center" class="mobile-space">
      <b-col md="7">
        <div class="feature-header" id="mobile">{{ Strings.get(`features.3.title`) }}</div>
        <b-img class="product" :src="AssetStrings.get(`projects.${projectId}.features.3`)" />
      </b-col>
      <b-col md="5">
        <div class="feature-header" id="hide">{{ Strings.get(`features.3.title`) }}</div>
        <div class="project-description">{{ Strings.get(`features.3.description`) }}</div>
      </b-col>
    </b-row>
  </page-section>
</template>

<script>
import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings';

export default {
  props: {
    projectId: {
      type: String,
      required: true
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
  order: 3;
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.feature-header {
  order: 2;
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
  order: 1;
  max-width: 100%;
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}

#mobile {
  display: none;
}

@media (max-width: 767px) {
  .product {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  #hide {
    display: none;
  }

  #mobile {
    display: unset;
  }

  .mobile-space {
    margin-top: 20%;
  }

  .switch1 {
    order: 2;
  }

  .switch2 {
    order: 1;
  }
}
</style>
