<template>
  <div class="rxsection-t-space tcml-cultures">
    <div class="container">
      <div class="mul-comp divide-y divide-solid divide-themelight-50">
      <div
        class="row py-14" v-for="(item,i) in data.TitleContentMediaList">
        <div class="smd:w-1/2 w-full smd:pl-6 px-4 left-con">
          <div v-html="sTitles[i]"></div>
          <!-- <h2>{{ item.Title }}</h2> -->
          <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          <img
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
          />
          <div v-if="item.CTA" v-html="$md.render(item.CTA)"></div>
          <p v-if="!item.CTA">{{ item.ShortText }}</p>
        </div>
        <div class="smd:w-1/2 w-full smd:mt-0 mt-8 px-4 right-img">
          <img
            class="mx-auto"
            v-if="item.Image"
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
          />
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
      sTitleStyle: "h2"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .tcml-cultures {
    .container {
      > div {
        &:nth-child(even) {
          .left-con {
            @apply smd:order-1 order-none;
          }
          .right-img {
            @apply smd:order-none order-1;
          }
        }
        
      }
    }
  }
}
</style>