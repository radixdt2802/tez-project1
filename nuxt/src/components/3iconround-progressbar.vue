<template>
  <div class="rxsection-y-space repurpose-3icon bg-primary dark:bg-themedark-0 contentWhite">
    <div class="container">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md pb-10"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row justify-center">
        <div
          class="md:w-1/3 sm:w-full px-4"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="mission-card p-5 border border-solid sxl:border-transparent  bg-transparent sm:max-w-full h-full">
            <div class="mission-icon border border-dashed border-themelight-0 bg-primary dark:bg-themedark-70 relative rounded-full sxl:mb-10 mb-5 mx-auto flex items-center justify-center">
              <img
                class="mx-auto"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
            </div>
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "para_lg h3",
     }
  }
};
</script>
    <style lang="scss">
@layer utilities {
  .repurpose-3icon {
    @apply text-center;
    .row {
      > div {
        &:nth-child(n + 4),
        &:nth-child(3),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen sm {
          &:nth-child(2) {
            margin-top: 0rem;
          }
        }
        @screen md {
          &:nth-child(3),
          &:nth-child(2) {
            margin-top: 0rem;
          }
        }
        @screen sxl {
          &:nth-child(n + 4) {
            margin-top: 0rem;
          }
        }
        &:last-child {
          .mission-icon {
            &::before {
              @apply hidden;
            }
          }
        }
      }
    }
    .mission-card {
      max-width: 21.875rem;
      border-color: rgba(255, 255, 255, 0.33);

      @screen sxl {
        padding: 0.625rem;
        border-color:transparent;
      }
      .mission-icon {
        width: 7.5rem;
        height: 7.5rem;
        @screen sxl {
          width: 10rem;
          height: 10rem;
          &::before {
            @apply absolute top-50 left-100 z-0 border-t border-dashed border-themelight-0;
            content: "";
            width: calc(220% - 20px);
            height: 0.0625rem;
          }
        }
      }
    }
  }
}
</style>
  