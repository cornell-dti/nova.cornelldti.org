<template>
  <div :class="background === 'transparent' ? 'headshot-card' : 'headshot-card-backed'">
    <img :src="image" class="rounded-circle" />
    <h5>{{name}}</h5>
    <p v-if="role !== ''">{{role}}</p>
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
    },
    role: {
      type: String,
      required: false,
      default: ""
    },
    background: {
      type: String,
      required: false,
      default: "transparent"
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

.headshot-card-backed {
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

