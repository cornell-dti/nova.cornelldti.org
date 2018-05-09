<template>
  <div class="headshot-card-padding">
    <b-row class="headshot-card no-gutters">
      <b-col>
        <b-row class="image-row no-gutters">
          <b-col>
            <img :src="image" />
          </b-col>
        </b-row>
        <b-row class="info no-gutters">
          <b-col>
            <b-row class="h-75 no-gutters" align-v="start">
              <b-col align-self="start">
                <div class="name">{{name}}</div>
              </b-col>
            </b-row>
            <b-row class="h-25 no-gutters">
              <b-col align-self="end">
                <div class="role" v-if="role !== ''">{{role}}</div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
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
.headshot-card-padding {
  padding: 2vh 1vw;
}

.headshot-card {
  text-align: left;
  width: 100%;
  min-width: 8em;
  max-height: 17em;
  height: 17em;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);

  .info {
    padding: 0.75em;
    height: 40%;
    flex-grow: 1;

    .name {
      margin-top: 0;
      font-size: 1.2em;
      line-height: 1.2em;
    }

    .role {
      margin: 0;
      font-size: 0.8em;
      line-height: 0.8em;
      color: #777;
    }

    .role-row {
      flex-grow: 1;
    }
  }

  .image-row {
    height: 59.5%;
    overflow: hidden;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-color: #d8d8d8;
  }
}
</style>

