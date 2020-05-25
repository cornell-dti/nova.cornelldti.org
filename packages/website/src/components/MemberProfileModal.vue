<template>
  <transition name="modal">
    <div v-show="isShowing">
      <b-modal
        lazy
        no-fade
        centered
        size="lg"
        ref="memberModalRef"
        id="memberModal"
        v-model="isShowing"
        :static="isStatic"
        :title="profile && profile.info ? profile.info.name : 'not found'"
        header-bg-variant="light"
        header-text-variant="dark"
        body-bg-variant="light"
        body-text-variant="dark"
        footer-bg-variant="light"
        footer-text-variant="dark"
        header-border-variant="light"
        footer-border-variant="light"
      >
        <b-container v-if="profile && profile.info" fluid>
          <b-row>
            <b-col>
              <!--TODO use actual icon, not text -->
              <b-button class="modal-close-button close" @click="modalClose()">x</b-button>
            </b-col>
          </b-row>

          <member-profile class="modal-scroll" :profile="profile" />
        </b-container>
      </b-modal>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { BModal } from 'bootstrap-vue';
import { ObjectProp, BooleanProp } from '../util/common';

import MemberProfile from './MemberProfile.vue';

import Github from '../assets/social/github.svg';
import LinkedIn from '../assets/social/linkedin.svg';
import MissingImage from '../assets/other/missing.svg';
import { Member } from '../shared';

@Component({
  components: {
    Github,
    LinkedIn,
    MemberProfile,
    MissingImage
  }
})
export default class MemberProfileModal extends Vue {
  @BooleanProp({ required: false, defaultValue: false })
  isStatic!: boolean;

  @ObjectProp()
  profile!: { info: Member };

  isShowing = false;

  modalClose(): void {
    const modal = (this.$refs.memberModalRef as unknown) as BModal;
    modal.hide();
  }

  showModal(): void {
    const modal = (this.$refs.memberModalRef as unknown) as BModal;
    modal.show();
  }

  toggleModal(): void {
    const modal = (this.$refs.memberModalRef as unknown) as BModal;
    modal.toggle();
  }
}
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
  z-index: 1040;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
$radius: 25px;

#memberModal {
  .modal-scroll {
    overflow-y: auto;
    max-height: 70vh;
  }

  @media (max-width: 991px) {
    .modal-scroll {
      overflow-y: auto;
      max-height: 70vh;
    }
  }

  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-body {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
    border-bottom-left-radius: $radius;
    padding: 2em;
    overflow: hidden;
  }

  .modal-close-button {
    opacity: 1;
    color: #4a4a4a;
    background-color: transparent;
    border: none;
    float: right;
    margin-left: auto;
  }

  .modal-header,
  .modal-footer {
    display: none;
  }
}
</style>
