<template>
  <div class="rxsection-y-space glory-team bg-no-repeat bg-cover"
  v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]">
    <div class="container">
      <h2 class="text-white text-center">{{data.Title}}</h2>
      <div class="row">
        <div class="img-card w-full md:w-4/12 px-4 mt-10 sm:mt-8" v-for="item in data.ImageCollection">
          <img class="mx-auto"
          v-if="item"
            v-rxlazy="item"
            :width="item.width"
            :height="item.height"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props:{
    data:Object,
  }
};
</script>