<template>
  <page-background>
    <page-hero>
      <b-row align-h="center" no-gutters=true class="h-50">
        <slot />
        <b-col cols="auto" class="my-auto">
          <h2 class="">Team</h2>

        </b-col>
      </b-row>
    </page-hero>
    <b-container>
      <section>
        <h1>Diversity</h1>

        <b-row class="justify-content-center">
        </b-row>
      </section>
      <section>
        <h1>Team</h1>

        <b-row class="justify-content-center">
          <b-col class="text-center">
            <div :variant="link" :class="roleId === '' ? ['selected-filter-btn', 'btn', 'btn-secondary'] : ['filter-btn', 'btn', 'btn-link']"
              v-on:click="roleId = ''">
              All
            </div>
            <div v-for="role in roles" :key="role.id" :variant="link" :class="roleId === role.id ? ['selected-filter-btn', 'btn', 'btn-secondary'] : ['filter-btn', 'btn', 'btn-link']"
              v-on:click="roleId = role.id">
              {{role.name}}
            </div>
          </b-col>
        </b-row>

        <!-- TODO actual padding --><br>

        <headshot-grid :members="filterMembers(roleId)" :teams="teams" />

      </section>

    </b-container>
    <section>
      <marquee />
    </section>
  </page-background>
</template>

<script>
import HeadshotGrid from "./HeadshotGrid";
import Marquee from "./CompaniesMarquee";
import EventBus from "../bus";

export default {
  components: {
    HeadshotGrid,
    Marquee
  },
  mounted() {
    EventBus.$emit("define-page", {
      background: null,
      hero: {
        type: "header",
        bg: "",
        header: "Teams",
        subheader: "",
        img: ""
      }
    });
  },
  data() {
    return {
      currentProfile: {},
      filter_role_category: ""
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
    filterMembers(role = "") {
      let filtered;
      if (role === "") {
        filtered = this.members;
      } else {
        filtered = this.members.filter(
          member =>
            typeof member.roleId !== "undefined" &&
            member.roleId.indexOf(role) !== -1
        );
      }

      // todo fix this ugliness

      return filtered;
    }
  }
};
</script>
