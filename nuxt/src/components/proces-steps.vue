<template>
  <section class="process-steps rxsection-y-space bg-themelight-10 dark:bg-themedark-10">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center lg:w-10/12 mx-auto custom-content"
      ></div>
      <div class="overflow-hidden h-full t-space-60">
        <!-- <div
          class=" sm:absolute sm:border-opacity-20 sm:border-gray-700 h-full sm:border"
          style="left: 50%"
        ></div> -->
        <!-- right timeline -->
        <template v-for="item in data.TitleContentMediaList">
          <div
            :key="item.id"
            v-if="item.VueReferenceCode == 'Right'"
            class="sm:mb-0 mb-4 mx-auto block sm:flex sm:justify-between sm:items-center w-full right-timeline relative timlineBlock"
          >
            <div class="order-1 w-5/12"></div>
            <div
              v-if="item.SubTitle"
              class="sm:z-20 z-1 relative sm:top-0 top-4 sm:mx-0 mx-auto flex items-center order-1 bg-primary font-semibold shadow-xl w-12 h-12 rounded-full sm:mb-0 mb-2 dark:text-black"
            >
              <h4 class="mx-auto text-3xl text-white number-child">
                {{ item.SubTitle }}
              </h4>
            </div>
            <div
              class="order-1 alternativeColor sm:mx-0 mx-auto rounded-sm shadow-xl sm:w-5/12 w-full p-8"
            >
              <h3 class="font-bold text-gray-800 text-xl titleStyle">
                {{ item.Title }}
              </h3>
              <div
                class="dark:text-black paraStyle"
                v-rxhtml="item.LongText"
                v-if="item.LongText"
              ></div>
            </div>
          </div>
          <div
            :key="item.id"
            v-if="item.VueReferenceCode == 'Left'"
            class="sm:mb-0 mb-4 mx-auto d-block sm:flex sm:justify-between sm:items-center sm:flex-row-reverse w-full left-timeline timlineBlock relative"
          >
            <div class="order-1 w-5/12"></div>
            <div
              v-if="item.SubTitle"
              class="sm:z-20 z-1 relative sm:top-0 top-4 flex sm:mx-0 number mx-auto items-center order-1 bg-primary font-semibold shadow-xl w-12 h-12 sm:mb-0 mb-2 rounded-full"
            >
              <h4 class="mx-auto text-white text-3xl number-child">
                {{ item.SubTitle }}
              </h4>
            </div>
            <div
              class="order-1 sm:mx-0 mx-auto alternativeColor rounded-sm shadow-xl sm:w-5/12 w-full p-8"
            >
              <h3 class="font-bold text-gray-800 text-xl titleStyle">
                {{ item.Title }}
              </h3>
              <div
                class="dark:text-black paraStyle"
                v-rxhtml="item.LongText"
                v-if="item.LongText"
              ></div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@layer utilities {
  .process-steps {
    .custom-content {
      p {
        &:not(:last-child) {
          @apply pb-0;
        }
      }
    }
    //title style
    .titleStyle{
     @apply dark:text-themedark-0;
    }
    // Alternate Color
    .paraStyle {
      p {
        @apply dark:text-themedark-10 py-0;
      }
    }
    .timlineBlock {
      @screen sm {
        &:not(:last-child)::after {
          content: "";
          width: 2px;
          height: 100%;
          background-color:#dddddd;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateY(17px);
        }
      }
      &:nth-child(3n + 1) {
        .alternativeColor {
          @apply bg-opacitybg-96 border border-solid border-opacitybg-blueBorder;
        }
      }
      &:nth-child(3n + 2) {
        .alternativeColor {
          @apply bg-opacitybg-97 border border-solid border-opacitybg-yellowBorder;
        }
      }
      &:nth-child(3n + 3) {
        .alternativeColor {
          @apply bg-opacitybg-98 border border-solid border-opacitybg-purpleBorder;
        }
      }
    }
  }
}
</style>
