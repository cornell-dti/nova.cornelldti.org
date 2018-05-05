// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import DtiMainMenu from "./components/DtiMainMenu";

import BaseLayout from "./components/BaseLayout";
import StoreBadge from "./components/StoreBadge";
import DataJson from "./data.json";

Vue.use(BootstrapVue);

Vue.component("BaseLayout", BaseLayout);
Vue.component("DtiMainMenu", DtiMainMenu);
Vue.component("StoreBadge", StoreBadge);

Vue.mixin({
  data() {
    return {
      ipsumText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit sapien at nibh iaculis condimentum. Nam non laoreet lorem. Vivamus sed maximus risus. Etiam eu dolor a turpis finibus bibendum. Nullam aliquam quam in felis commodo, ut luctus metus commodo. Duis gravida nibh vitae fermentum feugiat. Aenean leo sem, tincidunt dignissim felis vel, gravida consectetur tellus. Phasellus ex nulla, convallis quis eleifend non, dignissim eu metus. Sed iaculis, augue at volutpat interdum, ligula ante dignissim quam, vel imperdiet neque mauris sit amet sem. Vivamus facilisis mauris volutpat, luctus mi lacinia, congue justo.
    Ut sit amet felis a justo rutrum dapibus. Nulla facilisis dolor ac consequat hendrerit. Donec tempor consequat neque sit amet rhoncus. Fusce molestie sollicitudin vestibulum. Aenean ac nibh at diam elementum venenatis id vestibulum dolor. In ante odio, tincidunt quis feugiat sit amet, iaculis vel tellus. Praesent quis dolor ut dui dapibus rutrum. Nam tempor sed libero nec semper. Etiam mauris ligula, porttitor a metus vehicula, pretium dictum tellus.
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis fringilla diam, vitae accumsan dolor. In blandit sed massa a aliquet. In in efficitur magna. Donec nisl arcu, sagittis ac vehicula in, faucibus vitae eros. Ut aliquam non neque quis tempus. Mauris et mattis purus.
    Curabitur pretium blandit ullamcorper. Donec pretium ex ac libero feugiat consectetur eget vitae ex. Donec a pharetra turpis, ac posuere ipsum. Nam mattis, sapien nec mattis venenatis, dolor ex interdum felis, ac feugiat nulla magna non risus. Integer vel nulla vitae arcu sagittis scelerisque. Aliquam erat volutpat. Donec vitae imperdiet felis. Ut sagittis auctor quam in convallis. Donec ut turpis et enim imperdiet venenatis. Proin gravida, ipsum id cursus bibendum, sem velit congue tortor, id scelerisque risus lectus nec purus. Morbi sodales sapien nulla, eget gravida tortor tempus nec. In at nibh lorem. Etiam fringilla placerat lorem, id aliquam lacus luctus vitae. Suspendisse congue lorem sed pretium rhoncus. Nam elementum, diam ut imperdiet lacinia, lorem ligula ornare elit, in pulvinar mauris nisl et odio.`
    };
  },
  methods: {
    ipsum(text, amount = 50) {
      if (typeof text === "undefined" || text === null || text === "") {
        return `${this.ipsumText.substr(
          0,
          Math.min(amount, this.ipsumText.length - 1)
        )}...`;
      }

      return text;
    },
    img(imagePath) {
      return "/static/" + imagePath; //eslint-disable-line
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  data: DataJson
});
