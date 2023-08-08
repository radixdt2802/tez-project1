<template>
  <div
    class="stickImg-left rxsection-y-space contentWhite dark:bg-themedark-40 relative smd:bg-left-top"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.Image ? 'bg-no-repeat bg-cover bg-fixed' : 'bg-secondary contentWhite',
    ]"
  >
    <div class="overlayBg absolute top-0 right-0 h-full block w-full bg-opacitybg-60 dark:bg-themedark-40"></div>
    <div class="container">
      <div class="row">
        <div class="rightcontent px-4">
          <div v-html="title"></div>
          <!-- <h2>{{ data.Title }}</h2> -->
          <div class="conetentgroup">
            <div
              class="infoblog"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
    }
  }
};
</script>
 <style lang="scss">
@layer utilities {
  .stickImg-left {
    /* @apply bg-no-repeat bg-secondary dark:bg-themedark-40 bg-fixed bg-cover relative; */
    &:before {
      content: "";
      height: 100%;
      position: absolute;
      transform: none;
      z-index: 0;
      width: 100%;
      @apply top-0 left-0;
    }
    @screen smd {
      /* @apply bg-left-top; */
      &:before {
        @apply hidden;
      }
    }
  }
  .stickImg-left {
    /* @apply relative; */
    .overlayBg {
      /* @apply absolute top-0 right-0 h-full block w-full bg-opacitybg-60 dark:bg-themedark-40; */
      @screen smd {
        width: 60.41%;
      }
    }
    .rightcontent {
      z-index: 1;
      /* padding: 0 0.938rem; */
      @screen smd {
        max-width: 58.7%;
        flex: 0 0 58.7%;
        margin-left: 41.66667%;
        padding: 0 1rem 0 calc(4vw + 1rem);
      }
      .conetentgroup {
        .infoblog {
          h3 {
            font-size: 1.25rem;
            line-height: 1.875rem;
            padding-bottom: 0.625rem;
            @screen xl {
              font-size: 1.5rem;
              line-height: 2.25rem;
            }
            @screen xxl {
              font-size: 1.625rem;
              line-height: 2.375rem;
            }
          }
          p {
            @apply pb-3;
            @screen md {
              line-height: 1.75rem;
            }
            &:last-child {
              @apply pb-0;
            }
          }
        }
      }
    }
  }
}
</style>