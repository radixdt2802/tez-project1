<template>
  <div
    class="service-desc imgBgRight rxsection-y-space"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div>
          <div>
            <h2>{{ data.Title }}</h2>
            <div
              v-if="data.LongText"
              v-rxhtml="data.LongText"
              class="circle_list"
            ></div>
            <div
              v-html="$md.render(data.CTA ? data.CTA : '')"
              v-if="data.CTA"
              class="btn"
            ></div>
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
  .service-desc.imgBgRight {
    @apply dark:bg-themedark-10 bg-no-repeat bg-themelight-10 bg-right-bottom;
    background-position: right top 100rem;
    @screen md {
      background-size: 20rem;
      background-position: right -3.125rem bottom 0;
    }
    @screen smd {
      background-size: 30.625rem;
    }
    @screen sxl {
      @apply bg-themelight-10 bg-contain;
      background-position: right 6.25rem top;
    }
    .serviceExpertise {
      @apply flex flex-wrap;
      > div {
        @apply w-full md:w-3/5 smd:w-2/4 px-4;
      }
      .btn {
        p {
          @apply p-0;
        }
      }
    }
  }
}
</style>
