import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";

import App from "./App.vue";
import "./styles/main.scss";
import "./registerServiceWorker";
import router from "./router";

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

import I18nPlugin from "@/plugins/i18n";
import { getLanguage } from "./utils/i18n";
import { en, fr } from "@/i18n";

Vue.use(I18nPlugin, {
  supportedLanguages: ["en", "fr"],
  langLoader: getLanguage,
  sources: { en: [en], fr: [fr] },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
