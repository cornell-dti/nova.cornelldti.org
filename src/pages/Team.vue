<template>
  <page-background>
    <page-hero :overlay="false" :bg="img('heroes', 'team-hero.jpg')"
    />

    <page-section>
      <div>Our team consists of 50 product managers, designers and developers working
        on 6 projects ranging from a campus safety app to a course review website.
        Our diverse and talented team represents six of the seven undergraduate colleges
        at Cornell.</div>
    </page-section>

    <div class="diversity diversity-background">

      <!-- TODO bind formatting to actual elements-->
      <b-row class="no-gutters diversity">
        <b-col cols="8" class="diversity-left-overlay">
          <b-row>
            <b-col cols="9">
              <h1 class="team-header">Diversity</h1>
              <p>Page summary. Diverse team spanning disciplines, years, ethnicities,
                etc. We've had exciting people and have been to exciting places.</p>

              <b-row class="no-gutters" align-h="center">
                <b-col cols="auto">
                  <h3 class="text-center">Gender Ratio</h3>
                  <circle-progress-indicator :percentage="femalePercentage(divRoleId)">
                    <div class="graph-data">
                      <b-row align-v="center" class="h-100">
                        <b-col cols="6" class="graph-datum">
                          <h3 v-html="`${Math.round(100 * femalePercentage(divRoleId))}%`" />
                          <p>Female</p>
                        </b-col>
                        <b-col cols="6" class="graph-datum">
                          <h3 v-html="`${Math.round(100 * malePercentage(divRoleId))}%`" />
                          <p>Male</p>
                        </b-col>
                      </b-row>
                    </div>
                  </circle-progress-indicator>
                </b-col>
              </b-row>
              <br />
              <b-row class="no-gutters filter-btn-group">
                <b-col cols="auto" class="text-center">
                  <div :class="lightbtn(divRoleId === '')" @click="divRoleId = ''">
                    All
                  </div>
                  <div :class="lightselector(divRoleId === '')" />
                </b-col>
                <b-col cols="auto" class="text-center" v-for="role of roles" :key="role.id">
                  <div :class="lightbtn(divRoleId === role.id)" @click="divRoleId = role.id">
                    {{role.name}}
                  </div>
                  <div :class="lightselector(divRoleId === role.id)" />
                </b-col>

              </b-row>
            </b-col>
            <b-col cols="3">
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="4" align-self="center">
          <b-row>
            <b-col sm="6" md="12" class="diversity-inner-text">
              <h1>14</h1>
              <p>Number of different majors</p>
            </b-col>
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

    </div>

    <b-container fluid>
      <page-section>
        <h1 class="team-header">Team</h1>

        <b-row class="filter-btn-group">
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

        <headshot-grid :members="[...filterMembers(`${roleId}-lead`), ...(filterMembers(roleId))]"
          :teams="teams" />

      </page-section>

      <div class="pseudo-team-header">
        <h1>Where we've worked...</h1>
      </div>
    </b-container>

    <section>
      <marquee :companies="companies" />
    </section>

    <dti-footer />
  </page-background>
</template>

<style lang="scss" scoped>
$primary: #ff324a;
$secondary: #f6f6f6;

.team-header {
  margin-bottom: 3rem;
}

.pseudo-team-header {
  margin-top: 1rem;
  margin-left: 4vw;
  margin-right: 4vw;
}

.circle-inner-data {
  text-align: center;
  height: 120px;
}

// TODO create selector component

.selector {
  background-color: transparent;
  transition: background-color 500ms linear;
  width: 1rem;
  height: 0.1rem;
  margin: 0 auto;
}

.filter-btn-group {
  justify-content: center;
}

.selector-selected {
  background-color: #4a4a4a !important;
}

.selector-light-selected {
  background-color: #fefefe !important;
}

.filter-btn-light,
.selected-filter-light-btn {
  color: #fefefe !important;
  margin: 1rem;
}

.filter-btn-light:focus,
.filter-btn-light:hover,
.selected-filter-light-btn:focus,
.selected-filter-light-btn:hover {
  text-decoration: none !important;
  color: #dadada !important;
}

.filter-btn,
.selected-filter-btn {
  color: #4a4a4a !important;
  margin: 1rem;
}

.filter-btn:focus,
.filter-btn:hover,
.selected-filter-btn:focus,
.selected-filter-btn:hover {
  text-decoration: none !important;
  color: #9a9a9a !important;
}

.diversity {
  height: 80vh;
  overflow: hidden;
  color: #fefefe !important;

  &.diversity-background {
    background-image: url('/static/img/candids/new-header-bg.jpg');
    background-size: cover;
  }

  &.diversity-background:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 80vh;
    background: inherit;
    filter: blur(10px);
    transition: all 2s linear;
  }

  .diversity-left-overlay {
    background-color: rgba(70, 71, 72, 0.8);
    clip-path: polygon(0 0, 0 100%, 80% 100%, 100% 0);
    padding: 2vw 4vw;
  }
}

@media (max-width: 767px) {
  .diversity {
    background-color: #f6f6f6;
  }

  .diversity-inner-text {
    text-align: center;
  }

  .diversity-inner-text {
    margin-top: 1rem;
  }
}

@media (min-width: 768px) {
  .diversity-inner-text {
    padding: 4vw;
  }

  .diversity-column {
    padding: 4vw;

    &.diversity-left {
      background-color: #f6f6f6;
    }

    &.diversity-right {
      background-color: #ff324a;

      // Prevents a 1px-ish line between center and right.

      margin-right: -1vw;
      margin-left: -1vw;

      color: #fefefe;
      padding: 10vw;
    }
  }

  .diversity-center {
    background-color: #f6f6f6;

    .diversity-center-right {
      width: 100%;
      height: 100%;
      background-color: #ff324a;
      clip-path: polygon(70% 0, 30% 100%, 100% 100%, 100% 0);
    }
  }

  .diversity-text-right {
    color: #fefefe;
    padding: 10vw;
  }
}

@media (max-width: 767px) {
  .diversity {
    background-color: #f6f6f6;
    padding: 4vw;
  }

  .diversity-inner-text {
    text-align: center;
  }

  .diversity-inner-text {
    margin-top: 1rem;
  }
}
</style>

<script>
import HeadshotGrid from '@/components/HeadshotGrid';
import Marquee from '@/components/CompaniesMarquee';
import CircleProgressIndicator from '@/components/CircleProgressIndicator';

export default {
  components: {
    HeadshotGrid,
    Marquee,
    CircleProgressIndicator
  },
  mounted() {
    this.$nextTick(() => {
      this.roleId = '';
    });
  },
  data() {
    return {
      currentProfile: {},
      roleId: 'none',
      divRoleId: ''
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

  methods: {
    malePercentage(roleId) {
      return 1 - this.diversity.femalePercentage[roleId];
    },
    femalePercentage(roleId) {
      return this.diversity.femalePercentage[roleId];
    },
    lightbtn(selected) {
      return selected
        ? ['selected-filter-light-btn', 'btn', 'btn-link']
        : ['filter-btn-light', 'btn', 'btn-link'];
    },
    lightselector(selected) {
      return selected ? ['selector', 'selector-light-selected'] : ['selector'];
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
