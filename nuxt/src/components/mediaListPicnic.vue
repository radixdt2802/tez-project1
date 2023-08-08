<template>
  <div class="medialistPicnic bg-themelight-0 rxsection-b-space mt-5">
    <div class="container">
      <h2 class="text-center text-purple-800 uppercase">{{ data.Title }}</h2>
      <div class="flex justify-center items-center">
        <div
          class="w-1/4 p-2"
          v-for="item in data.TitleContentMediaList"
          :key="item.Title"
        >
          <div>
            <img
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
            <h3 class="h3_sm text-center text-themedark-65">{{ item.Title }}</h3>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-3">
          <button class="text-white uppercase bg-purple-800 outline-none p-3 rounded-full mx-auto w-64 hover:bg-white hover:text-purple-800 border border-purple-800 border-opacity-0 hover:border-opacity-100">Register now</button>
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
  <style lang="scss" scoped>
</style>