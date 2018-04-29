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

            <b-button class="selected-filter-btn" v-if="roleCategory == ''" v-on:click="roleCategory = '';">All</b-button>
            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = '';">All</b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory == 'pm'" v-on:click="roleCategory = 'pm';">Product Manager</b-button>
            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'pm';">Product Manager</b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory == 'designer'" v-on:click="roleCategory = 'designer';">Designer</b-button>
            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'designer';">Designer</b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory == 'lead'" v-on:click="roleCategory = 'lead';">Lead</b-button>
            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'lead';">Lead</b-button>

            <b-button class="selected-filter-btn" v-if="roleCategory == 'developer'" v-on:click="roleCategory = 'developer';">Developer</b-button>
            <b-button class="filter-btn" v-else variant="link" v-on:click="roleCategory = 'developer';">Developer</b-button>

          </b-col>
        </b-row>

        <!-- TODO actual padding --><br>

        <div class="d-flex flex-row flex-wrap justify-content-center">
          <!-- v-for="row in rows()" :key="row.index" -->
          <div class="flexible-item" v-for="member in filterMembers(roleCategory)" :key="member.name">
            <headshot-card :name="member.name" :image='member.image' @click.native="memberClicked(member)"></headshot-card>
          </div>
        </div>

      </section>
    </b-container>

    <member-profile-modal v-model="modalShow" :profile="currentProfile" />
  </div>
</template>

<style lang="scss" scoped>
@import "../main.scss";
</style>

<script>
import HeadshotCard from "./HeadshotCard.vue";
import MemberProfileModal from "./MemberProfileModal.vue";

export default {
  components: { HeadshotCard, MemberProfileModal },
  data() {
    return {
      modalShow: false,
      currentProfile: {}
    };
  },
  props: {
    members: {
      type: Array,
      required: true
    },
    filter_role_category: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    roleCategory: {
      set: function(value) {
        this.filter_role_category = value;
      },
      get: function() {
        return this.filter_role_category;
      }
    }
  },
  methods: {
    memberClicked(member) {
      this.currentProfile = member;
      this.modalShow = true;
    },
    filterMembers: function(role = "") {
      let filtered = [];

      if (role === "") return this.members;

      for (let member of this.members) {
        if (
          member.roleCategory != null &&
          member.roleCategory.indexOf(role) !== -1
        ) {
          filtered.push(member);
        }
      }

      // todo fix this ugliness

      return filtered;
    }
  }
};
</script>
