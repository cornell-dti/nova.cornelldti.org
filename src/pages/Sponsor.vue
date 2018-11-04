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
      <page-section>
        <h2 class="sponsor-tier-heading"> {{Strings.get('sponsor-tiers.header', 'sponsor')}} </h2>
        <template>
          <div class = "sponsor-tiers">
            <!-- <tr>
            </tr> -->
          <b-table :striped="striped"
             :outlined="outlined"
             :bordered="bordered"
             :items="items" 
             :fields="fields">
               
          </b-table>
          </div>
      </template>

      </page-section>
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
export default {
  data() {
    //this.Strings.get('', '')
    //have benefits be keys and use arrays
    //have table of benefits map to an array with key '0', '1', '2'.... that contains
    //boolean
    //  {
    //  "0": {
    //    'benefit',
    //    tiers: {
    //      "silver":true;
    //    }
    //  }
    //  }
    return {
      fields: ["benefits", "bronze", "silver", "gold", "platinum"],
      items: [
        {
          benefits: "Recognition on DTI Website",
          bronze: "check",
          silver: "check",
          gold: "check",
          platinum: "check"
        },
        {
          benefits: "Campus-Wide Marketing & Publicity",
          bronze: "check",
          silver: "check",
          gold: "check", //Strings.get("pages.sponsor.sponsors.Checkmark", "assets")
          platinum: "check"
        },
        {
          benefits: "Resume Book Access",
          bronze: "not",
          silver: "check",
          gold: "check",
          platinum: "check"
        },
        {
          benefits: "Flagship Initiative Co-Sponsor",
          bronze: "not",
          silver: "check",
          gold: "check",
          platinum: "check"
        },
        {
          benefits: "Host One Standard Initiative",
          bronze: "not",
          silver: "not",
          gold: "check",
          platinum: "check"
        },
        {
          benefits: "Host Multiple Initiatives",
          bronze: "not",
          silver: "not",
          gold: "not",
          platinum: "check"
        },
        {
          benefits: "Tabling Slot in Engineering Hall",
          bronze: "not",
          silver: "not",
          gold: "not",
          platinum: "check"
        }
      ],
      striped: false,
      outlined: false,
      bordered: false
    };
  }
};
</script>

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
}

.sponsor-row-image {
  object-fit: cover;
  height: 300px;
  width: 500px;
  margin: 0.25rem 0;
}

.sponsor-tiers {
  display: flex;
  flex-direction: column;
  margin: 4em 0;
  padding: 0 1.25em 0 0.75em;
  border-radius: 2em;
  min-width: 100%;
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

