<template>
  <div class="application-spd rxsection-y-space dark:bg-themedark-0">
    <div class="container">
      <div class="row xl:items-center item-start">
        <div class="cot-img">
          <img
          v-if="data.Image"
            v-rxlazy="data.Image"
            alt="Development Company"
            :width="data.Image.width"
            :height="data.Image.height"
          />
        </div>
        <div class="csd-content">
          <h2>{{ data.Title }}</h2>
          <div class="flex flex-wrap">
            <div
              v-if="data.LongText"
              v-rxhtml="data.LongText"
              class="list_md listanchor square_list noBs"
            ></div>
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
  .application-spd {
    .cot-img {
      @apply px-4 md:mt-0 mt-8 smd:w-4/12 mx-auto md:block order-1 smd:order-none;
      img {
        @apply mx-auto;
        width:250px; 
        @screen md{
          
         @apply w-auto;
        }  
      }
    }
    .csd-content {
      @apply smd:w-8/12 w-full px-4  text-left;
      .csd-card {
        @apply md:w-1/2 w-full px-4;
        &:nth-child(n + 2) {
          @apply mt-8;
        }
        @screen md {
          &:nth-child(2) {
            @apply mt-0;
          }
        }
        p {
          @apply max-w-sm md:m-0 mx-auto;
        }
      }
      p {
        @apply max-w-sm;
      }
    }
  }
}
</style>