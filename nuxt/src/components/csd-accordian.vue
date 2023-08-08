<template>
  <div>
    <div class="rxsection-y-space csd-accordian">
      <div class="container">
        <div class="md:w-10/12 w-full mx-auto">
          <h2 class="pb-12 text-center">{{ data.Title }}</h2>
          <div
            v-for="item in data.TitleContentList"
            class="cursor-pointer mb-5"
          >
            <div
              class="border rounded-md sxl:p-6 px-4 py-4"
              :class="[
                item.id == faqId
                  ? 'bg-primary dark:bg-themedark-10 border-primary dark:border-themedark-65'
                  : 'bg-themelight-10 dark:bg-themedark-0 border border-themelight-50 dark:border-themedark-65',
              ]"
            >
              <div
                class="pb-0 flex text-left"
                @click="contentvisiblity(item.id)"
              >
                <h5
                  class="h3_sm leading-9 pb-0 faqtoggle w-full"
                  :class="[item.id == faqId ? 'text-themelight-0' : '']"
                >
                  {{ item.Title }}
                </h5>
                <img
                  width="17"
                  height="21"
                  v-rxlazy="minusImage"
                  v-if="item.id == faqId"
                  class="
                    inline-block
                    align-middle
                    items-end
                    transition-all
                    duration-300
                    ease-in-out
                  "
                />
                <img
                  width="17"
                  height="21"
                  v-rxlazy="plusImage"
                  v-else
                  class="
                    inline-block
                    align-middle
                    items-end
                    transition-all
                    duration-300
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div
              v-bind:id="item.id"
              v-show="item.id == faqId"
              class="
                border border-primary
                dark:border-themedark-65
                bg-themelight-10
                dark:bg-themedark-0
                border-t-0
                p-6
                tab-main
                -mt-1
                rounded-b
              "
              v-rxhtml="item.LongText ? item.LongText : ''"
            ></div>
          </div>
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
  data() {
    return {
      minusImage:"https://d2ms8rpfqc4h24.cloudfront.net/minus_01_1_e60db33ce2.svg",
      plusImage:"https://d2ms8rpfqc4h24.cloudfront.net/plus_c2174c4b27.svg",
      show: true,
      faqId: null,
    };
  },

  methods: {
    contentvisiblity(id) {
      if (this.faqId == id) {
        this.faqId = null;
      } else {
        this.faqId = id;
      }
    },
  },
};
</script>

 <style lang="scss">
@layer utilities {
}
</style>
