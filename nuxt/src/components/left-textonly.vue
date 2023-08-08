<template>
  <div
    class="leftText"
    :class="{
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TC_WhiteBG_TextLeft',
      'bg-secondary dark:bg-themedark-70 contentWhite':
        data.VueReferenceCode == 'TC_DarkBG_TextLeft',
      'bg-themelight-10 dark:bg-themedark-10':
        data.VueReferenceCode == 'TC_BGGrey_TextLeft',
      'rxsection-y-space':
        data.VueReferenceCode !== 'TC_WhiteBG_TextLeft_NoTitle',
    }"
  >
    <div class="container">
      <div class="mx-auto text-left">
        <!-- <h2 v-if="data.VueReferenceCode !== 'TC_WhiteBG_TextLeft_NoTitle'">
          {{ data.Title }}
        </h2> -->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor square_list primary_list noBs list_sm"
          :class="[
            data.VueReferenceCode == 'TC_BGGrey_TextLeft' ? '' : 'para_md',
          ]"
        ></div>
        <!-- CTA here -->
        <div class="pt-3 customCta" v-if="data.CTA">
          <div
            class="inline customContent"
            v-html="$md.render(data.CTA ? data.CTA : '')"
          ></div>
          <img
            class="inline"
            v-rxlazy="arrowImage"
            width="18"
            height="10"
            alt="Contact Us"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
import staticImg from '../mixins/staticimg.mixin';
export default {
  mixins: [titleMixin, staticImg],
  props: {
    data: Object,
  },
  data(){
  return {
    titleStyle : "h2"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .leftText {
    ul {
      @apply md:ml-6 mt-6;
    }
    .customCta {
      img {
        margin-left: 1rem;
      }
      &:hover {
        img {
          margin-left: 0.625rem;
          transition: all 0.3s ease-in-out;
        }
      }
      .customContent {
        p {
          @apply inline;
          a {
            @apply text-primary no-underline;
          }
        }
      }
    }
  }
}
</style>