<template>
  <section
    class="contentAccordion rxsection-y-space contentWhite bg-bottom bg-no-repeat bg-rxa-secondary"
    id="Vision"
    v-bind:style="[
      data.Image
        ? {
            backgroundImage: 'url(' + data.Image.url + ')',
          }
        : '',
    ]"
  >
    <div class="container mx-auto">
      <h2 class="text-center mt-0 b-space-60 font-normal">
        {{ data.Title }}
      </h2>
      <div class="flex flex-wrap -mx-4">
        <div class="lg:w-5/12 w-full px-4 lg:pl-4 md:mb-0 mb-4 lg:mb-8">
          <div class="pr-4">
            <div class="pb-4 lg:text-left text-center">
              <p
                class="h3 mb-2 lg:mb-8 lg:text-left text-center pt-0"
                v-if="data.LongText"
                v-rxhtml="data.LongText"
              ></p>

              <div
                class="btn rxa_btn_sm mb-2 lg:mb-8"
                v-html="$md.render(data.CTA ? data.CTA : '')"
              ></div>
            </div>
          </div>
        </div>
        <div class="lg:w-7/12 w-full px-4 lg:pl-20 accordian">
          <div
            v-for="(item, index) in data.TitleContentList"
            :key="index"
            class="cursor-pointer"
          >
            <div
              class="border border-white border-solid p-5 bg-rxa-secondary"
              :class="index == faqId ? 'active' : ''"
            >
              <div
                @click="contentvisiblity(index)"
                class="flex text-left focus:bg-transparent customClass"
              >
                <h3
                  class="h3_sm leading-relaxed pb-0 m-0 w-full transition-all duration-300 ease-in-out ml-0"
                  :class="[index == faqId ? 'bg-graident' : '']"
                >
                  {{ item.Title }}
                </h3>
                <img
                  v-if="index == faqId"
                  class="inline-block faqIcon align-middle items-end mt-2 transition-all duration-300 ease-in-out"
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/up_ed409be602.svg'"
                  width="20"
                  height="20"
                  alt=""
                />
                <img
                  v-else
                  class="inline-block faqIcon align-middle items-end mt-2 transition-all duration-300 ease-in-out"
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/down_18da26e03f.svg'"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
              
                <div v-bind:id="index" v-show="index == faqId">
                  <div class="pt-0 para_sm" v-rxhtml="item.LongText"></div>
                </div>
              
            </div>
            <!-- v-bind:id="item.id"
              v-show="item.id == faqId" -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      show: true,
      faqId: 0,
    };
  },

  methods: {
    contentvisiblity(index) {
      this.faqId = index;
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .contentAccordion {
    .rxa_btn_sm {
      a {
        color: #000000 !important;
      }
    }
    .h3 {
      p {
        font-weight: 300;
      }
    }
    .accordian {
      .active {
        border-left: 2px solid #4ef1e0;
      }
    }
  }
}
</style>
