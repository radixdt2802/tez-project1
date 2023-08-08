<template>
  <div
    class="
      rxsection-y-space
      tcSixColSection
      beforeDark
      relative
      bg-themelight-20
      dark:bg-themedark-0
      text-center
      bg-fixed bg-cover bg-center
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <div
        class="w-full mx-auto b-space-60"
        v-if="data.VueReferenceCode == 'LightBG_6Section_IconTop'"
      >
        <h2>{{ data.Title }}</h2>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor para_md"
        ></div>
      </div>
      <div class="row">
        <div
          v-if="data.TitleContentList"
          class="bgCard-row w-full md:w-3/6 sxl:w-1/3 px-4 mt-10"
          v-for="(item, i) in data.TitleContentList"
        >
          <div class="bgCard w-full mx-auto">
            <div
              :class="{
                'text-white':
                  data.VueReferenceCode == 'DarkBG_6Section_IconTop' ||
                  data.VueReferenceCode == 'Dark_BGimage_6sec',
              }"
              v-html="sTitles[i]"
            ></div>

            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              :class="{
                contentWhite:
                  data.VueReferenceCode == 'DarkBG_6Section_IconTop' ||
                  data.VueReferenceCode == 'Dark_BGimage_6sec',
              }"
            ></div>
          </div>
        </div>
        <div
          v-if="data.TitleContentMediaList"
          v-for="(item, i) in data.TitleContentMediaList"
          class="bgCard-row w-full md:w-3/6 sxl:w-1/3 px-4 mt-10"
        >
          <div class="bgCard w-full mx-auto">
            <img
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              class="mx-auto mb-6"
            />
            <div v-html="sTitles[i]"></div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              :class="{
                contentWhite:
                  data.VueReferenceCode == 'DarkBG_6Section_IconTop' ||
                  data.VueReferenceCode == 'Dark_BGimage_6sec',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from "@vue/runtime-core";
const sectionHeading = defineAsyncComponent(() =>
  import("./section-heading.vue")
);
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [titleMixin],
  components: {
    sectionHeading: sectionHeading,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      sTitleStyle: "font-semibold h3_sm text-white",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .tcSixColSection {
    .bgCard-row {
      .bgCard {
        max-width: 25.25rem;
        @screen lg {
          &:hover {
            h3 {
              &:after {
                width: 6.25rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>