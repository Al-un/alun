<template>
  <div class="al-cv-social">
    <cv-link
      v-for="(socialLink, idx) in social.content"
      :key="`al-cv-social-${idx}`"
      :url="socialLink.url"
      :img="socialLink.img"
      >{{ socialLink.name | i18n }}</cv-link
    >

    <cv-link class="online-cv" url="https://cv.al-un.fr">{{
      "social.online-cv" | i18n
    }}</cv-link>

    <cv-link
      class="pdf-cv"
      :img="iconPdf"
      url="https://al-un.s3.eu-west-3.amazonaws.com/cv/Resume.pdf"
      >{{ "social.pdf-cv" | i18n }}</cv-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "./cv-link.vue";
import IconPdf from "@/assets/wikimedia-pdf-logo.png";
import { CvSocialSection } from "@/models";

interface Props {
  social: CvSocialSection;
}

export default defineComponent({
  name: "cv-social",
  components: { CvLink },
  props: {
    social: { type: Object, required: true },
  },

  setup() {
    return {
      iconPdf: IconPdf,
    };
  },
});
</script>

<style lang="scss">
.al-cv-social {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: multiply(al-cv-base-size, 1) 0px;

  .cv-link {
    .text {
      display: none;
    }

    .open-in-new {
      display: none;
    }

    &.online-cv {
      display: none;
    }
  }
}

@include print-and-tablet {
  .al-cv-social {
    justify-content: flex-start;

    .cv-link {
      .icon,
      img {
        display: none;
      }

      .text {
        display: inline-block;
      }
    }

    .cv-link + .cv-link {
      margin-left: multiply(al-cv-base-size, 1);
    }
  }
}

@include for-tablet-portrait-up {
  .al-cv-social {
    .cv-link {
      // Don't display the open-new-tab icon in print
      .open-in-new {
        display: inline-block;
      }
    }
  }
}

@media print {
  .al-cv-social {
    margin: 0px;

    .cv-link {
      &.online-cv {
        display: inline-block;
      }

      &.pdf-cv {
        display: none;
      }
    }
  }
}

@include for-tablet-landscape-up {
  .al-cv-social {
    margin: 0px;
  }
}
</style>
