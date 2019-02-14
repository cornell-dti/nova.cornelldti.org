<template>
  <page-background>
    <nova-hero
      :header="Strings.get('hero.header', 'sponsor')"
      :subheader="Strings.get('hero.subheader', 'sponsor')"
      page="sponsor"
    />
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="2" order-sm="1">
            <b-img
              class="sponsor-row-image"
              :src="Strings.get('pages.sponsor.events.googleLunch', 'assets')"
            />
          </b-col>
          <b-col class="sponsor-row-content-container" sm="12" md="5" order-md="1" order="2">
            <h2>{{Strings.get('pitch.1.header', 'sponsor')}}</h2>
            <p class="sponsor-row-content">{{Strings.get('pitch.1.description', 'sponsor')}}</p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="5" class="sponsor-row-content-container" order-md="2" order="2">
            <h2>{{Strings.get('pitch.2.header', 'sponsor')}}</h2>
            <p class="sponsor-row-content">{{Strings.get('pitch.2.description', 'sponsor')}}</p>
          </b-col>
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="1" order="1">
            <!-- sm="1"-->
            <b-img
              class="sponsor-row-image"
              :src="Strings.get('pages.sponsor.events.infoSesh', 'assets')"
            />
          </b-col>
        </b-row>
      </page-section>
    </b-container>

    <div class="desktop-visible">
      <!-- .d-none .d-md-block-->
      <b-container fluid class="sponsor-tier-background">
        <page-section>
          <b-row>
            <b-col>
              <h2 class="sponsor-tier-heading">{{Strings.get('tiers.header', 'sponsor')}}</h2>
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
                        <b-col class="text-head">{{row.item.benefits}}</b-col>
                      </b-row>
                      <b-row>
                        <b-col class="text-left">{{ row.item.subheader}}</b-col>
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
                        <b-col>
                          <wcheck v-if="row.value" class="checkmark gold-checkmark"/>
                        </b-col>
                      </b-row>
                    </template>
                    <template slot="platinum" slot-scope="row">
                      <b-row class="platinum">
                        <b-col>
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
    </div>
    <div class="mobile-visible">
      <b-container>
        <page-section>
          <b-row>
            <b-col>
              <template>
                <div role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-btn block href="#" v-b-toggle.accordion1 class="collapse-header">
                        <span class="bronze-closed">Bronze</span>
                        <darrow class="expand_caret"/>
                      </b-btn>
                    </b-card-header>
                    <b-collapse
                      id="accordion1"
                      accordion="my-accordion"
                      role="tabpanel"
                      class="collapse-benefits"
                    >
                      <b-card-body>
                        <div class="card-text">
                          <ul id="accord-list">
                            <li
                              v-for="item in getItemsByCategory('bronze')"
                              v-bind:key="item.value"
                            >
                              <div class="mobile-benefit">{{ item.benefits }}</div>
                              <div class="mobile-subheader">{{ item.subheader }}</div>
                            </li>
                          </ul>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-btn block href="#" v-b-toggle.accordion2 class="collapse-header">
                        <span class="silver-closed">Silver</span>
                        <darrow class="expand_caret"/>
                      </b-btn>
                    </b-card-header>
                    <b-collapse
                      id="accordion2"
                      accordion="my-accordion"
                      role="tabpanel"
                      class="collapse-benefits"
                    >
                      <b-card-body>
                        <div class="card-text">
                          <ul id="accord-list">
                            <li
                              v-for="item in getItemsByCategory('silver')"
                              v-bind:key="item.value"
                            >
                              <div class="mobile-benefit">{{ item.benefits }}</div>
                              <div class="mobile-subheader">{{ item.subheader }}</div>
                            </li>
                          </ul>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-btn block href="#" v-b-toggle.accordion3 class="collapse-header">
                        <span class="gold-closed">Gold</span>
                        <darrow class="expand_caret"/>
                      </b-btn>
                    </b-card-header>
                    <b-collapse
                      id="accordion3"
                      accordion="my-accordion"
                      role="tabpanel"
                      class="collapse-benefits"
                    >
                      <b-card-body>
                        <!-- cannot have div tags within p tag, which only takes text -->
                        <div class="card-text">
                          <ul id="accord-list">
                            <li v-for="item in getItemsByCategory('gold')" v-bind:key="item.value">
                              <div class="mobile-benefit">{{ item.benefits }}</div>
                              <div class="mobile-subheader">{{ item.subheader }}</div>
                            </li>
                          </ul>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-btn block href="#" v-b-toggle.accordion4 class="collapse-header">
                        <span class="platinum-closed">Platinum</span>
                        <darrow class="expand_caret"/>
                      </b-btn>
                    </b-card-header>
                    <b-collapse
                      id="accordion4"
                      accordion="my-accordion"
                      role="tabpanel"
                      class="collapse-benefits"
                    >
                      <b-card-body>
                        <div class="card-text">
                          <ul id="accord-list">
                            <li
                              v-for="item in getItemsByCategory('platinum')"
                              v-bind:key="item.value"
                            >
                              <div class="mobile-benefit">{{ item.benefits }}</div>
                              <div class="mobile-subheader">{{ item.subheader }}</div>
                            </li>
                          </ul>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </template>
            </b-col>
          </b-row>
        </page-section>
      </b-container>
    </div>
    <b-container>
      <page-section>
        <b-row class="justify-content-center sponsor-contact">
          <h2>{{Strings.get('call-to-action.description', 'sponsor')}}</h2>
        </b-row>
        <b-row class="justify-content-center sponsor-contact">
          <b-button
            :href="(Strings.get('call-to-action.button.link', `sponsor`) || 'mailto:hello@cornelldti.org')"
          >{{Strings.get('call-to-action.button.text', 'sponsor')}}</b-button>
        </b-row>
      </page-section>
      <page-section>
        <h2 class="sponsor-list-heading">{{Strings.get('current-sponsors.header', 'sponsor')}}</h2>
        <b-row class="sponsor-list justify-content-sm-center">
          <b-col class="my-auto" sm="12" md="4">
            <b-img
              class="sponsor-icon"
              :src="Strings.get('pages.sponsor.sponsors.invision', 'assets')"
            />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img
              class="sponsor-icon"
              :src="Strings.get('pages.sponsor.sponsors.google', 'assets')"
            />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img
              class="sponsor-icon"
              :src="Strings.get('pages.sponsor.sponsors.cornell-engineering-alumni', 'assets')"
            />
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <dti-footer page="sponsor"/>
  </page-background>
</template>

<script>
import check from "@/assets/sponsor/check.svg";
import wcheck from "@/assets/sponsor/whitecheck.svg";
import Gcheck from "@/assets/sponsor/goldcheck.svg";
import Pcheck from "@/assets/sponsor/platinumcheck.svg";
import Darrow from "@/assets/sponsor/down-arrow.svg";
import barrow from "@/assets/sponsor/bronze-arrow.svg";
import garrow from "@/assets/sponsor/gold-arrow.svg";
import sarrow from "@/assets/sponsor/silver-arrow.svg";
import parrow from "@/assets/sponsor/platinum-arrow.svg";
import uarrow from "@/assets/sponsor/upArrow.svg";
import rarrow from "@/assets/sponsor/red-up-arrow.svg";

export default {
  components: {
    check,
    wcheck,
    Gcheck,
    Pcheck,
    Darrow,
    barrow,
    garrow,
    sarrow,
    parrow,
    uarrow,
    rarrow
  },
  computed: {
    //occurs after the page is loaded so you can pull from apis and other aspects of website
    items() {
      return [
        {
          benefits: this.Strings.get("tiers.sponsor.0.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.0.subheader", "sponsor"),
          bronze: true,
          silver: true,
          gold: true,
          platinum: true
          // _showDetails: true
        },
        {
          benefits: this.Strings.get("tiers.sponsor.1.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.1.subheader", "sponsor"),
          bronze: true,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: this.Strings.get("tiers.sponsor.2.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.2.subheader", "sponsor"),
          bronze: false,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: this.Strings.get("tiers.sponsor.3.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.3.subheader", "sponsor"),
          bronze: false,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: this.Strings.get("tiers.sponsor.4.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.4.subheader", "sponsor"),
          bronze: false,
          silver: false,
          gold: true,
          platinum: true
        },
        {
          benefits: this.Strings.get("tiers.sponsor.5.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.5.subheader", "sponsor"),
          bronze: false,
          silver: false,
          gold: false,
          platinum: true
        },
        {
          benefits: this.Strings.get("tiers.sponsor.6.benefit", "sponsor"),
          subheader: this.Strings.get("tiers.sponsor.6.subheader", "sponsor"),
          bronze: false,
          silver: false,
          gold: false,
          platinum: true
        }
      ];
    }
  },
  methods: {
    getItemsByCategory(category) {
      return this.items.filter(e => e[category]);
    }
  },
  data() {
    //static, better for variables that don't change (?)
    return {
      fields: ["benefits", "bronze", "silver", "gold", "platinum"],

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
.desktop-visible {
  display: unset;
  @media (min-width: 980px) {
    display: unset;
  }
}

.mobile-visible {
  display: none;

  @media (max-width: 1000px) {
    display: unset;
  }
}

.expand_caret {
  transform: scale(0.55);
  float: right;
  display: inline;
}
a[aria-expanded="true"] > .expand_caret {
  transform: scale(0.55) rotate(-180deg);
  display: inline;
}

// .red-arrow_silver {
//   transform: scale(0.55);
//   margin-left: 19.5rem;
//   display: none;
// }
// a[aria-expanded="true"] > .red-arrow_silver {
//   transform: scale(0.55);
//   display: none;
// }

:not(.collapsed) > .silver-closed {
  color: white;
}

.collapsed > .silver-closed {
  color: white;
}

:not(.collapsed) > .bronze-closed {
  color: white;
}

:not(.collapsed) > .gold-closed {
  color: white;
}

:not(.collapsed) > .platinum-closed {
  color: white;
}

.mobile-subheader {
  font-style: italic;
}

.mobile-benefit {
  font-weight: bold;
}

.collapse-header {
  background-color: #474747;
  border: 1px solid #474747;
  text-align: left;
  box-shadow: none;
  border-color: #474747;
}

.collapse-benefits {
  border: 1px solid #c7c7c7;
}

.p-1 {
  background-color: #474747;
}

.card-text {
  margin: 1em 0em;
}

.sponsor-icon {
  width: 100%;
}

.justify-content-center {
  text-align: center;
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

.text-head {
  font-size: 1.15rem;
  font-weight: bold;
}

.text-left {
  font-style: italic;
  font-size: 0.9rem;
}

.sponsor-tier-heading {
  font-size: 36px;
  color: #ffffff;
  padding: 0.5em 0.5em 0.8em 0.8em;
}

.sponsor-row-image {
  object-fit: cover;
  height: 300px;
  width: 500px;
  margin: 0.25rem 0;
}

.sponsor-tiers {
  // display: flex;
  // flex-direction: column;
  // margin: 0.15em 0.25em;
  // padding: 0.75em 0 0.75em 0;
  border-radius: 2em;
  color: #ffffff;
  min-width: 100%;
}

.table-header {
  font-size: 1.5em;
  font-weight: bold;
}

.bronze-header {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: #e7b584;
}

.silver-header {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: #e6e6e6;
}

.gold-header {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: #f2e588;
}

.platinum-header {
  font-size: 1.5em;
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
  margin: 0em 0em;
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
  margin: 0em 0em;
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
  div[class*="col-"] {
    font-size: 1.5625rem;
    margin: auto;
    text-align: center;
    width: 90%;
  }
}

.sponsor-row-image {
  object-fit: cover;
  width: 31.25rem;
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

  &:nth-child(odd) {
    text-align: left;
    h2 {
      text-align: left;
      color: #d0021b;
    }

    .sponsor-row-img {
      text-align: right;
    }

    .sponsor-row-content-container {
      @media screen and (max-width: 768px) {
        padding-right: 0.9375rem;
      }
    }
  }

  &:nth-child(even) {
    @media screen and (min-width: 768px) {
      text-align: right;

      h2 {
        text-align: right;
        color: #d0021b;
      }
    }

    .sponsor-row-img {
      text-align: left;
    }

    .sponsor-row-content-container {
      @media screen and (max-width: 768px) {
        padding-left: 0.9375rem;
        text-align: left;
        h2 {
          text-align: left;
          color: #d0021b;
        }
      }
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
</style>

