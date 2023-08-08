<template>
  <div
    class="
      rxsection-y-space
      titlelistborder
      elistborder
      bg-themelight-10
      dark:bg-themedark-70
    "
  >
    <div class="container">
      <!-- <h2 class="text-center w-full sxl:w-10/12 smd:w-11/12 mx-auto">
        {{ data.Title }}
      </h2> -->
      <div v-html="title"></div>
      <div class="row t-space-40">
        <div
          class="bgCard-row w-full smd:w-1/2 px-4 mt-5"
          v-if="data.TitleContentList"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCardspace">
            <div class="bgCard-check m-0">
              <!-- <h3 class="para_lg noleftspace p-0">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
            </div>
            <div class="bgcontent">
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="square_list noBs"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center md:mt-10 mt-5" v-if="data.CTA">
        <div class="btn btn_md" v-html="$md.render(data.CTA)"></div>
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
      titleStyle : "text-center w-full sxl:w-10/12 smd:w-11/12 mx-auto h2",
      sTitleStyle : "h3 para_lg noleftspace p-0",
     }
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .dark {
    .titlelistborder {
      .bgCard-row {
        .bgCardspace {
          border-color: #4c4c4c #4c4c4c #31bbae;
        }
      }
    }
  }
  .titlelistborder {
    .bgCard-check {
      @apply relative flex items-center lg:items-start;
      padding: 0.313rem 0;
      margin-bottom: 0.625rem;

      h3:not(.noleftspace) , .h3:not(.noleftspace) {
        @apply p-0;
        margin-left: 0.938rem;
        @screen sm {
          margin-left: 1.563rem;
        }
      }
    }
    .bgCard-row {
      .bgCardspace {
        @apply p-5 border-solid h-full bg-themelight-0 dark:bg-themedark-0;

        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5 #f5f5f5 #31bbae;

        @screen sm {
          padding: 1.875rem 2.188rem;
        }
        @screen xxxl {
          padding: 1.875rem 2.188rem;
        }
      }

      @screen sm {
        &:nth-child(n + 4),
        &:nth-child(3) {
          @apply mt-10;
        }
      }
    }
    @screen smd {
      .bgCard-row {
        @apply w-1/2 h-auto;

        &:nth-child(1),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }

    .square_list {
      @apply p-0;
      ul {
        @screen xsm {
          padding-left: 1.875rem;
        }

        padding-top: 0.625rem;
        li {
          @apply m-0 text-lg;
          line-height: 1.875rem;
        }
      }
    }
  }
}
</style>