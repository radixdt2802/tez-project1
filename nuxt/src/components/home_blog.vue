<template>
  <div class="home-blogs rxsection-t-space">
    <div class="h2 text-center">{{ data.Title }}</div>
    <div class="container t-space-40">
      <div class="row">
        <div
          v-for="item in data.Blogs"
          :key="item.Title"
          @click="anchor(item.NavURL)"
          :title="item.Title"
          class="px-4 cursor-pointer smd:w-1/3 w-full"
        >
          <div
            class="
              insight-content
              bg-themelight-10
              hover:shadow-md
              inline-block
              relative
              hover:text-primary
              transition-all
              duration-300
              ease-in-out
              dark:bg-themedark-10
              no-underline
              h-full
              w-full
              smd:border-t-0
              border-t border-opacitybg-20 border-solid
              dark:border-black
            "
          >
            <img
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
              class="smd:block hidden w-full"
            />
            <h3
              class="relative transition-all duration-300 ease-in-out md:w-full"
            >
              {{ item.Title }}
            </h3>
          </div>
        </div>
         <div
         v-if="data.NewsItems"
          v-for="item in data.NewsItems"
          :key="item.Title"
          @click="anchor(item.NavURL)"
          :title="item.Title"
          class="px-4 cursor-pointer smd:w-1/3 w-full"
        >
          <div
            class="
              insight-content
              bg-themelight-10
              hover:shadow-md
              inline-block
              relative
              hover:text-primary
              transition-all
              duration-300
              ease-in-out
              dark:bg-themedark-10
              no-underline
              h-full
              w-full
              smd:border-t-0
              border-t border-opacitybg-20 border-solid
              dark:border-black
            "
          >
            <img
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
              class="smd:block hidden w-full"
            />
            <h3
              class="relative transition-all duration-300 ease-in-out md:w-full"
            >
              {{ item.Title }}
            </h3>
          </div>
        </div>

      </div>
      <!-- <div
          class=" text-right no-underline text-primary mt-10"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div> -->
      <div class="ctaOverall text-center t-space-40 flex">
        <div
          class="iconcontent space-t font-semibold"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <img
          class="transition-all duration-300 ease-in-out"
          v-rxlazy="arrowImage"
          width="18"
          height="10"
          alt="Arrow"
        /> 
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
  import staticImg from '../mixins/staticimg.mixin';
  import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [staticImg],
  props: {
    data: Object,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .home-blogs {
    .row {
      div {
        &:first-child {
          div {
            border-top: none;
          }
        }
      }
    }
    .insight-content {
      &:hover {
        h3 {
          @apply text-primary;
        }
      }
      h3 {
        @apply px-4 py-3 text-base w-10/12;
        
      
        @screen smd {
          @apply w-full;
        }
        @screen smd {
          padding: 1.375rem 1.563rem;
        }
        @screen lg {
          font-size: 1.3rem;
          line-height: 1.6875rem;
        }
      }
      &:nth-child(n + 2) {
        /* @apply border-t-2 border-opacity-25 border-themedark-85 border-solid dark:border-black;
        @screen smd {
          border-top: none;
        } */
      }

      &:after {
        @apply absolute top-50 bg-no-repeat smd:hidden block w-8 h-3;
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg");
        right: 0.625rem;
        transform: translateY(-50%);
        content: "";
        background-size: 1.438rem;
      }
    }
    .ctaOverall {
      @apply flex justify-end;
      &:hover {
        img {
          margin-left: 0.625rem;
        }
      }
      .iconcontent {
        p {
          a {
            @apply text-primary no-underline mr-4;
            transition: all 0.3s ease-in;
          }
        }
      }
    }
  }
}
</style>