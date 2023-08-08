<template>
  <div
    class="rxsection-y-space list4"
  >
    <div class="container">
      <div
        class="para_md md:pb-10 pb-8"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="main-content" v-for="item in data.TitleContentList">
        <h2 >{{ item.Title }}</h2>
        <div
          class="list_sm circle_list"
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
  .on-demand-services {
    .main-content {
      &:last-child {
        ul {
          @apply border-b-0 mb-0 pb-0;
        }
      }
      ul {
        padding-bottom: 0.625rem;
        margin-bottom: 0.625rem;
        @apply flex flex-wrap sm:pt-4 pt-1 w-full sm:mb-5 sm:pb-5 border-b-0 smd:border-b border-solid border-themelight-50 dark:border-themedark-65;
        @screen smd {
          margin-bottom: 3.75rem;
          padding-bottom: 3.75rem;
        }

        li {
          @apply sxl:w-1/3 md:w-2/4 w-full pr-0 pb-0;
          padding-top: 0.625rem;
          padding-left: 1.875rem;
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
  .list4 {
    .main-content {
      &:last-child {
        ul {
          @apply border-b-0 mb-0 pb-0;
        }
      }
      ul {
        padding-bottom: 0.625rem;
        margin-bottom: 0.625rem;
        @apply flex flex-wrap sm:pt-4 pt-1 w-full sm:mb-5 sm:pb-5 border-b-0 smd:border-b border-solid border-themelight-50 dark:border-themedark-65;
        @screen smd {
          margin-bottom: 3.75rem;
          padding-bottom: 3.75rem;
        }

        li {
          @apply sxl:w-1/4 md:w-2/4 w-full pr-0 pb-0;
          padding-top: 0.625rem;
          padding-left: 1.875rem;
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
</style>