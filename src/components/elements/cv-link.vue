<template>
  <a
    class="cv-link"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img v-if="img" :src="img" alt="icon" />
    <span v-if="mdIcon" class="material-icons icon">{{ mdIcon }}</span>

    <span class="text"><slot></slot></span>
    <span v-if="state.isNewTab" class="material-icons open-in-new"
      >open_in_new</span
    >
  </a>
</template>

<script lang="ts">
import {
  reactive,
  computed,
  defineComponent,
  SetupContext,
} from "@vue/composition-api";

interface Props {
  url: string;
  img?: string;
  mdIcon?: string;
}

export default defineComponent({
  name: "cv-link",
  props: {
    url: { type: String, required: true },
    img: { type: String, default: undefined },
    mdIcon: { type: String, default: undefined },
  },

  setup(props: Props, ctx: SetupContext) {
    const state = reactive({
      isNewTab: computed(
        () => !props.url.startsWith("mailto") && !props.url.startsWith("tel")
      ),
    });

    return { state };
  },
});
</script>

<style lang="scss">
.cv-link {
  display: inline-block;
  text-decoration: none;
  color: var(--al-cv-color-on-surface);
  transition: color 0.2s;

  // icon
  img {
    // width: multiply(al-cv-base-size, 1.5);
    height: multiply(al-cv-font-size-m, 1.25);
  }

  // Picture and icons
  img,
  .material-icons.icon {
    margin-right: multiply(al-cv-base-size, 0.5);
    vertical-align: bottom;
  }

  // text zone
  .text {
    text-decoration: none;
    transition: text-decoration 0.2s;
  }

  // open in new window icon
  .open-in-new {
    font-size: multiply(al-cv-font-size-m, 1);
    margin-left: multiply(al-cv-base-size, 0.25);
    vertical-align: middle;
  }

  // Hovering
  &:hover,
  &:focus {
    color: var(--al-cv-color-primary);

    .text {
      text-decoration: underline dotted var(--al-cv-color-primary);
    }
  }
}

@media print {
  .cv-link {
    .text {
      display: inline-block;
      text-decoration: underline dotted var(--al-cv-color-primary);
    }

    .open-in-new {
      display: none;
    }
  }
}
</style>
