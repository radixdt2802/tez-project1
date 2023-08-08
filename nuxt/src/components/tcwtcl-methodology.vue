<template>
  <div class="methodologySection rxsection-y-space">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="applMainten-method-wrap">
        <div class="row t-space-60">
          <template v-for="item in data.TitleContentList">
          <div
            class="col-3"
            :key="item.Title"
            v-if="item.VueReferenceCode == 'TC'"
          >
            <div class="applMainten-method-wrap">
              <div class="applMainten-method-col">
                <h3 class="para_lg">{{ item.Title }}</h3>
                <div
                  v-if="item.LongText"
                  v-rxhtml="item.LongText"
                  class="square_list list_sm"
                ></div>
              </div>
            </div>
          </div>
          </template>
          <template v-for="item in data.TitleContentList">
          <div
            :key="item.Title"
            class="t-space-60 infoTroubleshoot_wrapper w-full px-4"
            v-if="item.VueReferenceCode == 'TC_Process'"
          >
            <div class="b-space-40 text-center">
              <h3 class="para_lg pb-0">{{ item.Title }}</h3>
            </div>
            <div class="chatBox_wrapper">
              <div
                class="chatBox_col"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
          </template>
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
<style lang="scss" scoped>
@layer utilities {
  .methodologySection {
    .applMainten-method-wrap {
      @apply mx-auto h-full;
      max-width: 73.75rem;
      .col-3 {
        @apply smd:w-2/6 xxsm:w-full px-4;
        .applMainten-method-col {
          @apply px-6 py-12 border-4 rounded-3xl text-left h-full mx-auto;
        }
        &:nth-child(3n + 1) {
          .applMainten-method-col {
            @apply border-customcolor-10;
          }
        }
        &:nth-child(3n + 2) {
          .applMainten-method-col {
            @apply border-customcolor-15;
          }
        }
        &:nth-child(3n + 3) {
          .applMainten-method-col {
            @apply border-customcolor-35;
          }
        }
        @screen xxsm {
          &:nth-child(n + 2) {
            .applMainten-method-col {
              @apply mt-6;
            }
          }
          .applMainten-method-col {
            @apply p-6 h-auto max-w-full;
          }
        }
        @screen smd {
          &:nth-child(n + 2) {
            .applMainten-method-col {
              @apply mt-0;
            }
          }
          .applMainten-method-col {
            @apply px-6 py-12 h-full;
            max-width: 20.1875rem;
          }
        }
      }
    }
  }
}
</style>