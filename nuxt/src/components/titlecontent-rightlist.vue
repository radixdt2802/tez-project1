<template>
  <div
    class="titlecont-rightlist rxsection-y-space relative beforeBlackDark"
    :class="{ 'bg-themelight-0 dark:bg-themedark-70': !data.Image }"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <!-- <div class="bgOverlay"></div> -->
    <div class="container relative">
      <div class="serviceExpertise row">
        <div class="w-full smd:w-2/4 px-4 darkOverlay">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="cus-width"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            :class="{
              square_list: data.VueReferenceCode == 'TCM_RightList_Square_list',
              circle_list:
                data.VueReferenceCode !== 'TCM_RightList_Square_list',
            }"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
        <div class="w-full smd:w-2/4 px-4 smd:mt-0 mt-8">
          <div class="md:p-10 p-5  dark:bg-themedark-0"
          :class="[data.VueReferenceCode == 'AI_LeftCon_RightList' ? 'bg-opacitybg-25':'',
                  data.VueReferenceCode == 'TCM_RightList_Square_list' ? 'bg-opacitybg-0':''
          ]">
            <ul
              :class="[
                data.VueReferenceCode == 'TCM_RightList_Square_list'
                  ? 'square_list list_md'
                  : 'circle_list list_sm',
              ]"
            >
              <li v-for="item in data.TitleContentList" :key="item.id" v-rxhtml="item.LongText"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
     data(){
    return {
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .titlecont-rightlist {
    h2 {
      max-width: 27.5rem;
    }
    .cus-width {
      max-width: 38.75rem;
    }
    ul.circle_list{
      li{
        @apply py-2;
        p{
          @apply py-0;
        }
      }
    }
    ul.square_list {
       li{
        @apply py-2;
        &::before {
          margin-top: 0.3125rem;
        }
        p{
          @apply py-0;
        }
      }

    }
  }
  .dark {
    .titlecont-rightlist {
      .bgOverlay {
        @apply absolute w-full h-full bg-themedark-0 top-0 left-0;
        opacity: 0.8;
      }
      .darkOverlay {
        @apply relative;
      }
    }
  }
}
</style>
