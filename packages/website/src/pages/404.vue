<template>
  <page-background>
    <text-page-hero style="height: 100vh;">
      <b-container>
        <b-row>
          <b-col>
            <h2>Whoops... it doesn't look like this page exists.</h2>
            <br />
            <b-button to="/">Go Home</b-button>
          </b-col>
        </b-row>
      </b-container>
    </text-page-hero>
  </page-background>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  metaInfo: {
    title: 'Not Found'
  }
});
</script>
