<template>
  <div
    :class="[
      data.VueReferenceCode == 'TCL_threecol_bgwhite'
        ? 'devopsblog rxsection-y-space text-center bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bgwhite_Left'
        ? 'rxsection-y-halfspace threecol-bgwhite-Left bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bgwhite_Top'
        ? 'rxsection-y-space threecol-bgwhite-Left bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_Nospace'
        ? 'rxsection-y-space threecol-bgwhite-Left bg-themelight-0 dark:bg-themedark-0 py-0'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_Xd'
        ? 'rxsection-b-space threecol-bgwhite-Left bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_NoTSpace'
        ? 'rxsection-b-space threecol-bgwhite-Left bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bggray_Left'
        ? 'rxsection-y-space threecol-bgwhite-Left bg-themelight-10 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_Xd_space'
        ? 'rxsection-y-space threecol-bgwhite-Left bg-themelight-0 dark:bg-themedark-0'
        : '',
    ]"
  >
    <div class="container">
      <!-- <h2
        :class="[
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Left' ||
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_NoTSpace'
            ? 'text-left'
            : 'text-center',
        ]"
      >
        {{ data.Title }}
      </h2> -->
      <div
        v-if="data.Title"
        :class="[
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Left' ||
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Top' ||
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_NoTSpace'
            ? 'text-left'
            : 'text-center',
        ]"
        v-html="title"
      ></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="smd:w-11/12 w-full lastpara para_md"
        :class="[
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Left' ||
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Top' ||
          data.VueReferenceCode == 'TCL_threecol_bgwhite_Left_NoTSpace'
            ? 'text-left'
            : 'text-center px-4 mx-auto',
        ]"
      ></div>
      <div class="row">
        <div
          class="bgCard-row lg:w-1/3 smd:w-1/3 w-full mt-8 px-4"
          :class="[
            data.VueReferenceCode == 'TCL_threecol_bgwhite_Left'
              ? 'md:w-1/2 '
              : '',
          ]"
          v-for="(item, i) in data.TitleContentList"
          :key="item.id"
        >
          <div class="bgCard w-full">
            <!-- <h3
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
              class="relative para_lg nopadding-cta"
            ></h3> -->
            <!-- <h3 v-if="!item.CTA" class="relative para_lg pb-4">
              {{ item.Title }}
            </h3> -->
            <div v-html="sTitles[i]"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2",
      sTitleStyle: "relative para_lg pb-4 h3_sm",
    };
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .devopsblog {
    .bgCard-row {
      .bgCard {
        h3 {
          &:after {
            @apply absolute bg-primary dark:bg-themedark-65 left-0 right-0 bottom-0 mx-auto transition-all duration-300 ease-in-out;
            content: "";
            height: 0.188rem;
            width: 3.75rem;
          }
        }
        .nopadding-cta {
          > p {
            @apply p-0;
          }
        }
        .h3_sm {
          p {
            @apply p-0;
          }
        }
      }
    }
  }
  .threecol-bgwhite-Left {
    .lastpara {
      p:last-child {
        @apply pt-5;
      }
    }
    .bgCard-row {
      .bgCard {
        h3,
        .h3_sm {
          &:after {
            @apply absolute bg-primary dark:bg-themedark-65 left-0 bottom-0;
            content: "";
            height: 0.188rem;
            width: 3.75rem;
          }
        }
        .nopadding-cta {
          > p {
            @apply p-0;
          }
        }
        .h3_sm {
          p {
            @apply p-0;
          }
        }
      }
    }
  }
}
</style>