<template>
  <div
    class="rxsection-y-space beforeDark relative"
    :class="[
      data.VueReferenceCode == 'TC_Teal_Two_Col_Center100'
        ? 'tealbg-title-two-list bg-primary dark:bg-themedark-70'
        : 'tealbg-title-two-list bg-primary dark:bg-themedark-70',
      data.VueReferenceCode == 'TC_Teal_Two_Col_Center_ContentBlack'
        ? 'text-themedark-0'
        : 'contentWhite',
      data.Image ? 'bg-cover circleListPrimary' : '',
    ]"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      <div class="justify-content-center align-items-center">
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="para_md list_md"
          :class="[
            data.VueReferenceCode == 'TC_Teal_Two_Col_Center' 
              ? 'square_list circleListPrimary'
              : '',
            data.VueReferenceCode == 'TC_Teal_Two_Col_Center_ContentBlack'
              ? 'square_list'
              : '',
            data.VueReferenceCode == 'TC_Teal_Two_Col_Center100'
            ? 'circle_list circleListWhite fullWidthList':'',
            data.VueReferenceCode == 'TC_Teal_Two_Col_Center_Circle_List'
              ? 'fullWidthList circle_list circleListPrimary'
              : '', 
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center"
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .tealbg-title-two-list {
    p {
      @apply md:pb-10 pb-8 md:text-center;
    }
    div:not(.circleListPrimary) {
      ul {
        @apply flex flex-wrap sxl:w-10/12 w-full mx-auto px-4;
        li {
          @apply md:w-1/2 w-full;
          /* &::before {
            @apply bg-themelight-0 border-themelight-10 border-opacitybg-70;
          } */
        }
      }
    }
    div.fullWidthList {
      ul {
        @apply w-full;
        li {
          &::before {
            top: 0.25rem;
          }
          @screen md {
            padding: 0.3125rem 3rem 0.3125rem 2.5rem;
          }
          padding: 0.3125rem 1rem 0.3125rem 2.5rem;
        }
      }
    }
    div.circleListPrimary {
      ul {
        li {
          &::before {
            @apply bg-primary border-opacitybg-25;
          }
        }
      }
    }
    &:not(.contentWhite) {
      ul {
        li {
          &::before {
            @apply bg-themedark-0 border-themedark-10 border-opacitybg-70;
          }
        }
      }
    }
  }
  .tealbg-title-two-list-100 {
    p {
      @apply md:pb-10 pb-8 md:text-center px-4;
    }

    div:not(.circleListPrimary) {
      ul {
        @apply flex flex-wrap w-full mx-auto px-4;
        li {
          @apply md:w-1/2 w-full;
          &::before {
            @apply bg-themelight-0 border-themelight-10 border-opacitybg-70;
          }
        }
      }
    }
  }
}
</style>