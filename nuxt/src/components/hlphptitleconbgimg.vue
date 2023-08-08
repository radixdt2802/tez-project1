<template>
  <div class="hlphptitleconbgimg rxsection-b-space relative">
    <div
      class="
        opportunity_bgimg
        absolute
        w-full
        top-0
        left-0
        bg-no-repeat bg-cover bg-center
      "
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    ></div>
    <div class="px-4 relative hiring_opportunity">
      <div class="flex flex-wrap items-center">
        <div class="sxl:w-7/12 smd:w-10/12 w-full smd:mx-auto">
          <div
            class="
              text-center
              opportunity_block
              rounded-3xl
              bg-themelight-0
              px-8
              py-8
              smd:py-12
              smd:px-12
              sxl:px-24
              sxl:py-20
            "
          >
            <h3 class="text-customcolor-96">
              {{ data.Title }}
            </h3>
            <div
              class="para_md"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
            <div
              v-if="data.CTA"
              v-html="$md.render(data.CTA)"
              class="text-center mt-8 btn font-bold"
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
  .hlphptitleconbgimg {
    .opportunity_bgimg {
      height: 50%;
      @screen xxl {
        height: 56%;
      }
    }
    .hiring_opportunity {
      padding-top: 5.3125rem;
      padding-bottom: 3.75rem;
      @screen md {
        padding-bottom: 5.3125rem;
      }
      @screen smd {
        padding-top: 12.5rem;
      }
      @screen sxl {
        padding-top: 21.25rem;
        padding-bottom: 5.9375rem;
      }
    }
    .opportunity_block {
      box-shadow: 0px 10px 50px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>