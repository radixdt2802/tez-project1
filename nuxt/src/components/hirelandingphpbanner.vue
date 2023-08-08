<template>
  <div>
    <div
      class="hirelandingphpbanner relative bg-no-repeat"
      v-bind:style="[
        data.HoverIcon
          ? { backgroundImage: 'url(' + data.HoverIcon.url + ')' }
          : '',
      ]"
    >
      <div class="hiring_header pt-12 px-12">
        <img
          class="md:ml-0 mx-auto"
          v-if="data.Icon"
          v-rxlazy="data.Icon"
          :width="data.Icon.width"
          :height="data.Icon.height"
          :alt="data.Icon.alternativeText"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="sxl:w-1/2 smd:w-8/12 sxl:ml-auto px-4 z-10">
            <div class="heading-block md:text-left text-center">
              <h1>{{ data.Title }}</h1>
              <div
                class="para_md"
                v-if="data.LongText"
                v-rxhtml="data.LongText"
              ></div>
              <div
                class="flex flex-wrap img-list justify-center md:justify-start"
              >
                <div v-for="item in data.ImageCollection">
                  <img
                    v-if="item"
                    v-rxlazy="item"
                    :width="item.width"
                    :height="item.height"
                    :alt="item.alternativeText"
                  />
                </div>
              </div>
              <div
                v-if="data.CTA"
                v-html="$md.render(data.CTA)"
                class="mt-8 btn font-bold xxl:mb-40 md:mb-24"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          smd:absolute
          relative
          sxl:left-0
          right-0
          bottom-0
          left-img
          z-0
          px-8
          md:px-0
          mx-auto
          md:ml-auto
          md:mr-0
          smd:ml-0
          mt-5
          md:mt-0
        "
      >
        <img
          class="sxl:block hidden"
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.height"
          :alt="data.Image.alternativeText"
        />
        <img
          class="sxl:hidden block mr-0 mx-auto"
          v-if="data.HoverImage"
          v-rxlazy="data.HoverImage"
          :width="data.HoverImage.width"
          :height="data.HoverImage.height"
          :alt="data.HoverImage.alternativeText"
        />
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
  .hirelandingphpbanner {
    background-color: #e9f7fa;
    background-size: 100% auto;
    background-position: bottom center;
    .heading-block {
      max-width: 44.375rem;
      @screen smd {
        max-width: 100%;
      }
    }
    .img-list {
      > div {
        &:first-child {
          @apply border-r border-red-900 md:mr-6 md:pr-6 pr-2 mr-2;
        }
      }
      img {
        max-height: 2.75rem;
        @screen md {
          max-height: 3.25rem;
        }
        width: auto;
        @screen xxl {
          max-height: auto;
        }
      }
    }
    .left-img {
      @screen md {
        width: 54%;
        margin-top: -28%;
      }
      @screen smd {
        margin-top: 0;
        width: 48%;
      }
    }
  }
}
</style>