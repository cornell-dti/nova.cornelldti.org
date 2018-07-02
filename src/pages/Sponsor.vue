<template>
  <page-background>
    <text-page-hero :bg="img('headers', 'sponsor.png')">
      Sponsor
    </text-page-hero>

    <b-container>
      <page-section>
        <b-row class="justify-content-center sponsor-top">
          <b-col sm="12" md="10">
            <h2>Sponsor Us</h2>
            <p>
              We are Cornell Design & Tech Initiative. But indivdually, we are a talented, diverse group
              of students from different colleges and countries striving to make a difference in our community.
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="sponsor-row">
          <b-col sm="12" md="6" class="sponsor-row-img" order-md="2" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>
          <b-col sm="12" md="6" order-md="1" order-sm="2">
            <h2>Mentorship</h2>
            <p class="sponsor-row-content">
              Cornell Design & Tech Initiative is an student project team at Cornell University dedicated
              to creating web and mobile apps that improve the lives around us. We are a team of 60
              developers, designers, and product managers united in the goal to use our skills to make
              a positive impact in our community.
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
              Cornell Design & Tech Initiative is an student project team at Cornell University dedicated
              to creating web and mobile apps that improve the lives around us. We are a team of 60
              developers, designers, and product managers united in the goal to use our skills to make
              a positive impact in our community.
            </p>
          </b-col>
        </b-row>
      </page-section>
      <page-section>
        <b-row class="justify-content-center sponsor-contact">
          <h2>Sponsor an event, workshop or our team to help us make community impact.</h2>
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
    <dti-footer />
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
  .col, div[class*="col-"] {
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
    .sponsor-row-content-container {
      padding-left: 80px;

      @media screen and (max-width: 768px) {
        padding-left: 15px;
      }
    }
  }

  &:nth-child(even) {
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

