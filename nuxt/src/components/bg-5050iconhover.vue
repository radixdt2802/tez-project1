<template>
  <div
    class="rxsection-y-space bg-5050iconhover"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.Image ? 'bg-no-repeat bg-cover beforeDark relative contentWhite' : '',
      data.VueReferenceCode == 'TCWithTCML_Teal_6point_2Col'
        ? 'bg-themelight-20 dark:bg-themedark-70 '
        : '',
        data.VueReferenceCode == 'TCWithTCML_Teal_6point_2Col_Swd'
        ? 'bg-themelight-20 dark:bg-themedark-70'
        : '',
        data.VueReferenceCode == 'TCWithTCML_Dark_6point_2Col_Rd'
        ? 'bg-secondary dark:bg-themedark-40 contentWhite'
        : '',
        
        
        
    ]"
  >
    <div class="container relative">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="text-center para_md smd:w-11/12 w-full mx-auto"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
       
      ></div>
      <div class="row">
        <div class="bgCard-row w-full px-4 smd:mx-0 md:w-1/2 mt-8" 
          v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCard-check hoverIconVisible">
            <div class="smd:mb-0 mb-2 bounce-img">
              <div>
                    <img
                      v-if="item.Icon"
                      class="lightIcon"
                      :width="item.Icon.width"
                      :height="item.Icon.height"
                      v-rxlazy="item.Icon"
                    />
                    <img
                      v-if="item.HoverIcon"
                      class="hoverIcons darkIcon"
                      :width="item.HoverIcon.width"
                      :height="item.HoverIcon.height"
                      v-rxlazy="item.HoverIcon"
                    />
                  </div>
            </div>
            <div>
              <!-- <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <!-- <h3
                class="h3_sm ctaLink"
                v-if="item.CTA"
                v-html="$md.render(item.CTA)"
              ></h3> -->
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-html="$md.render(data.CTA ? data.CTA : '')"
        v-if="data.CTA"
        class="btn mt-8 text-center"
      ></div>
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
  data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle: "h3_sm pb-2"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .h3_sm {
    p {
       @apply py-0;
    }
  }

  .dark{
    .bg-5050iconhover{
      .darkIcon{
        @apply block;
      }
      .lightIcon{
        @apply hidden;
      }
    }
  }
 
  .bg-5050iconhover {
    .darkIcon{
        @apply hidden;
      }
      .lightIcon{
        @apply block;
      }

    .darkIcon, .lightIcon {
      @apply  opacity-100 transition-all duration-300 ease-in-out;
    }
    .hoverIcons {
      @apply transition-all duration-300 ease-in-out top-0;
      transform: translateY(0);
    }
    span > p {
      display: inline;
      padding: 0;
    }

    .bgCard-check {
      @apply relative flex items-start h-full p-4 pt-5 smd:p-0 smd:bg-transparent bg-opacitybg-40 transition-all duration-300 ease-in-out;

      @screen lg {
        &:hover {
          img {
            transform: translateY(-0.3125rem);
          }
          .hoverIcons {
            /* apply opacity-100 visible; */
            transform: translateY(-0.625rem);
          }
          .darkIcon,
          .lightIcon {
            /* apply opacity-0; */
            transform: translateY(-0.625rem);
          }
        }
      }
      .bounce-img {
        padding-right: 0.875rem;
        min-width: 3.125rem;
        @screen md {
          min-width: 3.875rem;
          padding-right: 1.375rem;
        }
        @screen sxl {
          min-width: 4.375rem;
        }
      }
      h3 {
        @apply xl:pb-3 p-0;
      }
      p {
        @apply pb-0 sxl:pr-12;
      }
    }
    
  }
}
</style>