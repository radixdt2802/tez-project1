<template>
  <div
    class="rxsection-y-space inlineiconcontent"
    :class="{
      'bg-secondary dark:bg-themedark-0 contentWhite':
        data.VueReferenceCode == 'TCWithTCML_Checkicon_Leftlist',
      'bg-secondary dark:bg-themedark-70 contentWhite':
        data.VueReferenceCode == 'TCWithTCML_Leftlist_Darkbg',
      'bg-themelight-20 dark:bg-themedark-70':
        data.VueReferenceCode == 'TCWithTCML_Leftlist',
    }"
  >
    <div class="container">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="iconcontent" v-for="item in data.TitleContentMediaList">
        <img
          v-if="item.Icon"
          class="light-image"
          v-rxlazy="item.Icon"
          :width="item.Icon.width"
          :height="item.Icon.height"
        />
        <img
          v-if="item.HoverIcon"
          class="dark-image"
          v-rxlazy="item.HoverIcon"
          :width="item.HoverIcon.width"
          :height="item.HoverIcon.height"
        />
        <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
      titleStyle : "h2",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .inlineiconcontent {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    h2 {
      padding-bottom: 1.563rem;
    }
    .iconcontent {
      .lightIcon {
        display: none;
      }
      .darkIcon {
        display: block;
      }
      @apply flex items-start;
      img {
        @apply pt-4;
        width: 1rem;
        height: auto;
        @screen sm {
          width: 1.625rem;
        }
      }
      p {
        padding: 0.625rem 0rem 0.625rem 0.8rem;
        @screen xxxl {
          padding: 0.625rem 0rem 0.625rem 1.25rem;
        }
        @screen sm {
          padding: 0.625rem 0rem 0.625rem 1.2rem;
        }
      }
    }
  }
  .dark {
    .inlineiconcontent {
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