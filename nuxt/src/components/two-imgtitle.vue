<template>
  <div class="twoimgBg rxsection-y-space bg-secondary dark:bg-themedark-70 relative">
    <div class="container">
      <div class="row" v-for="(item,i) in data.TitleContentMediaList">
        <div class="w-10/12 px-4 mx-auto">
          <div class="row">
            <div class="sm:w-1/2 sm:block hidden px-4 smd:ml-auto mx-auto">
              <img
                class="mx-auto"
                v-if="item.HoverImage"
                v-rxlazy="item.HoverImage"
                :width="item.HoverImage.width"
                :height="item.HoverImage.height"
                :alt="item.HoverImage.alternativeText"
              />
            </div>
            <div class="sm:w-1/2 sm:block hidden px-4">
               
                <img
                  class="relative"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  :alt="item.Image.alternativeText"
                />
               
            </div>
          </div>
        </div>
        <div
          class="
            bg-opacitybg-65
            dark:bg-opacitybg-30
            sm:absolute
            relative
            sm:mx-auto
            sm:transform
            sm:-translate-y-1/2
            sm:top-50
            left-0
            right-0
            smd:left-50
            smd:px-10
            smd:py-16
            p-8
            max-w-lg
            justify-center
            smd:w-full
            w-full
            mx-4 
          "
        >
          <!-- <h2>{{ item.Title }}</h2> -->
          <div v-html="sTitles[i]"></div>
          <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
data(){
  return {
    sTitleStyle : "h2"
    }
  },
};
</script>