<template>
  <div class="rxsection-y-space wp-5050titlelist bg-primary dark:bg-themedark-70 contentWhite">
    <div class="container">
      <div class="row relative">
        <div class="w-full smd:w-1/2 px-4 left-list">
          <h3 class="smd:pb-10">{{ data.Title }}</h3>
          <div
            class="list_md mt-5 smd:mb-0 mb-5"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div
          class="w-full smd:w-1/2 px-4"
          v-for="item in data.TitleContentMediaList"
        >
          <h3 class="smd:pb-10">{{ item.Title }}</h3>
          <div
            class="list_md mt-5"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
          <div class="social-platforms mx-auto smd:mx-0 pt-10 smd:pt-12">
            <p class="pb-4 font-semibold">{{ item.SubTitle }}</p>
            <div
              class="
                flex flex-wrap
                justify-start
                border-t border-solid border-themelight-0
                pt-3
                space-x-4
              "
            >
              <template v-for="key in item.ImageCollection">
                <tez-link v-if="key.caption" :to="key.caption" target="_blank" class="mx-auto  transition-all duration-300 ease-in-out" :key="key.url" :title="key.alternativeText">
                  <img
                    v-rxlazy="key"
                    :alt="key.alternativeText"
                    :width="key.width"
                    :height="key.height"
                  />
                </tez-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .wp-5050titlelist {
    .row {
      &::before {
        content: "";
        @apply bg-themelight-0 absolute smd:block h-full hidden;
        width: 0.0625rem;
        right: 52%;
      }
    }
    h3 {
      max-width: 32.8125rem;
    }
    a {
      @apply no-underline;
    }
    ul {
      max-width: 37.5rem;
    }
    li {
      @apply flex py-2  transition-all duration-300 ease-in-out;
      &::before {
        content: "-";
        @apply text-3xl pr-2 inline-block md:leading-8 leading-7 text-themelight-0;
      }
      &:hover {
        @apply pl-1;
      }
    }
    .social-platforms {
      max-width: 19.375rem;
      p {
        font-size: 1.75rem;
        @screen smd {
          font-size: 2rem;
        }
        line-height: 2.625rem;
      }
      img {
        max-width: 2.25rem;
        &:hover {
          transform: translateY(-0.375rem);
          transition: 0.3s all ease;
        }
      }
    }
  }
}
</style>