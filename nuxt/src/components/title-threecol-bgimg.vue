<template>
  <div
    class="rxsection-y-space bgImg text-center contentWhite bg-cover bg-no-repeat bg-center beforeDark relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[data.Image ? '' : 'bg-secondary']"
  >
    <div class="container relative">
      <sectionHeading :data="data" />
      <div class="row mt-5">
        <div
          class="bgCard-row mt-8 sm:mt-10"
          v-for="item in data.TitleContentList"
        >
          <div class="bgCard w-full">
            <h3>{{ item.Title }}</h3>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
  
  props: {
    data: Object,
  },
  components: {
    sectionHeading:sectionHeading,
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .bgImg {
    .bgCard-row {
      @apply smd:w-1/3;
      padding: 0 0.938rem;

      .bgCard {
        h3 {
          @apply font-semibold relative text-xl md:pb-6;
          line-height: 1.875rem;
          padding-bottom: 0.625rem;
          @screen md {
            padding-bottom: 1.063rem;
          }

          @screen smd {
            @apply leading-8;
            font-size: 1.375rem;
          }
          @screen xl {
            @apply text-2xl leading-9;
          }
          @screen xxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          &:after {
            @apply absolute bg-primary dark:bg-themedark-65 left-0 right-0 bottom-0 mx-auto transition-all duration-300 ease-in-out;
            content: "";
            height: 0.188rem;
            width: 3.75rem;
          }
        }
        p {
          padding: 0.625rem 0 0 0;
          @screen xsm {
            font-size: 1.063rem;
            @apply leading-7;
          }
          @screen sm {
            @apply text-lg;
            line-height: 1.875rem;
          }
          @screen md {
            padding-top: 1.063rem;
          }
        }
      }
    }
  }
}
</style>