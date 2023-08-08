<template>
  <div
    class="rxsection-y-space rescue-mision dark:bg-themedark-70"
    :class="{
      'bg-opacitybg-25 dark:bg-themedark-0':
        data.VueReferenceCode == 'TWithTCML_Process_BigIcon_teal',
    }"
  >
    <div class="container">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md pb-8"
        v-if="data.SubTitle"
        v-rxhtml="data.SubTitle"
      ></div>
      <div v-if="data.LongText" v-rxhtml="data.LongText" class="para_md pb-8"></div>
      <div class="row justify-center">
        <div
          class="sxl:w-1/5 md:w-1/3 sm:w-1/2 px-4 w-full"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="mission-card p-5  dark:bg-themedark-10 sxl:bg-transparent sxl:dark:bg-transparent max-w-xs sm:max-w-full h-full sxl:p-2"
          :class="[data.VueReferenceCode == 'TWithTCML_Process_BigIcon' ? 'bg-themelight-10' : 'bg-opacitybg-5',]">
            <div class="mission-icon
            border border-dashed border-themedark-0  dark:border-themelight-0 dark:bg-themedark-0 relative rounded-full sxl:mb-10 mb-5 mx-auto flex items-center justify-center transition-all duration-300 ease-in-out;"
            :class="[data.VueReferenceCode == 'TWithTCML_Process_BigIcon' ? 'bg-transparent' : 'bg-themelight-0',]">
              <img
                class="dis-icon mx-auto"
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                alt="Icon"
              />
              <img
                class="hover-icon mx-auto"
                v-if="item.HoverIcon"
                v-rxlazy="item.HoverIcon"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                alt="Icon"
              />
            </div>
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
  data(){
    return {
      titleStyle : "h2",
      sTitleStyle: "h3_sm pb-2"
    }
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .rescue-mision {
    @apply text-center;
    .row {
      > div {
        &:nth-child(n + 4),
        &:nth-child(3),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen sm {
          &:nth-child(2) {
            margin-top: 0;
          }
        }
        @screen md {
          &:nth-child(3),
          &:nth-child(2) {
            margin-top: 0;
          }
        }
        @screen sxl {
          &:nth-child(n + 4) {
            margin-top: 0;
          }
        }
        &:last-child {
          .mission-icon {
            &::before {
              @apply hidden;
            }
          }
        }
      }
    }
    .mission-card {
      box-shadow: 0px 2px 2px #c7c7c7;
      @screen sxl{
        box-shadow: none;
      }
        &:hover {
        .mission-icon {
          @apply bg-primary dark:bg-themedark-80 border-transparent;
          .hover-icon {
            @apply block;
          }
          .dis-icon {
            @apply hidden;
          }
        }
      }
      .mission-icon {
        width: 7.5rem;
        height: 7.5rem;

        .hover-icon {
          @apply hidden;
        }
        .dis-icon {
          @apply block;
        }
        @screen sxl {
          width: 10rem;
          height: 10rem;
          &::before {
            @apply absolute top-50 left-100 z-0 border-t border-dashed border-themedark-0 dark:border-themelight-0;
            content: "";
            width: calc(100% - 4.999rem);
            height: 0.0625rem;
          }
        }
        @screen xl{
          &::before {
          width: calc(100% - 3.999rem);
        }
        
      }
      @screen xxl{
          &::before {
          width: calc(100% - 1.5rem);
        }
        
      }
        
      }
    }
  }
}
</style>
