<template>
  <div
    class="rxsection-y-space featuredvideo"
    :class="{
      'bg-secondary contentWhite':
        data.VueReferenceCode == 'FeaturedVideos2col',
    }"
  >
    <div class="container">
      <!-- <h2
    
            v-if="data.VueReferenceCode !== 'FeaturedVideos2col'"
    
            class="text-center"
    
          >
    
            {{ data.Title }}
    
          </h2> -->

      <div
        v-if="data.VueReferenceCode !== 'FeaturedVideos2col'"
        v-html="title"
      ></div>

      <p
        v-if="data.VueReferenceCode !== 'FeaturedVideos2col'"
        class="text-center para_md"
      >
        {{ data.ShortText }}
      </p>

      <!-- <h2
    
            v-if="data.VueReferenceCode == 'FeaturedVideos2col'"
    
            class="text-center"
    
          >
    
            {{ data.Title }}
    
          </h2> -->

      <div
        v-if="data.VueReferenceCode == 'FeaturedVideos2col'"
        v-html="title"
      ></div>

      <div
        v-if="data.VueReferenceCode == 'FeaturedVideos2col'"
        class="text-center para_md"
        v-rxhtml="data.LongText"
      ></div>

      <div class="row justify-center">
        <div
          class="w-full md:w-4/5 sxl:w-2/3 px-4 relative"
          v-if="data.VueReferenceCode !== 'FeaturedVideos2col'"
        >
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              width="1280"
              height="720"
              :src="data.CTA"
              frameborder="0"
              class="embed-responsive-item"
              rel="nofollow"
            ></iframe>
          </div>
        </div>

        <div
          class="md:w-1/2 w-full px-4 mb-6 md:mb-0"
          v-if="data.VueReferenceCode == 'FeaturedVideos2col'"
          v-for="item in data.TitleMediaList"
        >
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              width="1280"
              height="720"
              :src="item.CTA"
              frameborder="0"
              class="embed-responsive-item"
              rel="nofollow"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import titleMixin from "../mixins/title.mixin";

export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2 text-center",
    };
  },
};
</script>
<style lang="scss"></style>
