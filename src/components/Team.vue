<template>
  <page-background>
    <text-page-hero :bg="img('team-hero.jpg')">
      Team
    </text-page-hero>

    <page-section>
      <div>Our team consists of 50 product managers, designers and developers working
        on 6 projects ranging from a campus safety app to a course review website.
        Our diverse and talented team represents six of the seven undergraduate colleges
        at Cornell.</div>
    </page-section>

    <div class="diversity">
      <div class="diversity-graph diversity-left" />
      <!-- TODO bind formatting to actual elements-->
      <div class="diversity-graph diversity-right" />

      <b-container fluid>
        <page-section>
          <b-row>
            <b-col sm="12" md="6" class="my-auto">
              <h1 class="team-header">Diversity</h1>
              <p>Page summary. Diverse team spanning disciplines, years, ethnicities,
                etc. We've had exciting people and have been to exciting places.</p>

              <b-row class="justify-content-center">
                <circle-progress-indicator :percentage="fem(divRoleId)">
                  <div class="graph-data">
                    <b-row align-v="center" class="h-100">
                      <b-col cols="6" class="graph-datum">
                        <h3 v-html="`${Math.round(100 * fem(divRoleId))}%`" />
                        <p>Female</p>
                      </b-col>
                      <b-col cols="6" class="graph-datum">
                        <h3 v-html="`${Math.round(100 * masc(divRoleId))}%`" />
                        <p>Male</p>
                      </b-col>
                    </b-row>
                  </div>
                </circle-progress-indicator>
              </b-row>
              <br />
              <b-row class="justify-content-center">
                <b-col class="text-center">
                  <div :class="btn(divRoleId === 'all')" @click="divRoleId = 'all'">
                    All
                  </div>
                  <div :class="selector(divRoleId === 'all')" />
                </b-col>
                <b-col class="text-center" v-for="role of roles" :key="role.id">
                  <div :class="btn(divRoleId === role.id)" @click="divRoleId = role.id">
                    {{role.name}}
                  </div>
                  <div :class="selector(divRoleId === role.id)" />
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" md="6" class="diversity-text-right my-auto">
              <b-row align-h="center">
                <b-col sm="6" md="12" class="diversity-inner-text">
                  <h1>14</h1>
                  <p>Number of different majors</p>
                </b-col>
                <b-col sm="6" md="12" class="diversity-inner-text">
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
        <h1 class="team-header">Team</h1>

        <b-row class="justify-content-center">
          <b-col class="text-center">
            <div :class="btn(roleId === '')" @click="roleId = ''">
              All
            </div>
            <div :class="selector(roleId === '')" />
          </b-col>
          <b-col class="text-center" v-for="role of roles" :key="role.id">
            <div :class="btn(roleId === role.id)" @click="roleId = role.id">
              {{role.name}}
            </div>
            <div :class="selector(roleId === role.id)" />
          </b-col>
        </b-row>

        <!-- TODO actual padding --><br>

        <headshot-grid :members="[...filterMembers(`project-lead`), ...filterMembers(`${roleId}-lead`), ...(filterMembers(roleId))]"
          :teams="teams" />

      </page-section>

      <div class="pseudo-team-header">
        <h1>Where we've worked...</h1>
      </div>
    </b-container>

    <section>
      <marquee :companies="companies" />
    </section>
  </page-background>
</template>

<style lang="scss" scoped>
.team-header {
  margin-bottom: 3rem;
}

.pseudo-team-header {
  margin-top: 1rem;
  margin-left: 4vw;
  margin-right: 4vw;
}

.graph-data {
  text-align: center;
  height: 120px;
}

.selector {
  background-color: transparent;
  transition: background-color 500ms linear;
  width: 1rem;
  height: 0.1rem;
  margin: 0 auto;
}

.selector-selected {
  background-color: #4a4a4a !important;
}

.filter-btn,
.selected-filter-btn {
  color: #4a4a4a !important;
}

.filter-btn:focus,
.filter-btn:hover,
.selected-filter-btn:focus,
.selected-filter-btn:hover {
  text-decoration: none !important;
  color: #9a9a9a !important;
}

.diversity {
  min-height: 84vh;
  overflow: hidden;
}
.diversity-graph {
  position: absolute;
  width: 100vw;
  min-height: 80vh;
}

@media (min-width: 768px) {
  .diversity-left {
    background-color: #f6f6f6;
    clip-path: polygon(0 0, 0 100%, 48% 100%, 52% 0);
  }

  .diversity-right {
    background-color: #ff324a;
    clip-path: polygon(52% 0, 48% 100%, 100% 100%, 100% 0);
  }

  .diversity-text-right {
    color: #fefefe;
    padding: 10vw;
  }
}

@media (max-width: 767px) {
  .diversity {
    background-color: #f6f6f6;
  }

  .diversity-inner-text {
    text-align: center;
  }

  .diversity-right,
  .diversity-left {
    visibility: hidden;
  }

  .diversity-inner-text {
    margin-top: 1rem;
  }
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
      filter_role_category: '',
      divRoleId: 'all'
    };
  },
  props: {
    companies: {
      type: Array,
      required: true
    },
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
    },
    diversity: {
      type: Object,
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
    }
  },
  methods: {
    masc(roleId) {
      return (
        this.diversity.genderRatio[roleId].m /
        (this.diversity.genderRatio[roleId].f +
          this.diversity.genderRatio[roleId]['3'] +
          this.diversity.genderRatio[roleId].m)
      );
    },
    fem(roleId) {
      return (
        this.diversity.genderRatio[roleId].f /
        (this.diversity.genderRatio[roleId].m +
          this.diversity.genderRatio[roleId]['3'] +
          this.diversity.genderRatio[roleId].f)
      );
    },
    third(roleId) {
      return (
        this.diversity.genderRatio[roleId]['3'] /
        (this.diversity.genderRatio[roleId].m +
          this.diversity.genderRatio[roleId]['3'] +
          this.diversity.genderRatio[roleId].f)
      );
    },
    btn(selected) {
      return selected
        ? ['selected-filter-btn', 'btn', 'btn-link']
        : ['filter-btn', 'btn', 'btn-link'];
    },
    selector(selected) {
      return selected ? ['selector', 'selector-selected'] : ['selector'];
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
