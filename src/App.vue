<template>
  <div id="app">
    <div class="page-stack page-background">
      <base-layout class="page-stack-element">
        <dti-main-menu slot="header" />
        <transition :name="transition" slot="body">
          <router-view />
        </transition>
      </base-layout>
    </div>
  </div>
</template>

<script>
const Pages = ['Home', 'Projects', 'Initiatives', 'Team', 'Sponsor', 'Apply'];

export default {
  name: 'App',
  data() {
    return {
      transition: 'slidein'
    };
  },

  mounted() {
    // TODO clean this up
    this.$router.beforeEach((to, from, next) => {
      const toI = Pages.indexOf(to.name);
      const fromI = Pages.indexOf(from.name);

      if (toI === -1) {
        this.transition = 'slidedown';
      } else if (fromI === -1) {
        this.transition = 'slideup';
      } else if (toI > fromI) {
        this.transition = 'slidein';
      } else {
        this.transition = 'slideout';
      }

      next();
    });
  }
};
</script>

<style lang="scss">
@import './index.scss';

body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
$page-transition-duration: 0.5s;

.page-stack {
  position: relative;

  .page-stack-element {
    position: absolute;
    left: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
  }
}

@-webkit-keyframes loader {
  0% {
    width: 0.9375;
    height: 0.9375;
    opacity: 1;
    -webkit-transform: translateY(0);
  }
  100% {
    width: 2.125rem;
    height: 2.125rem;
    opacity: 0.2;
    -webkit-transform: translateY(-1.313rem);
  }
}

@keyframes loader {
  0% {
    width: 0.9375rem;
    height: 0.9375rem;
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    width: 2.125rem;
    height: 2.125rem;
    opacity: 0.2;
    transform: translateY(-1.313rem);
  }
}

.slidein-enter-active,
.slidein-leave-active,
.slideout-leave-active,
.slideout-enter-active,
.slidedown-leave-active,
.slidedown-enter-active,
.slideup-leave-active,
.slideup-enter-active {
  max-height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.slidedown-leave-active {
  // TODO: Currently is broken due to width requirements...
  //-webkit-animation: moveToBottom $page-transition-duration linear both;
  //animation: moveToBottom $page-transition-duration linear both;
}

.slidedown-enter-active {
  -webkit-animation: moveFromTop $page-transition-duration linear both;
  animation: moveFromTop $page-transition-duration linear both;
  //animation-delay: $page-transition-duration / 100;
}

.slideup-leave-active {
  // TODO: Currently is broken due to width requirements...
  -webkit-animation: moveToTop $page-transition-duration linear both;
  animation: moveToTop $page-transition-duration linear both;
}

.slideup-enter-active {
  -webkit-animation: moveFromBottom $page-transition-duration linear both;
  animation: moveFromBottom $page-transition-duration linear both;
  //animation-delay: $page-transition-duration / 100;
}

.slidein-leave-active {
  -webkit-animation: moveToLeft $page-transition-duration linear both;
  animation: moveToLeft $page-transition-duration linear both;
}

.slidein-enter-active {
  -webkit-animation: moveFromRight $page-transition-duration linear both;
  animation: moveFromRight $page-transition-duration linear both;

  // animation-delay: $page-transition-duration / 100;
}

.slideout-enter-active {
  -webkit-animation: moveFromLeft $page-transition-duration linear both;
  animation: moveFromLeft $page-transition-duration linear both;

  //animation-delay: $page-transition-duration / 100;
}

.slideout-leave-active {
  -webkit-animation: moveToRight $page-transition-duration linear both;
  //animation: moveToRight $page-transition-duration linear both;
}

@-webkit-keyframes moveToLeft {
  from {
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes moveToLeft {
  from {
  }
  to {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@-webkit-keyframes moveFromLeft {
  from {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes moveFromLeft {
  from {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@-webkit-keyframes moveToRight {
  from {
  }
  to {
    -webkit-transform: translateX(100%);
  }
}
@keyframes moveToRight {
  from {
  }
  to {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@-webkit-keyframes moveFromRight {
  from {
    -webkit-transform: translateX(100%);
  }
}
@keyframes moveFromRight {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@-webkit-keyframes moveFromTop {
  from {
    -webkit-transform: translateY(-100%);
  }
}
@keyframes moveFromTop {
  from {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@-webkit-keyframes moveToBottom {
  from {
  }
  to {
    -webkit-transform: translateY(100%);
  }
}
@keyframes moveToBottom {
  from {
  }
  to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

@-webkit-keyframes moveFromBottom {
  from {
    -webkit-transform: translateY(100%);
  }
}
@keyframes moveFromBottom {
  from {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

@-webkit-keyframes moveToTop {
  from {
  }
  to {
    -webkit-transform: translateY(-100%);
  }
}
@keyframes moveToTop {
  from {
  }
  to {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}
</style>
