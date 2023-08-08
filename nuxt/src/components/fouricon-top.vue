<template>
  <div
    class="rxsection-y-space fouricontop"
    :class="[
      data.VueReferenceCode == 'TCWithTCML_4icon_Teal_Top'
        ? 'bg-themelight-20 dark:bg-themedark-70'
        : '',
        data.VueReferenceCode == 'TCWithTCML_4icon_Top'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
    ]"
  >
  
    <div class="container">
      <div class="section-heads100 text-center">
    <div class="w-full mx-auto">
      <!--<h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md"
      ></div>
    </div>
  </div>
      <div class="row card_structure mt-5 px-4 lg:px-0">
        <div
          class="
            card_design
            w-full
            sxl:w-1/4
            md:w-1/2
            text-center
            md:border-0
            p-5
            px-4
            md:py-0
            smd:px-4
            mt-8
            border border-solid
           dark:border-themedark-65
          "
          :class="[
          data.VueReferenceCode == 'TCWithTCML_4icon_Teal_Top' ? 'border-customcolor-85' : 'border-themedark-75',]"
          
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <img
            class="mx-auto mb-5 light-image"
            v-if="item.Icon"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
          />
          <img
            class="mx-auto mb-5 dark-image"
            v-if="item.HoverIcon"
            v-rxlazy="item.HoverIcon"
            :width="item.HoverIcon.width"
            :height="item.HoverIcon.height"
          />

          <div v-html="sTitles[i]"></div>
          <!--<h3 class="para_lg" v-if="!item.CTA">{{ item.Title }}</h3>
          <h3
            v-if="item.CTA"
            class="para_lg"
            v-html="$md.render(item.CTA)"
          ></h3> -->
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="three-cont"
          ></div>
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
      titleStyle : "h2",
      sTitleStyle: "h3 h3_sm"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .fouricontop {
   
    /* .card_structure {
      padding-right: 0.93rem;
      padding-left: 0.93rem;
      @screen lg {
        padding-right: 0;
        padding-left: 0;
      }
    } */

    @screen sm {
      .card_design {
        .three-cont {
          p {
            font-size: 1.06rem;
            line-height: 1.75rem;
          }
        }
      }
    }
   
   
    h3 {
      p {
        @apply p-0;
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .fouricontop {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .h3_sm {
    p {
      @apply py-0;
    }
  }
}
</style>