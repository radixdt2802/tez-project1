<template>
  <div class="rxsection-y-space bg-themelight-10 dark:bg-themedark-0">
    <div class="text-center">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md lg:pb-8 pb-2"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
    </div>
    <div class="container row justify-center align-middle">
      <ul class="w-full mx-auto text-center">
        <li
          v-if="data.TitleContentList"
          v-for="item in data.TitleContentList"
          @click="anchor(item.CTA ? item.CTA : '')"
          :title="item.Title"
          class="
            inline-block
            text-center
            px-4
            py-2
            mr-4
            mt-4
            cursor-pointer
            bg-themelight-0
            dark:bg-themedark-45
            para_sm
            font-semibold
            no-underline
            rounded-md
            hover:shadow-md hover:text-primary
            duration-500
            ease-in
            transition-all
          "
        >
          {{ item.Title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2 text-center",
    };
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>

<style>
</style>