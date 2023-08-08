<template>
  <div
    class="industriesDetails "
    :class="[
      data.VueReferenceCode == 'Industries_Details_Yspace'
        ? 'rxsection-y-space dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'Industries_Details_NoTop_Space'
        ? 'rxsection-b-space dark:bg-themedark-0'
        : '',
    ]"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row t-space-40">
        <div
          class="industryCard-row w-full smd:w-4/12 md:w-6/12 px-4 mt-10"
          v-if="data.TitleContentMediaList"
          v-for="item in data.TitleContentMediaList"
          @click="anchor(item.CTA)"
        >
          <div
            class="
              industryCard
              border-b-4 border-themelight-20
              hover:border-primary
              dark:border-primary
              smd:flex smd:flex-wrap
              bg-opacitybg-25
              dark:bg-themedark-70
              hover:shadow-lg
              transition-all duration-300 ease-in-out
              p-8 h-full relative
            "
            :title="item.Title"
          >
            <div>
              <img
                class="mb-4 darkIcon lg:hover:opacity-0"
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
              />
              <img
                class="mb-4 lightIcon lg:hover:opacity-0"
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
              <img
                class="mb-4 hoverIcons absolute opacity-0 invisible transition-all duration-300 ease-in-out top-8 lg:hover:opacity-100 lg:hover:visible block"
                v-if="item.HoverIcon"
                v-rxlazy="item.HoverIcon"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
              />
              <h3 class="h3_sm">{{ item.Title }}</h3>
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="listanchor"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="titlecontent-row w-full smd:w-1/2 md:w-6/12 mt-8 px-4"
          v-if="data.TitleContentList"
          v-for="item in data.TitleContentList"
        >
          <div
            class="
              industryCard
              border-b-4 border-themelight-20
              dark:border-primary
              smd:flex smd:flex-wrap
              bg-opacitybg-25
              dark:bg-themedark-70
              p-8 h-full relative
            "
          >
            <div>
              <h3 class="h3_sm">{{ item.Title }}</h3>
              <p v-if="item.ShortText" class="pb-0">{{ item.ShortText }}</p>
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="square_list noBs list_sm"
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
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
export default {
  
  components: {
    sectionHeading:sectionHeading,
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
      .industriesDetails{
        .industryCard {
        .darkIcon {
            @apply block;
          }
        .lightIcon {
            @apply hidden opacity-100 transition-all duration-300 ease-in-out;
        }
      }
    }
  }
  .industriesDetails {
    .industryCard {
      cursor: pointer;
      .lightIcon {
        @apply block;
      }
      .darkIcon {
        @apply hidden opacity-100 transition-all duration-300 ease-in-out;
      }
    }
  }
}
</style>