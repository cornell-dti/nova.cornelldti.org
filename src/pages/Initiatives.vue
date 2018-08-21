<template>
  <page-background>
    <nova-hero header="Inspiring Change" subheader="What sets us apart from other project teams is our desire to share what we know with
              students and community members alike. Through annual makeathons, events, and workshops,
              we teach about design and technology to inspire others." page="initiatives"
    />
    <page-section>
      <b-container>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col  align-h="left" sm="12" md="6" class="initiative-row-img" order-md="2" order-sm="1">
            <b-img height="300" :src="Strings.get('promo.makeathon', 'assets')" />
          </b-col>
          <b-col sm="12" md="6" order-md="1" order-sm="2">
            <h2>Ready, Set, Make!</h2>
            <h3>Inspiring future generations.</h3>
            <p class="initiative-row-content">
              Cornell Design &amp; Tech Initiative is an student project team at Cornell University
              dedicated to creating web and mobile apps that iimprove the lives around
              us. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our
              community. We are a team fo 60 developers, designers, blah blah blah...
            </p>
            <b-button class="social-button" href="https://google.com">
              <MediumIcon />
              <div class="social-button-text">
                Read More
              </div>
            </b-button>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col align-h="left" sm="12" md="6" class="initiative-row-img" order-md="1" order-sm="1">
            <b-img height="300" :src="Strings.get('promo.blueprint', 'assets')" />
          </b-col>
          <b-col sm="12" md="6" class="initiative-row-content-container" order-md="2" order-sm="2">
            <h2>DTI Blueprint</h2>
            <h3>Fostering Mentorship.</h3>
            <p class="initiative-row-content">
              Cornell Design &amp; Tech Initiative is an student project team at Cornell University
              dedicated to creating web and mobile apps that iimprove the lives around
              us. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our
              community. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our
              community.
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="6" class="initiative-row-content-container" order-md="1" order-sm="2">
            <h2>Events &amp; Workshops</h2>
            <p class="initiative-row-content">
              Cornell Design &amp; Tech Initiative is an student project team at Cornell University
              dedicated to creating web and mobile apps that iimprove the lives around
              us. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our
              community. We are a team fo 60 developers, designers, and product managers
              united in the goal to use our skills to make a positive impact in our
              community.
            </p>
            <b-button class="social-button" href="https://facebook.com">
              <FacebookIcon />
              <div class="social-button-text">
                See Events
              </div>
            </b-button>
          </b-col>
          <b-col  align-h="right" sm="12" md="6" class="initiative-row-img" order-md="2" order-sm="1">
            <b-img height="300" :src="Strings.get('promo.halfbaked', 'assets')" />
          </b-col>
        </b-row>
      </b-container>
    </page-section>
    <dti-footer />
  </page-background>
</template>

<style lang="scss" scoped>
$dark-gray: #4a4a4a;
.initiatives-hero {
  height: 80vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
.justify-content-center {
  text-align: center;
}
.initiative-contact {
  h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .btn {
    background-color: $dark-gray;
    border-radius: 10px;
  }
}
.initiative-list-heading {
  font-size: 36px;
}
.initiative-list {
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

// A row representing one initiative
.initiative-row {
  & + .initiative-row {
    margin-top: 120px;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }

  // Odd rows (right aligned)
  &:nth-child(even) {
    text-align: right;

    .initiative-row-img {
      text-align: left;
    }

    .initiative-row-content-container {
      padding-left: 80px;

      @media screen and (max-width: 768px) {
        padding-left: 15px;
      }
    }
  }

  // Even rows (left aligned)
  &:nth-child(odd) {
    text-align: left;

    img {
      text-align: right;
    }

    .initiative-row-content-container {
      padding-right: 80px;

      @media screen and (max-width: 768px) {
        padding-right: 15px;
      }
    }
  }

  h2,
  h3 {
    font-weight: bold;
  }
  h2 {
    font-size: 36px;
    letter-spacing: -0.3px;
  }
  h3 {
    font-size: 24px;
    letter-spacing: -0.4px;
    color: $dark-gray;
  }

  .initiative-row-img {
    overflow: hidden;
  }

  .initiative-row-content {
    font-weight: 500;
    letter-spacing: -0.4px;
    color: $dark-gray;
  }
}

// The top of the page
.initiative-top {
  text-align: center;

  h2 {
    font-family: Raleway;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.4px;
    margin-bottom: 43px;
  }

  p {
    font-size: 24px;
    letter-spacing: 0.4px;
  }
}

// Social media buttons
.social-button {
  align-items: center;
  background-color: $dark-gray;
  border-radius: 10px;
  font-size: 1.17em;
  display: inline-flex;
  margin: 28px 0;
  justify-content: center;
  padding: 10px 15px;

  .social-button-text {
    border-left: 1px solid white;
    margin-left: 15px;
    padding-left: 15px;
  }
}
</style>

<script>
import FacebookIcon from '@/assets/social/facebook-white.svg';
import MediumIcon from '@/assets/social/medium-white-m.svg';

export default {
  components: {
    FacebookIcon,
    MediumIcon
  }
};
</script>
