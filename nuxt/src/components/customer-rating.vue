<template>
  <div
    class="rxsection-y-space cust-rating text-center"
    :class="{
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'Testimonial_3Col',
      'bg-secondary dark:bg-themedark-0 contentWhite':
        data.VueReferenceCode == 'Testimonial_3Col_Dark',
      'bg-opacitybg-25 dark:bg-themedark-40':
        data.VueReferenceCode == 'Testimonial_3Col_LightTeal',
    }"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row smd:pt-5">
        <div
          class="bgCard-row smd:mt-0 mt-8 w-full smd:w-4/12 px-4"
          v-if="data.TitleContentMediaList"
          v-for="item in data.TitleContentMediaList"
        >
          <div class="bgCard w-full border border-solid border-themedark-75 dark:border-themedark-65 smd:border-none py-7 px-5">
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
              class="mb-1 mx-auto"
            />
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              :alt="item.Icon.alternativeText"
              class="mb-1 mx-auto"
            />
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            <div
              class="mt-4 mx-auto review-name"
              :class="{
                'text-themelight-0 opacity-75':
                  data.VueReferenceCode == 'Testimonial_3Col_Dark',
              }"
            >
              {{ item.Title }}
            </div>
            <div>{{ item.SubTitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .cust-rating {
    .bgCard-row {
      .bgCard {
        @screen lg {
          &:hover {
            h3 {
              &:after {
                width: 6.25rem;
              }
            }
          }
        }
        p {
          @apply dark:text-themedark-75;
        }
      }
    }
  }
}
</style>