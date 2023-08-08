<template>
  <div class="mt-12 container md:flex" :id="data.GuideURL">
    <div class="md:w-1/3" :class="{
        'hidden':
          data.VueReferenceCode == 'TCMWithTCSimpleList_Full',
        
      }"></div>
    <div class="md:px-6 px-2" :class="{
        'w-full':
          data.VueReferenceCode == 'TCMWithTCSimpleList_Full',
        'md:w-2/3':
          data.VueReferenceCode == 'TCMWithTCSimpleList',
        
      }">
      <div class="my-5 bg-themelight-0 dark:bg-themedark-0">
        <h2>{{ data.Title }}</h2>
        <div
          class="para_md square_list noBs"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div class="">
          <img
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
        </div>
        <div>
          <div class="row my-3 px-2">
            <div
              class="w-full"
              v-for="item in data.TitleContentList"
              :key="item.Title"
            >
              <h3 class="h3_sm mt-2">{{ item.Title }}</h3>
              <div
                class="para_smd square_list noBs"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
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
<style lang="scss">
@layer utilities {
}
</style>