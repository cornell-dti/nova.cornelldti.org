<template>
  <section>
    <b-row class="timeline-header" align-v="center">
      <b-col class="left-col-text" sm>
        <div v-if="header" class="container-section-heading">
          {{header}}
        </div>
        <slot v-else name="header" />
      </b-col>
      <b-col cols="auto" align-self="end" v-if="rightHeader" class="right-col-text">
        {{rightHeader}}
      </b-col>
      <b-col cols="auto" align-self="end" v-else>
        <slot name="rightHeader" />
      </b-col>
    </b-row>
    <div class="timeline-content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.right-col-text {
  opacity: 0.8;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #000000;
}

.timeline-header {
  margin-bottom: 2.5rem;
}

.container-section-heading {
  font-size: 2rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #000000;
}

.timeline-content {
  padding-left: 120px;
  border-left: 0.625rem solid black;

  @media screen and (max-width: 768px) {
    padding-left: 30px;
  }
}
</style>

<script>
export default {
  props: {
    header: {
      type: String
    },
    rightHeader: {
      type: String
    }
  }
};
</script>

