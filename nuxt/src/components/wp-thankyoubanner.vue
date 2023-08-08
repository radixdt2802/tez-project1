<template>
  <div class="rxsection-y-space wp-thankyoubanner text-center">
    <div class="container rxsection-t-space">
      <h1 class="md:pb-10 text-primary">{{ data.Title }}</h1>
      <div class="relative head-img-block mx-auto">
        <div
          class="md:absolute para_block mx-auto md:text-left text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          :class="{
            para_xsm: data.VueReferenceCode == 'TCM_RW_Thankyou',
            para_md: data.VueReferenceCode == 'TCM_TCC_Thankyou',
          }"
        ></div>
        <img
          class="mx-auto md:block hidden"
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.height"
        />
        <!-- <div
          class="btn sm:mt-8 mt-6"
          v-if="data.CTA"
          v-html="$md.render(data.CTA)"
        ></div> -->
      </div>
      <div
        class="mt-16 sm:mt-20 xl:mt-24 sm:pb-5"
        v-for="item in data.TitleContentList"
      >
        <h2 class="p-0">{{ item.Title }}</h2>
        <div class="" v-if="item.LongText" v-rxhtml="item.LongText"></div>
        <div
          class="btn sm:mt-8 mt-6"
          v-if="item.CTA"
          v-html="$md.render(item.CTA)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .wp-thankyoubanner {
    h1 {
      font-size: 3.375rem;
      line-height: 3.75rem;
      @screen xsm {
        font-size: 4.375rem;
        line-height: 4.375rem;
      }
      @screen md {
        font-size: 4.5rem;
      }
      @screen xl {
        font-size: 5rem;
        line-height: 5rem;
      }
    }
    .head-img-block {
      max-width: 56.0625rem;
    }
    .para_block {
      @screen md {
        max-width: 20.3125rem;
      }
      top: 22%;
      left: 2%;
    }
    .para_xsm {
      p {
        @apply text-base p-0;
        a {
          @apply text-primary no-underline font-semibold;
        }
      }
    }
  }
}
</style>