<template>
<div>
    <!-- For Bg image -->
  <div v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' , backgroundSize : 'cover'  } : '']" >
    <div class="" v-for="item in data.TitleContentMediaList">
      <div>
        <div class="flex flex-wrap mt-5 justify-center items-center">
          <div class="text-center iconcollection mb-2 light-image" v-for="key in item.ImageCollection" :key="key.alternativeText">
            <div class="iconlist w-auto mx-auto">
              <img
                v-rxlazy="key"
                :width="key.width"
                :height="key.height"
                :alt="key.alternativeText"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-5 justify-center items-center">
          <div class="text-center iconcollection mb-2 dark-image" v-for="key in item.MultipleMedia" :key="key.alternativeText">
            <div class="iconlist w-auto mx-auto">
              <img
                v-rxlazy="key"
                :width="key.width"
                :height="key.height"
                :alt="key.alternativeText"
              />
            </div>
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
  <style lang="scss" scoped>
</style>