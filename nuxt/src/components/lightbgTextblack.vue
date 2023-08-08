<template>
  <div
    class="rxsection-y-space four-comp beforeDark relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <sectionHeading :data="data" />
      <div class="row t-space-60 bgcontent">
        <div
          class="
            bgCard-row
            mx-auto
            md:m-0
            w-full
            sm:w-1/2
            smd:w-1/3
            sxl:w-1/4
            px-4
          "
          v-for="item in data.TitleContentList"
        >
          <div
            class="
              bgCard
              bg-opacitybg-40
              dark:bg-opacitybg-15
              h-full
              px-4
              py-5
              sm:py-8
              md:py-10
            "
          >
            <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3>
            <h3
              v-if="item.CTA"
              class="h3_sm"
              v-html="$md.render(item.CTA)"
            ></h3>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor p-0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .four-comp {
    .section-heads100 > div {
      @screen xxsm {
        padding-top: 0;
      }
    }

    div.para_md p {
      padding: 0.625rem 0;
    }
    .listanchor {
      padding: 0.625rem 0 1.563rem 0;
      @screen md {
        padding: 0.625rem 0 0.938rem 0;
      }
    }
    .bgCard-row {
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }
    }
    @screen sm {
      .bgCard-row {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
    @screen smd {
      .bgCard-row {
        &:nth-child(3) {
          @apply mt-0;
        }
      }
    }

    @screen lg {
      .bgCard-row {
        &:nth-child(3) {
          @apply mt-0;
        }
      }
    }
    @screen sxl {
      .bgCard-row {
        &:nth-child(4) {
          @apply mt-0;
        }
      }
    }
    @screen xl {
      .bgCard-row {
        &:nth-child(4),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>