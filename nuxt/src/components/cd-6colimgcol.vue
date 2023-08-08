<template>
  <div class="rxsection-y-space cd-6colimgcol bg-themelight-10 dark:bg-themedark-70">
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="row justify-center">
        <div
          class="
            xl:w-1/6
            md:w-4/12
            w-6/12
           
            sm:mt-10
            mt-8
            text-center
            px-4
            light-image
          "
          v-for="item in data.ImageCollection"
        >
          <div class="p-4">
            <img
              class="mx-auto mb-5"
              v-rxlazy="item"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
            <div class="" v-if="item.name" v-html="$md.render(item.name)"></div>
          </div>
        </div>
        <div
        class="
          xl:w-1/6
          md:w-4/12
          w-6/12
          
          sm:mt-10
          mt-8
          text-center
          px-4
          dark-image
        "
        v-for="item in data.MultipleMedia"
      >
        <div class="p-4">
          <img
            class="mx-auto mb-5"
            v-rxlazy="item"
            :alt="item.alternativeText"
            :width="item.width"
            :height="item.height"
          />
          <div class="" v-if="item.name" v-html="$md.render(item.name)"></div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center"
		}
	},
};
</script>
 <style lang="scss">
  @layer utilities {
    .dark{
      .cd-6colimgcol{ 
          .dark-image{
            @apply block;
          }
          .light-image{
            @apply hidden;
          }
      }
    }
    .cd-6colimgcol{
        .dark-image{
            @apply hidden;
          }
          .light-image{
            @apply block;
          }

    }

  }
</style>