<template>
  <div
    :class="{
      contentWhite: data.VueReferenceCode == 'CS_OverallProject',
      'rxsection-t-space contentWhite': data.VueReferenceCode == 'TC_DarkBG',
    }"
  >
    <div
      class="tc-cta"
      :class="{
        'bg-secondary dark:bg-themedark-70 text-themelight-0':
          data.VueReferenceCode == 'CS_OverallProject',
      }"
    >
      <div
        class="container inlineiconcontent"
        :class="{
          'bg-transparent noContentSpace':
            data.VueReferenceCode == 'CS_OverallProject',
          ' bg-secondary dark:bg-themedark-70 text-themelight-0 text-center sm:text-left':
            data.VueReferenceCode == 'TC_DarkBG',
        }"
      >
        <h2>{{ data.Title }}</h2>
        <div
          class="iconcontent"
          :class="{ para_md: data.VueReferenceCode == 'CS_OverallProject' }"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div class="ctaOverall pt-3">
          <div
            class="iconcontent inline font-semibold"
            v-if="data.CTA"
            v-html="$md.render(data.CTA ? data.CTA : '')"
          ></div>
          <img
            class="inline transition-all duration-300 ease-in-out"
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
import staticImg from '../mixins/staticimg.mixin';
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [staticImg],
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .tc-cta {
    .inlineiconcontent {
      padding: 1.875rem 1.25rem;
      @screen lg {
        padding: 3.125rem 2.5rem;
      }
      @screen xl {
        padding: 4.375rem 2.5rem;
      }
      @screen xxl {
        padding: 6.25rem 2.5rem;
      }

      .iconcontent {
        p:last-child {
          @apply text-themelight-0 inline;
          a {
            @apply text-primary no-underline;
          }
        }
      }
      .ctaOverall {
        &:hover {
          img {
            margin-left: 0.625rem;
          }
        }
      }
    }

    &.noContentSpace {
      p {
        @apply px-0 text-base;
        @screen smd {
          @apply text-xl;
        }
        @screen xl {
          @apply leading-normal;
          font-size: 1.375rem;
        }
      }
    }
  }
}
</style>