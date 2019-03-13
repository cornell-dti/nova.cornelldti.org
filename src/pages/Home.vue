<template>
  <div>
    <div class="home">
      <visual
        :video="aws(Strings.get('pages.home.hero.video', 'assets'))"
        :poster="Strings.get(`pages.home.hero.lazy`, 'assets')"
        class="home-background home-preload-background home-background-video"
        autoplay
        :fill="true"
        background="cover"
        :loop="true"
        :muted="true"
        preload="auto"
        load-video="visible"
        :load-poster="true"
      />
      <div class="home-background home-background-overlay"/>
      <b-row class="givingDay">
        <b-col>
          <h1 class="givingDayheader">Help Us Make An Impact</h1>
          <p class="givingDaytext">This <strong>Giving Day</strong>, a donation <strong>as little as $5</strong> can fund our projects,
          jumpstart our initiatives, and help our team <strong>create technology for community impact</strong>.
          </p>
          <b-button class="give" href="https://givingday.cornell.edu/campaigns/cu-design-and-tech-initiative">Give</b-button>
        </b-col>
      </b-row>
      <b-row>
          <h1 class="home-overlay-text">Cornell Design &amp; Tech Initiative
          </h1>
      </b-row>
    </div>
    <text-hero
      :header="Strings.get('text-hero.header', 'home')"
      :subheader="Strings.get('text-hero.subheader', 'home')"
    />

    <page-sublist :border-padding="true">
      <quicklink
        :link="Strings.get('quicklinks.projects.link', 'home')"
        :image="Strings.get(`pages.home.quicklinks.projects`, 'assets')"
        :header="Strings.get('quicklinks.projects.header', 'home')"
        :subheader="Strings.get('quicklinks.projects.subheader', 'home')"
      />
      <quicklink
        :link="Strings.get('quicklinks.team.link', 'home')"
        :image="Strings.get(`pages.home.quicklinks.team`, 'assets')"
        :header="Strings.get('quicklinks.team.header', 'home')"
        :subheader="Strings.get('quicklinks.team.subheader', 'home')"
      />
      <quicklink
        :link="Strings.get('quicklinks.initiatives.link', 'home')"
        :image="Strings.get(`pages.home.quicklinks.initiatives`, 'assets')"
        :header="Strings.get('quicklinks.initiatives.header', 'home')"
        :subheader="Strings.get('quicklinks.initiatives.subheader', 'home')"
      />
    </page-sublist>

    <div style="padding-bottom:2vw"/>

    <dti-footer page="home"/>
  </div>
</template>

<script>
import Quicklink from '@/components/Quicklink';

export default {
  components: {
    Quicklink
  }
};
</script>


<style lang="scss" scoped>
$hero-margin: 3vw;

.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.home-background {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &.home-preload-background {
    background-color: #000;
  }

  &.home-background-overlay {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100vw;
  }

  &.home-background-video {
    object-fit: cover;
  }
}

.givingDay{
  position: absolute;
  top: $hero-margin + 9vw;
  left: $hero-margin;
  right: $hero-margin;
  text-align: center;
}

.givingDayheader {
  font-weight: bolder;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #fff;
  font-size: 3rem;
  text-shadow: 0.125rem 0.125rem 0.3125rem black;
}

.givingDaytext{
  margin-left:27.5%;
  margin-right:27.5%;
  margin-top:1rem;
  font-weight: bolder;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #fff;
  font-size: 1rem;
  text-shadow: 0.125rem 0.125rem 0.3125rem black;
}

.give{
  min-width:8rem;
  margin-top:1.5rem;
  background-color: #FF324A;
  font-size:1.125rem;
  padding:.75rem;
  padding-left:1rem;
  padding-right:1rem;
  border-radius: .5rem;
  border-style:none;
  color:white;
  text-align:center;
}

.home-overlay-text {
  position: absolute;
  bottom: $hero-margin - 1vw;
  left: $hero-margin;
  right: $hero-margin;
  text-align: left;
  font-weight: bolder;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
}
</style>
