<template>
  <div class="mt-12 container md:flex" :id="data.GuideURL">
    <div
      class="lg:w-1/3"
      :class="[
        data.VueReferenceCode == 'React_Dev_TCMWithTCMLIcons_EXTENSION_Full'
          ? 'hidden'
          : '',
      ]"
    ></div>
    <div
      class="customOl"
      :class="{
        'w-full':
          data.VueReferenceCode == 'React_Dev_TCMWithTCMLIcons_EXTENSION_Full',
        'w-full lg:w-2/3 lg:px-6 px-2':
          data.VueReferenceCode == 'React_Dev_TCMWithTCMLIcons_EXTENSION',
      }"
    >
      <!-- <h2>{{ data.Title }}</h2>
      <div class="" v-if="data.LongText" v-rxhtml="data.LongText"></div> -->
      <img
        v-if="data.Image"
        v-rxlazy="data.Image.url"
        :alt="data.Image.alternativeText"
        :width="data.Image.width"
        :height="data.Image.height"
        class="my-2"
      />
      <!-- <div v-if="data.Image" class="text-right mb-2">
                        <p class="text-xs m-0 p-0" v-if="data.Image.caption">{{data.Image.caption}}</p>
                    </div> -->
      <div
        v-for="item in data.TitleContentMediaList"
        class="icon-list mt-8 md:p-0 border border-gray-300 smd:border-none"
      >
        <div class="flex p-4">
          <div v-if="item.Icon" class="bounce-img">
            <img
              v-if="item.Icon"
              class="lightIcon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              v-rxlazy="item.Icon"
            />
          </div>
          <div>
            <h3 class="h3_sm">{{ item.Title }}</h3>
            <div
              v-if="item.LongText"
              class="React-dev-TCMWithTCMLIcons"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-12" />
  </div>
</template>

<script>
import mountedMixin from "../mixins/mounted.mixin";

export default {
  props: {
    data: Object,
  },
};
</script>

 <style lang="scss">
@layer utilities {
  .customOl {
    ol {
      list-style: decimal;
      padding-left: 1rem;
      li {
        margin-bottom: 0.25rem;
      }
    }
  }
  .bounce-img {
    .lightIcon {
      @apply opacity-100 transition-all duration-300 ease-in-out;
    }
    &:hover {
      img {
        transform: translateY(-0.3125rem);
      }
    }
    margin-bottom: 1.25rem;
    padding-right: 0.875rem;
    min-width: 3.125rem;
    @screen md {
      min-width: 3.875rem;
      padding-right: 1.375rem;
    }
    @screen smd {
      margin-bottom: 0;
    }
    @screen sxl {
      min-width: 4.375rem;
    }
  }
}
// .icon-list {
//   border: 1px solid #dedede;
// }
</style>