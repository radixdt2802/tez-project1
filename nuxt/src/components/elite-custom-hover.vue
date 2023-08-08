  <template>
  <div
    class="rxsection-y-space elite-custom-hover"
    :class="{
      'bg-themelight-10 dark:bg-themedark-40':
        data.VueReferenceCode == 'TCWithTCML_NoHoverBgGrey_Left',
      'py-0': data.VueReferenceCode == 'TCWithTCML_NoHover_Left_NoSpace',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TCWithTCML_NoHover_Left',
      'bg-themelight-20 dark:bg-themedark-70':
        data.VueReferenceCode == 'LightTeal_ImgNoHover',
      'bg-secondary dark:bg-themedark-70 contentWhite':
        data.VueReferenceCode == 'Secondary_ImgNoHover',
      'bg-themelight-10 dark:bg-themedark-40':
        data.VueReferenceCode == 'TCWithTCML_4iconsBgGrey_Left',
    }"
  >
    <div class="container">
      <!-- <h2 class="text-center dark:text-themelight-0">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="text-center para_md b-space-40"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row">
        <div
          class="bgCard-row w-full px-4 smd:mx-0 md:w-1/2 mt-7"
          v-if="data.TitleContentMediaList"
          v-for="(item, i) in data.TitleContentMediaList"
        >
          <div
            class="hoverIconVisible"
            :class="[
              data.VueReferenceCode == 'LightTeal_ImgHover_Sq_List'
                ? 'bgCard-opacity'
                : 'bgCard-check flex items-center',
              item.VueReferenceCode == 'TCM_NoHover' ? 'noHover' : '',
            ]"
          >
            <div class="bounce-img">
              <img
                v-if="item.HoverIcon"
                class="darkIcon hidden opacity-100 transition-all duration-300 ease-in-out"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                v-rxlazy="item.HoverIcon"
              />
              <img
                v-if="item.Icon"
                class="lightIcon block lg:absolute lg:transition-all lg:duration-300 lg:ease-in-out lg:top-0"
                :width="item.Icon.width"
                :height="item.Icon.height"
                v-rxlazy="item.Icon"
              />
            </div>
            <div>
              <div v-html="sTitles[i]"></div>
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
        class="btn mt-8 text-center"
      ></div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2 text-center dark:text-themelight-0",
      sTitleStyle: "h3_sm h3",
    };
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .dark {
    .elite-custom-hover {
      .darkIcon {
        @apply block;
      }
      .lightIcon {
        @apply hidden opacity-100 transition-all duration-300 ease-in-out;
      }
    }
  }
  .elite-custom-hover {
    .square_list li {
      margin: 0rem;
      padding: 0.3125rem 0.9375rem 0.3125rem 1.25rem;
      position: relative;
    }
    /* .lightIcon {
        @apply  block;
        @screen lg{
        @apply absolute  transition-all duration-300 ease-in-out top-0;
        }  
      } */
    /* .darkIcon {
        @apply hidden opacity-100 transition-all duration-300 ease-in-out;
      } */
    /* .hoverIcons {
        @apply ;
      } */

    .bgCard-check {
      @apply relative smd:flex items-start h-full border border-solid border-customcolor-60 smd:border-0 p-4 smd:p-0 pt-5 smd:pb-0 transition-all duration-300 ease-in-out;
      &:not(.noHover) {
        @screen lg {
          &:hover {
            img {
              transform: translateY(-0.3125rem);
            }
            .darkIcon,
            .lightIcon {
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
      h3 {
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
      @apply bg-opacitybg-0 smd:bg-transparent relative flex items-start h-full p-4 smd:p-0 pt-5 smd:pb-0;
      &:not(.noHover) {
        @screen lg {
          &:hover {
            img {
              transform: translateY(-0.3125rem);
            }
            /* .hoverIcons {
                @apply opacity-100 visible;
                transform: translateY(-0.625rem);
              } */
            .darkIcon,
            .lightIcon {
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
  }
}
</style>