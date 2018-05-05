<template>
  <div>
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
            <!-- TODO do this dynamically -->

            <b-button class="selected-filter-btn" v-if="roleCategory === ''" v-on:click="roleCategory = ''">
              All
            </b-button>

            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = '';">
              All
            </b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory === 'pm'" v-on:click="roleCategory = 'pm'">
              Product Manager
            </b-button>

            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'pm'">
              Product Manager
            </b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory === 'designer'" v-on:click="roleCategory = 'designer'">
              Designer
            </b-button>

            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'designer'">
              Designer
            </b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory === 'lead'" v-on:click="roleCategory = 'lead'">
              Lead
            </b-button>

            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'lead'">
              Lead
            </b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory === 'developer'" v-on:click="roleCategory = 'developer'">
              Developer
            </b-button>

            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'developer'">
              Developer
            </b-button>

          </b-col>
        </b-row>

        <!-- TODO actual padding --><br>

        <headshot-grid :members="filterMembers(roleCategory)" :teams="teams" />

      </section>

    </b-container>
    <section>
      <marquee />
    </section>
  </div>
</template>

<script>
import HeadshotGrid from "./HeadshotGrid";
import Marquee from "./CompaniesMarquee";
import bus from "../bus";

export default {
  components: {
    HeadshotGrid,
    Marquee
  },
  mounted() {
    bus.$emit("update-hero", {
      type: "header",
      bg: "",
      header: "Teams",
      subheader: "",
      img: ""
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
    }
  },
  computed: {
    roleCategory: {
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
            typeof member.roleCategory !== "undefined" &&
            member.roleCategory.indexOf(role) !== -1
        );
      }

      // todo fix this ugliness

      return filtered;
    }
  }
};
</script>
