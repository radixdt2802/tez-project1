<template>
  <div
    class="rxsection-y-space elite-custom beforeDark relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="{
      'bg-themelight-10 dark:bg-themedark-40': data.VueReferenceCode == 'TCWithTCML_4iconsBgGrey_Left',
      'bg-themelight-0 dark:bg-themedark-0': data.VueReferenceCode == 'TCWithTCML_4icons_Left',
      'bg-themelight-20 dark:bg-themedark-70': data.VueReferenceCode == 'LightTeal_ImgHover_Sq_List',
    }"
  >
    <div class="container relative">
      <!--<h2 class="text-center dark:text-themelight-0">{{ data.Title }}</h2>-->
      <div v-html="title"></div>
      <div
        class="text-center para_md"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row">
        <div
          class="bgCard-row w-full px-4 smd:mx-0 md:w-1/2 mt-10"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <!-- v-if="data.TitleContentMediaList" -->
          <div
            class="hoverIconVisible"
            :class="[
              data.VueReferenceCode == 'LightTeal_ImgHover_Sq_List'
                ? 'bgCard-opacity'
                : 'bgCard-check',
              item.VueReferenceCode == 'TCM_NoHover' ? 'noHover' : '',
            ]"
          >
            <div class="bounce-img">
              <img
                v-if="item.Image"
                class="lightIcon"
                :width="item.Image.width"
                :height="item.Image.height"
                v-rxlazy="item.Image.url"
              />
                <!-- v-rxlazy="item.Image" -->
              <img
                v-if="item.Icon"
                class="darkIcon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                v-rxlazy="item.Icon"
              />
              <img
                v-if="item.HoverIcon"
                class="hoverIcons absolute opacity-0 invisible transition-all duration-300 ease-in-out top-0 translate-y-0"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                v-rxlazy="item.HoverIcon"
              />
            </div>
            <div>
              <!-- <h3
                v-if="item.CTA"
                v-html="$md.render(item.CTA ? item.CTA : '')"
                class="h3_sm p-0"
              ></h3> -->
              <div v-html="sTitles[i]" class=""></div>
              
              <p v-if="item.ShortText"> {{item.ShortText}} </p>
              <div
                class="square_list list_sm"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-html="$md.render(data.CTA ? data.CTA : '')"
        v-if="data.CTA"
        class="btn btn_sm mt-8 text-center"
      ></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "text-center dark:text-themelight-0 h2",
      sTitleStyle: "h3_sm"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .elite-custom {
      .darkIcon {
        @apply hidden;
      }
      .lightIcon {
        @apply block opacity-100 transition-all duration-300 ease-in-out;
      }
    }
  }
  .elite-custom {
    .square_list li {
      @apply text-lg;
      margin: 0rem;
      padding: 0.3125rem 0.9375rem 0.3125rem 1.25rem;
      position: relative;
    }
    .lightIcon {
      @apply hidden;
    }
    .darkIcon {
      @apply block opacity-100 transition-all duration-300 ease-in-out;
    }
    /* .hoverIcons {
      @apply absolute opacity-0 invisible transition-all duration-300 ease-in-out top-0;
      transform: translateY(0);
    } */

    .bgCard-check {
      @apply relative smd:flex items-start h-full border border-solid border-customcolor-60 dark:border-themedark-65 smd:border-0 p-4 smd:p-0 pt-5 smd:pb-0 transition-all duration-300 ease-in-out;
      &:not(.noHover) {
        @screen lg {
          &:hover {
            img {
              transform: translateY(-0.3125rem);
            }
            .hoverIcons {
              @apply opacity-100 visible;
              transform: translateY(-0.625rem);
            }
            .darkIcon,
            .lightIcon {
              @apply opacity-0;
              transform: translateY(-0.625rem);
            }
          }
        }
      }
      .bounce-img {
        margin-bottom: 1.25rem;
        padding-right: 0.875rem;
        min-width: 3.125rem;
        @screen md {
          min-width: 3.875rem;
          padding-right: 1.375rem;
        }
        @screen smd {
          margin-bottom: 0;
        }
        @screen sxl {
          min-width: 4.375rem;
        }
      }
      h3, .h3_sm {
        @apply xl:pb-3 p-0;
      }
      p {
        @apply pb-0 pt-0;
        @screen sxl {
          padding-right: 1.25rem;
        }
      }
      .square_list {
        ul {
          padding: 0.625rem 0;
        }
      }
    }
    .bgCard-opacity {
      @apply bg-opacitybg-0 dark:bg-themedark-0 smd:dark:bg-transparent smd:bg-transparent relative flex items-start h-full p-4 smd:p-0 pt-5 smd:pb-0;
      &:not(.noHover) {
        @screen lg {
          &:hover {
            img {
              transform: translateY(-0.3125rem);
            }
            .hoverIcons {
              @apply opacity-100 visible;
              transform: translateY(-0.625rem);
            }
            .darkIcon,
            .lightIcon {
              @apply opacity-0;
              transform: translateY(-0.625rem);
            }
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
        @apply pb-0;
        @screen sxl {
          padding-right: 1.25rem;
        }
      }
      .square_list {
        ul {
          padding: 0.625rem 0;
          li {
            margin-bottom: 0;
            &::before {
              top: 1rem;
            }
          }
        }
      }
    }
    /* .bgCard-row {
      @apply w-full px-4 smd:mx-0 md:w-1/2;
      &:nth-child(n + 3),
      &:nth-child(2) {
        @apply mt-8;
      }
      @screen md {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    } */
  }
}
</style>