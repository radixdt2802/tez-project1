<template>
  <div
    class="
      sol-rightcontentbgimage
      bg-fixed bg-cover
      rxsection-y-space
      smd:bg-themelight-10
      relative
      dark:bg-themedark-0
      dark:text-themelight-0
      beforeDark
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <div class="contentarea w-full md:w-5/6 sxl:w-2/3">
        <div class="contentonly">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="square_list noBs list_sm"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import mountedMixin from "../mixins/mounted.mixin";
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
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .sol-rightcontentbgimage {
    .contentarea {
      @screen md {
        margin-left: 8.33333%;
      }
      @screen sxl {
        margin-left: 33.333333%;
      }
      .contentonly {
        padding: 0.9375rem;
        @screen xxsm {
          padding: 1.25rem;
        }
        @screen xsm {
          padding: 2.25rem;
        }
        @screen md {
          padding: 2.75rem 2.25rem;
        }
        @screen xl {
          padding: 4rem 2.25rem;
        }
        @screen xxxl {
          padding: 4.375rem 2.25rem;
        }

        @apply rounded-none sxl:rounded-r-xl overflow-visible relative dark:bg-themedark-0;
        background-color: rgba(182, 217, 213, 0.94);
        ul {
          &:after {
            @apply hidden;
            @screen sxl {
              @apply absolute block dark:bg-themedark-0;
              content: "";
              width: 0.3125rem;
              left: -0.3125rem;
              height: 120%;
              top: -10%;
              background: rgba(182, 217, 213, 0.94);
            }
          }
        }
      }
    }
  }
}
</style>