<template>
  <div
    class="rxsection-y-space relative cldApp bg-secondary beforeDark bg-no-repeat bg-cover"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="after-bgImg">
      <div
        class="
          afterimg
          absolute
          z-0
          hidden
          xsm:block
          bottom-0
          left-0
          w-full
          h-full
          bg-no-repeat bg-left-bottom
        "
        v-bind:style="[
          data.HoverImage
            ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
            : '',
        ]"
      ></div>
      <div class="container">
        <div class="row items-center">
          <div class="md:w-1/2 w-full px-4">
            <div
              class="
                whiteoverlay
                bg-opacitybg-65
                dark:bg-opacitybg-30
                rounded-xl
              "
            >
              <h2>{{ data.Title }}</h2>
              <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
            </div>
          </div>
          <div class="md:w-1/2 md:block hidden">
              <img v-rxlazy="data.Icon.url" />
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
@layer components {
  .after-bgImg {
    .afterimg {
      background-size: 100% auto;
    }
  }
  .cldApp {
    .whiteoverlay {
      max-width: 29.5625rem;
      padding: 3.125rem 1.25rem;
    }
  }
}
</style>