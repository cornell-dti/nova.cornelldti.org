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

.headshot-card:hover {
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.headshot-card {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 12.5rem;
  min-width: 12.5rem;
  max-height: 18.5rem;
  height: 18.5rem;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);

  .info {
    padding: 1.25rem;
    height: 6.5rem;
    flex-grow: 1;

    .name {
      font-size: 1.125rem;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      text-align: left;
      color: #000000;
      max-width: 12rem;
    }

    .role {
      margin: 0;
      opacity: 0.5;
      font-size: 0.875rem;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      text-align: left;
      color: #000000;
    }
  }

  .image-row {
    height: 12rem;
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

