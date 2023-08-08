<template>
  <div
    class="fourcolimgcenter"
    :class="[
      data.VueReferenceCode == 'RN_5ColImgCenter'
        ? 'rxsection-t-space'
        : 'rxsection-y-space',
    ]"
  >
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md text-center"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row justify-center">
        <div
          class="sm:mt-10 mt-8 text-center px-4"
          v-for="item in data.TitleMediaList"
          :class="[
            data.VueReferenceCode == 'RN_5ColImgCenter'
              ? 'smd:w-1/5 md:w-1/3 w-1/2'
              : '',
            data.VueReferenceCode == 'RN_4ColImgCenter'
              ? 'smd:w-3/12 md:w-4/12 w-1/2'
              : '',
          ]"
        >
          <img
            v-if="item.Icon"
            class="mx-auto mb-5 light-image"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
          />
          <img
            class="mx-auto mb-5 dark-image"
            v-if="item.HoverImage"
            v-rxlazy="item.HoverImage"
            :width="item.HoverImage.width"
            :height="item.HoverImage.height"
          />
          <p class="mx-auto icon-title">{{ item.Title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
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
  .dark {
    .fourcolimgcenter {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .fourcolimgcenter {
    .icon-title {
      max-width: 14.375rem;
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
}
</style>