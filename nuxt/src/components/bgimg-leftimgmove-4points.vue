<template>
  <div
    class="rxValueSectionL rxsection-y-space contentWhite beforeDarkSecondary relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[data.Image ? 'bg-no-repeat bg-cover bg-center' : 'bg-secondary']"
  >
    <div class="container relative">
      <div class="row">
        <div class="smd-col3 w-full smd:w-1/3 sxl:w-1/2  px-4 hidden smd:block">
           
            <img
              class="leftIconimg max-w-md mx-auto w-full"
              loading="lazy"
              v-rxlazy="data.Icon"
              :width="data.Icon.width"
              :height="data.Icon.height"
            />
           
        </div>
        <div class="smd-col6 smd:w-2/3 sxl:w-1/2 px-4">
          <!-- <h3>{{ data.Title }}</h3> -->
          <div v-html="title"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText" class></div>
          <div class="row">
            <div class="col1-4 sm:w-1/4 w-1/2 px-4 pointsWrap " v-for="item in data.TitleMediaList">
              <img
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                class="pointsIcon mx-auto"
              />
              <p class="para_xs text-center mx-auto  max-w-full">{{ item.Title }}</p>
            </div>
          </div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            :class="data.ShortText"
          ></div>
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
      titleStyle : "h3",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .rxValueSectionL{
    @apply  bg-secondary;
    .pointsWrap {
      &:hover {
        .pointsIcon {
          @apply transition-all ease-in-out duration-300 transform -translate-y-1;
        }
      }
      @apply my-6 sm:my-10;
      &:nth-child(odd) {
        @apply border-r border-white;
      }
      @screen sm {
        &:not(:last-child) {
          @apply border-r border-white;
        }
      }
    }
    .btn {
      @apply text-center;
      @screen sm {
        @apply text-left;
      }
    }
  }
}
</style>