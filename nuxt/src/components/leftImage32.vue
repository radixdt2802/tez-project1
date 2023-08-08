<template>
  <div class="leftimg32 rxsection-y-space">
    <div class="container">
      <div class="serviceExpertise row">
        <div class>
          <div v-html="title"></div>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="circle_list listanchor"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn"
          ></div>
        </div>
        <div v-if="data.Image">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
          />
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
      titleStyle:"h2",
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .leftimg32 {
    .serviceExpertise {
      .circle_list {
        li {
          padding: 0.313rem 0.938rem 0.313rem 1.875rem;
          &:before {
            @apply border-4 w-4 h-4;
            margin-top: 0.25rem;
            margin-right: 0.938rem;
          }
          @screen xsm {
            font-size: 1.063rem;
            @apply leading-7;
          }
          @screen sm {
            @apply text-lg;
            line-height: 1.875rem;
            &:before {
              @apply w-5 h-5;
              border-width: 0.313rem;
              margin-top: 0.375rem;
            }
          }
          @screen md {
            padding: 0.313rem 0.938rem 0.313rem 2.5rem;
          }
        }
      }
      img {
        margin: 0 auto;
      }
      @apply flex flex-wrap;
      > div:not(:first-child) {
        @apply smd:w-2/5 px-4 w-full lg:py-0 pt-6 smd:pt-0 smd:pb-8 pb-0 transform transition duration-300;
      }

      > div {
        p {
          @apply lg:pb-5 pb-4;
          @screen xsm {
            font-size: 1.063rem;
            @apply leading-7;
          }
          @screen sm {
            @apply text-lg;
            line-height: 1.875rem;
          }
          @screen md {
            @apply text-xl leading-8;
          }
          @screen xl {
            font-size: 1.375rem;
            line-height: 2.125rem;
          }
          a:not(.nuxt-anchore) {
            @apply text-primary;
            &:hover {
              @apply text-themedark-0 dark:text-themelight-0;
            }
          }
        }
        > div {
          @apply mx-auto;
        }
      }
      > div:not(:last-child) {
        @apply w-full smd:w-3/5 md:pb-0 pb-12;
        padding: 0 0.9375rem;
      }
      &:nth-child(even) {
        > div:not(:last-child) {
          @apply lg:order-1;
        }
        > div:not(:first-child) {
          > div {
            @apply mx-auto;
          }
        }
      }
      .btn {
        p {
          @apply p-0;
        }
      }
    }
  }
}
</style>
