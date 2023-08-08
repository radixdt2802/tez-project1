<template>
  <div
    class="rxaannouncement rxsection-y-space bg-no-repeat bg-bottom bg-customcolor dark:bg-themedark-0"
  >
    <div class="container">
      <div class="row items-center">
        <div class="w-full lg:w-2/5 px-4 lg:border-r lg:border-themedark-90 text-center">
          <p class="h3 p-0 font-bold" v-if="data.SubTitle">
            {{ data.SubTitle }}
          </p>
          <p class="font-bold h3 p-0">
            {{ data.ShortText }}
          </p>
          <div class="mt-5">
            <img
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              v-if="data.Image"
              :alt="data.Image.alternativeText"
              class="mx-auto max-w-custom"
            />
          </div>
        </div>

        <div class="w-auto md:inline-block mx-auto px-4 lg:w-3/5 lg:pl-24">
          <h2 class="lg:mt-0 mt-8 lg:text-left text-center">{{ data.Title }}</h2>
          <div
            class="para_md rxa-dashed "
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <div class="lg:text-left text-center">
          <div class="btn rxa_btn_sm mt-5 lg:mt-12 font-semibold">
            <p>
              <a :href="data.CTA" title="Discover More" target="_blank">Discover More</a>
            </p>
          </div>
         </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@layer utilities {
  .dark{
    .rxaannouncement {
      &.bg-customcolor{
      @apply bg-themedark-0;
    }
    .rxa-dashed li {
      @apply relative my-2 mx-4 pl-5 list-none;
      &:before {
        content: "";
        @apply bg-themelight-0 inline-block absolute left-0;
        margin-right: 0.75rem;
        width: 0.625rem;
        height: 0.125rem;
        top: 0.625rem;
        @screen sm {
          top: 0.875rem;
        }
      }
    }
    }  
  }
  .rxaannouncement {
    &.bg-customcolor{
      background-color: #e9f6fa;
    }
    img.max-w-custom {
      max-width: 15rem;
      @screen smd {
        max-width: unset;
      }
    }
    .rxa-dashed li {
      @apply relative my-2 mx-4 pl-5 list-none;
      &:before {
        content: "";
        @apply bg-themedark-0 inline-block absolute left-0;
        margin-right: 0.75rem;
        width: 0.625rem;
        height: 0.125rem;
        top: 0.625rem;
        @screen sm {
          top: 0.875rem;
        }
      }
    }
  }
}
</style>
