<template>
  <section>
    <b-row align-v="center">
      <b-col class="left-col-text" sm>
        <h1 class="container-section-heading">{{header}}
          <slot name="header" />
        </h1>
      </b-col>
      <b-col class="right-col-text" sm>
        {{rightHeader}}
        <slot name="rightHeader" />
      </b-col>
    </b-row>
    <div class="timeline-content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeline-content {
  padding-left: 120px;
  border-left: 5px solid black;

  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 22px;
  }
  p {
    font-size: 18px;
  }
  h2 + p {
    margin-top: 22px;
  }

  p + h2 {
    margin-top: 40px;
  }

  & + .row {
    margin-top: 52px;
  }

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

