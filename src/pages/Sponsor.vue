<template>
  <page-background>
    <nova-hero header="Sponsor Our Mission" subheader="We want to partner with organizations who have a similar vision of changing the world. Together, we can work towards improving our communities with technology."
      page="sponsor" />
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="6" class="sponsor-row-img" order-md="2" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>
          <b-col sm="12" md="6" order-md="1" order-sm="2">
            <h2>Why Sponsor Us?</h2>
            <p class="sponsor-row-content">
              We want sponsors to be as invested in partnering with us as we are with them. In addition to helping make community initiatives possible, we will help organizations create diverse talent pipeline, present information sessions, conduct workshops, and help establish a presence on our campus.
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="6" class="sponsor-row-img" order-md="1" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>
          <b-col sm="12" md="6" class="sponsor-row-content-container" order-md="2" order-sm="2">
            <h2>Funding</h2>
            <p class="sponsor-row-content">
              All of the funds we receive through sponsorships is directly invested back into the team. Through user research, software licenses, community outreach, and marketing, sponsorships help us grow our vision of helping out the community through technology.
            </p>
          </b-col>
        </b-row>
      </page-section>
      <page-section>
        <b-row class="justify-content-center sponsor-contact">
          <h2>Sponsor our team to help us make community impact.</h2>
        </b-row>
        <b-row class="justify-content-center sponsor-contact">
          <b-button>Contact Us</b-button>
        </b-row>
      </page-section>
      <page-section>
        <h2 class="sponsor-list-heading">Current Sponsors</h2>
        <b-row class="sponsor-list justify-content-sm-center">
          <b-col sm="12" md="4">
            Sponsor 1
          </b-col>
          <b-col sm="12" md="4">
            Sponsor 2
          </b-col>
          <b-col sm="12" md="4">
            Sponsor 3
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <dti-footer page="sponsor" />
  </page-background>
</template>

<style lang="scss" scoped>
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
  div[class*='col-'] {
    border-radius: 32px;
    background-color: #d8d8d8;
    border: solid 1px #979797;
    height: 156px;
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
