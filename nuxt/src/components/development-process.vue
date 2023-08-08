<template>
  <div
    class="dev-process"
    :class="[
      data.VueReferenceCode == 'Development_Process_9icons'
        ? 'rxsection-y-space'
        : '',
      data.VueReferenceCode == 'Development_Process_5icons'
        ? 'rxsection-y-space'
        : '',
      data.VueReferenceCode == 'Development_Process_9icons_3col_nospace_bottom'
        ? 'rxsection-y-space'
        : '',
      data.VueReferenceCode == 'Development_Process_9icons_NotopSpace'
        ? 'rxsection-b-space'
        : '',
    ]"
  >
    <div class="container">
      <!--<h2 class="dark:text-themelight-0">{{ data.Title }}</h2>-->
      <div v-html="title"></div>
      <p class="para_md" v-if="data.SubTitle">{{ data.SubTitle }}</p>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md"
      ></div>
      <div class="row t-space-40 justify-center">
        <div
          class="box-center"
          v-for="item in data.TitleContentMediaList"
          :key="item.Title"
        >
          <div
            class="development_process_box h-full"
            :class="{
              'border-customcolor-0': item.Title == '01',
              'border-customcolor-10': item.Title == '02',
              'border-customcolor-15': item.Title == '03',
              'border-customcolor-20': item.Title == '04',
              'border-customcolor-25': item.Title == '05',
              'border-customcolor-30': item.Title == '06',
              'border-customcolor-35': item.Title == '07',
              'border-customcolor-40': item.Title == '08',
              'border-customcolor-50': item.Title == '09',
              'border-customcolor-80': item.Title == '10',
              'border-opacitybg-blueBorder': item.Title == '11',
              'border-opacitybg-yellowBorder': item.Title == '12',
            }"
          >
            <span class="para_lg_semib">{{ item.Title }}</span>
            <img
              class="light-image"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="dark-image"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
            <p v-if="item.ShortText" class="">{{ item.ShortText }}</p>
            <div
              class="subtitle"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
const sectionHeading = defineAsyncComponent(() =>
  import("./section-heading100.vue")
);
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading: sectionHeading,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .dev-process {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .dev-process {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    @apply text-center dark:bg-themedark-0;
    .box-center {
      @apply md:w-4/12 xsm:w-6/12 smd:w-auto w-full;
      &:nth-child(n + 6),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        @apply mt-5;
      }
      padding: 0 0.938rem;
      @screen xsm {
        &:nth-child(2) {
          @apply mt-0;
        }
        &:nth-child(n + 6),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          @apply mt-6;
        }
      }
      @screen md {
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
      @screen smd {
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          @apply mt-0;
        }
        &:nth-child(n + 6),
        &:nth-child(5) {
          @apply mt-8;
        }
      }
      @screen sxl {
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          @apply mt-0;
        }
        &:nth-child(n + 6) {
          @apply mt-10;
        }
      }
    }
    .development_process_box {
      @apply rounded-2xl text-center border-4 mx-auto py-4 px-1;
      width: 10.5rem;

      @screen md {
        width: 11.5625rem;
      }
      @screen xl {
        width: 11.5625rem;
        margin: 0 0.938rem;
      }
      img {
        max-width: 3.4375rem;
        @apply mx-auto xsm:max-w-full;
      }
      span {
        @apply text-opacitybg-15 block text-left pl-3 dark:text-opacitybg-10;
        margin-bottom: -0.625rem;
      }
      .subtitle {
        p {
          @apply font-semibold text-sm md:text-base;
          padding: 0.625rem 0 0.625rem 0;
        }
        &:nth-child(n + 6) {
          @apply mt-10;
        }
      }
    }
  }
}
</style>