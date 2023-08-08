<template>
  <div class="mt-12 container md:flex" :id="data.GuideURL">
    <div
      class="lg:w-1/3"
      :class="[
        data.VueReferenceCode == 'React_Dev_TCMWithTCML_EXTENSION_Full'
          ? 'hidden'
          : '',
      ]"
    >
    </div>
    <div
      :class="{
        'w-full':
          data.VueReferenceCode == 'React_Dev_TCMWithTCML_EXTENSION_Full',
        'w-full lg:w-2/3 lg:px-6 px-2':
          data.VueReferenceCode == 'React_Dev_TCMWithTCML_EXTENSION_Full',
      }"
    >
      <!-- <h2>{{data.Title}}</h2>
          <div 
            class=""
            v-if="data.LongText"
            v-rxhtml="data.LongText">
            </div>
            <img
                v-if="data.Image"
                v-rxlazy="data.Image.url"
                :alt="data.Image.alternativeText"
                :width="data.Image.width"
                :height="data.Image.height"
                class="mx-auto my-2"/> -->

      <!-- <div v-if="data.Image" class="text-right mb-2">
                        <p class="text-xs m-0 p-0" v-if="data.Image.caption">{{data.Image.caption}}</p>
                    </div> -->

      <div v-for="item in data.TitleContentMediaList">
        <div>
          <h3 class="h3_sm">{{ item.Title }}</h3>
          <div v-if="item.Icon">
            <img
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
          </div>

          <div
            v-if="item.LongText"
            class="square_list"
            v-rxhtml="item.LongText"
          ></div>

          <img
            v-if="item.Image"
            v-rxlazy="item.Image.url"
            :alt="item.Image.alternativeText"
            :width="item.Image.width"
            :height="item.Image.height"
            class="my-2"
          />

          <!-- <div v-if="item.Image" class="text-right mb-2">
                        <p class="text-xs m-0 p-0" v-if="item.Image.caption">{{item.Image.caption}}</p>
                    </div> -->

          <div v-if="item.ShortText" v-rxhtml="item.ShortText"></div>
        </div>
      </div>
      <hr class="mt-12" />
    </div>
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
.para_md {
  margin-top: 0;
}
.square_list {
  li:before {
    top: 0.75rem;
  }
}
</style>