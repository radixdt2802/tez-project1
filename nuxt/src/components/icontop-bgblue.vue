<template>
  <div
    class="
      rxsection-y-space
      icontop
      bg-secondary
      dark:bg-themedark-70
      contentWhite
    "
  >
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="row card_structure flex flex-wrap t-space-60">
        <div class="card_design" v-for="(item,i) in data.TitleContentMediaList">
          <div class="image_top">
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              class="mx-auto light-image"
            />
            <img
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
              class="mx-auto dark-image"
            />
          </div>
          <div v-html="sTitles[i]"></div>
          <p>{{ item.ShortText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  components: {
    props: {
      data: Object,
    },
  },
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle : "h3_sm md:pb-2.5",
     }
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .icontop {
    .card_design {
      /* &:not(:last-child) {
                margin-bottom: 1.875rem;
            } */
      h3 {
        @apply font-semibold;
        padding-bottom: 0.625rem;
      }
      .listanchor {
        @apply p-0;
      }

      @apply w-full smd:w-1/3 text-center;
      .image_top {
        margin-bottom: 0.625rem;
      }

      @apply w-full px-4;
      margin: 0 auto;

      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }

      @screen sm {
        @apply w-1/2;
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 2.5rem;
        }
        &:nth-child(2) {
          @apply mt-0;
        }
        .three-cont {
          p {
            font-size: 1.06rem;
            line-height: 1.75rem;
          }
        }
      }
      @screen smd {
        @apply mt-0 px-4 w-1/3;
        @apply w-1/3;
        &:nth-child(3) {
          @apply mt-0;
        }
      }
      @screen md {
        @apply m-0;
        .three-cont {
          p {
            font-size: 1.125em;
            line-height: 2rem;
          }
        }
      }
      @screen lg {
        padding-right: 0.938rem;
        padding-left: 0.938rem;
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
    }
    .card_structure {
      padding-right: 0.93rem;
      padding-left: 0.93rem;
      @screen lg {
        padding-right: 0;
        padding-left: 0;
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
    .icontop {
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