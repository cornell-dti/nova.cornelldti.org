<template>
  <page-background>
    <nova-hero :header="Strings.get('hero.header', 'sponsor')" :subheader="Strings.get('hero.subheader', 'sponsor')"
      page="sponsor" />
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <!--<b-col sm="12" md="6" class="sponsor-row-img" order-md="2" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>-->
          <b-col sm="12" md="12" order-md="1" order-sm="2">
            <h2>{{Strings.get('pitch.1.header', 'sponsor')}}</h2>
            <p class="sponsor-row-content">
              {{Strings.get('pitch.1.description', 'sponsor')}}
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <!--<b-col sm="12" md="6" class="sponsor-row-img" order-md="1" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>-->
          <b-col sm="12" md="12" class="sponsor-row-content-container" order-md="2" order-sm="2">
            <h2>{{Strings.get('pitch.2.header', 'sponsor')}}</h2>
            <p class="sponsor-row-content">
              {{Strings.get('pitch.2.description', 'sponsor')}}
            </p>
          </b-col>
        </b-row>
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

<style lang="scss" scoped>
.sponsor-icon {
  width: 100%;
}

.justify-content-center {
  text-align: center;
}
.sponsor-contact {
  h2 {
    font-size: 32px;
    font-weight: 600;
  }
}
.sponsor-list-heading {
  font-size: 36px;
}
.sponsor-list {
  .col,
  div[class*="col-"] {
    font-size: 25px;
    margin: auto;
    text-align: center;
    width: 90%;
  }
}
.sponsor-row {
  h2 {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.3px;
    text-align: left;
  }

  .sponsor-row-img {
    overflow: hidden;
  }

  & + .sponsor-row {
    margin-top: 120px;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }

  .sponsor-row-content {
    text-align: left;
  }

  &:nth-child(odd) {
    text-align: right;
    .sponsor-row-img {
      text-align: left;
    }

    .sponsor-row-content-container {
      padding-left: 80px;

      @media screen and (max-width: 768px) {
        padding-left: 15px;
      }
    }
  }

  &:nth-child(even) {
    text-align: left;

    .sponsor-row-img {
      text-align: right;
    }

    .sponsor-row-content-container {
      padding-right: 80px;

      @media screen and (max-width: 768px) {
        padding-right: 15px;
      }
    }
  }
}
.sponsor-top {
  font-size: 48px;
  text-align: center;

  h2 {
    margin-bottom: 43px;
  }

  p {
    font-size: 24px;
    letter-spacing: 0.4px;
  }
}
</style>

