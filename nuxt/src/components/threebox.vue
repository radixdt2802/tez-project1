<template>
  <div class="rxsection-t-space threebox">
    <div class="container">
      <sectionHeading class="b-space-60" :data="data" />
      <div class="row">
        <div
          class="w-full h-full cursor-pointer text-block smd:w-1/3"
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
          :title="item.SubTitle"
          @click="anchor(item.CTA)"
        >
          <div class="customdiv boxcontent dark:bg-themedark-70">
            <div class="outlineRound">
              <img
                v-rxlazy="item.Icon.url"
                :width="item.Icon.width"
                :height="item.Icon.height"
                :alt="item.Icon.alternativeText"
                class="light-mode"
              />
              <img
                v-rxlazy="item.HoverIcon.url"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                :alt="item.HoverIcon.alternativeText"
                class="dark-mode"
              />
            </div>
            <h3 class="h3_sm">{{ item.Title }}</h3>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
            <div
              :title="item.SubTitle"
              class="primary-arrowBtn font-semibold text-primary"
            >
              {{ item.SubTitle }}
              <img
                class="inline-block"
                v-rxlazy="arrowImage"
                width="18"
                height="10"
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import staticImg from "../mixins/staticimg.mixin";
import { defineAsyncComponent } from "@vue/runtime-core";
const sectionHeading = defineAsyncComponent(() =>
  import("./section-heading100.vue")
);
export default {
  mixins: [staticImg],
  components: {
    sectionHeading: sectionHeading,
  },

  props: {
    data: Object,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .threebox {
    @apply text-center;
    .boxcontent {
      @apply h-auto;
      @screen smd {
        height: 30.625rem;
      }
      @screen sxl {
        @apply h-full;
      }
      padding: 1.875rem 0.625rem;
      @screen sxl {
        @apply py-10 px-6;
      }
    }
    .text-block {
      padding: 0 0.938rem;
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-8;
      }
      @screen sm {
        &:nth-child(2) {
          @apply mt-8;
        }
      }
      @screen smd {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
      .customdiv {
        @apply smd:flex smd:flex-wrap justify-center transition-all duration-300 ease-in-out;
        border: 0.0625rem solid #f5f5f5;
        border-bottom: 0.1875rem solid #31bbae;
        h3 {
          @apply max-w-xs mx-auto;
        }
        .primary-arrowBtn {
          @apply text-base dark:text-primary;
          @screen sxl {
            @apply text-lg;
          }
        }
        &:hover {
          box-shadow: 0rem 0rem 0.1875rem 0rem #dadada8c,
            0rem 0rem 0.9375rem 0rem #dadada8c;
          .primary-arrowBtn {
            img {
              @apply ml-6;
            }
          }
        }
        .light-mode {
          @apply block;
        }
        .dark-mode {
          @apply hidden;
        }
      }
      .outlineRound {
        @apply text-center mx-auto flex mb-6;
        width: 5.9375rem;
        height: 5.9375rem;
        img {
          @apply mx-auto max-w-full;
        }
      }
    }
    .primary-arrowBtn {
      img {
        @apply inline-block ml-4 transition-all duration-300 ease-in-out;
      }
    }
  }
  .dark {
    .threebox {
      .customdiv {
        border: 0.0625rem solid #666666;
        border-bottom: 0.1875rem solid #31bbae;
        &:hover {
          box-shadow: 0rem 0rem 2rem 0rem #4c4c4c, 0rem 0rem 0rem 0rem #4c4c4c;
        }
        .light-mode {
          @apply hidden;
        }
        .dark-mode {
          @apply block;
        }
      }
    }
  }
}
</style>