<template>
  <page-background>
    <nova-hero :header="Strings.get('hero.header', 'sponsor')" :subheader="Strings.get('hero.subheader', 'sponsor')"
      page="sponsor" />
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="2" order="1">
            <b-img class="sponsor-row-image" :src="Strings.get('pages.sponsor.events.googleLunch', 'assets')"
            />
          </b-col>
          <b-col sm="12" md="5" order-md="1" order="2">
            <h2 class="sponsor-row-content-header">{{Strings.get('pitch.1.header', 'sponsor')}}</h2>
            <p class="sponsor-row-content">
              {{Strings.get('pitch.1.description', 'sponsor')}}
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="1" order-sm="2"> <!-- sm="1"-->
            <b-img class="sponsor-row-image" :src="Strings.get('pages.sponsor.events.infoSesh', 'assets')" />
          </b-col>
          <b-col sm="12" md="5" class="sponsor-row-content-container" order-md="2" order-sm="1">
          <!-- <b-col sm="12" md="5" order-md="2" order-sm="1"> -->
            <h2>{{Strings.get('pitch.2.header', 'sponsor')}}</h2>
            <p class="sponsor-row-content">
              {{Strings.get('pitch.2.description', 'sponsor')}}
            </p>
          </b-col>
          <b-col sm="12" md="7" class="sponsor-row-img" order-md="1" order="1">
            <!-- sm="1"-->
            <b-img class="sponsor-row-image" :src="Strings.get('pages.sponsor.events.infoSesh', 'assets')"
            />
          </b-col>
        </b-row> -->
      </page-section>
    </b-container>
    <b-container fluid class="sponsor-tier-background">
      <page-section>
        <b-row>
        <b-col><h2 class="sponsor-tier-heading"> {{Strings.get('tiers.header', 'sponsor')}} </h2>
        </b-col>
        </b-row>
        
        <b-row>
          <b-col>
          <div class = "sponsor-tiers">
            <!-- <tr>
            </tr> -->
            <b-container class= "sponsor-table">
          <b-table 
             :striped="striped"
             :outlined="outlined"
             :bordered="bordered"
             :dark="dark"
             :items="items" 
             :fields="fields">

              <template slot="HEAD_benefits" slot-scope="row">
                 <strong class="table-header">Benefits</strong>
               </template>
               <template slot="HEAD_bronze" slot-scope="row">
                <div class="bronze-header" >Bronze</div>
               </template>
               <template slot="HEAD_silver" slot-scope="row">
                 <div class="silver-header"> Silver</div>
               </template>
               <template slot="HEAD_gold" slot-scope="row">
                <div class="gold-header">Gold</div>
                </template>
                <template slot="HEAD_platinum" slot-scope="row">
                <div class="platinum-header">Platinum</div>
                </template>

            <!-- <template slot="row-details" slot-scope="row">
                <b-card>
                <b-row class="mb-3">
                  <b-col sm="6" class="text-sm-left">{{ row.item.subheader}}</b-col>
                </b-row>
                </b-card>
              </template> -->
            <template slot="benefits" slot-scope="row">
                <b-row >
                  <b-col cols="12" class="text-sm-head"> {{row.item.benefits}}</b-col>
                </b-row>
                <b-row > <!--try deleting class/change attributes of this class-->
                 <b-col cols="12" class="text-sm-left">{{ row.item.subheader}}</b-col>
                 </b-row>
              </template>
            <template slot="bronze" slot-scope="row">
                <b-row class="bronze">
              <b-col > <wcheck  v-if="row.value" class="bronze-checkmark"/>  </b-col>
              </b-row>
            </template>
            <template slot="silver" slot-scope="row">
               <b-row class="silver">
               <b-col > <wcheck  v-if="row.value" class="silver-checkmark"/> </b-col>
               </b-row>
            </template>
            <template slot="gold" slot-scope="row">
               <b-row class="gold">
               <b-col lg= "3"> <wcheck  v-if="row.value" class="gold-checkmark"/> </b-col>
               </b-row>
            </template>
            <template slot="platinum" slot-scope="row">
               <b-row class="platinum">
               <b-col lg= "3" ><wcheck  v-if="row.value" class="checkmark"/> </b-col>
               </b-row>
            </template>
          </b-table>
            </b-container>
          </div>
          </b-col>
        </b-row>
      </page-section>
      </b-container>
    <b-container>
      <page-section>
        <b-row class="justify-content-center sponsor-contact">
          <h2> {{Strings.get('call-to-action.description', 'sponsor')}}
          </h2>
        </b-row>
        <b-row class="justify-content-center sponsor-contact">
          <b-button :href="(Strings.get('call-to-action.button.link', `sponsor`) || 'mailto:hello@cornelldti.org')">
            {{Strings.get('call-to-action.button.text', 'sponsor')}}
          </b-button>
        </b-row>
      </page-section>
      <page-section>
        <h2 class="sponsor-list-heading"> {{Strings.get('current-sponsors.header', 'sponsor')}}
        </h2>
        <b-row class="sponsor-list justify-content-sm-center">
          <b-col class="my-auto" sm="12" md="4">
            <b-img class="sponsor-icon" :src="Strings.get('pages.sponsor.sponsors.invision', 'assets')"
            />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img class="sponsor-icon" :src="Strings.get('pages.sponsor.sponsors.google', 'assets')"
            />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img class="sponsor-icon" :src="Strings.get('pages.sponsor.sponsors.cornell-engineering-alumni', 'assets')"
            />
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <dti-footer page="sponsor" />
  </page-background>
</template>

<script>
import check from "@/assets/sponsor/check.svg";
import wcheck from "@/assets/sponsor/whitecheck.svg";
import Gcheck from "@/assets/sponsor/goldcheck.svg";
import Pcheck from "@/assets/sponsor/platinumcheck.svg";

export default {
  components: {
    check,
    wcheck,
    Gcheck,
    Pcheck
  },
  computed: {
    //occurs after the page is loaded so you can pull from apis and other aspects of website
    items() {
      return [
        {
          benefits: "Recognition on DTI Website",
          subheader: this.Strings.get("tiers.sponsor.0.subheader", "sponsor"),
          bronze: true,
          silver: true,
          gold: true,
          platinum: true
          // _showDetails: true
        },
        {
          benefits: "Campus-Wide Marketing & Publicity",
          subheader: this.Strings.get("tiers.sponsor.1.subheader", "sponsor"),
          bronze: true,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: "Resume Book Access",
          subheader: this.Strings.get("tiers.sponsor.2.subheader", "sponsor"),
          bronze: false,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: "Flagship Initiative Co-Sponsor",
          subheader: this.Strings.get("tiers.sponsor.3.subheader", "sponsor"),
          bronze: false,
          silver: true,
          gold: true,
          platinum: true
        },
        {
          benefits: "Host One Standard Initiative",
          subheader: this.Strings.get("tiers.sponsor.4.subheader", "sponsor"),
          bronze: false,
          silver: false,
          gold: true,
          platinum: true
        },
        {
          benefits: "Host Multiple Initiatives",
          subheader: this.Strings.get("tiers.sponsor.5.subheader", "sponsor"),
          bronze: false,
          silver: false,
          gold: false,
          platinum: true
        },
        {
          benefits: "Tabling Slot in Engineering Hall",
          subheader: this.Strings.get("tiers.sponsor.6.subheader", "sponsor"),
          bronze: false,
          silver: false,
          gold: false,
          platinum: true
        }
      ];
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
.sponsor-tier-background .sponsor-tiers {
  background-color: #454545;
}

.sponsor-tier-background .sponsor-table {
  background-color: #454545;
  border: 1px solid #454545;
}

.sponsor-tier-background .sponsor-table table th {
  border-top: none;
}

.sponsor-tier-background .bronze-checkmark {
  width: 3rem;
  height: 2.5rem;
  margin-left: 2.5em;
  margin-top: 0.25em;
  path {
    fill: #deaf81;
    stroke: #deaf81;
  }
}

.sponsor-tier-background .silver-checkmark {
  width: 3rem;
  height: 2.5rem;
  margin-left: 2.5em;
  margin-top: 0.25em;
  path {
    fill: #d3d3d3;
    stroke: #d3d3d3;
  }
}

.sponsor-tier-background .gold-checkmark {
  width: 3rem;
  height: 2.5rem;
  margin-left: 2.5em;
  margin-top: 0.25em;
  path {
    fill: #f2e588;
    stroke: #f2e588;
  }
}

.sponsor-tier-background .checkmark {
  width: 3rem;
  height: 2.5rem;
  margin-left: 2.5em;
  margin-top: 0.25em;
  path {
    fill: #ffffff;
    stroke: #ffffff;
  }

  // @media (max-width: 767px) {
  //   margin-top: 1.5rem;
  //   margin-bottom: 0.5rem;
  // }

  // &.social-icon-blank {
  //   fill: white;
  // }

  // &.social-icon-circle {
  //   fill: #4a4a4a;
  //   background-color: white;
  //   border-radius: 50%;
  //   padding: 0.5rem;
  // }
}
</style>

<style lang="scss" scoped>
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
  // min-width: 100%;
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

.text-sm-head {
  font-size: 1.15em;
  font-weight: bold;
}

.text-sm-left {
  font-style: italic;
  font-size: 0.9em;
}

.sponsor-tier-background {
  //#4a4a4a
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
  width: 31.25rem;
  margin: 0.25rem 0;
}

.sponsor-row {
  .sponsor-row-content-header {
    padding-top: 1rem;
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

  &:nth-child(odd) {
    .sponsor-row-content-header {
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
      }
    }

    h2 {
      color: #d0021b;
    }

    .sponsor-row-img {
      text-align: left;
    }

    .sponsor-row-content-container {
      //padding-left: 80px;

      @media screen and (max-width: 768px) {
        padding-left: 0.9375rem;
      }
    }
  }
}
.sponsor-top {
  font-size: 48px;
  text-align: center;

  h2 {
    margin-bottom: 2.6875rem;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 0.4px;
  }
}
</style>

