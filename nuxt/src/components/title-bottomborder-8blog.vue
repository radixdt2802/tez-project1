<template>
  <div class="rxsection-y-space titlebottomborder bg-themelight-20 dark:bg-themedark-70">
    <div class="container">
      <div v-html="title"></div>
      <!-- <h2 class="titleborder">{{ data.Title }}</h2> -->
      <div class="row t-space-60">
        <div class="bgCard-row" v-for="(item,i) in data.TitleContentList">
          <div class="bgCard">
            <!-- <h3 class="h3_sm" v-if="!item.CTA">{{ item.Title }}</h3>
            <h3
              v-html="$md.render(item.CTA ? item.CTA : '')"
              v-if="item.CTA"
              class="h3_sm ctaLink mb-2"
            ></h3> -->
            <div v-html="sTitles[i]"></div>
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
<script>
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle:"h2 titleborder",
      sTitleStyle: "h3_sm ctaLink"
    }
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .titlebottomborder {
    
    .titleborder {
      @apply border-b border-solid pb-2 sm:pb-5 dark:border-themedark-65 border-themedark-0;
      padding-bottom: 0.9375rem;
      @screen xsm {
        padding-bottom: 0.625rem;
      }
      @screen xl {
        padding-bottom: 1.5625rem;
      }
    }

    .bgCard {
      @apply w-full text-left;
      padding: 0 0.937rem;
      h3 {
        @apply font-semibold text-left;

        @screen lg {
          @apply pb-0;
        }
        @screen sxl {
          margin-bottom: 0.625rem;
        }
        @screen xl {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
      }

      .listanchor {
        @apply text-left;
        @screen xxl {
          max-width: 18.18rem;
        }
      }
    }
    .bgCard-row {
      @apply w-full sm:w-1/2 smd:w-1/3;
      .bgCard {
        @apply text-center sm:text-left;
      }
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }

      @screen sm {
        &:nth-child(2) {
          @apply mt-0;
        }
      }

      @screen smd {
        &:nth-child(3) {
          margin-top: 0;
        }
        &:nth-child(n + 4) {
          margin-top: 3.125rem;
        }
      }

      @screen sxl {
        @apply w-1/4;
        &:nth-child(4) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
  