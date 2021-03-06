<template>
  <div>
    <page-section v-if="getTeam.length > 0">
      <div class="project-header">Team</div>
      <headshot-grid :members="getTeam" />
    </page-section>
    <page-section v-if="getFormerTeam.length > 0">
      <div class="project-header">Former Members</div>
      <headshot-grid :members="getFormerTeam" />
    </page-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

import HeadshotGrid from './HeadshotGrid.vue';
import { Member } from '../shared';

type MemberInfo = { info: Member; id: string };

export default Vue.extend({
  components: {
    HeadshotGrid
  },
  props: {
    current: {
      type: Array,
      default: () => []
    } as PropValidator<Member[]>,
    past: {
      type: Array,
      default: () => []
    } as PropValidator<Member[]>
  },
  computed: {
    getTeam(): MemberInfo[] {
      const teamA = this.current.map(obj => ({ info: obj, id: obj.netid }));

      return teamA;
    },
    getFormerTeam(): MemberInfo[] {
      const teamA = this.past.map(obj => ({ info: obj, id: obj.netid }));

      return teamA;
    }
  }
});
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

.visit-btn {
  box-shadow: 0 10px 20px 0 rgba(216, 216, 216, 0.5);
}
</style>
