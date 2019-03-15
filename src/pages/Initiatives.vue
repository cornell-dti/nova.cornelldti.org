<template>
  <page-background>
    <nova-hero
      header="Inspiring Change"
      subheader="What sets us apart from other project teams is our desire to share what we learn with other students and members of the greater Ithaca community."
      page="initiatives"
    />
    <page-section class="initiatives-main-section">
      <b-container>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="7" class="initiative-row-img" order-md="2" order-sm="1">
            <b-img
              class="initiative-row-image"
              :src="AssetStrings.get('pages.initiatives.promo.makeathon')"
            />
          </b-col>
          <b-col class="initiative-row-content-container" sm="12" md="5" order-md="1" order-sm="2">
            <div class="initiative-row-content-header">Ready, Set, Make!</div>
            <div class="initiative-row-content-subheader">Inspiring future generations.</div>
            <p class="initiative-row-content">
              Ready, Set, Make is an annual make-a-thon our team hosts for 5th and 6th grade students!
              We invite students in the local community to Cornell and how they can
              use design thinking to solve problems that they encounter. Their energy
              and creativity was contagious, and team members and kids alike were
              building incredible prototypes out of cardboard and craft supplies!
              DTI partnered with Makerspace to give an introduction to 3D printing
              using Tinkercad.
            </p>
            <b-button class="social-button" href="https://medium.com/@alice.pham/5b9033aa7a6e">
              <MediumIcon/>
              <div class="social-button-text">Read More</div>
            </b-button>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="7" class="initiative-row-img" order-md="1" order-sm="1">
            <b-img
              class="initiative-row-image"
              :src="AssetStrings.get('pages.initiatives.promo.blueprint')"
            />
          </b-col>
          <b-col sm="12" md="5" class="initiative-row-content-container" order-md="2" order-sm="2">
            <div class="initiative-row-content-header">DTI Blueprint</div>
            <div class="initiative-row-content-subheader">Fostering Mentorship.</div>
            <p class="initiative-row-content">
              DTI Blueprint is a training program designed to teach students about design and product
              thinking from team members’ own experience. Over several weeks, DTI
              team members gave workshops on concepts like user research, product
              ideation, and minimum viable products. Students formed groups and brainstormed
              a problem to solve on campus and came up with a testable solution.
            </p>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="initiative-row">
          <b-col sm="12" md="7" class="initiative-row-img" order-md="2" order-sm="1">
            <b-img
              class="initiative-row-image"
              :src="AssetStrings.get('pages.initiatives.promo.halfbaked')"
            />
          </b-col>
          <b-col sm="12" md="5" class="initiative-row-content-container" order-md="1" order-sm="2">
            <div class="initiative-row-content-header">Events &amp; Workshops</div>
            <div class="initiative-row-content-subheader">Our presence on campus.</div>
            <p class="initiative-row-content">
              We are constantly trying to find ways to expand beyond our team and help the community
              through holding workshops and events. In the past, we have held workshops
              on UX Research, building a website portfolio, and more!
            </p>
            <b-button class="social-button" href="https://www.facebook.com/cornelldti/events/">
              <FacebookIcon/>
              <div class="social-button-text">See Events</div>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </page-section>
    <dti-footer page="initiatives"/>
  </page-background>
</template>

<style lang="scss" scoped>
$dark-gray: #4a4a4a;

.initiatives-main-section {
  margin-top: 0 !important;
}

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
    margin-left: auto;
    text-align: left;

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

  .initiative-row-image {
    object-fit: cover;
    height: 30rem;
    width: 100%;
    margin: 0.25rem 0;
  }

  .initiative-row-img {
    height: 100%;
    overflow: hidden;
  }

  .initiative-row-content {
    font-weight: 500;
    letter-spacing: -0.4px;
    color: $dark-gray;
  }

  .initiative-row-content-subheader {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
  }

  .initiative-row-content-header {
    margin-bottom: 0.625rem;
    font-weight: 600;
    font-size: 2.25rem;
    letter-spacing: -0.3px;
    color: #d0021b;
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

  svg {
    fill: #fff;
  }

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

import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const AssetStrings = new StringsFrontend(new JSONStringsBackend('assets'));

export default {
  components: {
    FacebookIcon,
    MediumIcon
  },
  data() {
    return {
      AssetStrings: AssetStrings
    }
  }
};
</script>
