<template>
  <footer class="al-cv-page-footer">
    <div class="content">
      <p>
        {{ "footer.code-hosted" | i18n }}
        <cv-link url="https://github.com/Al-un/alun-cv">Github</cv-link>
        {{ "footer.code-deployed" | i18n }}
        <cv-link url="https://surge.sh/">Surge.sh</cv-link>.
      </p>
      <p>
        {{ "footer.code-tested" | i18n }}
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "./elements/cv-link.vue";

export default defineComponent({
  name: "cv-page-footer",
  components: { CvLink },
  props: {},

  setup() {
    return {};
  },
});
</script>

<style lang="scss">
// Footer colours are invariant
.al-cv-page-footer {
  background-color: #393939;
  color: #ffffff;
  padding: multiply(al-cv-base-size, 0.5) 0px;

  .cv-link {
    color: #ffffff;
  }

  .content {
    min-height: multiply(al-cv-base-size, 3);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
