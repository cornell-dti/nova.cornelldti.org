<template>
  <div class="headshot-grid d-flex flex-row flex-wrap justify-content-start">
    <div class="flexible-item" v-for="member in pad(members)" :key="member.id">
      <div v-if="'phantom' in member" class="phantom-headshot-card">
        <headshot-card :name="member.id" :role="member.id" :image="``" @click.native="null" />
      </div>
      <headshot-card
        v-else
        :name="member.info.name"
        :role="member.info.roleDescription"
        @click.native="memberClicked(member)"
        :image="`${member.info.image}`"
      />
    </div>

    <member-profile-modal ref="modalRef" :profile="currentProfile" />
  </div>
</template>

<style lang="scss" scoped>
.phantom-headshot-card {
  visibility: hidden;
  max-height: 0;
  overflow: hidden;
}
</style>

<script lang="ts">
import { BModal } from 'bootstrap-vue';

import Vue from 'vue';
import HeadshotCard from '@/components/HeadshotCard.vue';
import MemberProfileModal from '@/components/MemberProfileModal.vue';

import { Member } from '@/shared';

type MemberInfo = { id: string; info: Member };

export interface PhantomMember {
  id: string;
  phantom: true;
}

export default Vue.extend({
  props: {
    members: {
      default: [] as MemberInfo[]
    }
  },
  components: { HeadshotCard, MemberProfileModal },
  data() {
    return {
      modalShow: false,
      currentProfile: {}
    };
  },
  methods: {
    memberClicked(member: { id?: string; info?: Member }) {
      this.currentProfile = member;

      const modal = this.$refs.modalRef as BModal;
      modal.showModal();
    },
    pad(members: MemberInfo[]) {
      const copy: Array<MemberInfo | PhantomMember> = [...members];

      const max = 16;

      for (let i = 0; i < max; i += 1) {
        copy.push({
          // TODO
          id: `phantom-${i}`,
          phantom: true
        });
      }

      return copy;
    }
  }
});
</script>
