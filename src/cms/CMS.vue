<template>
  <div id="nc-root" />
</template>

<script>
import './netlifyConfig';

import { VueInReact } from 'vuera';
import CMS from 'netlify-cms'; // -app/dist/esm
import Profile from './profile.jsx';

export default {
  mounted() {
    CMS.registerPreviewTemplate('member', VueInReact(Profile));
    CMS.init();

    // TODO This is a hack!
    // Essentially to fit the admin panel within the current website we have to
    // convert the "fixed" toolbar to be absolute.
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
