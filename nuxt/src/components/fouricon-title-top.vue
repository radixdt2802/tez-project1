<template>
  <div
    class="rxsection-y-space fouricontop contentWhite text-center bg-cover bg-center"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row card_structure ">
        <div
          class="
            card_design
            w-full
            sm:w-1/2
            sxl:w-1/4
            md:w-1/3
            text-center
            md:border-0
            p-560
            px-4
            md:py-0
            smd:px-4
            mt-8
          "
          v-for="(item,i) in data.TitleContentMediaList" :key="item"
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

          <!-- <h3 class="h3_sm" v-if="!item.CTA">{{ item.Title }}</h3>
          <h3
            v-if="item.CTA"
            class="para_lg"
            v-html="$md.render(item.CTA)"
          ></h3> -->
          <div v-html="sTitles[i]"></div>
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
import titleMixin from "../mixins/title.mixin";
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
export default {
  mixins: [titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      sTitleStyle: "h3_sm",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .fouricontop {
   
    .card_structure {
      padding-right: 0.93rem;
      padding-left: 0.93rem;
      @screen lg {
        padding-right: 0;
        padding-left: 0;
      }
    }

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
}
</style>