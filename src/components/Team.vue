<template>
  <page-background>
    <text-page-hero>
      Team
    </text-page-hero>
    <b-container>
      <page-section>
        <h1>Diversity</h1>

        <b-row class="justify-content-center">
          <circle-progress-indicator />
        </b-row>
      </page-section>
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

        <headshot-grid :members="filterMembers(roleId)" :teams="teams" />

      </page-section>

    </b-container>
    <section>
      <marquee />
    </section>
  </page-background>
</template>

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
        filtered = this.members;
      } else {
        filtered = this.members.filter(
          member =>
            typeof member.roleId !== 'undefined' &&
            member.roleId.indexOf(role) !== -1
        );
      }

      // todo fix this ugliness

      return filtered;
    }
  }
};
</script>
