<template>
  <div
    class="
      rxsection-y-space
      title-con-right-list
      dark:bg-themedark-70
      beforeDark
      relative
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.Image ? 'contentWhite bg-cover' : '',
      data.VueReferenceCode == 'AM_LeftCon_RightList_TealBG'
        ? 'bg-primary contentWhite circlelistWhite'
        : '',
      data.VueReferenceCode == 'AM_LeftCon_RightList_GreyBg'
        ? 'bg-themelight-10 dark:bg-themedark-10'
        : '',
    ]"
  >
    <div class="container relative">
      <div class="row">
        <div class="smd:w-7/12 w-full px-4">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <div class="ctaOverall pt-3 flex" v-if="data.CTA">
            <div
              class="cta-arrow"
              v-html="$md.render(data.CTA ? data.CTA : '')"
            ></div>
            <img
              class="inline transition-all duration-300 ease-in-out ml-4 hover:ml-2"
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg'"
              width="18"
              height="10"
              alt="Contact Us"
            />
          </div>
        </div>
        <div class="smd:w-4/12 w-full px-4 smd:mx-auto smd:mr-0 smd:py-0 py-3">
          <div class="circle_list pt-0" v-for="(item,i) in data.TitleContentList">
            <!-- <p class="h3_sm" v-if="item.SubTitle">{{ item.SubTitle }}</p> -->
             <!-- <div v-html="sTitles[i]"
             :class="{'hidden': data.VueReferenceCode == 'AM_LeftCon_RightList_Notitle',}"></div> -->
            <div
              class="list_md para_md"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "h3_sm",
    }
  }
};
</script>
 <style lang="scss">
@layer utilities {
  .title-con-right-list {
    ul {
      li {
        @apply w-full;
      }
    }
    .cta-arrow {
      p {
        @apply inline;
        a {
          @apply text-primary no-underline;
        }
      }
    }
    /* .ctaOverall {
      &:hover {
        img {
          margin-left: 0.625rem;
        }
      }
    } */
  }
}
</style>