<template>
  <div
    class="rxsection-y-space es-iconnohover bg-no-repeat bg-cover"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div
        class="text-center para_md smd:w-11/12 w-full mx-auto"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row t-space-60">
        <div
          class="bgCard-row md:w-1/2 w-full px-4"
          v-for="item in data.TitleContentMediaList"
        >
          <div class="bgCard-check">
            <div class="smd:mb-0 mb-2">
              <img
                v-if="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                v-rxlazy="item.Icon"
              />
            </div>
            <div>
              <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3>

              <h3
                class="para_lg ctaLink"
                v-if="item.CTA"
                v-html="$md.render(item.CTA)"
              ></h3>
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-html="$md.render(data.CTA ? data.CTA : '')"
        v-if="data.CTA"
        class="btn mt-8 text-center"
      ></div>
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
  .es-iconnohover {
    span > p {
      display: inline;
      padding: 0;
    }
    .bgCard-check {
      @apply relative flex flex-wrap items-start h-full p-4 pt-5 smd:p-0 smd:bg-transparent bg-opacitybg-40;
      img {
        margin-right: 0.875rem;
        min-width: 1.875rem;
        @screen md {
          min-width: 2.5rem;
          margin-right: 1.375rem;
        }
        @screen sxl {
          min-width: 2.75rem;
        }
      }
      h3 {
        @apply xl:pb-3 p-0;
      }
      p {
        @apply pb-0 sxl:pr-12;
      }
    }
  }
}
</style>