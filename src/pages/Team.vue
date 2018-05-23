<template>
  <page-background>
    <page-hero :overlay="false" :bg="img('heroes', 'team-hero.jpg')" />

    <page-section>
      <b-row align-h="center">
        <b-col sm="12" md="8">
          <div class="team-hero-header text-center">Working Together</div>
          <div class="team-hero-header-subtext text-center">We are Cornell Design &amp; Tech Initiative. But individually, we are a
            talented, diverse, group of students from different colleges and countries
            striving to make a difference in our community.</div>
        </b-col>
      </b-row>
    </page-section>

    <div class="diversity diversity-background">
      <!-- TODO bind formatting to actual elements-->
      <b-row class="no-gutters diversity diversity-content">
        <b-col sm="12" md="8" class="diversity-left-overlay">
          <b-row>
            <b-col sm="12" md="9">
              <h1 class="team-header">Diversity</h1>
              <p>Page summary. Diverse team spanning disciplines, years, ethnicities,
                etc. We've had exciting people and have been to exciting places.</p>

              <b-row class="no-gutters" align-h="center">
                <b-col cols="auto">
                  <h3 class="text-center">Gender Ratio</h3>
                  <circle-progress-indicator :percentage="femalePercentage(divRoleId)">
                    <div class="text-center graph-data">
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
              <role-selector v-model="divRoleId" :dark="true" />
            </b-col>
            <b-col sm="0" md="3">
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="4" align-self="center">
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

        <role-selector v-model="roleId" />

        <!-- TODO actual padding --><br>

        <headshot-grid :members="[...filterMembers(`${roleId}-lead`), ...(filterMembers(roleId))]"
        />

      </page-section>

      <div class="pseudo-team-header ">
        <h1>Where we've worked...</h1>
      </div>
    </b-container>

    <marquee :companies="getCompanies()" />

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

.team-hero-header {
  font-size: 5rem;
  font-weight: bold;
}

.team-hero-header-subtext {
  font-size: 2rem;
}

.circle-inner-data {
  text-align: center;
  height: 120px;
}

// TODO create selector component

.diversity {
  min-height: 80vh;

  overflow: hidden;
  position: relative;
  color: #fefefe !important;

  &.diversity-background {
    background-image: url('/static/img/candids/new-header-bg.jpg');
    background-size: cover;
  }

  &.diversity-background:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    min-height: 80vh;
    background: inherit;
    filter: blur(10px);
    transition: all 2s linear;
  }
  @media (min-width: 768px) {
    .diversity-left-overlay {
      padding: 2vw 4vw;
      background-color: rgba(70, 71, 72, 0.8);
      clip-path: polygon(0 0, 0 100%, 80% 100%, 100% 0);
    }
  }

  @media (max-width: 767px) {
    &.diversity-content {
      padding: 2vw 4vw;
      background-color: rgba(70, 71, 72, 0.8);
    }

    .diversity-inner-text {
      text-align: center;
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    .diversity-inner-text {
      padding: 4vw;
    }
  }
}
</style>

<script>
import HeadshotGrid from '@/components/HeadshotGrid';
import RoleSelector from '@/components/RoleSelector';
import Marquee from '@/components/CompaniesMarquee';
import CircleProgressIndicator from '@/components/CircleProgressIndicator';

export default {
  components: {
    HeadshotGrid,
    Marquee,
    CircleProgressIndicator,
    RoleSelector
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
    filterMembers(role = '') {
      let filtered;
      if (role === '') {
        filtered = [...this.getMembers()].sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        filtered = this.getMembers()
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
