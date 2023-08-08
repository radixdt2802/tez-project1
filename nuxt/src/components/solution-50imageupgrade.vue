<template>
  <div
    class="sol-fiftyimagecontentupgrade relative beforeDark"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div
      class="
        teldbg
        absolute
        smd:h-full
        block
        w-full
        smd:w-1/2
        left-auto
        right-0
        top-0
        bg-primary
        dark:bg-themedark-40
        
      "
    ></div>
    <div class="parentsection mx-auto">
      <div class="flex flex-wrap">
        <div class="contentarea rxsection-y-space-100 w-full smd:w-1/2 px-4">
          <div class="contentonly relative">
            <h2 class="text-themedark-0">{{ data.Title }}</h2>
            <p class="para_md text-themedark-0" v-if="data.ShortText">
              {{ data.ShortText }}
            </p>
          </div>
        </div>
        <div
          class="
            longArea
            contentWhite
            relative
            rxsection-y-space-100
            z-10
            w-full
            smd:w-1/2
          "
        >
          <h2>{{ data.SubTitle }}</h2>

          <div
            class="para_md"
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
export default {
  
  props: {
    data: Object,
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .sol-fiftyimagecontentupgrade {
    @apply bg-secondary;
    @screen smd {
      background: #0f1628 no-repeat 0% 23%;
      @apply bg-cover;
    }
    .parentsection {
      max-width: 100.5rem;
      .contentarea {
        .contentonly {
          @apply text-black;
          padding-right: 2.75rem;
          @screen sxl {
            margin-left: 3.75rem;
          }
        }
      }
      .longArea {
        @apply px-4;
        @screen lg {
          padding-left: 1rem;
        }
        @screen smd {
          padding-left: 1rem;
        }
        @screen sxl {
          padding-left: 3.6875rem;
        }

        &:before {
          content: "";
          @apply block absolute top-0 left-0 bottom-0 w-full bg-primary dark:bg-themedark-40 -z-1 smd:hidden;
          min-height: 68%;
        }
      }
    }
  }
}
</style>