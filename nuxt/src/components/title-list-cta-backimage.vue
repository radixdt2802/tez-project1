<template>
  <div
    class="
      list-backimageoverlay
      rxsection-y-space
      bg-image
      beforDark
      relative
      bg-cover bg-no-repeat
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="bg-overlay"></div>
    <div class="container full-content relative">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="circle_list w-full list_md"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="pt-6 md:pt-10">
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn btn_md"
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
      titleStyle : "h2",
     }
  }
};
</script>
  <style lang="scss">
@layer components {
  .dark {
    .bg-overlay {
      &::before {
        background-color: rgba(0, 0, 0, 0.88);
      }
    }
  }
  .bg-overlay {
    &::before {
      @apply bg-opacitybg-10  w-full h-full absolute top-0 left-0;
      content: "";
    }
  }
  .list-backimageoverlay {
    @apply relative bg-no-repeat bg-cover  dark:bg-themedark-10;
    &:before {
      @apply absolute block w-full h-full top-0 left-0  dark:text-themedark-10 z-0;
      content: "";
    }
    @screen sxl {
      &:before {
        @apply hidden;
        content: "";
      }
    }

    .full-content {
      @apply z-10 relative xl:dark:text-themelight-0 dark:text-themedark-10;

      h2 {
        @apply w-full;
      }
      .circle_list {
        ul {
          li {
            @apply py-2;
          }
        }
      }
    }
  }
}
</style>