<template>
  <div class="rxsection-y-space imggallery bg-secondary contentWhite">
    <div class="container">
    <h2 class="text-center">{{data.Title}}</h2>
    <p class="text-center">{{data.SubTitle}}</p>
    <div class="row">
      <template v-for="item in data.TitleContentMediaList">
      <div class="md:w-1/2 w-full px-4 mt-10 sm:mt-8" v-if="item.VueReferenceCode !== 'Inrow'" >
        <img
            v-if="item.Image"
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
          />
      </div>
      </template>
      <template v-for="item in data.TitleContentMediaList">
      <div class="md:w-1/3 w-full px-4 mt-10 sm:mt-8" v-if="item.VueReferenceCode == 'Inrow'" >
        <img
            v-if="item.Image"
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
          />
      </div>
      </template>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>
