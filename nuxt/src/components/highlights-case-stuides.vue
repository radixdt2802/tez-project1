<template>
  <div
    class="
      highlightsMain
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-10
    "
  >
    <div class="container">
      <div class="row">
        <div class="w-full px-4">
          <div v-html="title"></div>
          <div class="row mt-10">
            <div
              class="w-full md:w-1/3 px-4"
              v-for="item in data.TitleContentMediaList"
              :key="item.id"
            >
            <template v-if="item.VueReferenceCode != 'TCM_Full'">
              <div class="flex items-start">
                <img
                  class="mt-1 light-image"
                  v-if="item.Icon"
                  v-rxlazy="item.Icon"
                  :width="item.Icon.width"
                  :height="item.Icon.height"
                />
                <img
                  class="mt-1 dark-image"
                  v-if="item.HoverIcon"
                  v-rxlazy="item.HoverIcon"
                  :width="item.HoverIcon.width"
                  :height="item.HoverIcon.height"
                />
                
                <div class="ml-4">
                  <h3>{{ item.Title }}</h3>
                  <div
                    class="para_md pt-0"
                    v-if="item.LongText"
                    v-rxhtml="item.LongText"
                  ></div>
                </div>
              </div>
            </template>
            </div>
            <div
              class="w-full px-4 mt-0 md:mt-6"
              v-for="item in data.TitleContentMediaList"
              :key="item.id"
            >
            <template v-if="item.VueReferenceCode == 'TCM_Full'">
              <div class="flex items-start mt-3 md:mt-6">
                <img
                  v-if="item.Icon"
                  v-rxlazy="item.Icon"
                  :width="item.Icon.width"
                  :height="item.Icon.height"
                  class="mt-1 light-image"
                />
                <img
                v-if="item.HoverIcon"
                v-rxlazy="item.HoverIcon"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                class="mt-1 dark-image"
              />
                <div class="ml-4">
                  <h3>{{ item.Title }}</h3>
                  <div
                    class="para_md listInline"
                    v-if="item.LongText"
                    v-rxhtml="item.LongText"
                  ></div>
                </div>
              </div>
            </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 text-center",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .highlightsMain{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  .highlightsMain {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
    h3 {
      font-size: 1.375rem;
      @apply xl:pb-3 p-0  leading-8;
      @screen sm {
        @apply text-2xl leading-9;
      }
      @screen sxl {
        font-size: 1.625rem;
        line-height: 2.375rem;
      }
      @screen xl {
        font-size: 2rem;
        line-height: 2.75rem;
      }
    }
  }
  .listInline {
    ul {
      @apply flex flex-wrap pl-0;
      li {
        @apply pr-2 relative text-black dark:text-themelight-0;
        &:not(:last-child):after {
          content: "|";
          @apply ml-1;
        }
      }
    }
  }
}
</style>