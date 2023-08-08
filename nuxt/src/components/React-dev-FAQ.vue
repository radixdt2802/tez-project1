<template>
  <div class="container mb-4" :id="data.GuideURL">
    
      
      <div class="bg-themelight-10 md:bg-transparent lg:w-1/3 px-2">
      <!-- <sidebarMenu :data="data.TitleContentList" /> -->
    </div>
        <div
          class="rounded-sm dark:bg-themedark-0 mb-4 cursor-pointer lg:w-2/3"
          v-for="item in data.FAQs" 
          :class="[
            item.id == faqId
              ? 'bg-themelight-10 dark:bg-themedark-10'
              : 'bg-themelight-0 dark:bg-themedark-0 border border-themelight-50 dark:border-themedark-65',
          ]"
          :key="item.id"
        >
          <div
            class="border border-transparent p-4"
            @click="contentvisiblity(item.id)"
          >
            <div class="pb-0 flex text-left">
              <h5 class="para_md font-semibold pb-0 faqtoggle w-full">
                {{ item.Title }}
              </h5>
              <svg
                v-if="item.id == faqId"
                class="inline-block faqIcon align-middle items-end mt-2"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                width="1.25rem"
                height="1.25rem"
                enable-background="new 6 6 10 10"
              >
                <path
                  id="Layer_1" class="fill-current"
                  d="M5 2.37C5.18 2.37 5.36 2.44 5.49 2.58L9.75 6.92C10.03 7.19 10.02 7.64 9.75 7.91C9.47 8.18 9.03 8.17 8.76 7.9L4.99 4.06L1.15 7.83C0.87 8.1 0.43 8.1 0.16 7.82C-0.11 7.55 -0.11 7.1 0.16 6.83L4.5 2.57C4.64 2.44 4.82 2.37 5 2.37Z"
                />
              </svg>
             <svg
                v-else
                class="inline-block faqIcon align-middle items-end mt-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0rem"
                y="0rem"
                width="1.25rem"
                height="1.25rem"
                viewBox="6 6 10 10"
                enable-background="new 6 6 10 10"
                xml:space="preserve"
              >
                <g>
                  <path
                    class="fill-current"
                    d="M11,13.85c-0.18,0-0.358-0.068-0.495-0.205l-4.3-4.299c-0.273-0.273-0.273-0.717,0-0.99s0.717-0.273,0.99,0   L11,12.159l3.804-3.804c0.274-0.273,0.718-0.273,0.991,0s0.273,0.717,0,0.99l-4.3,4.299C11.358,13.781,11.179,13.85,11,13.85z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            v-bind:id="item.id"
            v-show="item.id == faqId"
            class="
              border border-transparent
              bg-themelight-10
              dark:bg-themedark-10
              border-t-0
              pt-0
              p-8
              list_sm
            "
            :class="[
              item.VueReferenceCode == 'ListTwoCol'
                ? 'listTwoCol square_list noBs'
                : 'square_list noBs',
            ]"
            v-rxhtml="item.LongText ? item.LongText : ''"
          ></div>
        </div>
      </div>
  
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data(){
    return{
      show: true,
      faqId: null,
    }
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
  .faqIcon {
    min-width: 1.5625rem;
    padding: 0.1rem;
  }
}
</style>
