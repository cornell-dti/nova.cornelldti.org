<template>
  <page-background>
    <nova-hero header="Working Together" subheader="We are Cornell Design &amp; Tech Initiative. But individually, we are a talented,
        diverse, group of students from different colleges and countries striving
        to make a difference in our community." page="team" />

    <div class="diversity diversity-background">
      <!-- TODO bind formatting to actual elements-->
      <b-row class="no-gutters diversity diversity-content">
        <b-col sm="12" md="7" class="diversity-inner-left diversity-left-overlay">
          <b-row>
            <b-col sm="12" md="9">
              <div class="team-header diversity-header my-auto">Diversity</div>
              <div class="diversity-description my-auto lg-y-padding">More than just being inclusive, our team strives to bring as many backgrounds
                and perspectives together to solve community problems. These statistics
                come from recruiting across campus and seeking applicants with the
                best skills and potential for growth on the team.</div>

              <h3 class="graph-header text-center lg-y-padding">Gender Ratio</h3>

              <b-row class="lg-y-padding" align-h="center">
                <b-col cols="auto">
                  <circle-progress-indicator :percentage="femalePercentage(divRoleId)">
                    <div class="text-center graph-data h-100">
                      <b-row align-v="center" class="h-100">
                        <b-col cols="6" class="graph-datum">
                          <h3 v-html="`${Math.round(100 * femalePercentage(divRoleId))}%`" />
                          <p class="graph-datum-description">Female</p>
                        </b-col>
                        <b-col cols="6" class="graph-datum">
                          <h3 v-html="`${Math.round(100 * malePercentage(divRoleId))}%`" />
                          <p class="graph-datum-description">Male</p>
                        </b-col>
                      </b-row>
                    </div>
                  </circle-progress-indicator>
                </b-col>
              </b-row>
              <b-row class="my-auto" align-h="center">
                <b-col>
                  <role-selector class="diversity-role-selector" v-model="divRoleId" :dark="true" density="compact"
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="0" md="3">
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="4" align-self="center" class="diversity-inner-right mx-auto">
          <b-row>
            <b-col cols="12" class="diversity-description diversity-inner-text">
              <div class="diversity-stat-header">55%</div>
              <div class="diversity-description diversity-stat-description">Percentage of underclassmen team members</div>
            </b-col>
            <b-col cols="12" class="diversity-description diversity-inner-text">
              <div class="diversity-stat-header">14</div>
              <div class="diversity-description diversity-stat-description">Number of different majors</div>
            </b-col>
            <b-col cols="12" class="diversity-description diversity-inner-text">
              <div class="diversity-stat-header">6</div>
              <div class="diversity-description diversity-stat-description">Number of represented colleges</div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <b-container fluid>
      <page-section>
        <div class="team-header">Team</div>

        <role-selector density="normal" class="team-role-selector" v-model="roleId" />

        <!-- TODO actual padding --><br>

        <headshot-grid :members="[...filterMembers(`${roleId}-lead`), ...(filterMembers(roleId))]"
        />

      </page-section>
    </b-container>

    <dti-footer />
  </page-background>
</template>

<style lang="scss" scoped>
$primary: #ff324a;
$secondary: #f6f6f6;

.team-hero {
  height: 80vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.company-switcher {
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s linear;
}

.company-switcher-a {
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s linear;
}

.team-header {
  position: relative;
}

.team-work-description {
  font-size: 3rem;
}

.team-header-outer {
  margin-bottom: 1rem;
  font-size: 4.5rem;
  font-weight: 600;
  z-index: 10;
  background: linear-gradient(to right, white 95%, rgba(255, 255, 255, 0));
  padding-right: 2vw;
}

.no-wrap {
  flex-wrap: nowrap !important;
  max-width: 100%;
}

.lefter {
  z-index: 10;
}

.graph-header {
  font-size: 2.25rem;
  margin: 0.3rem 0;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  color: #ffffff;
}

.graph-datum {
  font-size: 3rem;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: #ffffff;

  .graph-datum-description {
    font-size: 1.5rem;
    font-size: 1.125rem;
    letter-spacing: 0.7px;
  }
}

.team-role-selector {
  padding: 0 1vw;
  font-size: 1.5rem;
  font-weight: 600;
  max-width: 86rem;
}

.diversity-role-selector {
  font-size: 1.5rem;
  font-weight: 500; //todo
}

.company-list {
  position: relative;
  font-size: 2rem;
  max-width: 95vw;
  margin-top: 1rem;
  margin-bottom: 10vh;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    width: 100%;
    height: 6.5em;
  }
}

.team-header {
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 400;
}

.pseudo-team-header {
  max-width: 80vw;
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

  .diversity-inner-right {
    padding: 4.5rem 4.5rem 4.5rem 0;
  }

  .diversity-inner-left {
    padding: 4.5rem 0 4.5rem 4.5rem;
  }

  .sm-y-padding {
    padding: 0.6rem 0;
  }

  .lg-y-padding {
    padding: 1.75rem 0;
  }

  .diversity-stat-header {
    font-size: 4.5rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.9px;
    color: #ffffff;
    padding-bottom: 0.1rem;
  }

  .diversity-header {
    padding: 0.6rem 0;
    font-size: 3rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
  }

  .diversity-description {
    font-size: 1.125rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #ffffff;
  }

  .diversity-stat-description {
    padding-top: 0.1rem;
    font-size: 1.125rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.7px;
    color: #ffffff;
  }

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
      background-color: rgba(70, 71, 72, 0.8);
      clip-path: polygon(0 0, 0 100%, 80% 100%, 100% 0);
    }
  }

  @media (max-width: 767px) {
    &.diversity-content {
      background-color: rgba(70, 71, 72, 0.8);
    }

    .diversity-inner-text {
      text-align: center;
      margin-top: 1rem;
      font-size: 3rem;
    }
  }

  @media (min-width: 768px) {
    .diversity-inner-text {
      padding: 2vw 4vw;
      font-size: 2.5rem;
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
