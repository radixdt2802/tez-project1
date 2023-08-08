<template>
  <div class="mb-12 container md:flex">
    <div class="lg:w-1/3" :class="{
        'hidden':
          data.VueReferenceCode == 'React_Dev_CTA_Full',
        
      }">
      <!-- need to change css of component based on sidebar -->
    </div>
    <div class="md:px-6 px-2" :class="{
        'w-full':
          data.VueReferenceCode == 'React_Dev_CTA_Full',
        'lg:w-2/3':
          data.VueReferenceCode == 'React_Dev_CTA',
        
      }">
      <div class="md:flex  bg-themelight-10 md:justify-start md:items-start dark:bg-themedark-10 p-6 smd:space-x-10">
        <div class="w-full  smd:w-1/3">
          <img
            v-if="data.Image"
            v-rxlazy="data.Image.url"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto"
          />
        </div>

        <div class=" w-full  smd:w-2/3 mt-4  text-center md:text-left md:mt-0 ">
          <div class="font-semibold text-2xl">{{ data.Title }}</div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            class="btn btn_sm btn_primary mt-3"
          ></div>
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
</style>