<template>
    <div>
        <p class="my-4">{{profile}}</p>
        <b-modal id="memberModal" v-model="modalShow" :title="profile.name">
            <p class="my-4">{{profile.name}}</p>
            <p class="my-4">{{profile.role}}</p>
            <p class="my-4">{{profile.about}}</p>
        </b-modal>
    </div>
</template>

<script>
export default {
  props: {
    profile: { type: Object, required: false, default: {} },
    value: { type: Boolean, default: false }
  },
  data() {
    return { modalShow: false };
  },
  watch: {
    value(newValue) {
      this.modalShow = newValue;
    }
  }
};
</script>

