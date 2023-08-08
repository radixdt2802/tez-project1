<template>
    <div
      class="rxsection-y-space cta-gray bg-themelight-10 dark:bg-themedark-70 beforeDark relative bg-no-repeat bg-cover"
    >
      <div class="container ">
        <div class="flex flex-wrap items-center justify-center sxl:justify-between relative">
          <!--<h3 class= "border-primary dark:border-themedark-65 sxl:border-l-4 border-solid">
            {{ data.Title }}
          </h3> -->
          <div v-html="title" class="cta-gray-wrap border-primary dark:border-themedark-65 sxl:border-l-4 border-solid">

          </div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            class="btn btn_md space-t p-3 sxl:p-0"
          ></div>
        </div>
      </div>
    </div>
  </template>
  <script type="text/javascript">
  import mountedMixin from "../mixins/mounted.mixin";
  import titleMixin from '../mixins/title.mixin';
  export default {
    mixins: [mountedMixin, titleMixin],
    props: {
      data: Object,
    },
     data(){
    return {
      titleStyle : "h3",
    }
  }
  };
  </script>
  <style lang="scss">
  @layer utilities {
    .cta-gray {
      .cta-gray-wrap {
        @apply sxl:text-left text-center leading-8 sxl:w-8/12 md:px-4 smd:pl-6 ;
      h3 ,.h3 {
        @apply font-normal pb-0;
        font-size: 1.375rem;
        @screen md {
          @apply text-2xl leading-9;
        }
        @screen sxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
        @screen xl {
          font-size: 2rem;
          line-height: 2.75rem;
        }
      }
      }
      .btn-4col {
        @apply sxl:w-4/12 w-full text-center sxl:mt-0 mt-8;
      }
    }
  }
  </style>