<template>
  <div class="rxsection-y-space podcast-list">
    <div class="container">
      <div class="row">
        <div
          class="
            podcast-size
            lg:w-1/3
            md:w-1/2 md:px-8
            w-full
            min-h-full
            mt-4
            mb-16
          "
          v-for="item in data.dynamicResult"
          :key="item.id"
        >
          <div
            class="
              podcast-back
              flex flex-col
              min-h-full
              overflow-hidden
              border-2 border-themelight-60
              dark:border-themedark-65
              p-8
              hover:shadow-2xl hover:border-transparent
              transition-shadow
              ease-in-ut
              duration-300
            "
          >
            <div class="post-thumb relative">
              <tez-link
                :to="item.NavURL"
                :aria-label="item.Image.alternativeText"
              >
                <div
                  class="
                    bg-themelight-0
                    dark:bg-themedark-0
                    rounded-sm
                    text-center
                    right-2
                    top-2
                    absolute
                    z-10
                  "
                >
                  <p class="text-sm py-1 px-2">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "long",
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                  </p>
                </div>

                <img
                  class="rounded-2xl"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
                <div
                  class="rounded-full text-center left-2 bottom-3 absolute z-10"
                >
                  <img
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/play_white_2ab5785619.svg'"
                    width="50"
                    height="50"
                    alt=""
                  />
                </div>
              </tez-link>
            </div>
            <div class="post-body flex flex-col flex-grow items-start">
              <div
                class="
                  mb-2
                  post-category-container
                  w-full
                  mt-3
                  text-themedark-0
                "
              >
                <span class="
                    pt-0
                    font-14
                    post-category
                    font-bold
                    text-primary
                  "
                >
                  {{ item.Category.Title }}
                </span>
              </div>
              <tez-link :to="item.NavURL" class="pt-0 font-14 post-category">
                <h2
                  class="
                    hover:text-primary
                    transition-all
                    ease-in-out
                    duration-300
                    p-0
                    xl:text-3xl
                    xxsm:text-2xl
                    text-xl
                  "
                >
                  {{ item.Title }}
                </h2>
                <div
                  v-if="item.LongText"
                  v-rxhtml="[item.LongText[0]]"
                ></div>
              </tez-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
  methods: {
    emitURLEvent(navURL, attachmentURL) {
      this.$root.$emit("", attachmentURL);
      //add a feature in tez.js
      return this.$tezRouter.push({ path: navURL, queryparams: { attachmentURL } });
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .podcast-list {
    a {
      @apply no-underline;
    }

    .row {
      padding: 0 0.938rem;

      .podcast-size {
        transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out,
          -webkit-transform 0.15s ease-in-out;

        // &:nth-child(n + 4),
        // &:nth-child(2){
        //   margin-top: 1.5rem;
        // }

        // @screen md {
        //   &:nth-child(2) {
        //     @apply mt-0;
        //   }
        //   &:nth-child(n + 2) {
        //     margin-top: 3rem;
        //   }
        // }
      }
    }
  }
}
</style>