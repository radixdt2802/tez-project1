<template>
  <div class="hiresoftdevicontop rxsection-y-space text-center">
    <div class="container">
      <h2>{{ data.Title }}</h2>
      <div class="" v-if="data.LongText" v-rxhtml="data.LongText"></div>
      <div class="row">
        <div
          class="smd:w-4/12 md:w-1/2 w-full mt-10 sm:mt-8 px-4 h-auto"
          v-for="item in data.TitleContentMediaList"
        >
          <div
            class="
              px-4
              py-4
              xxsm:px-5
              xxsm:py-5
              sxl:px-8
              sxl:py-8
              cardmain
              transition-all
              ease-in-out
              duration-300
              rounded-md
              h-full
              dark:bg-themedark-10
            "
          >
            <img
              class="mx-auto"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <h3>{{ item.Title }}</h3>
            <div
              class="para_md"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
        <div
          class="btn btn_trans w-full mt-8"
          v-if="data.CTA"
          v-html="$md.render(data.CTA)"
        ></div>
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
  <style lang="scss" scoped>
@layer utilities {
  .hiresoftdevicontop {
    .cardmain {
      box-shadow: 0 0 0.1563rem rgba(3, 3, 3, 0.2);
      &:hover {
        box-shadow: 0 0 0.4063rem 0 rgba(117, 117, 117, 0.3);
      }
      p {
        padding-bottom: 0;
      }
    }
  }
}
</style>
  