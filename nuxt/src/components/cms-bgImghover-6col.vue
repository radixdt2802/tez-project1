<template>
  <div
    class="cms-bgImghover-6col contentWhite beforeBlackDark relative bg-no-repeat bg-cover bg-fixed"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="row">
      <div
        class="md:w-4/12 sm:w-1/2 w-full relative"
        v-for="(item,i) in data.TitleContentList"
      >
        <div class="card_wrap mx-auto text-center max-w-full">
          <!-- <h3>{{ item.Title }}</h3> -->
          <div v-html="sTitles[i]"></div>
        </div>
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
      sTitleStyle : "h3",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .cms-bgImghover-6col {
    .row {
      margin: 0;
      > div {
        background: rgba(15, 22, 40, 0.6);
        @apply transition-all duration-300 ease-in-out;
        &:nth-child(odd) {
          background: rgba(15, 22, 40, 0.8);
        }
        &:hover {
          background-color: rgba(49, 187, 174, 0.94);
        }
      }
    }
    .card_wrap {
      padding: 18% 0.625rem;
      @screen sxl {
        max-width: 28.375rem;
      }
    }
  }
}
</style>