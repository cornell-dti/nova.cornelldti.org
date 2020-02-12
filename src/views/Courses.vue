<template>
  <page-background>
    <strings
      :strings="['hero', 'content']"
      #strings="[{ header, subheader, video, lazy, image}, contents]"
    >
      <nova-hero
        :header="header"
        :subheader="subheader"
        :video="video"
        :lazy="lazy"
        :image="image"
        page="courses"
      />

      <b-container>
        <page-section>
          <template
            v-for="{ content, order } of contents.map(function(c, i) {
              return {
                content: c,
                order: 2 - (i % 2)
              };
            })"
          >
            <b-row :key="content.id" align-h="center" align-v="center" class="courses-row">
              <b-col cols="12" lg="7" class="courses-row-img" :order-lg="order" order="1">
                <b-img class="courses-row-image" :src="content.image" />
              </b-col>
              <b-col
                class="courses-row-content-container"
                cols="12"
                lg="5"
                :order-lg="(order % 2) + 1"
                order="2"
              >
                <h2 class="courses-row-content-header">{{ content.header }}</h2>
                <div class="courses-row-content-subheader">
                  {{ content.subtitle }}
                </div>
                <p class="courses-row-content">{{ content.description }}</p>
                <strings-domain
                  v-if="content.buttons"
                  #key="{apply, github}"
                  :value="content.buttons"
                >
                  <b-button v-if="apply" class="social-button" :href="apply.link">
                    <ApplyIcon />
                    <div class="social-button-text">
                      {{ apply.title || '' }}
                    </div>
                  </b-button>
                  <b-button v-if="github" class="social-button" :href="github.link">
                    <GitHubIcon />
                    <div class="social-button-text">
                      {{ github.title || '' }}
                    </div>
                  </b-button>
                </strings-domain>
              </b-col>
            </b-row>
          </template>
        </page-section>
      </b-container>
    </strings>
    <dti-footer page="courses" />
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

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';
import GitHubIcon from '@/assets/social/github.svg';
import ApplyIcon from '@/assets/other/apply.svg';

import Strings from '@/strings/strings';

export default Vue.extend({
  metaInfo: {
    title: 'Courses'
  },
  props: {
    Strings: {
      required: true
    } as PropValidator<Strings>
  },
  components: {
    GitHubIcon,
    ApplyIcon
  }
});
</script>
