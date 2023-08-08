<template>
  <div class="rxsection-y-space "
  :class="[data.VueReferenceCode == 'TM_AutoCol_JustCenter_Aws' ? 'dark:bg-themedark-0' : '',data.VueReferenceCode == 'TM_AutoCol_JustCenter_TealOpacityBg' ? 'bg-opacitybg-25 dark:bg-themedark-40' : '',
            data.VueReferenceCode == 'TM_AutoCol_JustCenter' ? 'dark:bg-themedark-40' : '',]">

    
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <p v-if="data.SubTitle" class="para_md text-center">{{ data.SubTitle }}</p>
      <h3 v-if="data.ShortText">{{ data.ShortText }}</h3>
      <div class="technoList row justify-center">
        <div
          class="
            technoBox
            mt-6
            smd:mt-12
            w-full
            text-center
            px-4
            py-4
            hover:shadow-lg
            light-image
          "
          v-if="data.ImageCollection"
          v-for="item in data.ImageCollection"
        >
          <div
            class="mainWrap"
            @click="anchor(item.caption)"
            :title="item.name"
            v-bind:class="{ 'cursor-pointer': item.caption }"
          >
            <img
              class="mx-auto"
              v-rxlazy="item.url"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
            <p class="para_xs" v-bind:class="[item.caption ? 'underline' : '']">
              {{ item.name }}
            </p>
          </div>
        </div>
        <div
        class="
          technoBox
          mt-6
          smd:mt-12
          w-full
          text-center
          px-4
          py-4
          hover:shadow-lg
          dark-image
        "
        v-if="data.MultipleMedia"
        v-for="item in data.MultipleMedia"
      >
        <div
          class="mainWrap"
          @click="anchor(item.caption)"
          v-bind:class="{ 'cursor-pointer': item.caption }"
        >
          <img
            class="mx-auto"
            v-rxlazy="item.url"
            :alt="item.alternativeText"
            :width="item.width"
            :height="item.height"
          />
          <p class="para_xs" v-bind:class="[item.caption ? 'underline' : '']">
            {{ item.name }}
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center"
		}
	},
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
<style lang="scss" scoped>
  @layer utilities {
    .dark{
      .technoList{
        .dark-image{
          @apply block;
        }
        .light-image{
          @apply hidden;
        }
      }

    }
    .technoList{
      .dark-image{
          @apply hidden;
        }
        .light-image{
          @apply block;
        }
      .technoBox {
        max-width: 14rem;
      }
    }
  }
</style>