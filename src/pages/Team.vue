<template>
  <page-background>
    <div class="team-hero">
      <visual :video="aws(Strings.get('pages.team.hero.video', 'assets'))" :poster="Strings.get('pages.team.hero.lazy', 'assets')"
        background="cover" :fallback="aws(Strings.get('pages.team.hero.image', 'assets'))"
        class="team-hero" align="top left" autoplay :loop="true" :muted="true" preload=auto
        :fill="true" />
    </div>
    <b-container fluid>
      <text-hero header="Working Together">
        We are Cornell Design &amp; Tech Initiative. But individually, we are a talented,
        diverse, group of students from different colleges and countries striving
        to make a difference in our community.
      </text-hero>
    </b-container>

    <div class="diversity diversity-background">
      <!-- TODO bind formatting to actual elements-->
      <b-row class="no-gutters diversity diversity-content">
        <b-col sm="12" md="7" class="diversity-left-overlay">
          <b-row>
            <b-col sm="12" md="9">
              <div class="team-header diversity-header my-auto sm-y-padding">Diversity</div>
              <div class="diversity-description my-auto sm-y-padding">Page summary. Diverse team spanning disciplines, years, ethnicities,
                etc. We've had exciting people and have been to exciting places.</div>

              <h3 class="graph-header text-center">Gender Ratio</h3>

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
                  <role-selector class="diversity-role-selector" v-model="divRoleId" :dark="true" />
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="0" md="3">
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="4" align-self="center" class="mx-auto">
          <b-row>
            <b-col cols="12" class="diversity-description diversity-inner-text">
              <h1>55%</h1>
              <div class="diversity-description diversity-stat-description">Percentage of underclassmen team members</div>
            </b-col>
            <b-col cols="12" class="diversity-description diversity-inner-text">
              <h1>14</h1>
              <div class="diversity-description diversity-stat-description">Number of different majors</div>
            </b-col>
            <b-col cols="12" class="diversity-description diversity-inner-text">
              <h1>6</h1>
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
}

.graph-datum {
  font-size: 3rem;
  font-weight: 500;

  .graph-datum-description {
    font-size: 1.5rem;
  }
}

.team-role-selector {
  padding: 0 1vw;
  font-size: 1.5rem;
  font-weight: 600;
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

  .sm-y-padding {
    padding: 0.6rem 0;
  }

  .lg-y-padding {
    padding: 1rem 0;
  }

  .diversity-header {
    padding: 0.6rem 0;
  }

  .diversity-description {
    font-size: 1.125rem;
    font-weight: normal;

    &.diversity-stat-description {
      font-weight: 500;
      font-size: 1.125rem;
    }
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
