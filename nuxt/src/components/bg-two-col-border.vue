<template>
  <div
    class="
      rxsection-y-space
      check-two-col
      contentWhite
      bg-fixed
      beforeDark
      relative
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center mx-auto para_md smd:w-11/12 w-full"
      ></div>
      <div class="row t-space-60">
        <div
          class="bgCard-row"
          v-if="data.TitleContentMediaList"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="bgCardspace">
            <div
              class="bgCard-check relative flex lg:items-center items-center"
            >
              <!-- <h3 v-if="!item.CTA" class="para_lg">
                {{ item.Title }}
              </h3>
              <h3
                v-if="item.CTA"
                class="para_lg"
                v-html="$md.render(item.CTA)"
              ></h3> -->
              <div v-html="sTitles[i]"></div>
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
        <div
          class="bgCard-row"
          v-if="data.TitleContentList"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCardspace">
            <div class="bgCard-check relative flex items-center lg:items-start">
              <!-- <h3 v-if="!item.CTA" class="para_lg noleftspace">
                {{ item.Title }}
              </h3>
              <h3
                v-if="item.CTA"
                class="para_lg noleftspace"
                v-html="$md.render(item.CTA)"
              ></h3> -->
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
      sTitleStyle : "para_lg noleftspace h3 pb-0",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .check-two-col {
    .bgCard-check {
      padding: 0.313rem 0;
      margin-bottom: 0.625rem;
      h3:not(.noleftspace) {
        @apply p-0;
        margin-left: 0.938rem;
        @screen sm {
          margin-left: 1.563rem;
        }
        @screen smd {
          font-size: 1.375rem;
          line-height: 2rem;
        }
        @screen xl {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        @screen xxxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
      }
    }
    .bgCard-row {
      .bgCardspace {
        @apply p-5 border-solid h-full border-b-4 border-primary bg-opacitybg-40;
        @screen sm {
          padding: 1.875rem 2.188rem;
        }
        @screen xxxl {
          padding: 1.875rem 2.188rem;
        }
      }
      @apply px-4 w-full;

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
        @apply w-1/2 h-auto;

        &:nth-child(1),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>