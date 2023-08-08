<template>
  <div class="rxsection-y-space fiveicontop"
    :class="[(data.VueReferenceCode == 'TCWithTCML_5icon_Teal_Top' ? 'bg-themelight-20 dark:bg-themedark-70' : '')]"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row card_structure t-space-60">
        <div class="card_design" v-for="(item,i) in data.TitleContentMediaList">
          <img
            v-if="item.Icon"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
            class="light-image"
          />
          <img
            v-if="item.HoverIcon"
            v-rxlazy="item.HoverIcon"
            :width="item.HoverIcon.width"
            :height="item.HoverIcon.height"
            class="dark-image"
          />

          <!-- <h3>{{ item.Title }}</h3> -->
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
import titleMixin from '../mixins/title.mixin';
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [titleMixin],
  components: {
   sectionHeading: sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
		return {
		  sTitleStyle: "h3 h3_sm"
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
    .fiveicontop{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  .fiveicontop {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
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
      @apply w-full lg:w-1/5 md:w-1/2 text-center border border-solid border-themelight-50 dark:border-themedark-65 md:border-0 p-5 px-4 md:py-0;
      img {
        @apply mx-auto mb-5;
      }
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
          @apply px-2;
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

      /* @screen xxl {
      .three-cont{
        p{
          padding: 0.93rem;
        }
      }
    } */
    }
  }
}
</style>