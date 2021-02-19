<template>
  <page-background v-if="content">
    <strings-domain :value="content.hero" #key="{ header, subheader, video, lazy, image}">
      <nova-hero
        :header="header"
        :subheader="subheader"
        :video="video"
        :lazy="lazy"
        :image="image"
        page="sponsor"
      />
    </strings-domain>
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="2" order-sm="1">
            <b-img class="sponsor-row-image" :src="content.events.googleLunch" />
          </b-col>
          <b-col class="sponsor-row-content-container" sm="12" md="5" order-md="1" order="2">
            <h2 class="sponsor-row-content-header">{{ content.pitch[0].header }}</h2>
            <p class="sponsor-row-content">{{ content.pitch[0].description }}</p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="5" class="sponsor-row-content-container" order="2">
            <h2>{{ content.pitch[1].header }}</h2>
            <p class="sponsor-row-content">{{ content.pitch[1].description }}</p>
          </b-col>
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="1" order="1">
            <b-img class="sponsor-row-image" :src="content.events.infoSesh" />
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <b-container fluid class="sponsor-tier-background">
      <page-section>
        <b-row>
          <b-col>
            <h2 class="sponsor-tier-heading">{{ content.tiers.header }}</h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="sponsor-tiers">
              <div class="sponsor-table">
                <b-table-lite
                  :striped="striped"
                  :outlined="outlined"
                  :bordered="bordered"
                  :dark="dark"
                  :items="items"
                  :fields="fields"
                >
                  <!-- eslint-disable vue/no-unused-vars -->
                  <template v-slot:head(benefits)>
                    <strong class="table-header">Benefits</strong>
                  </template>
                  <template v-slot:head(bronze)>
                    <div class="bronze-header">Bronze</div>
                  </template>
                  <template v-slot:head(silver)>
                    <div class="silver-header">Silver</div>
                  </template>
                  <template v-slot:head(gold)>
                    <div class="gold-header">Gold</div>
                  </template>

                  <template v-slot:head(platinum)>
                    <div class="platinum-header">Platinum</div>
                  </template>
                  <!-- eslint-enable -->

                  <template v-slot:cell(benefits)="row">
                    <b-row>
                      <b-col cols="12" class="text-sm-head">{{ row.item.benefits }}</b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12" class="text-sm-left">{{ row.item.subheader }}</b-col>
                    </b-row>
                  </template>
                  <template v-slot:cell(bronze)="row">
                    <b-row class="bronze">
                      <b-col>
                        <wcheck v-if="row.value" class="checkmark bronze-checkmark" />
                      </b-col>
                    </b-row>
                  </template>
                  <template v-slot:cell(silver)="row">
                    <b-row class="silver">
                      <b-col>
                        <wcheck v-if="row.value" class="checkmark silver-checkmark" />
                      </b-col>
                    </b-row>
                  </template>
                  <template v-slot:cell(gold)="row">
                    <b-row class="gold">
                      <b-col lg="3">
                        <wcheck v-if="row.value" class="checkmark gold-checkmark" />
                      </b-col>
                    </b-row>
                  </template>
                  <template v-slot:cell(platinum)="row">
                    <b-row class="platinum">
                      <b-col lg="3">
                        <wcheck v-if="row.value" class="checkmark" />
                      </b-col>
                    </b-row>
                  </template>
                </b-table-lite>
              </div>
            </div>
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <b-container>
      <page-section>
        <b-row class="text-center justify-content-center sponsor-contact">
          <h2>{{ content.callToAction.description }}</h2>
        </b-row>
        <b-row class="justify-content-center sponsor-contact">
          <b-button :href="content.callToAction.button.link || 'mailto:hello@cornelldti.org'">{{
            content.callToAction.button.text
          }}</b-button>
        </b-row>
      </page-section>
      <page-section>
        <h2 class="sponsor-list-heading">{{ content.currentSponsors.header }}</h2>
        <b-row class="sponsor-list justify-content-center">
          <b-col class="my-auto" sm="12" md="6">
            <b-img class="sponsor-icon" :src="content.sponsors.capitalone" />
          </b-col>
          <b-col class="my-auto" sm="12" md="6">
            <b-img class="sponsor-icon" :src="content.sponsors.cornellEngineeringAlumni" />
          </b-col>
        </b-row>
        <b-row class="sponsor-list-small justify-content-center">
          <b-col class="my-auto" sm="12" md="3">
            <b-img class="sponsor-icon" :src="content.sponsors.invision" />
          </b-col>
          <b-col class="my-auto" sm="12" md="3">
            <b-img class="sponsor-icon" :src="content.sponsors.zeplin" />
          </b-col>
          <b-col class="my-auto" sm="12" md="3">
            <b-img class="sponsor-icon" :src="content.sponsors.google" />
          </b-col>
          <b-col class="my-auto" sm="12" md="3">
            <b-img class="sponsor-icon" :src="content.sponsors.asana" />
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <dti-footer :hide-subfooter="true" page="sponsor" />
  </page-background>
</template>

<script lang="ts">
import Vue from 'vue';
import wcheck from '../assets/sponsor/whitecheck.svg';

import { SponsorContent, SponsorTier } from '../content';
import json from '../../data/pages/sponsor.json';

type SponsorTierBenefitsData = {
  benefits: string;
  subheader: string;
} & { [key in SponsorTier]: boolean };

export default Vue.extend({
  components: {
    wcheck
  },
  computed: {
    content(): SponsorContent {
      return json;
    },
    items(): SponsorTierBenefitsData[] {
      const data = this.content.tiers.sponsor;

      return data.map(tier => {
        const {
          benefit: benefits,
          subheader,
          tiers: { bronze, gold, silver, platinum }
        } = tier;

        return {
          benefits,
          subheader,
          bronze: bronze || false,
          gold: gold || false,
          silver: silver || false,
          platinum: platinum || false
        };
      });
    }
  },
  data() {
    return {
      fields: ['benefits', 'bronze', 'silver', 'gold', 'platinum'],
      striped: false,
      outlined: false,
      bordered: false,
      dark: false
    };
  }
});
</script>

<style lang="scss" scoped>
.sponsor-icon {
  width: 100%;
  margin: 0.5rem;
}

.sponsor-contact {
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
}

.sponsor-list-heading {
  font-size: 2.25rem;
}

.sponsor-tier-heading {
  font-size: 36px;
  color: #fff;
  padding: 0.5rem 0.5rem 0.8rem 0.8rem;
}

.sponsor-row-image {
  object-fit: cover;
  max-height: 500px;
  width: 100%;
  margin: 0.25rem 0;
}

.sponsor-tiers {
  .table {
    color: #fff;
  }

  border-radius: 2rem;
  color: #ffffff;
}

.table-header {
  font-size: 1.5rem;
  font-weight: bold;
}

.bronze-header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #e7b584;
}

.silver-header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #e6e6e6;
}

.gold-header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #f2e588;
}

.platinum-header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.bronze {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
  margin: auto;
}

.silver {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
  margin: auto;
}

.gold {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
  margin: auto;
}

.platinum {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
  margin: auto;
}

.text-sm-head {
  font-size: 1.15rem;
  font-weight: bold;
}

.text-sm-left {
  font-style: italic;
  font-size: 0.9rem;
}

.sponsor-tier-background {
  @media screen and (max-width: 1000px) {
    display: none;
  }

  background-color: #454545;
  position: relative;
  height: 100%;
  min-width: 100%;
  overflow: hidden;
}

.sponsor-list {
  .col,
  div[class*='col-'] {
    font-size: 1.5625rem;
    margin: auto;
    text-align: center;
    width: 90%;
  }

  margin-bottom: 6rem;
}

.sponsor-list-small {
  .col,
  div[class*='col-'] {
    font-size: 1.5625rem;
    margin: auto;
    text-align: center;
    width: 70%;
  }
}

.sponsor-row-image {
  object-fit: cover;
  height: 30rem;
  width: 100%;
  margin: 0.25rem 0;
}

.sponsor-row {
  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: -0.3px;
    text-align: left;
  }

  .sponsor-row-img {
    overflow: hidden;
  }

  & + .sponsor-row {
    margin-top: 7.5rem;

    @media screen and (max-width: 768px) {
      margin-top: 0.625rem;
    }
  }
  text-align: left;
  h2 {
    text-align: left;
    color: #d0021b;
  }

  & + .sponsor-row {
    margin-top: 120px;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }

  &:nth-child(even) {
    .sponsor-row-img {
      text-align: right;
      margin-right: auto;
    }

    .sponsor-row-content-container {
      padding-left: 80px;
      @media screen and (max-width: 768px) {
        padding-left: 15px;
      }
    }
  }

  &:nth-child(odd) {
    .sponsor-row-img {
      text-align: left;
      margin-left: auto;
    }

    .sponsor-row-content-container {
      padding-right: 80px;

      @media screen and (max-width: 768px) {
        padding-right: 15px;
      }
    }
  }

  .sponsor-top {
    font-size: 3rem;
    text-align: center;

    h2 {
      margin-bottom: 2.6875rem;
    }

    p {
      font-size: 1.5rem;
      letter-spacing: 0.025rem;
    }
  }
}
</style>

<style lang="scss">
.sponsor-tier-background {
  .sponsor-tiers {
    background-color: #454545;
  }

  .sponsor-table table th {
    border-top: none;
  }

  .sponsor-table {
    padding: 0 0.8rem;
    background-color: #454545;
    border: 1px solid #454545;

    .checkmark {
      width: 3rem;
      height: 2.5rem;
      margin-left: 2.5em;
      margin-top: 0.25em;

      path {
        fill: #ffffff;
        stroke: #ffffff;
      }

      &.bronze-checkmark path {
        fill: #deaf81;
        stroke: #deaf81;
      }
      &.silver-checkmark path {
        fill: #d3d3d3;
        stroke: #d3d3d3;
      }
      &.gold-checkmark path {
        fill: #f2e588;
        stroke: #f2e588;
      }
    }
  }
}
</style>
