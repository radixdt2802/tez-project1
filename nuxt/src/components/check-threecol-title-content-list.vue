<template>
  <div class="rxsection-y-space check-three-col contentWhite bg-no-repeat bg-cover beforeDark relative"
  v-bind:style="[
  data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
]" >
    <div class="container relative">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center mx-auto para_md smd:w-11/12 w-full"
      ></div>
      <div class="row t-space-40">
        <div
          class="bgCard-row"
          v-if="data.TitleContentMediaList"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="bgCardspace">
            <div class="bgCard-check relative flex lg:items-center items-start">
              <img
                v-if="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                v-rxlazy="item.Image"
              />
              <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
        <div class="bgCard-row" v-if="data.TitleContentList" v-for="(item,i) in data.TitleContentList">
          <div class="bgCardspace">
            <div class="bgCard-check relative flex items-center lg:items-start">
              <!-- <h3 class="para_lg noleftspace">{{item.Title}}</h3> -->
              <div v-html="sTitles[i]"></div>
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
  mixins: [titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle : "h3_sm noleftspace",
     }
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .check-three-col {
    
    .bgCard-check {
      padding: 0.313rem 0;

      img {
        margin-top: 0.375rem;
        @apply lg:mt-0;
        max-width: 1.625rem;
        @screen md {
          max-width: 2rem;
        }
      }
      
      .h3:not(.noleftspace), .h3_sm {
        @apply p-0;
        margin-left: 0.938rem;
        @screen sm {
          margin-left: 1.563rem;
        }
      }
    }
    .bgCard-row {
      .bgCardspace {
        @apply h-full;
        .bgcontent {
          padding-left: 2.3125rem;
          @screen sm {
            padding-left: 2.8125rem;
          }
        }
      }
      @apply px-4 w-full;

      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-6;
      }
      @screen sm {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-10;
        }
      }
    }
    @screen smd {
      .bgCard-row {
        @apply w-1/3 h-auto;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>