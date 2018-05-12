<template>
    <b-container fluid class="footer">
        <b-row>
            <b-col sm="12" md="6">
                <b-img />

            </b-col>
            <b-col sm="12" md="6">
                <b-row>
                    <Facebook class="social-icon" />
                    <Dribbble class="social-icon" />
                    <Github class="social-icon" />
                    <GooglePlay class="social-icon-circle" />
                    <AppStore class="social-icon-circle" />
                    <Medium class="social-icon" />
                </b-row>
                <b-row>
                    <p>&copy; 2018 Cornell Design &amp; Tech Initiative</p>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import Facebook from '@/assets/social/facebook-with-circle.svg';
import Dribbble from '@/assets/social/dribbble-with-circle.svg';
import Github from '@/assets/social/github-with-circle.svg';
import GooglePlay from '@/assets/social/google-play.svg';
import AppStore from '@/assets/social/app-store.svg';
import Medium from '@/assets/social/medium-with-circle.svg';

export default {
  components: {
    AppStore,
    Facebook,
    Dribbble,
    Github,
    GooglePlay,
    Medium
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #4a4a4a;
}

.social-icon {
  width: 3rem;
  height: 3rem;
  fill: white;
}

.social-icon-circle {
  width: 3rem;
  height: 3rem;
  fill: #4a4a4a;

  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
}
</style>
