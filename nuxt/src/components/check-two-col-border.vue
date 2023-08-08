<template>
  <div
    class="rxsection-y-space check-two-col"
    :class="[
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_noBottom' ? 'pb-0' : '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon' ? 'dark:bg-themedark-0 bg-themelight-0' : '',
      data.VueReferenceCode == 'TCWithTCML_NOCheck_Icon_BG_Gray' ? 'dark:bg-themedark-40 bg-themelight-10' : '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_noBottom' ? 'pb-0' : '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_Xd' ? 'dark:bg-themedark-0': '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_Azure' ? 'dark:bg-themedark-0 pt-0': '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_Lds' ? 'dark:bg-themedark-0' : '',
      data.VueReferenceCode == 'TCWithTCML_Grey' ? 'pt-0' : '',
      data.VueReferenceCode == 'TCWithTCML_Grey_WSpace' ? '' : '',
    ]"
  >
    <div class="container">
      <!-- <h2 class="text-center dark:text-themelight-0">{{ data.Title }}</h2> -->
      
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center mx-auto para_md smd:w-11/12 w-full"
      ></div>
      <div class="row">
        <div class="bgCard-row w-full smd:w-1/2 px-4 mt-8" v-if="data.TitleContentMediaList" v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCardspace p-5 h-full" :title="item.Title">
            <div class="bgCard-check relative flex items-center">
              <img
                v-if="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                v-rxlazy="item.Icon"
                class="light-image lg:mt-0"
              />
              <img
                v-if="item.HoverIcon"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                v-rxlazy="item.HoverIcon"
                class="dark-image lg:mt-0"
              />
              <!-- <h3 v-if="!item.CTA" class="para_lg">
                {{ item.Title }}
              </h3> -->
              <div v-html="sTitles[i]"></div>
              <!-- <h3
                v-if="item.CTA"
                class="para_lg"
                v-html="$md.render(item.CTA)"
              ></h3> -->
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
        <div
          class="bgCard-row w-full smd:w-1/2 px-4 mt-8"
          v-if="data.TitleContentList"
          v-for="(item,i) in data.TitleContentList"
        >
          <div
            class="bgCardspace p-5 border-solid h-full"
            :title="item.Title"
            :class="[
            data.VueReferenceCode == 'TCWithTCML_Grey_space'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
              data.VueReferenceCode == 'TCWithTCML_Grey'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
              data.VueReferenceCode == 'TCWithTCML_NOCheck_Icon_BG_Gray'
                ? 'bg-themelight-0 dark:bg-themedark-70'
                : '',
              data.VueReferenceCode == 'TCWithTCML' ?'cursor-pointer':''
            ]"
            v-if="data.VueReferenceCode == 'TCWithTCML'"
            @click="anchor(item.NavURL)"
          >
            <div class="relative flex items-center lg:items-start">
              <!-- <h3  class="para_lg noleftspace">
                {{ item.Title }}
              </h3> -->
              <div v-html="sTitles[i]"></div>
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
          <div v-else
            class="bgCardspace p-5 h-full"
            :title="item.Title"
            :class="[
            data.VueReferenceCode == 'TCWithTCML_Grey_space'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
              data.VueReferenceCode == 'TCWithTCML_Grey'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
              data.VueReferenceCode == 'TCWithTCML_NOCheck_Icon_BG_Gray'
                ? 'bg-themelight-0 dark:bg-themedark-70'
                : '',
            ]"
          >
            <div class="relative flex items-center lg:items-start">
              <!-- <h3 v-if="!item.CTA" class="para_lg noleftspace">
                {{ item.Title }}
              </h3> -->
              <div v-html="sTitles[i]"></div>
              <!-- <h3
                v-if="item.CTA"
                class="para_lg noleftspace"
                v-html="$md.render(item.CTA)"
              ></h3> -->
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
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
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
  data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle: "h3_sm"
    }
  },
};
</script>
<style lang="scss"> 
@layer utilities {
  .dark {
    .check-two-col {
      .dark-image {
        @apply block;
      }
      .light-image {
        @apply hidden;
      }
      .bgCard-row {
        .bgCardspace {
          border-color: #4c4c4c #4c4c4c #4c4c4c;
        }
      }
    }
  }
  .check-two-col {
    .dark-image {
      @apply hidden;
    }
    .light-image {
      @apply block;
    }
    .bgCard-check {
      padding: 0.313rem;
      margin-bottom: 0.625rem;
      .h3_sm:not(.noleftspace) {
        @apply p-0;
        margin-left: 0.938rem;
        @screen sm {
          margin-left: 1.563rem;
        }
        @screen smd {
          font-size: 1.375rem;
          line-height: 2rem;
        }
        @screen xl {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        @screen xxxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
      }
    }
    .bgCard-row {
      .bgCardspace {
        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5 #f5f5f5 #31bbae;
        @screen sm {
          padding: 1.875rem 2.188rem;
        }
      }
    }
  }
}
</style>