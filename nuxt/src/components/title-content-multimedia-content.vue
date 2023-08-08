<template>
  <div
    class="multimedialist rxsection-y-space"
    :class="{
      'bg-themelight-10 dark:bg-themedark-70':
        data.VueReferenceCode == 'Multimedia_Graybg',
        'pb-0': data.VueReferenceCode == 'TCWithTCML_5050-Media-List'
    }"
  >
    <div class="container">
      <div class="lg:w-10/12 w-full mx-auto text-center">
        <!-- <h2 v-if="data.Title">{{ data.Title }}</h2> -->
        <div v-if="data.Title" v-html="title"></div>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="alternatemedialist divide-solid divide-y divide-themelight-50 dark:divide-themedark-65">
        <div
          class="image-content-section py-14 flex flex-wrap items-center"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div
            class="py-2 image-area mb-2 smd:mb-0 smd:block"
            :class="[
              data.VueReferenceCode == 'TCWithTCML_5050-Media-List'
                ? 'smd:w-1/2 w-full px-4'
                : 'smd:w-1/2 xl:w-1/3 px-4',
            ]"
          >
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
          </div>
          <div
            class="content-area text-left w-full"
            :class="[
              data.VueReferenceCode == 'TCWithTCML_5050-Media-List'
                ? 'smd:w-1/2 w-full px-4'
                : ' smd:w-1/2 xl:w-4/6 px-4',
            ]"
          >
            <div class="detail">
              <!-- <h3 v-if="item.Title" class="pb-2">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                v-if="item.ShortText"
                v-rxhtml="item.ShortText"
                class="para_sm"
              ></div>
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="para_sm"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
   data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "h3 pb-2",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .multimedialist {
    .alternatemedialist {
      .image-content-section {
        &:nth-child(even) {
          .image-area {
            order: 1;
          }
        }
      }
    }
  }
}
</style>