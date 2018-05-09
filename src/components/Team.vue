<template>
  <page-background>
    <text-page-hero>
      Team
    </text-page-hero>

    <page-section>
      <p>Our team consists of 50 product managers, designers and developers working
        on 6 projects ranging from a campus safety app to a course review website.
        Our diverse and talented team represents six of the seven undergraduate colleges
        at Cornell.</p>
    </page-section>
    <div class="diversity">
      <div class="diversity-graph diversity-left" />
      <div class="diversity-graph diversity-right" />

      <b-container fluid>
        <page-section>
          <b-row>
            <b-col>
              <h1>Diversity</h1>
              <p>Page summary. Diverse team spanning disciplines, years, ethnicities,
                etc. We've had exciting people and have been to exciting places.</p>

              <b-row class="justify-content-center">
                <circle-progress-indicator :percentage="genderRatio">
                  <b-row align-h="center">
                    <b-col sm="8" md="6">
                      <h3>53%</h3>
                      <p>Female</p>
                    </b-col>
                    <b-col sm="8" md="6">
                      <h3>47%</h3>
                      <p>Male</p>
                    </b-col>
                  </b-row>
                </circle-progress-indicator>
              </b-row>
            </b-col>
            <b-col class="diversity-text-right my-auto">
              <b-row align-h="center">
                <b-col cols="6">
                  <h1>14</h1>
                  <p>Number of different majors</p>
                </b-col>
              </b-row>
              <b-row align-h="center">
                <b-col cols="6">
                  <h1>6</h1>
                  <p>Number of represented colleges</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </page-section>
      </b-container>

    </div>

    <b-container fluid>
      <page-section>
        <h1>Team</h1>

        <b-row class="justify-content-center">
          <b-col class="text-center">
            <div :class="btn(roleId === '')" @click="roleId = ''">
              All
            </div>
            <div v-for="role of roles" :key="role.id" :class="btn(roleId === role.id)" @click="roleId = role.id">
              {{role.name}}
            </div>
          </b-col>
        </b-row>

        <!-- TODO actual padding --><br>

        <headshot-grid :members="[...filterMembers(`project-lead`), ...filterMembers(`${roleId}-lead`), ...(filterMembers(roleId))]"
          :teams="teams" />

      </page-section>

    </b-container>
    <section>
      <marquee />
    </section>
  </page-background>
</template>
<style lang="scss" scoped>
.diversity {
  height: 80vh;
  overflow: hidden;
}

.diversity-graph {
  position: absolute;
  width: 100vw;
  height: 80vh;
}

.diversity-left {
  background-color: #f6f6f6;
  clip-path: polygon(0 0, 0 100%, 48% 100%, 52% 0);
}

.diversity-text-right {
  color: #fefefe;
}

.diversity-right {
  background-color: #ff324a;
  clip-path: polygon(52% 0, 48% 100%, 100% 100%, 100% 0);
}
</style>

<script>
import HeadshotGrid from './HeadshotGrid';
import Marquee from './CompaniesMarquee';
import CircleProgressIndicator from './CircleProgressIndicator';

export default {
  components: {
    HeadshotGrid,
    Marquee,
    CircleProgressIndicator
  },
  data() {
    return {
      currentProfile: {},
      filter_role_category: ''
    };
  },
  props: {
    members: {
      type: Array,
      required: true
    },
    teams: {
      type: Array,
      required: true
    },
    roles: {
      type: Array,
      required: true
    }
  },
  computed: {
    roleId: {
      set(value) {
        this.filter_role_category = value;
      },
      get() {
        return this.filter_role_category;
      }
    },
    genderRatio() {
      return 0.53;
    }
  },
  methods: {
    btn(selected) {
      return selected
        ? ['selected-filter-btn', 'btn', 'btn-secondary']
        : ['filter-btn', 'btn', 'btn-link'];
    },
    filterMembers(role = '') {
      let filtered;
      if (role === '') {
        filtered = [...this.members].sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        filtered = this.members
          .filter(
            member =>
              typeof member.roleId !== 'undefined' && member.roleId === role
          )
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
      }

      // todo fix this ugliness

      return filtered;
    }
  }
};
</script>
