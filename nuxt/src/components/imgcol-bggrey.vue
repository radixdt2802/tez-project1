<template>
  <div class="rxsection-y-space imgcol-bggrey">
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="row justify-center">
        <div
          class="
            xl:w-1/5
            md:w-4/12
            sm:w-6/12
            w-full
            sm:mt-10
            mt-8
            text-center
            px-4
            light-image
          "
          v-for="item in data.ImageCollection"
        >
          <div class="bg-themelight-10 dark:bg-themedark-70 p-4" v-if="item.caption">
            <tez-link :to="item.caption" :title="item.name">
            <img
              class="mx-auto mb-5"
              v-rxlazy="item"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
            <div>{{ item.name }}</div>
            </tez-link>
          </div>
          <div class="bg-themelight-10 dark:bg-themedark-70 p-4" v-else>
            <img
              class="mx-auto mb-5"
              v-rxlazy="item"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div
          class="
            xl:w-1/5
            md:w-4/12
            sm:w-6/12
            w-full
            sm:mt-10
            mt-8
            text-center
            px-4
            dark-image
          "
          v-for="item in data.MultipleMedia"
        >
          <div class="bg-themelight-10 dark:bg-themedark-70 p-4" v-if="item.caption">
            <tez-link :to="item.caption" :title="item.name">
            <img
              class="mx-auto mb-5"
              v-rxlazy="item"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
            <div>{{ item.name }}</div>
            </tez-link>
          </div>
          <div class="bg-themelight-10 dark:bg-themedark-70 p-4" v-else>
            <img
              class="mx-auto mb-5"
              v-rxlazy="item"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center"
		}
	}
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .light-image {
      @apply hidden;
    }
    .dark-image {
      @apply block;
    }
  }
  .light-image {
    @apply block;
  }
  .dark-image {
    @apply hidden;
  }
}
</style>