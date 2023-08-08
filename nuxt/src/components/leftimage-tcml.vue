<template>
  <div class="application-csd rxsection-y-space  dark:bg-themedark-40"
    :class="[data.VueReferenceCode == 'TCMWithTCL_LeftImage_LTeld' ? 'bg-opacitybg-25' :'bg-themelight-20',]">
    <div class="container row sxl:items-center item-start">
      <div
        class="cot-img px-4 smd:block hidden"
        :class="[
          data.VueReferenceCode == 'TCMWithTCL_7_5_LeftImage'
            ? 'w-5/12'
            : 'w-4/12',
        ]"
      >
        <img
        v-if="data.Image"
          v-rxlazy="data.Image"
          alt="Development Company"
          :width="data.Image.width"
          :height="data.Image.height"
        />
      </div>
      <div
        class="csd-content w-full sm:text-left text-center px-4"
        :class="[
          data.VueReferenceCode == 'TCMWithTCL_7_5_LeftImage'
            ? 'smd:w-7/12'
            : 'smd:w-8/12 md:pl-4 smd:pl-16',
        ]"
      >
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="lg:w-11/12 para_md"
        ></div>
        <div class="row">
          <div
            class="csd-card sm:w-1/2 w-full px-3 md:pl-2 smd:px-4 pt-4 mt-4"
            v-if="data.TitleContentMediaList"
            v-for="(item,i) in data.TitleContentMediaList"
          >
            <div class="csd-card-wrap relative z-10">
              <span
                v-if="item.Icon"
                v-bind:style="{ backgroundImage: 'url(' + item.Icon.url + ')' }"
                class="absolute w-16 h-16 bg-no-repeat -z-1 left-0 right-0 mx-auto sm:m-0 opacity-75"
              ></span>
              <div v-html="sTitles[i]"></div>
            </div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
   data(){
    return {
      titleStyle : "h2",
      sTitleStyle: "h3_sm pb-0"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .application-csd {
    .csd-content {
      .csd-card {
        .csd-card-wrap {
          padding-bottom:0.625rem;
          span {
            top: -1.25rem;
            background-size: 3.75rem;
            @screen sm {
              left: -1.25rem;
            }
            @screen lg {
              top: -0.625rem;
              left: -1.563rem;
            }
          }
        }
        p {
          @apply md:m-0 mx-auto;
          max-width: 21.875rem;
        }
      }
    }
  }
}
</style>