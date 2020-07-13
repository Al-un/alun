<template>
  <section class="al-cv-section">
    <h3 v-if="section" class="section-title">
      <span v-if="titleMdIcon" class="material-icons">{{ titleMdIcon }}</span>
      <span>{{ section.title | i18n }}</span>
    </h3>

    <p v-if="state.sectionDescription" class="section-description">
      {{ state.sectionDescription | i18n }}
    </p>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@vue/composition-api";

import { CvSection, Languages } from "@/models";
import { getLanguage } from "@/utils";

import BaseText from "@/components/base/base-text";

interface Props {
  section?: CvSection;
  titleMdIcon?: string;
}

export default defineComponent({
  name: "cv-section",
  components: { BaseText },
  props: {
    section: { type: Object, required: false },
    titleMdIcon: { type: String, default: undefined },
  },

  setup(props: Props) {
    const state = reactive({
      sectionDescription: computed(() => {
        return props.section ? props.section.description : undefined;
      }),
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss">
.al-cv-section {
  padding: multiply(al-cv-base-size, 1);

  .section-title {
    margin-bottom: multiply(al-cv-base-size, 1);

    color: var(--al-cv-color-secondary);
    font-size: multiply(al-cv-font-size-m, 1);
    text-transform: uppercase;
    transition: color 0.2s;

    .material-icons {
      font-size: multiply(al-cv-font-size-m, 1.5);
      margin-right: multiply(al-cv-base-size, 0.5);
      vertical-align: bottom;
    }
  }

  &:hover,
  &:focus {
    .section-title {
      color: var(--al-cv-color-secondary-dark);
    }
  }
}

@media print {
  .al-cv-section {
    padding: multiply(al-cv-base-size, 0.5);

    .section-title {
      margin-bottom: multiply(al-cv-base-size, 0.75);
    }
  }
}
</style>
