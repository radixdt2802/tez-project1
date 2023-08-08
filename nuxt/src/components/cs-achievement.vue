<template>
  <div class="rxsection-y-space csLevelcomp">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row card_structure t-space-40">
        <div
          class="card_design text-left"
          v-for="item in data.TitleContentList"
        >
          <h3>{{ item.Title }}</h3>
          <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
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
  .csLevelcomp {
    .card_design:not(:last-child) {
      @apply mb-10;
    }
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
    @screen smd {
      .card_design {
        @apply mt-0 px-4;
      }
      .card_design:not(:last-child) {
        @apply mb-0;
      }
    }
    .card_design {
      @apply w-full smd:w-1/3;
      @screen lg {
        padding-right: 0.938rem;
        padding-left: 0.938rem;
      }

      h3 {
        @apply font-semibold;
        padding-bottom: 0.625rem;
        font-size: 1.25rem;
        line-height: 1.25rem;
        @screen smd {
          font-size: 1.375rem;
          @apply leading-8;
        }
        @screen xl {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        @screen xxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
      }

      .listanchor {
        @apply p-0;
      }

      @screen xl {
        .listanchor {
          @apply p-4;
        }
        .three-cont {
          padding: 0.93rem;
          p {
            @apply p-0;
          }
        }
      }
      @screen md {
        .three-cont {
          p {
            font-size: 1.125em;
            line-height: 2rem;
          }
        }
      }
      @screen smd {
        .card_design:not(:last-child) {
          @apply mb-0;
        }
        .card_design:not(:last-child) {
          @apply mb-0;
        }
      }
    }
  }
}
</style>