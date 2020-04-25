<template>
  <page-background>
    <div class="privacy-container">
      <b-container fluid>
        <b-row>
          <b-col>
            <div class="privacy-header">
              <h1>{{ content.header }}</h1>
              <p>{{ content.subheader }}</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card class="fill-margins" no-body>
              <b-tabs class="privacy-tabs height-fill" pills fill card vertical>
                <b-tab v-for="policy in policies" :key="policy.id" :title="policy.name">
                  <div v-html="policy.content" />
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </page-background>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

import { PrivacyContent, PrivacyPolicy } from '@/content';

export default Vue.extend({
  props: {
    content: {
      required: true
    } as PropValidator<PrivacyContent>,
    policies: {
      required: true
    } as PropValidator<PrivacyPolicy[]>
  }
});
</script>

<style lang="scss">
// Prevents a double-scrollbar on Windows/Linux systems
html {
  overflow-y: auto;
}
</style>

<style lang="scss">
.privacy-container {
  overflow: hidden;
  height: 100vh;
}

.privacy-header {
  padding: 20px;
  height: 18vh;
}

.privacy-tabs {
  .tab-content {
    overflow-y: scroll;
    height: 82vh;
  }

  > .col-auto {
    overflow-y: auto;
    height: 82vh;

    .nav {
      padding: 20px;
    }
  }
}

.height-fill {
  height: 100vh;
}

.fill-margins {
  margin-left: -15px;
  margin-right: -15px;
}
</style>
