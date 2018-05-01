<template>

  <div>
    <section>
      <div class="page-hero"> </div>
    </section>

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

        <div class="d-flex flex-row flex-wrap justify-content-center">
          <!-- v-for="row in rows()" :key="row.index" -->
          <div class="flexible-item" v-for="member in filterMembers(roleCategory)" :key="member.name">
            <div v-if="member.phantom" class="phantom-headshot-card headshot-card" />
            <headshot-card v-else :name="member.name" :image='member.image' @click.native="memberClicked(member)"
            />
          </div>
        </div>

      </section>

    </b-container>
    <section>
      <marquee />
    </section>

    <member-profile-modal v-model="modalShow" :profile="currentProfile" />

  </div>
</template>

<style lang="scss" scoped>
.phantom-headshot-card {
  min-width: 155px;
}
</style>


<script>
import HeadshotCard from "./HeadshotCard";
import MemberProfileModal from "./MemberProfileModal";
import Marquee from "./CompaniesMarquee";

export default {
  components: {
    HeadshotCard,
    MemberProfileModal,
    Marquee
  },
  data() {
    return {
      modalShow: false,
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
    memberClicked(member) {
      this.currentProfile = member;
      this.currentProfile.teams = [];

      this.teams.forEach(team => {
        team.members.forEach(teamMember => {
          if (teamMember.name === this.currentProfile.name) {
            this.currentProfile.teams.push(team);
          }
        });
      });

      this.modalShow = true;
    },
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

      if (filtered.length % 5 !== 0 || filtered.length % 6 !== 0) {
        const max = Math.max(
          5 - filtered.length % 5,
          filtered.length % 5,
          6 - filtered.length % 6,
          filtered.length % 6
        );

        for (let i = 0; i < max; i += 1) {
          filtered.push({
            name: 'phantom-' + i,
            phantom: true
          });
        }
      }

      // todo fix this ugliness

      return filtered;
    }
  }
};
</script>
