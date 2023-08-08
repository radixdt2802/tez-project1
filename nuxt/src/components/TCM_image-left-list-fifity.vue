<template>
  <div class="tpmlistfifty rxsection-y-space">
    <div class="container">
      <div class="text-center">
        <div v-html="title"></div>
         <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      </div>
      <div class="mt-10">
        <div class="row">
          <div
            class="px-4 mb-6"
            :class="[
              data.VueReferenceCode == 'CS_FirstSection100'
                ? 'w-full'
                : 'w-full smd:w-1/2',
            ]"
          >
            <img
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              alt="App Maintenance to Maximize Performance"
              class="mx-auto"
            />
          </div>
          <div
            class="px-4"
            :class="[
              data.VueReferenceCode == 'CS_FirstSection100'
                ? 'w-full para_md text-center'
                : 'w-full smd:w-1/2',
            ]"
          >
            <div
              class="list_sm square_list primary_list"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
          </div>
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
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
}
</style>