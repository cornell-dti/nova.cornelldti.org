<template>
  <page-background>
    <text-page-hero :bg="`url(${img('headers', 'initiatives.png')})`">
      Initiatives
    </text-page-hero>
    <b-container>
      <page-section>
        <b-row class="justify-content-center initiative-top">
          <b-col sm="12" md="10">
            <h2>Inspiring Change</h2>
            <p>
              What sets us apart from other project teams is our desire to share what we know with students
              and community members alike. Through annual makeathons, events, and workshops, we teach about
              design and technology to inspire others.
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="6" class="initiative-row-img" order-md="2" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>
          <b-col sm="12" md="6" order-md="1" order-sm="2">
            <h2>Ready, Set, Make!</h2>
            <p class="initiative-row-content">
              Cornell Design & Tech Initiative is an student project team at Cornell University dedicated to creating web
              and mobile apps that iimprove the lives around us. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our community. We are a team fo 60 developers,
              designers, blah blah blah...
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="6" class="initiative-row-img" order-md="1" order-sm="1">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>
          <b-col sm="12" md="6" class="initiative-row-content-container" order-md="2" order-sm="2">
            <h2>DTI Blueprint</h2>
            <p class="initiative-row-content">
              Cornell Design & Tech Initiative is an student project team at Cornell University dedicated to creating web and
              mobile apps that iimprove the lives around us. We are a team fo 60 developers, designers, and product managers united
              in the goal to use our skills to make a positive impact in our community. We are a team fo 60 developers, designers,
              and product managers united in the goal to use our skills to make a positive impact in our community.
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="6" class="initiative-row-content-container" order-md="1" order-sm="1">
            <h2>Events & Workshops</h2>
            <p class="initiative-row-content">
              Cornell Design & Tech Initiative is an student project team at Cornell University dedicated to creating web and mobile
              apps that iimprove the lives around us. We are a team fo 60 developers, designers, and product managers united in the goal
              to use our skills to make a positive impact in our community. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our community.
            </p>
          </b-col>
          <b-col sm="12" md="6" class="initiative-row-img" order-md="2" order-sm="2">
            <b-img height="300" width="600" blank blank-color="#777" />
          </b-col>
        </b-row>
      </page-section>
      <page-section>
        <b-row class="justify-content-center initiative-contact">
          <h2>Have an question? Or a great idea? Let us know!</h2>
        </b-row>
        <b-row class="justify-content-center initiative-contact">
          <b-button>Contact Us</b-button>
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
.initiative-contact {
  h2 {
    font-size: 32px;
    font-weight: 600;
  }
}
.initiative-list-heading {
  font-size: 36px;
}
.initiative-list {
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
.initiative-row {
  h2 {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.3px;
    text-align: left;
  }

  .initiative-row-img {
    overflow: hidden;
  }

  & + .initiative-row {
    margin-top: 120px;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }

  .initiative-row-content {
    text-align: left;
  }

  &:nth-child(odd) {
    .initiative-row-content-container {
      padding-left: 80px;

      @media screen and (max-width: 768px) {
        padding-left: 15px;
      }
    }
  }

  &:nth-child(even) {
    .initiative-row-content-container {
      padding-right: 80px;

      @media screen and (max-width: 768px) {
        padding-right: 15px;
      }
    }
  }
}
.initiative-top {
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