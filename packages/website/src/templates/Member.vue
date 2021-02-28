<template>
  <page-background>
    <navbar-padding />
    <b-container class="member-padding">
      <member-profile :profile="profile" />
    </b-container>
  </page-background>
</template>

<style lang="scss" scoped>
.member-padding {
  margin: 2rem;
}
</style>

<page-query>
query DTIMember($path: String!) {
  member: member(path: $path) {
    netid
    firstName
    lastName
    name
    graduation
    major
    linkedin
    github
    hometown
    about
    subteam
    otherSubteams
    website
    roleId
    roleDescription
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import MemberProfile from '../components/MemberProfile.vue';

import EventBus from '../eventbus';
import { Member } from '../types';

interface MemberPage {
  member: Member;
}

@Component({
  components: {
    MemberProfile
  }
})
export default class MemberTemplate extends Vue {
  get profile(): { readonly info: Member } {
    return {
      info: (this.$page as MemberPage).member
    };
  }

  mounted(): void {
    EventBus.$emit('set-navbar-light', { source: this });
  }
}
</script>
