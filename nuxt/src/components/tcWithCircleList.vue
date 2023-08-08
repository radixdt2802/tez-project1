<template>
  <div class="mt-2 container md:flex tcWithCircleList">
    <div class="lg:w-1/3" 
    :class="[
      data.VueReferenceCode == 'TCWithCircleListFullWidth_Full'
        ? 'hidden'
        : '',
      data.VueReferenceCode == 'NoTitleWith_4Col_CircleList_Full'
        ? 'hidden'
        : '',
      data.VueReferenceCode == 'TCWith_4Col_CircleList_Full'
        ? 'hidden'
        : '',
    ]"
    ></div>
    <div
      class="lg:px-6 px-2 my-3"
      :class="{
        'w-full': data.VueReferenceCode == 'TCWithCircleListFullWidth_Full',
        'w-full': data.VueReferenceCode == 'NoTitleWith_4Col_CircleList_Full',
        'w-full': data.VueReferenceCode == 'TCWith_4Col_CircleList_Full',
        'lg:w-2/3 w-full': data.VueReferenceCode == 'TCWith_4Col_CircleList',
        'lg:w-2/3 w-full':
          data.VueReferenceCode == 'NoTitleWith_4Col_CircleList',
        'lg:w-2/3 w-full': data.VueReferenceCode == 'TCWithCircleListFullWidth',
      }"
    >
      <div class="bg-themelight-0 dark:bg-themedark-0">
        <h2 v-if="data.VueReferenceCode != 'NoTitleWith_4Col_CircleList'">
          {{ data.Title }}
        </h2>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div class="main-content">
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="para_sm list_sm circle_list"
            :class="[
              data.VueReferenceCode == 'TCWithCircleListFullWidth'
                ? 'fullwidthList'
                : 'list4Col',
            ]"
          ></div>
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
  .tcWithCircleList {
    .main-content {
      .list4Col {
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