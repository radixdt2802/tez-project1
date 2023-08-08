<template>
  <div
    class="rxsection-y-space iconlistview"
    :class="{
      'bg-themelight-10 dark:bg-themedark-40':
        data.VueReferenceCode == 'Icon_Contentlist_4col',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'Icon_Contentlist_4colWhiteBG',
    }"
  >
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md text-center"
        v-rxhtml="data.LongText"
        v-if="data.LongText"
      ></div>
      <div class="flex flex-wrap justify-between mt-12">
        <div
          class="iconstyle relative w-full sm:w-1/2 flex items-center"
          v-for="item in data.TitleContentMediaList"
        >
          <img
            class="mr-3 light-image"
            v-if="item.Icon"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
          />
          <img
            class="mr-3 dark-image"
            v-if="item.HoverIcon"
            v-rxlazy="item.HoverIcon"
            :width="item.HoverIcon.width"
            :height="item.HoverIcon.height"
          />
          <p v-if="item.CTA" v-html="$md.render(item.CTA)" class="break-all"></p>
          <p class="break-all" v-if="!item.CTA">{{ item.Title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
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
     }
  }
};
</script>
    <style lang="scss">
@layer components {
  .iconlistview {
    .iconstyle {
      &:nth-child(n + 4),
      &:nth-child(3),
      &:nth-child(2) {
        margin-top: 1.5rem;
      }
      @screen sm {
        &:nth-child(2) {
          margin-top: 0rem;
        }
      }

      @screen smd {
        width: 22%;
        &:nth-child(n + 4) {
          margin-top: 1.5rem;
        }
        &:nth-child(3),
        &:nth-child(2),
        &:nth-child(4) {
          margin-top: 0;
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
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .iconlistview {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>
  