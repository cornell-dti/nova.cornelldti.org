<template>
  <div class="d-flex flex-row flex-wrap justify-content-center">
    <!-- v-for="row in rows()" :key="row.index" -->
    <div class="flexible-item" v-for="member in pad(members)" :key="member.id">
      <div v-if="member.phantom" class="phantom-headshot-card headshot-card" />
      <headshot-card v-else :name="member.name" :role="member.role" :image='img(member.image)'
        @click.native="memberClicked(member)" />
    </div>

    <member-profile-modal v-model="modalShow" :profile="currentProfile" />
  </div>
</template>

<style lang="scss" scoped>
.phantom-headshot-card {
  min-width: 155px;
}
</style>

<script>
import HeadshotCard from './HeadshotCard';
import MemberProfileModal from './MemberProfileModal';

export default {
  components: { HeadshotCard, MemberProfileModal },
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
  data() {
    return { modalShow: false, currentProfile: {} };
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
    pad(members) {
      const copy = [...members];

      if (copy.length % 5 !== 0 || copy.length % 6 !== 0) {
        const max = Math.max(
          5 - copy.length % 5,
          copy.length % 5,
          6 - copy.length % 6,
          copy.length % 6
        );

        for (let i = 0; i < max; i += 1) {
          copy.push({
            // TODO
            id: 'phantom-' + i, //eslint-disable-line
            phantom: true
          });
        }
      }

      return copy;
    }
  }
};
</script>
