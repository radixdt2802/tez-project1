<template>
  <div class="relative form-imageright rxsection-y-space dark:bg-themedark-10 bg-themelight-10">
    <div
      class="hidden bgimg-right smd:block"
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    ></div>
    <div class="container">
      <div class="row item-center">
        <div class="w-full px-4 md:w-8/12">
          <div v-for="item in data.TitleContentMediaList" :key="item.id">
            
            <h3 class="para_md">{{item.Title}}</h3>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="circle_list primary_list list_sm"
            ></div>
          </div>
        </div>
        <div class="w-full px-4 md:w-4/12">
          <div v-for="item in data.TitleContentMediaList">
            
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
            />
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
    data: Object
  }
};
</script>
<style lang="scss">
@layer components {
  .form-imageright {
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }

    &.beforeDark {
      &:before {
        @apply bg-opacitybg-30;
      }
    }
    .fifty-content {
      @apply z-10 relative dark:text-themelight-0;
      ul {
        @apply sxl:block md:flex flex-wrap block;
      }
      .list_black {
        ul {
          li {
            @apply pt-1 w-full;
            &::before {
              @apply border-themedark-0;
            }
          }
        }
      }
    }
  }
}
</style>