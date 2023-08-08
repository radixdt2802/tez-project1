<template>
  <div
    class="bgblueimage-twolist-title rxsection-y-space contentWhite"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[data.Image ? '' : 'bg-secondary']"
  >
    <div class="beforeDark relative" :class="[data.VueReferenceCode != 'Bgblue-Title-twolist-cta'  ? 'bg-overlayblue' :'']"></div>
    <div class="container relative">
      <!-- <h2 class="text-center relative">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <p class="text-center relative para_md" v-if="data.ShortText" v-html="$md.render(data.ShortText ? data.ShortText : '')" ></p>
      <div class="row justify-content-center list-content align-items-center">
        <div class=" w-full mx-auto px-4"
        :class="[data.VueReferenceCode == 'Bgblue-Title-twolist-cta'
        ? '':'sxl:w-2/3']"
        >
          <div
            class="circle_list list_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
      <div
        class="text-center relative mt-3"
        v-if="data.VueReferenceCode == 'Bgblue-Title-twolist-cta'"
      >
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="ctaPrimary inline w-auto"
        ></div>
        <img
          class="primary-arrowBtn inline"
          v-rxlazy="
            'https://d2ms8rpfqc4h24.cloudfront.net/arrow_d169cb2460.svg'
          "
          width="18"
          height="10"
          alt="Arrow"
        />
      </div>
    </div>
  </div>
</template>
  <script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "text-center relative h2",
     }
  }
};
</script>
  <style lang="scss">
@layer components {
  .bg-overlayblue {
    background-color: rgba(15, 22, 40, 0.93);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .bgblueimage-twolist-title {
    @apply bg-no-repeat bg-cover relative;

    .list-content {
      padding-top: 1.875rem;
      ul {
        @apply flex flex-wrap;
        li {
          @apply md:w-1/2 w-full mb-1;
        }
      }
    }
    .ctaPrimary {
      p {
        display: inline;
      }
      a {
        @apply text-primary mr-4 transition-all ease-in-out duration-300 inline no-underline;
        &:hover {
          @apply mr-3;
        }
      }
    }
  }
}
</style>