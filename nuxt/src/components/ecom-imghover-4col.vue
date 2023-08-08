<template>
  <div class="ecom-imghover-4col rxsection-y-space dark:bg-themedark-70">
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="row justify-center">
        <div class="img-col" v-for="item in data.TitleMediaList">
          <a :href="item.CTA" :title="item.Image.alternativeText">
            <img
              class="light-image mx-auto"
              v-if="item.Image"
              v-rxlazy="item.Image"
              :alt="item.Image.alternativeText"
              :title="item.Image.alternativeText"
              :width="item.Image.width"
              :height="item.Image.height"
            />
            <img
              class="dark-image mx-auto"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :alt="item.HoverIcon.alternativeText"
              :title="item.Image.alternativeText"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
   data(){
    return {
      titleStyle : "h2 text-center",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .ecom-imghover-4col {
    .img-col {
      @apply w-full xxsm:w-1/2 sm:w-1/3 lg:w-1/6 text-center align-middle px-4 sm:mt-10 mt-8;
      a {
        @apply flex items-center mx-auto px-5 relative transition-all duration-300 ease-in-out;
        max-width: 15.25rem;
        height: 7.625rem;
        &::after {
          @apply transition-all duration-300 ease-in-out block absolute left-0 bottom-0 w-full;
          box-shadow: 0rem 0.0625rem 0.0625rem 0rem #adadad;
          border-bottom-right-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
          content: "";
          height: 80%;
        }
        @screen lg {
          &:hover {
            &::after {
              box-shadow: 0.0625rem 0.25rem 0.5rem #adadad;
              border-radius: 0.5rem;
              height: 100%;
            }
          }
        }
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .ecom-imghover-4col {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>