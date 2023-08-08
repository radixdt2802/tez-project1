<template>
  <div class="mt-12 container md:flex tcwithTCL_Rainbow_4box">
    <div class="md:w-1/3" :class="{
        'hidden':
          data.VueReferenceCode == 'TCWithTCL_Rainbow_4box_Full',
        
      }"></div>
    <div
      class="
        md:px-6
        px-2
        bg-themelight-0
        dark:bg-themedark-0
        rainbow4box
      "
      :class="{
        'w-full':
          data.VueReferenceCode == 'TCWithTCL_Rainbow_4box_Full',
        'md:w-2/3':
          data.VueReferenceCode == 'TCWithTCL_Rainbow_4box',
        
      }"
    >
      <h2 v-if="data.Title">{{ data.Title }}</h2>
      <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      <div class="">
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="para_sm"
        ></div>
      </div>
      <div class="flex flex-wrap">
        <div
          class="box-center py-6 md:pt-8 w-full md:w-1/2 lg:w-1/4 px-4"
          v-for="item in data.TitleContentList"
          :key="item.Title"
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
            <h3 class="para_md">{{ item.Title }}</h3>
            <p v-if="item.ShortText" v-rxhtml="item.ShortText">
              {{ item.ShortText }}
            </p>
            <div
              class="subtitle square_list list_sm noBs"
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
import mountedMixin from "../mixins/mounted.mixin";
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .tcwithTCL_Rainbow_4box {
    .rainbow4box {
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