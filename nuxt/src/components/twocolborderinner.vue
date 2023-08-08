<template>
  <div class="rxsection-y-space titlelistbg">
    <div class="container">
      <!-- <h2 class="text-center w-full sxl:w-10/12 smd:w-11/12 mx-auto">
        {{ data.Title }}
      </h2> -->
      <div v-html="title"></div>
       <div
          class="para_md text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      <div class="row mt-6">
        <div
          class="bgCard-row px-4 w-full smd:w-1/2 smd:h-auto"
          v-if="data.TitleContentList"
          v-for="(item,i) in data.TitleContentList"
        >
          <div
            class="
              bgCardspace
              p-5
              border-solid
              h-full
              bg-themelight-10
              dark:bg-themedark-70
            "
          >
            <div class="bgCard-check m-0">
              <div v-html="sTitles[i]"></div>
              <!-- <h3 v-if="!item.CTA" class="para_lg noleftspace p-0">
                {{ item.Title }}
              </h3>
              <h3
                v-if="item.CTA"
                class="para_lg noleftspace p-0"
                v-html="$md.render(item.CTA)"
              ></h3> -->
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
		  sTitleStyle: "h3_sm noleftspace p-0"
		}
	},
};
</script>
  <style lang="scss">
@layer utilities {
  .dark{
    .titlelistbg{
      .bgCard-row {
        .bgCardspace {
          border-color: #353535 #353535 #4c4c4c;
        }
      }
    }
  }
  .titlelistbg {
    .bgCard-check {
      @apply relative flex items-center lg:items-start;
      padding: 0.313rem 0;
      margin-bottom: 0.625rem;

      h3:not(.noleftspace) {
        @apply p-0;
        margin-left: 0.938rem;
        @screen sm {
          margin-left: 1.563rem;
        }
      }
    }
    .bgCard-row {
      .bgCardspace {
        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5 #f5f5f5 #31bbae;

        @screen sm {
          padding: 1.875rem 2.188rem;
        }
        @screen xxxl {
          padding: 1.875rem 2.188rem;
        }
      }

      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-10;
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
        &:nth-child(1),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }

    .square_list {
      @apply p-0;
      ul {
        padding-left: 1.875rem;
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