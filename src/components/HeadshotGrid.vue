<template>
  <div class="headshot-grid d-flex flex-row flex-wrap justify-content-start">
    <!-- v-for="row in rows()" :key="row.index" -->
    <div class="flexible-item" v-for="member in pad(members)" :key="member.id">
      <div v-if="member.phantom" class="phantom-headshot-card">
        <headshot-card :name="member.id" :role="member.id" :image="``" @click.native="null"/>
      </div>
      <headshot-card
        v-b-modal.memberModal
        v-else
        :name="member.info.name"
        :role="member.info.roleDescription"
        :image="`${AssetStrings.get('directories.members')}/${member.id}.jpg`"
        @click.native="memberClicked(member)"
      />
    </div>

    <member-profile-modal :profile="currentProfile" :display="true"/>
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

import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const AssetStrings = new StringsFrontend(new JSONStringsBackend('assets'));

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
    return { 
      AssetStrings, AssetStrings,
      modalShow: false, 
      currentProfile: {} 
    };
  },
  methods: {
    memberClicked(member) {
      this.currentProfile = member;
    },
    pad(members) {
      const copy = [...members];

      const max = 16;

      for (let i = 0; i < max; i += 1) {
        copy.push({
          // TODO
          id: 'phantom-' + i, //eslint-disable-line
          phantom: true
        });
      }

      return copy;
    }
  }
};
</script>
