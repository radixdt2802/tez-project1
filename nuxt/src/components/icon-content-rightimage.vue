<template>
  <div
    class="icon-list rxsection-y-space bg-opacitybg-25 dark:bg-themedark-70"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row">
        <div class="w-full smd:w-2/4 px-4">
          <div
            class="iconcontent flex flex-wrap mt-10 mb-5"
            v-for="(item,i) in data.TitleContentMediaList"
            :key="i"
          >
            <div class="backCircle transition-all duration-300 ease-in-out">
              <img
                v-if="item.HoverIcon"
                v-rxlazy="item.HoverIcon"
                :width="item.HoverIcon.width"
                :height="item.HoverIcon.height"
                class="lightIcon"
              />
              <img
                class="darkIcon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
            </div>
            <div class="pl-6 flex-1">
              <!-- <h3 class="h3_sm pb-0">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
        <div v-if="data.Image" class="smd:w-2/4 w-full">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';

export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  components: {
    sectionHeading:sectionHeading,
  },
    data(){
    return {
      sTitleStyle : "h3_sm pb-0",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .icon-list {
    .iconcontent {
      &:hover {
        .backCircle {
          box-shadow: 0rem 0rem 0.625rem #0f1628;
        }
      }
    }
    .backCircle {
      height: 3.25rem;
      width: 3.25rem;
      @screen sm {
        height: 4.25rem;
        width: 4.25rem;
      }
      border-radius: 100%;
      border: 0.125rem solid;
      @apply flex flex-wrap items-center justify-center;
      .lightIcon {
        @apply hidden;
      }
      .darkIcon {
        @apply block;
      }
    }
  }
  .dark {
    .icon-list {
      .backCircle {
        .lightIcon {
          @apply block;
        }
        .darkIcon {
          @apply hidden;
        }
      }
    }
  }
}
</style>
