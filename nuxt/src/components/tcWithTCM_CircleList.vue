<template>
  <div class="mt-12 container md:flex tcWithTCM_CircleList">
    <div class="lg:w-1/3" :class="{
        'hidden':
          data.VueReferenceCode == 'TCWithTCM_CircleList_Full',
        
      }"></div>
    <div
      class="
        md:px-6
        px-2
        my-5
        bg-themelight-0
        dark:bg-themedark-0
      "
      :class="{
        'w-full':
          data.VueReferenceCode == 'TCWithTCM_CircleList_Full',
        'lg:w-2/3 w-full':
          data.VueReferenceCode == 'TCWithTCM_CircleList',
        
      }"
    >
      <h2 v-if="data.Title">{{ data.Title }}</h2>
      <div class="para_md" v-if="data.ShortText">{{ data.ShortText }}</div>
      <div v-if="data.LongText" v-rxhtml="data.LongText" class="para_sm"></div>
      <div
        v-for="item in data.TitleContentMediaList"
        class="fourlistcol"
        :key="item.Title"
      >
        <h3 v-if="!item.CTA" class="h3_sm my-2">{{ item.Title }}</h3>
        <h3 v-if="item.CTA" v-html="$md.render(item.CTA)" class="h3_sm"></h3>
        <img
          v-if="item.Image"
          v-rxlazy="item.Image"
          :width="item.Image.width"
          :height="item.Image.height"
          :alt="item.Image.alternativeText"
        />
        <div
          class="para_sm list_sm circle_list"
          :class="[
            item.VueReferenceCode == 'TCWithTCM_CircleListFullWidth'
              ? 'fullwidthList'
              : 'list4col',
          ]"
          v-if="item.LongText"
          v-rxhtml="item.LongText"
        ></div>
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
  .tcWithTCM_CircleList {
    .fourlistcol {
      .list4col {
        ul {
          @apply flex flex-wrap sm:pt-4 pt-1 w-full sm:mb-5 sm:pb-5;
          li {
            @apply sxl:w-1/4 md:w-2/4 w-full pb-0;
            padding-top: 0.625rem;
            padding-left: 1.875rem;
            padding-right: 0.5rem;
            &:before {
              margin-top: 0.25rem;
              @apply border-4 w-4 h-4 sm:w-5 sm:h-5;
              margin-right: 0.938rem;
            }
            @screen sm {
              @apply pl-10;
              &:before {
                border-width: 0.313rem;
                margin-top: 0.375rem;
              }
            }
          }
        }
      }
      .fullwidthList {
        ul {
          @apply sm:pt-4 pt-1 w-full sm:mb-5 sm:pb-5;
          li {
            padding-top: 0.625rem;
            padding-left: 1.875rem;
            padding-right: 0.5rem;
            &:before {
              margin-top: 0.25rem;
              @apply border-4 w-4 h-4 sm:w-5 sm:h-5;
              margin-right: 0.938rem;
            }
            @screen sm {
              @apply pl-10;
              &:before {
                border-width: 0.313rem;
                margin-top: 0.375rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>