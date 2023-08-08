<template>
  <div class="rxsection-y-halfspace whats-next">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div class="row t-space-60">
        <div class="bg-Card-row" v-for="item in data.TitleContentList">
          <div class="whatNext_box">
            <span class="para_lg">{{ item.Title }}</span>
            <h3 class="para_lg">{{ item.SubTitle }}</h3>
            <div class="para_nospace" v-rxhtml="item.LongText"></div>
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
  .whats-next {
    @apply  dark:bg-themedark-70;
    h2 {
      @apply p-0;
    }
    .bg-Card-row {
      @apply smd:w-1/3 w-full text-center px-4;
      &:not(:first-child) {
        margin-top: 1.875rem;
        @screen smd {
          @apply smd:mt-0;
        }
      }
      .whatNext_box {
        padding: 1.25rem 0.938rem;
        @apply bg-themelight-10 smd:p-0 smd:bg-themelight-0  dark:bg-themedark-70;
        span {
          @apply font-semibold text-opacitybg-35 dark:text-themelight-10;
        }
        h3 {
          @apply p-0;
          margin-bottom: 0.313rem;
          margin-top: 0.625rem;
          @screen smd {
            margin-bottom: 0.625rem;
            @apply mt-5;
          }
        }
        p {
          max-width: 31.25rem;
          @apply smd:max-w-full mx-auto;
        }
      }
    }
  }
}
</style>