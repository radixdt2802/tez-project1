<template>
  <div class="rxsection-y-space pe-iconborderbottom">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div class="row t-space-60">
        <div
          class="bgCard-row smd:w-1/3 md:w-1/2 w-full px-4 mt-8 sm:mt-10"
          v-for="item in data.TitleContentMediaList"
        >
          <div class="bgCardspace pb-3 border-solid h-full border-b-4 border-primary">
            <img
              class="mb-5"
              v-if="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              v-rxlazy="item.Icon"
            />
            <h3 v-if="!item.CTA" class="para_lg">
              {{ item.Title }}
            </h3>
            <h3
              v-if="item.CTA"
              class="para_lg"
              v-html="$md.render(item.CTA)"
            ></h3>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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