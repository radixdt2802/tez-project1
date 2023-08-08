<template>
  <div
    class="rxsection-y-space left-con-list-right-img"
    v-bind:class="[
      data.VueReferenceCode == 'TCM_RightImage_GreyBG'
        ? 'bg-themelight-10 dark:bg-themedark-10'
        : 'bg-themelight-0 dark:bg-themedark-0',
      data.VueReferenceCode == 'TCM_RightImage_DarkBG'
        ? 'bg-secondary contentWhite'
        : '',
      data.VueReferenceCode == 'TCM_RightImage_LightTealBG'
        ? 'bg-themelight-20 dark:bg-themedark-65'
        : '',
    ]"
  >
    <div class="container">
      <div class="flex flex-wrap justify-between items-center">
        <div class="left-con smd:w-7/12 w-full px-4">
          <h2>{{ data.Title }}</h2>
          <div
            class="square_list noBs list_sm"
            :class="[
              data.VueReferenceCode == 'TCM_RightImage_DarkBG'
                ? 'white-border'
                : 'primary_list',
            ]"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="img-right smd:w-5/12 w-full max-w-md p-2 smd:h-56 h-auto border mx-auto smd:m-0 border-dashed border-themelight-10 dark:border-themedark-65 ">
          <div class="image-area flex items-center bg-themelight-10 dark:bg-themedark-65 p-5 h-full">
          <img
          v-rxlazy="data.Image.url"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="
              mx-auto
              smd:mr-0
              smd:mt-0
              smd:max-w-full light-image
            "
          />
          <img
          v-rxlazy="data.HoverImage.url"
          :alt="data.HoverImage.alternativeText"
          :width="data.HoverImage.width"
          :height="data.HoverImage.height"
          class="
            mx-auto
            smd:mr-0
            smd:mt-0
            smd:max-w-full dark-image
          "
        />
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
  .dark{
    .left-con-list-right-img {
      .light-image{
        @apply hidden;
      }
      .dark-image{
        @apply block;
      }
    }
  }
  .left-con-list-right-img {
    .light-image{
        @apply block;
      }
      .dark-image{
        @apply hidden;
      }
    .left-con {
      .white-border {
        li {
          &::before {
            @apply border-themelight-0;
          }
        }
      }
    }
    .img-right {
      img {
        max-width: 25rem;
       
        @apply smd:max-w-full w-full smd:w-auto;
      }
    }
  }
  .quote {
    margin-top: 1.875rem;
    a {
      @apply underline;
    }
  }
}
</style>