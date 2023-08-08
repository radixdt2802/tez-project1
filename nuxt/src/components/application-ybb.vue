<template>
  <div
    class="rxsection-y-space t-three-dot"
    v-bind:style="[
      data.BGImage ? { backgroundImage: 'url(' + data.BGImage.url + ')' } : '',
    ]"
    :class="{
      'bg-themelight-10 dark:bg-themedark-10': data.TitleContentList,
      'bg-secondary text-white': data.TitleContentMediaList,
    }"
  >
    <div class="container">
      <div v-html="title"></div>
      <div v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor para_md text-center"></div>
      <div class="row">
        <div class="bgCard-row w-full sxl:w-4/12 md:w-6/12 px-4 mt-8" v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCard-dot">
            <div v-html="sTitles[i]"></div>
            <p v-if="item.ShortText">{{ item.ShortText }}</p>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
        <div
          v-if="data.TitleContentList"
          class="bgCard-row w-full sxl:w-4/12 md:w-6/12 px-4 mt-8"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCard-dot">
            <div v-html="sTitles[i]"></div>
            <p v-if="item.ShortText">{{ item.ShortText }}</p>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
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
      sTitleStyle: "h3_sm ",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .t-three-dot {
    &.bg-secondary {
      p {
        @apply text-themelight-10;
      }
    }
    .bgCard-row{
     
      .bgCard-dot {
        @apply h-full;
        padding-left: 3.125rem;
        .h3_sm {
          @apply relative;
          &:before {
            content: "";
            @apply bg-primary rounded-md absolute;
            width: 0.625rem;
            height: 0.625rem;
            box-shadow: 0 0 0 0.313rem #31bbae4d;
            top: 0.625rem;
            @screen lg {
              top: 0.8125rem;
            }
            left: -2.25rem;
          }
        }
      }
  }
  }
}
</style>