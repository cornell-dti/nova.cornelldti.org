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
.headshot-card {
  padding: 10px;
  margin: 5px;
  text-align: center;

  p {
    padding: 5px;
  }

  img {
    max-height: 125px;
    max-width: 125px;
    background-color: #d8d8d8;
    border: 2px solid #b9b9b9;
  }
}
</style>

