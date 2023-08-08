<template>
  <div
    class="
      section-heads
      rxsection-y-space
      toolsThreeTopImg
      bg-themelight-0 dark:bg-themedark-0
    "
  >
    <div class="container">
      <div class="w-full mx-auto">
        <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="para_md text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="t-space-60 row justify-center">
        <div
          class="bgCard-row w-full sm:w-1/2 smd:w-1/4 px-4 text-center"
          v-for="(item,i) in data.TitleMediaList"
        >
          <div class="services_wrap max-w-xs mx-auto mt-8 smd:mt-0">
            <div
              class="
                services_img
                bg-themelight-10
                dark:bg-themedark-40
                dark:border-themedark-65
                px-4
                py-4
                mb-8
                mx-auto
                text-center
              "
            >
                <img
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  :alt="item.Image.alternativeText"
                  class="h-24 object-contain mx-auto light-image"
                />
                <img
                v-rxlazy="item.HoverIcon"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                :alt="item.HoverIcon.alternativeText"
                class="h-24 object-contain mx-auto dark-image"
                v-if="item.HoverIcon"
              />
            </div>
            <!-- <h3 class="para_md">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]" class="h3 para_md"></div>
          </div>
        </div>
        <div
          class="bgCard-row w-full sm:w-1/2 smd:w-1/4 px-4 text-center"
          v-for="(item,i) in data.TitleContentMediaList"
          :key="item"
        >
          <div class="services_wrap max-w-xs mx-auto mt-8 smd:mt-0">
            <div
              class="
                services_img
                bg-themelight-0
                dark:bg-themedark-40
                dark:border-themedark-65
                px-4
                py-4
                mb-8
                border
                mx-auto
                text-center
                w-72
              "
            >
              <img
                v-rxlazy="item.HoverImage"
                :width="item.HoverImage.width"
                :height="item.HoverImage.height"
                :alt="item.HoverImage.alternativeText"
                class="h-24 object-contain mx-auto dark-image"
                v-if="item.HoverImage"
              />
              <img
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                :alt="item.Image.alternativeText"
                class="h-24 object-contain mx-auto light-image"
                v-if="item.Image"
              />
            </div>
            <!-- <h3 v-if="!item.CTA" class="para_md text-center mx-auto max-w-xs">
              {{ item.Title }}
            </h3>
            <h3
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
              class="para_md text-center mx-auto max-w-xs"
            ></h3> -->
            <div v-html="sTitles[i]"></div>
          </div>
        </div>
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
    data: Object
  },
  data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle : "para_md text-center mx-auto max-w-xs font-bold",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
      .toolsThreeTopImg {
        .light-image {
           @apply hidden;
        }
        .dark-image {
          @apply block;
        }
      
      }
    }
  .toolsThreeTopImg {
    .light-image {
           @apply block;
        }
        .dark-image {
          @apply hidden;
        }
  }
}
</style>