<template>
  <page-background>
    <nova-hero
      :header="Strings.get('hero.header', 'courses')"
      :subheader="Strings.get('hero.subheader', 'courses')"
      page="courses"
    />
    <b-container>
      <page-section>
        <b-row align-h="center" align-v="center" class="courses-row">
          <b-col sm="12" md="7" class="courses-row-img" order-md="2" order-sm="1">
            <b-img class="courses-row-image" :src="Strings.get('pages.courses.trends', 'assets')"/>
          </b-col>
          <b-col class="courses-row-content-container" sm="12" md="5" order-md="1" order="2">
            <h2 class="courses-row-content-header">{{Strings.get('content.1.header', 'courses')}}</h2>
            <div class="courses-row-content-subheader">{{Strings.get('content.1.subtitle', 'courses')}}</div>
            <p class="courses-row-content">
              {{Strings.get('content.1.description', 'courses')}}
            </p>
            <b-button class="social-button" :href="Strings.get('content.1.secondary_button.link', 'courses')">
              <GitHubIcon />
              <div class="social-button-text">
                {{Strings.get('content.1.secondary_button.title', 'courses')}}
              </div>
            </b-button>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center" class="courses-row">
          <b-col sm="12" md="5" class="courses-row-content-container" order="2">
            <h2 class="courses-row-content-header">{{Strings.get('content.2.header', 'courses')}}</h2>
            <div class="courses-row-content-subheader">{{Strings.get('content.2.subtitle', 'courses')}}</div>
            <p class="courses-row-content">
              {{Strings.get('content.2.description', 'courses')}}
            </p>
          </b-col>
          <b-col sm="12" md="7" class="courses-row-img" order-md="1" order="1">
            <b-img
              class="courses-row-image"
              :src="Strings.get('pages.courses.blueprint', 'assets')"
            />
          </b-col>
        </b-row>
      </page-section>
    </b-container>

    <dti-footer page="courses"/>
  </page-background>
</template>

<style lang="scss" scoped>
$dark-gray: #4a4a4a;
.courses-icon {
  width: 100%;
}

.courses-contact {
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
}

.courses-list-heading {
  font-size: 2.25rem;
}

.courses-row-image {
  object-fit: cover;
  max-height: 500px;
  width: 100%;
  margin: 0.25rem 0;
}

.table-header {
  font-size: 1.5rem;
  font-weight: bold;
}

.text-sm-head {
  font-size: 1.15rem;
  font-weight: bold;
}

.text-sm-left {
  font-style: italic;
  font-size: 0.9rem;
}

.courses-tier-background {
  @media screen and (max-width: 1000px) {
    display: none;
  }

  background-color: #454545;
  position: relative;
  height: 100%;
  min-width: 100%;
  overflow: hidden;
}

.courses-list {
  .col,
  div[class*='col-'] {
    font-size: 1.5625rem;
    margin: auto;
    text-align: center;
    width: 90%;
  }
}

.courses-row-image {
  object-fit: cover;
  height: 30rem;
  width: 100%;
  margin: 0.25rem 0;
}

.courses-row {
  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: -0.3px;
    text-align: left;
  }

  .courses-row-img {
    overflow: hidden;
  }

  & + .courses-row {
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

  & + .courses-row {
    margin-top: 120px;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }

  &:nth-child(even) {
    .courses-row-img {
      text-align: right;
      margin-right: auto;
    }

    .courses-row-content-container {
      padding-left: 80px;
      @media screen and (max-width: 768px) {
        padding-left: 15px;
      }
    }
  }

  &:nth-child(odd) {
    .courses-row-img {
      text-align: left;
      margin-left: auto;
    }

    .courses-row-content-container {
      padding-right: 80px;

      @media screen and (max-width: 768px) {
        padding-right: 15px;
      }
    }
  }

  .courses-row-content {
    font-weight: 500;
    letter-spacing: -0.4px;
    color: $dark-gray;
  }

  .courses-row-content-subheader {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
  }

  .courses-top {
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
    min-width: 21px;
    min-height: 25px;
    max-height: 25px;
    max-width: 30px;
  }

  .social-button-text {
    border-left: 1px solid white;
    margin-left: 15px;
    padding-left: 15px;
  }
}
</style>

<script>
import GitHubIcon from '@/assets/social/github.svg';
import ApplyIcon from '@/assets/other/apply.svg';

export default {
  components: {
    GitHubIcon,
    ApplyIcon
  }
};
</script>
