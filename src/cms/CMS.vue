<template>
  <div id="nc-root" />
</template>

<script>
import './netlifyConfig';

import { VueInReact } from 'vuera';
import CMS from 'netlify-cms'; // -app/dist/esm
import Profile from './previews/profile.jsx';
import ApplyPage from './previews/apply';

export default {
  mounted() {
    CMS.registerPreviewTemplate('member', VueInReact(Profile));
    CMS.registerPreviewTemplate('page-apply', VueInReact(ApplyPage));
    CMS.init();
  }
};
</script>

<style lang="scss">
.navbar-dti {
  display: none;
}

#nc-root {
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>
