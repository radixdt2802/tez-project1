<template>
  <div
    class="
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-80
      px-4
      model-section
    "
  >
    <div class="container">
      <div class="lg:mb-11 mb-8">
        <div>
          <h2 class="h2 text-center">{{ data.Title }}</h2>
        </div>
        <div
          class="text-center mx-auto para_md smd:w-11/12 w-full"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="row">
        <div
          class="md:w-4/12 w-full px-4"
          v-for="item in data.TitleContentList"
          :key="item.id"
        >
          <div class="p-5 md:mr-5 rounded-xl md:mb-0 mb-5" :class="[
            item.VueReferenceCode == 'BGCustom1'
        ? 'bg-customcolor-30'
        : '',
            item.VueReferenceCode == 'BGCustom2'
        ? 'bg-customcolor-20'
        : '',
            item.VueReferenceCode == 'BGCustom3'
        ? 'bg-customcolor-15'
        : '',
        ]">
            <h3 class="font-bold mb-6 mt-3 pb-0 text-white">
              {{ item.Title }}
            </h3>
            <div class="p-5 lg:flex bg-white rounded-xl">
              <div class="lg:w-1/2 w-full lg:mt-0 mt-3">
                <h4 class="font-bold lg:mb-3 text-base">Hours Per Day</h4>
                <span class="font-bold mb-3 text-base" :class="[
            item.VueReferenceCode == 'BGCustom1'
        ? 'digit-color-orange'
        : '',
            item.VueReferenceCode == 'BGCustom2'
        ? 'digit-color-voilet'
        : '',
            item.VueReferenceCode == 'BGCustom3'
        ? 'digit-color-skyblue'
        : '',
        ]" v-rxhtml="item.LongText"></span>
              </div>
              <div class="lg:w-1/2 w-full lg:mt-0 mt-3">
                <h4 class="font-bold lg:mb-3 text-base dark:text-black">Hours Commitment</h4>
                <span class="font-bold mb-3 text-base"
                :class="[
            item.VueReferenceCode == 'BGCustom1'
        ? 'fontColor1'
        : '',
            item.VueReferenceCode == 'BGCustom2'
        ? 'fontColor2'
        : '',
            item.VueReferenceCode == 'BGCustom3'
        ? 'fontColor3'
        : '',
        ]">{{item.ShortText}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn btn_sm mt-6 md:mt-12 text-center" v-html="$md.render(data.CTA)">
      </div>
    </div>
  </div>
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
  .model-section {
    h4 {
      @apply dark:text-black;
    }
    .digit-color-orange {
        p{
            @apply p-0 dark:text-themedark-10;
            strong{
                @apply text-customcolor-30 dark:text-customcolor-30;
            }
        }
    }
    .digit-color-voilet {
        p{
            @apply p-0 dark:text-themedark-10;
            strong{
                @apply text-customcolor-20 dark:text-customcolor-20;
            }
        }
    }
    .digit-color-skyblue {
        p{
            @apply p-0 dark:text-themedark-10;
            strong{
                @apply text-customcolor-15 dark:text-customcolor-15;
            }
        }
    }
    .fontColor1{
        @apply text-customcolor-30 dark:text-customcolor-30;
    }
    .fontColor2{
        @apply text-customcolor-20 dark:text-customcolor-20;
    }
    .fontColor3{
        @apply text-customcolor-15 dark:text-customcolor-15;
    }
  }
}
</style>

