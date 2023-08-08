<template>
  <div
    class="
      hireremotevideoblock
      rxsection-y-space
      text-center
      sxl:text-left
      dark:bg-themedark-10
    "
  >
    <div class="container">
      <div class="row items-center">
        <div class="sxl:w-5/12 w-full px-4">
          <h2>{{ data.Title }}</h2>
          <div
            class="para_sm"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <template v-if="data.MultipleMedia">
        <div class="sxl:w-7/12 w-full px-4 sxl:pt-0 pt-5 embed-responsive embed-responsive-16by9 mx-auto" v-for="item in data.MultipleMedia" :key="item.url">
          <video controls class="mx-auto rounded-lg" v-if="data.MultipleMedia">
              <source :src="item.url" type="video/mp4">

              Your browser does not support the video tag.
          </video>
          </div>
        </template>
        <div class="sxl:w-7/12 w-full px-4 sxl:pt-0 pt-5 mx-auto" v-if="data.GuideURL">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              width="1280"
              height="720"
              :src="data.GuideURL"
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
  .hireremotevideoblock {
    background-color: #f4fcff;
    h3 {
      @apply xxsm:mt-8 mt-5;
    }
  }
}
</style>