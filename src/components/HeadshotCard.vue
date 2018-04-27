<template>
   <div class="headshot-card">
     <img :src="image" class="rounded-circle" />
     <p>{{name}}</p>
   </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../main.scss";
</style>