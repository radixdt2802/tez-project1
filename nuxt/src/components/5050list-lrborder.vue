<template>
  <div
    class=""
    :class="[
      data.VueReferenceCode == 'FW_5050listLRBorder_Dm' || 'FW_5050listLRBorder'
        ? 'dark:bg-themedark-0 rxsection-b-space twolist-lrborder'
        : '',
      data.VueReferenceCode == 'FW_5050listLRBorder_Top'
        ? 'dark:bg-themedark-10 rxsection-y-space bg-themelight-10 twolist-lrborderCustom'
        : '',
    ]"
  >
    <div class="container">
      <div class="sxl:w-11/12 w-full mx-auto text-center">
        <h2>{{ data.Title }}</h2>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor"
          :class="[
              data.VueReferenceCode == 'FW_5050listLRBorder_Top'
                ? 'h3'
                : 'para_md',
            ]"
        ></div>
      </div>
      <div
      :class="[
      data.VueReferenceCode == 'FW_5050listLRBorder_Dm' || 'FW_5050listLRBorder'
        ? ''
        : 'border-area divide-y divide-solid divide-themedark-50',
    ]">
        <div
          class="row justify-center compstyle relative"
          :class="[
              data.VueReferenceCode == 'FW_5050listLRBorder_Top'
                ? 'py-10'
                : 'py-16',
            ]"
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
        >
          <div
            class="left-con px-4"
            :class="[
              data.VueReferenceCode == 'FW_5050listLRBorder_Top'
                ? 'w-full smd:w-8/12'
                : 'w-full smd:w-7/12',
            ]"
          >
            <h3 v-if="data.VueReferenceCode === 'FW_5050listLRBorder_Top'" @click="anchor(item.GuideURL)" class="cursor-pointer">{{item.Title}}</h3>
            <h3 v-else>{{ item.Title }}</h3>
            <div
              class="list_sm square_list noBs listTwoCol cursor-pointer"
              v-if="data.VueReferenceCode === 'FW_5050listLRBorder_Top'" @click="anchor(item.GuideURL)"
              v-rxhtml="item.LongText"
            ></div>
            <div
              v-else
              class="list_sm square_list noBs listTwoCol"
              v-rxhtml="item.LongText"
            ></div>
            <div class="ctaOverall pt-3 flex">
              <div
                class="cta-arrow"
                v-html="$md.render(item.CTA ? item.CTA : '')"
              ></div>
              <img
                v-if="item.CTA"
                class="inline transition-all duration-300 ease-in-out ml-4 hover:ml-2.5"
                v-rxlazy="arrowImage"
                width="18"
                height="10"
                alt="Contact Us"
              />
            </div>
          </div>
          <div
            class="img-right px-4"
            :class="[
              data.VueReferenceCode == 'FW_5050listLRBorder_Top'
                ? 'w-full smd:w-3/12'
                : 'w-full smd:w-5/12',
            ]"
          >
            <img
              class="mx-auto smd:mr-0 smd:mt-0 max-w-full mt-8 light-image block"
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
            <img
              class="mx-auto smd:mr-0 smd:mt-0 max-w-full mt-8 dark-image hidden"
              v-if="item.HoverImage"
              v-rxlazy="item.HoverImage"
              :width="item.HoverImage.width"
              :height="item.HoverImage.height"
              :alt="item.HoverImage.alternativeText"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      arrowImage: "https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg",
    };
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
  .dark {
    .twolist-lrborder {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .twolist-lrborder {
    .compstyle {
      &:nth-child(odd) {
        .left-con {
          @apply smd:order-1;
        }
        .img-right {
          @apply smd:order-none;
          img {
            @apply smd:ml-0;
          }
        }
      }
      &:last-child {
        &::before {
          display: none;
        }
      }
      &::before {
        content: "";
        height: 0.0625rem;
        @apply w-full bottom-0 left-0 bg-themelight-50 dark:bg-themedark-65 absolute inline-block;
      }
      .cta-arrow {
        p {
          @apply inline;
          a {
            @apply text-primary no-underline;
          }
        }
      }
    }
  }
  .twolist-lrborderCustom {
    .compstyle {
      &:nth-child(odd) {
        .left-con {
          @apply smd:order-1;
        }
        .img-right {
          @apply smd:order-none;
          img {
            @apply smd:ml-0;
          }
        }
      }
      &:last-child {
        &::before {
          display: none;
        }
      }
      &::before {
        content: "";
        height: 0.0625rem;
        width:89.5%;
        @apply mx-auto bottom-0 left-0 right-0 bg-themelight-50 dark:bg-themedark-65 absolute inline-block;
      }
      .cta-arrow {
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
