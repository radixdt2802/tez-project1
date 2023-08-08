<template>
  <div class="bgHalfSection rxsection-y-space">
    <div class="overlayBg hidden smd:block z-10"></div>
    <div class="fluidContainer">
      <div class="row">
        <div
          class="col1-2"
          v-for="(item, i) in data.TitleContentList"
          :class="{ relative: item.VueReferenceCode == 'DarkBg#T3' }"
        >
          <div
            v-if="item.VueReferenceCode == 'DarkBg#T3'"
            class="overlayBg block smd:hidden"
          ></div>
          <div class="tcBlock">
            <!-- <div class="h3">{{ item.Title }}</div> -->
            <div
              v-html="sTitles[i]"
              :class="{ contentWhite: item.VueReferenceCode == 'DarkBg#T3' }"
            ></div>
            <div
              :class="{
                contentWhite: item.VueReferenceCode == 'DarkBg#T3',
              }"
            >
              <div
                class="list_sm square_list"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
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
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      sTitleStyle: "h3",
    };
  },
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .bgHalfSection {
    @apply bg-no-repeat bg-themelight-20 dark:bg-themedark-40 relative overflow-hidden;
    background-size: 0;
    @screen smd {
      @apply relative overflow-hidden;
    }
    .col1-2 {
      @apply smd:w-1/2 w-full px-4 z-10 relative;
      &:last-child {
        @apply xsm:px-4 pt-12 smd:pt-0;
        .tcBlock {
          @apply pl-0 max-w-full;
          @screen sxl {
            @apply pl-12;
          }
        }
      }
      &:first-child {
        @apply xsm:px-4 pb-12 smd:pb-0;
        .tcBlock {
          @apply pr-0 max-w-full;
          @screen sxl {
            @apply pr-12;
          }
        }
      }
    }
    .overlayBg {
      @apply bg-secondary dark:bg-themedark-70 left-50 transform absolute -translate-x-1/2 top-0 -z-1;
      height: 140%;
      width: calc(100vw + 2px);
      @screen smd {
        @apply bg-secondary transform-none absolute left-auto right-0 w-1/2 top-0 h-full z-10;
      }
    }
    .fluidContainer {
      @apply ml-auto mr-auto pl-5 pr-5 w-full;
      @screen xl {
        @apply pl-8 pr-8;
      }
      max-width: 102.375rem;
    }
  }
}
</style>
