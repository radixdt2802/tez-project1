<template>
  <div class="rxsection-y-space t-five-check">
    <div class="container">
       <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center lg:w-11/12 mx-auto para_md"
      ></div>
      <div class="row t-space-60">
        <div class="bgCard-row" v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCard-check relative">
            <img v-rxlazy="item.Icon" :width="item.Icon.width" :height="item.Icon.height" class="mb-5" />
            <!-- <h3 class="para_lg xl:pb-3 p-0">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div class="square_list" v-rxhtml="item.LongText"></div>
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
  data(){
    return{
      titleStyle : "h2 text-center",
      sTitleStyle: "h3_sm",
    }
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .t-five-check {
    .bgCard-check {
      /* img {
        @apply mb-5;
      } */
      h3 {
        /* @apply xl:pb-3 p-0; */
        max-width: 14.375rem;
      }
      .square_list {
        li {
          @apply mb-0 text-lg;
        }
      }
      p {
        @screen xsm {
          font-size: 1.063rem;
          @apply leading-7;
        }
        @screen sm {
          @apply text-lg;
          line-height: 1.875rem;
        }
      }
    }
    .bgCard-row {
      @apply px-4 w-full;
      .bgCard-check {
        @apply border border-themelight-50 p-5;
      }
      &:nth-child(n + 2) {
        @apply mt-8;
      }
    }
    @screen smd {
      .bgCard-row {
        @apply w-1/3;
        &:nth-child(n + 2) {
          @apply mt-0;
        }
        &:nth-child(n + 4) {
          @apply mt-8;
        }
        .bgCard-check {
          @apply border-0 p-0;
        }
      }
    }
    @screen sxl {
      .bgCard-row {
        @apply w-1/5;
        &:nth-child(n + 4) {
          @apply mt-0;
        }
        &:nth-child(n + 2) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>