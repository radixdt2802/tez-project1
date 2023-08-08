<template>
  <div
    class="
      devProcessWrap
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-70
    "
  >
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md"
      ></div>
      <div class="row justify-center">
        <div
          class="box-center pt-6 md:pt-8"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div
            class="development_process_box"
            :class="{
              'border-customcolor-0': item.SubTitle == '01',
              'border-customcolor-10': item.SubTitle == '02',
              'border-customcolor-15': item.SubTitle == '03',
              'border-customcolor-20': item.SubTitle == '04',
              'border-customcolor-25': item.SubTitle == '05',
              'border-customcolor-30': item.SubTitle == '06',
              'border-customcolor-35': item.SubTitle == '07',
              'border-customcolor-40': item.SubTitle == '08',
              'border-customcolor-50': item.SubTitle == '09',
              'border-customcolor-80': item.SubTitle == '10',
            }"
          >
            <span class="para_lg_semib pb-3">{{ item.SubTitle }}</span>
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              :alt="item.Icon.alternativeText"
            />
            <!-- <h3 class="para_md">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <p v-if="item.ShortText" v-rxhtml="item.ShortText">{{ item.ShortText }}</p>
            <div
              class="subtitle square_list list_sm noBs primary_list"
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
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center",
		  sTitleStyle: "para_md h3"
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .devProcessWrap {
    @apply dark:bg-themedark-0;
    .box-center {
     max-width: 14.375rem;
      @apply w-full sm:w-1/2 md:w-1/3 sxl:w-1/4 xxxl:w-1/6 xsm:w-6/12 px-4 sm:max-w-full;
    }
    .development_process_box {
      @apply rounded-2xl border-2 mx-auto py-4 px-4 h-full;
      img {
        margin-bottom: 0.8rem;
        max-width: 3.4375rem;
      }
      span {
        @apply text-opacitybg-15 block text-right pr-3 dark:text-opacitybg-10;
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
    .square_list {
      padding: 0;
      li {
        padding-right: 0;
      }
    }
  }
}
</style>