<template>
  <div
    class="
      rxsection-y-space
      left-title-four-col
      bg-no-repeat bg-cover
      beforeDark
      relative
      
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <sectionHeading :data="data" class="relative" />
      <div class="row pt-4">
        <div class="bgCard-row" v-for="(item,i) in data.TitleContentList">
          <div class="bgCard">
            <!-- <h3>{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div
              class="relative"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
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
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
    data(){
    return {
      sTitleStyle : "h3",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .left-title-four-col {
      &.beforeDark {
        &:before {
          content: "";
          
          @apply absolute w-full h-full top-0 bg-themedark-70 dark:bg-themedark-0;
        }
      }
    }
  }
  .left-title-four-col {
    .bgCard-row {
      @apply md:w-3/6 sxl:w-3/12;
      padding: 0 0.938rem;
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-6;
      }
      @screen md {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen sxl {
        &:nth-child(4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }

      .bgCard {
        @apply w-full;
        &:hover {
          h3 {
            &:after {
              left: 0.9375rem;
            }
          }
        }

        h3,.h3 {
          @apply mb-1 md:mb-3 font-semibold relative text-xl pb-5 md:pb-6;
          line-height: 1.875rem;
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
            @apply absolute bg-themedark-0 dark:bg-themedark-65 left-0 bottom-0 transition-all duration-300 ease-in-out;
            content: "";
            height: 0.188rem;
            width: 5.625rem;
          }
        }
      }
    }
  }
}
</style>