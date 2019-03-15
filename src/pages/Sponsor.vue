<template>
  <page-background>
    <nova-hero
      :header="Strings.get('hero.header')"
      :subheader="Strings.get('hero.subheader')"
      page="sponsor"
    />
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="2" order-sm="1">
            <b-img
              class="sponsor-row-image"
              :src="AssetStrings.get('pages.sponsor.events.googleLunch')"
            />
          </b-col>
          <b-col class="sponsor-row-content-container" sm="12" md="5" order-md="1" order="2">
            <h2 class="sponsor-row-content-header">{{Strings.get('pitch.1.header')}}</h2>
            <p class="sponsor-row-content">{{Strings.get('pitch.1.description')}}</p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="5" class="sponsor-row-content-container" order="2">
            <h2>{{Strings.get('pitch.2.header')}}</h2>
            <p class="sponsor-row-content">{{Strings.get('pitch.2.description')}}</p>
          </b-col>
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="1" order="1">
            <b-img
              class="sponsor-row-image"
              :src="AssetStrings.get('pages.sponsor.events.infoSesh')"
            />
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <b-container fluid class="sponsor-tier-background">
      <page-section>
        <b-row>
          <b-col>
            <h2 class="sponsor-tier-heading">{{Strings.get('tiers.header')}}</h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="sponsor-tiers">
              <div class="sponsor-table">
                <b-table
                  :striped="striped"
                  :outlined="outlined"
                  :bordered="bordered"
                  :dark="dark"
                  :items="items"
                  :fields="fields"
                >
                  <template slot="HEAD_benefits">
                    <strong class="table-header">Benefits</strong>
                  </template>
                  <template slot="HEAD_bronze">
                    <div class="bronze-header">Bronze</div>
                  </template>
                  <template slot="HEAD_silver">
                    <div class="silver-header">Silver</div>
                  </template>
                  <template slot="HEAD_gold">
                    <div class="gold-header">Gold</div>
                  </template>
                  <template slot="HEAD_platinum">
                    <div class="platinum-header">Platinum</div>
                  </template>

                  <template slot="benefits" slot-scope="row">
                    <b-row>
                      <b-col cols="12" class="text-sm-head">{{row.item.benefits}}</b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12" class="text-sm-left">{{ row.item.subheader}}</b-col>
                    </b-row>
                  </template>
                  <template slot="bronze" slot-scope="row">
                    <b-row class="bronze">
                      <b-col>
                        <wcheck v-if="row.value" class="checkmark bronze-checkmark"/>
                      </b-col>
                    </b-row>
                  </template>
                  <template slot="silver" slot-scope="row">
                    <b-row class="silver">
                      <b-col>
                        <wcheck v-if="row.value" class="checkmark silver-checkmark"/>
                      </b-col>
                    </b-row>
                  </template>
                  <template slot="gold" slot-scope="row">
                    <b-row class="gold">
                      <b-col lg="3">
                        <wcheck v-if="row.value" class="checkmark gold-checkmark"/>
                      </b-col>
                    </b-row>
                  </template>
                  <template slot="platinum" slot-scope="row">
                    <b-row class="platinum">
                      <b-col lg="3">
                        <wcheck v-if="row.value" class="checkmark"/>
                      </b-col>
                    </b-row>
                  </template>
                </b-table>
              </div>
            </div>
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <b-container>
      <page-section>
        <b-row class="text-center justify-content-center sponsor-contact">
          <h2>{{Strings.get('call-to-action.description')}}</h2>
        </b-row>
        <b-row class="justify-content-center sponsor-contact">
          <b-button
            :href="(Strings.get('call-to-action.button.link', `sponsor`) || 'mailto:hello@cornelldti.org')"
          >{{Strings.get('call-to-action.button.text')}}</b-button>
        </b-row>
      </page-section>
      <page-section>
        <h2 class="sponsor-list-heading">{{Strings.get('current-sponsors.header')}}</h2>
        <b-row class="sponsor-list justify-content-center">
          <b-col class="my-auto" sm="12" md="4">
            <b-img
              class="sponsor-icon"
              :src="AssetStrings.get('pages.sponsor.sponsors.invision')"
            />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img
              class="sponsor-icon"
              :src="AssetStrings.get('pages.sponsor.sponsors.google')"
            />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img
              class="sponsor-icon"
              :src="AssetStrings.get('pages.sponsor.sponsors.cornell-engineering-alumni')"
            />
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <dti-footer page="sponsor"/>
  </page-background>
</template>

<script>
import check from '@/assets/sponsor/check.svg';
import wcheck from '@/assets/sponsor/whitecheck.svg';
import Gcheck from '@/assets/sponsor/goldcheck.svg';
import Pcheck from '@/assets/sponsor/platinumcheck.svg';

import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const Strings = new StringsFrontend(new JSONStringsBackend('sponsor'));
const AssetStrings = new StringsFrontend(new JSONStringsBackend('assets'));

export default {
  components: {
    check,
    wcheck,
    Gcheck,
    Pcheck,
  },
  computed: {
    items() {
      return [
        {
          benefits: 'Recognition on DTI Website',
          subheader: Strings.get('tiers.sponsor.0.subheader'),
          bronze: true,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: 'Campus-Wide Marketing & Publicity',
          subheader: Strings.get('tiers.sponsor.1.subheader'),
          bronze: true,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: 'Resume Book Access',
          subheader: Strings.get('tiers.sponsor.2.subheader'),
          bronze: false,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: 'Flagship Initiative Co-Sponsor',
          subheader: Strings.get('tiers.sponsor.3.subheader'),
          bronze: false,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: 'Host One Standard Initiative',
          subheader: Strings.get('tiers.sponsor.4.subheader'),
          bronze: false,
          silver: false,
          gold: true,
          platinum: true
        },
        {
          benefits: 'Host Multiple Initiatives',
          subheader: Strings.get('tiers.sponsor.5.subheader'),
          bronze: false,
          silver: false,
          gold: false,
          platinum: true
        },
        {
          benefits: 'Tabling Slot in Engineering Hall',
          subheader: Strings.get('tiers.sponsor.6.subheader'),
          bronze: false,
          silver: false,
          gold: false,
          platinum: true
        }
      ];
    }
  },
  data() {
    return {
      Strings: Strings,
      AssetStrings: AssetStrings,
      fields: ['benefits', 'bronze', 'silver', 'gold', 'platinum'],

      striped: false,
      outlined: false,
      bordered: false,
      dark: false
    };
  }
};
</script>

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

<style lang="scss" scoped>
.sponsor-icon {
  width: 100%;
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
}

.silver {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
  margin: 0;
}

.gold {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
}

.platinum {
  background-color: #454545;
  width: 10.5rem;
  height: 3.5rem;
  margin: 0;
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

