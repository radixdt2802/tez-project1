<template>
  <div
    class="relative fifty-fifty-right-circlelist rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageRightLightTealCircleList'
        ? 'dark:bg-themedark-10 bg-opacitybg-25'
        : '',
    ]"
  >
    <div
      class="hidden bgimg-right absolute w-1/2 h-full right-0 top-0 bg-no-repeat bg-right-top bg-cover smd:block"
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    ></div>
    <div class="container">
      <div
        class="
          relative
          z-10
          fifty-content
          sxl:dark:text-themelight-0
          dark:text-themedark-10
          smd:w-1/2
        "
      >
        <h2>{{ data.Title }}</h2>
        <div
          class="circle_list list_md onBs"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
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
@layer components {
  .fifty-fifty-right-circlelist {
    .bgimg-right {
      background-size: auto 100%;
    }

    &.beforeDark {
      &:before {
        @apply bg-opacitybg-30;
      }
    }
    .fifty-content {
      @apply z-10 relative dark:text-themelight-0;
      ul {
        @apply block;
      }
      .list_black {
        ul {
          li {
            @apply pt-1 w-full;
            &::before {
              @apply border-themedark-0 dark:border-themelight-0;
            }
          }
        }
      }
    }
  }
}
</style>