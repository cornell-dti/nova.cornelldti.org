<template>

  <div>
    <b-modal lazy centered size="lg" id="memberModal" v-model="modalShow" :title="profile.name" header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" footer-text-variant="light" header-border-variant="dark" footer-border-variant="dark">
      <b-container fluid>
      </b-container>
      <p class="my-4">{{profile.name}}</p>
      <p class="my-4">{{profile.role}}</p>
      <p class="my-4">{{profile.about}}</p>
    </b-modal>
  </div>
</template>

<style lang="scss">
$radius: 25px;

#memberModal {
  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-header {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }

  .modal-body {
    border-bottom-right-radius: $radius;
    border-bottom-left-radius: $radius;
  }

  .modal-footer {
    display: none;
  }
}
.modal-backdrop {
  background-color: #fefefe;

  &.show {
    opacity: 0.9;
  }
}
</style>


<script>
export default {
  model: {
    prop: "modalShow",
    event: "update:change"
  },
  props: {
    profile: { type: Object, required: false, default: {} },
    modalShow: Boolean
  },
  data() {
    return { modalShow: this.value };
  },
  watch: {
    modalShow($event) {
      this.$emit("update:change", $event);
    }
  }
};
</script>

