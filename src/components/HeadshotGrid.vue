<template>
  <div class="headshot-grid d-flex flex-row flex-wrap justify-content-start">
    <!-- v-for="row in rows()" :key="row.index" -->
    <div class="flexible-item" v-for="member in pad(members)" :key="member.id">
      <div v-if="member.phantom" class="phantom-headshot-card ">
        <headshot-card :name="member.id" :role="member.id" :image='``' @click.native="null" />
      </div>
      <headshot-card v-else :name="name(member)" :role="member.info.role" :image="`${Strings.get('directories.members', 'assets')}/${member.id}.jpg`"
        @click.native="memberClicked(member)" />
    </div>

    <member-profile-modal v-model="modalShow" :profile="currentProfile" />
  </div>
</template>

<style lang="scss" scoped>
.phantom-headshot-card {
  visibility: hidden;
  max-height: 0;
  overflow: hidden;
}
</style>

<script>
import HeadshotCard from '@/components/HeadshotCard';
import MemberProfileModal from '@/components/MemberProfileModal';

export default {
  props: {
    members: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { HeadshotCard, MemberProfileModal },
  data() {
    return { modalShow: false, currentProfile: {} };
  },
  methods: {
    memberClicked(member) {
      this.currentProfile = member;
      this.currentProfile.teams = [];
      //change this
      this.getTeams().forEach(team => {
        team.members.forEach(teamMember => {
          const name = `${this.currentProfile.firstName} ${
            this.currentProfile.lastName
          }`;
          if (teamMember.name === name) {
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
          5 - (copy.length % 5),
          copy.length % 5,
          6 - (copy.length % 6),
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
    },
    name(member) {
      if (typeof member.info.name === 'undefined') {
        return `${member.info.firstName} ${member.info.lastName}`;
      }
      return member.info.name;
    }
  }
};
</script>
