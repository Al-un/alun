<template>
  <div class="contact">
    <cv-link
      :url="`mailto:${info.email}?subject=Contact from CV`"
      md-icon="email"
      >{{ info.email }}</cv-link
    >

    <cv-link :url="`tel:${info.phone}`" md-icon="local_phone">
      {{ info.phone }}
    </cv-link>

    <cv-link
      url="https://goo.gl/maps/1W5gGPXQ8UKkehrv6"
      md-icon="location_on"
      >{{ info.location }}</cv-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "./cv-link.vue";
import { CvInfo } from "@/models";

interface Props {
  info: CvInfo;
}

export default defineComponent({
  name: "cv-intro-section",
  components: { CvLink },
  props: {
    info: { type: Object, required: true },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.contact {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: multiply(al-cv-font-size-m, 0.8);

  .cv-link {
    // Lighthouse recommended to have tappable areas of 48px x 48px
    padding: 6px 0;
  }
}

@include for-tablet-portrait-up {
  .contact {
    flex-direction: row;

    .cv-link {
      padding: 0;
    }
  }
}

@include for-tablet-landscape-up {
  .contact {
    flex-direction: column;
    align-items: flex-end;
  }
}

@media print {
  .contact {
    flex-direction: column;
    align-items: flex-end;
    // line-height: multiply(al-cv-font-size-m, 1.2);

    .cv-link {
      padding: 0;

      .material-icons {
        font-size: multiply(al-cv-font-size-m, 1.4);
      }
    }
  }
}
</style>
