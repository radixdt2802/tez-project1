<template>
  <div
    class="rxsection-y-space title-bg bg-no-repeat bg-right relative z-10 text-white smd:text-black dark:text-themelight-0
    dark:bg-themedark-70"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
   
      <div class="content-main row">
        <h2 class="relative">{{ data.Title }}</h2>
        <div class="inner-mid-content">
          <p class="para_md">{{ data.ShortText }}</p>
          <div
            class="list_lg square_list"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
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
  .title-bg {
   
    &::before {
      @apply absolute left-0 right-0 block w-full h-full top-0 bg-opacitybg-50 dark:bg-opacitybg-30;
      content: "";
    }
    @screen smd {
      background-size: 36% auto;
      @apply text-themedark-0;
      &::before {
        @apply hidden;
      }
    }
    @screen xxl{
      background-position: top right -2%;
      background-size: auto 100%;
    }
    &:after {
      @apply font-poppins font-semibold smd:block hidden absolute left-0 z-0 text-opacitybg-45 dark:text-opacitybg-40;
      content: "Values";
      @screen smd {
        bottom: 3.75rem;
        font-size: 9.375rem;
      }
      @screen sxl {
        bottom: 5.75rem;
      }
      @screen xl {
        font-size: 11.875rem;
        bottom: 7.75rem;
      }
      @screen xxl {
        bottom: 9.2rem;
        font-size: 15rem;
        line-height: 15rem;
      }
    }
    h2 {
      @apply smd:text-left text-center mx-auto sxl:w-4/12 smd:text-themedark-0 text-themelight-0 dark:text-themelight-0;
    }
    .content-main {
      @apply smd:w-8/12 px-4 md:-mx-4;
      .inner-mid-content {
        @apply sxl:w-8/12 xl:pl-16 sxl:pl-10;
        p {
          @apply relative xl:pb-8 sxl:w-11/12 smd:w-10/12 pb-5 text-white smd:text-black dark:text-themelight-0;
          &::after {
            @apply inline-block absolute bottom-0 left-0 smd:bg-primary dark:bg-themedark-65 bg-white;
            content: "";
            width: 4.688rem;
            height: 0.188rem;
          }
        }
        .square_list {
          @apply py-3 smd:mt-6 font-semibold;
          @screen xxl {
            margin-top: 5.313rem;
          }
          li {
            @apply relative py-1 xxl:pb-1 pr-4 pl-4 xxl:mb-6 mb-0 smd:text-black text-white dark:text-themelight-0;
            @screen lg {
              font-size: 1.375rem;
            }
            @screen xl {
              font-size: 1.5rem;
              line-height: 2.25rem;
            }
            @screen xxl {
              font-size: 1.625rem;
              line-height: 2.375rem;
            }
            &::before {
              content: "";
              @apply absolute inline-block left-0 border-solid border-4 smd:border-black border-white dark:border-themelight-0;
              top: 0.938rem;
              @screen lg {
                top: 1rem;
              }
              @screen sxl {
                top: 1.125rem;
              }
            }
            a {
              @apply text-themelight-0 smd:text-themedark-0 dark:text-themelight-10 smd:dark:text-themelight-0;
            }
            &:last-child {
              @apply mb-0;
            }
          }
        }
      }
    }
  }
}
</style>