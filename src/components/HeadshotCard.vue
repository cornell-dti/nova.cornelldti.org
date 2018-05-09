<template>
  <b-container fluid>
    <b-row class="headshot-card" no-gutters=true>
      <b-col>
        <b-row no-gutters=true>
          <b-col>
            <img :src="image" />
          </b-col>
        </b-row>
        <b-row class="info" no-gutters=true>
          <b-col>
            <b-row no-gutters=true align-v="top">
              <h5 class="name">{{name}}</h5>
            </b-row>
            <b-row no-gutters=true align-v="bottom">
              <p class="role" v-if="role !== ''">{{role}}</p>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
      default: ''
    },
    background: {
      type: String,
      required: false,
      default: 'backed'
    }
  }
};
</script>

<style lang="scss" scoped>
.headshot-card {
  margin: 1vw;
  text-align: left;
  width: 12em;
  max-width: 12em;
  max-height: 18.5em;
 height: 18.5em;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);

  .info {
    padding: 1.1em;
    height: 6.5em;

    .name {
      margin-top: 0;
    }

    .role {
      margin: 0;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 12em;
    background-color: #d8d8d8;
  }
}
</style>

