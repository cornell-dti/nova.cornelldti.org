<template>
  <page-background>
    <nova-hero
      :header="Strings.get('hero.header')"
      :subheader="Strings.get('hero.subheader')"
      :video="Strings.get(`hero.video`)"
      :lazy="Strings.get(`hero.lazy`)"
      :image="Strings.get(`hero.image`)"
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
            <h2 class="sponsor-tier-heading">{{ Strings.get('tiers.header') }}</h2>
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
                  <template v-slot:head(benefits)="row">
                    <strong class="table-header">Benefits</strong>
                  </template>
                  <template v-slot:head(bronze)="row">
                    <div class="bronze-header">Bronze</div>
                  </template>
                  <template v-slot:head(silver)="row">
                    <div class="silver-header">Silver</div>
                  </template>
                  <template v-slot:head(gold)="row">
                    <div class="gold-header">Gold</div>
                  </template>
                  <template v-slot:head(platinum)="row">
                    <div class="platinum-header">Platinum</div>
                  </template>

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
            <b-img class="sponsor-icon" :src="AssetStrings.get('pages.sponsor.sponsors.invision')" />
          </b-col>
          <b-col class="my-auto" sm="12" md="4">
            <b-img class="sponsor-icon" :src="AssetStrings.get('pages.sponsor.sponsors.google')" />
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
    <dti-footer :hide-subfooter="true" page="sponsor" />
  </page-background>
</template>

<script>
import wcheck from '@/assets/sponsor/whitecheck.svg';

export default {
  components: {
    wcheck
  },
  computed: {
    items() {
      const data = this.Strings.get('tiers.sponsor');

      return data.map(d =>
        Object.assign(
          {
            benefits: d.benefit,
            subheader: d.subheader
          },
          d.tiers
        )
      );
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
};
</script>

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
