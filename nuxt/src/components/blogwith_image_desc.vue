<template>
<div
    class="bloglr rxsection-y-space bg-themelight-10 dark:bg-themedark-10"
  >
  <div class="sxl:w-11/12 w-full mx-auto text-center">
        <h2>{{ data.Title }}</h2>
        <h3 v-if="data.ShortText">{{ data.ShortText }}</h3>
        <h3 v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor h3"></h3>
      </div>
  
    <div class="container">
      <div class="border-area divide-y divide-solid divide-themedark-50">
      <div
        class="row justify-center py-16 compstyle relative"
        v-for="item in data.Blogs"
          :key="item.Title"
      >
        <div class="left-con w-full px-4 smd:w-8/12">
          <h3>{{ item.Title }}</h3>
          <div
            class="list_sm square_list noBs listTwoCol"
            v-if="item.LongText"
            v-rxhtml="item.LongText.slice(0,1)"
          ></div>
          <div class="ctaOverall pt-3 flex" >
            <div
              class="cta-arrow"
              v-html="$md.render(item.CTA ? item.CTA : '')"
            ></div>
            <img
            v-if="item.CTA"
              class="inline transition-all duration-300 ease-in-out ml-4 hover:ml-2.5"
              v-rxlazy="arrowImage"
              width="18"
              height="10"
              alt="Contact Us"
            />
          </div>
        </div>
        <div class="img-right px-4 w-full smd:w-4/12">
          <img
            class="mx-auto smd:mr-0 smd:mt-0 max-w-full mt-8 light-image block"
            v-if="item.Image"
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
            :alt="item.Image.alternativeText"
          />
          <img
            class="mx-auto smd:mr-0 smd:mt-0 max-w-full mt-8 dark-image hidden"
            v-if="item.HoverImage"
            v-rxlazy="item.HoverImage"
            :width="item.HoverImage.width"
            :height="item.HoverImage.height"
            :alt="item.HoverImage.alternativeText"
          />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data(){
    return{
      arrowImage:"https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg"
    }
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
      .bloglr {
        .light-image {
           @apply hidden;
        }
        .dark-image {
          @apply block;
        }
      }
    }
  .bloglr {
    .compstyle {
      &:nth-child(odd) {
        .left-con {
          @apply smd:order-1;
        }
        .img-right {
          @apply smd:order-none;
          img {
            @apply smd:ml-0;
          }
        }
      }
      &:last-child {
        &::before {
          display: none;
        }
      }
      &::before {
        content: "";
        height: 0.0625rem;
        @apply w-full bottom-0 left-0 bg-themelight-50 dark:bg-themedark-65 absolute inline-block;
      }
      .cta-arrow {
        p {
          @apply inline;
          a {
            @apply text-primary no-underline;
          }
        }
      }
     
    }
  }
}
</style>