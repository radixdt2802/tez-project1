<template>
  <div
    class="check-two-col-single"
    :class="[
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_Single_Icon' ? 'rxsection-y-space' : '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_Single_IconList' ? 'rxsection-y-space' : '',
      data.VueReferenceCode == 'TCWithTCML_Check_Icon_Single_IconList_BottomSpace' ? 'rxsection-b-space' : '',
      
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
      <div class="row ">
        <div
          class="bgCard-row w-full smd:w-1/2 px-4 mt-8"
          v-if="data.TitleContentMediaList"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="bgCardspace">
            <div class="bgCard-check relative flex items-center">
              <img
                v-if="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                v-rxlazy="item.Icon"
                class="light-image lg:mt-0"
              />
              <div v-html="sTitles[i]"></div>
              <!-- <h3 v-if="!item.CTA" class="para_lg">
                {{ item.Title }}
              </h3> 
              <h3
                v-if="item.CTA"
                class="para_lg"
                v-html="$md.render(item.CTA)"
              ></h3> -->
              

            </div>
            <div class="bgcontent" 
            :class="{'list_sm square_list primary_list': data.VueReferenceCode == 'TCWithTCML_Check_Icon_Single_IconList',}">
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
            class="bgCardspace"
            :class="[
              data.VueReferenceCode == 'TCWithTCML_Grey'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
            ]"
          >
            <div class="relative flex items-center lg:items-start">
              <!-- <h3 v-if="!item.CTA" class="para_lg noleftspace">
                {{ item.Title }}
              </h3>
              <h3
                v-if="item.CTA"
                class="para_lg noleftspace"
                v-html="$md.render(item.CTA)"
              ></h3> -->
              <div v-html="sTitles[i]"></div>
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
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
    titleStyle : "text-center dark:text-themelight-0 h2",
    sTitleStyle: "para_lg h3_sm"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
      .check-two-col-single{
        .bgCard-row {
          .bgCardspace {
            @apply border-solid h-full;
            border-width: 0.063rem 0.063rem 0.25rem;
            border-color: #4c4c4c #4c4c4c #31bbae;
          }
      }
    }
  }
  
  .check-two-col-single {
    .bgCard-check {
      padding: 0.313rem 0;
      margin-bottom: 0.625rem;
      h3:not(.noleftspace), .h3_sm:not(.noleftspace) {
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
        @apply p-5 border-solid h-full;
        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5 #f5f5f5 #31bbae;

        @screen sm {
          padding: 1.875rem 2.188rem;
        }
        @screen xxxl {
          padding: 1.875rem 2.188rem;
        }
      }
     
    }
   
  }
}
</style>