<template>
    <page-background />
</template>
<script>
import EventBus from "../bus";

export default {
  mounted() {
    EventBus.$emit("define-page", {
      background: null,
      hero: {
        type: "header",
        bg: "",
        header: "Apply",
        subheader: "",
        img: ""
      }
    });
  }
};
</script>