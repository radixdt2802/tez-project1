<template>
  <div class="pt-12 mt-10">
    <div
      class="
        home-banner
        text-themedark-0
        dark:text-themelight-0
      "
      :class="[data.VueReferenceCode == 'HomeBanner_new_office' ? 'rxsection-y-space' : '']"
      v-for="item in data.SimpleContentBanner"
      :key="item.id"
    >
      <div class="container">
        <div class="items-center justify-center row">
          <div class="w-full smd:w-1/2 px-4">
                <!--  -->
            <div
              class="
                w-full
                mx-auto
                smd:max-w-full
                max-w-3xl
                mb-8
                text-center
                head-content
                smd:text-left
                smd:mb-0
              "
            >
              <h1>{{ item.Title }}</h1>
              <div
                class="mt-2"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
              <div v-if="item.CTA" v-html="$md.render(item.CTA ? item.CTA : '')"
          class="btn btn_sm btn-4col  smd:justify-start justify-center mt-7"></div>
            </div>
          </div>
          <div class="block w-full sm:px-4 px-0 mobileimg sm:hidden">
            <img
              class="mx-auto"
              v-if="item.HoverImage"
              v-rxlazy="item.HoverImage"
              :width="item.HoverImage.width"
              :height="item.HoverImage.height"
              :alt="item.HoverImage.alternativeText"
            />
          </div>
          <div class="hidden w-full px-4 imgRight sm:block smd:w-1/2">
            <img
              class="mx-auto smd:mr-0 smd:ml-auto"
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .home-banner {
    .head-content {
      
      p {
        @apply text-base py-3 text-themedark-0 dark:text-themedark-75;
        line-height: 1.625rem;
        @screen sm {
          @apply text-xl;
          line-height: 1.875rem;
        }
        @screen lg {
          @apply leading-8;
          font-size: 1.375rem;
        }
        @screen xl {
          font-size: 1.5rem;
          @apply leading-9;
        }
      }
    }
  }
}
</style>