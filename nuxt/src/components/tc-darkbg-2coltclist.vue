<template>
  <div
    class="leftText rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TC_DarkBG_2ColTCList'
        ? 'bg-secondary dark:bg-themedark-70 contentWhite'
        : '',
    ]"
  >
    <div class="container">
      <div class="mx-auto text-left">
        <div v-html="title"></div>
        <!-- <h2 v-if="data.Title">
          {{ data.Title }}
        </h2> -->
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>

      <div class="row t-space-60">
        <div
          class="twocolList"
          v-if="data.TitleContentList"
          v-for="(item, i) in data.TitleContentList"
        >
          <div>
            <div>
              <div v-html="sTitles[i]"></div>
              <!-- <h3
                v-if="item.CTA"
                v-html="$md.render(item.CTA ? item.CTA : '')"
                class="h3_sm p-0"
              ></h3>

              <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3> -->
              <div
                class="circle_list list_sm"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-html="$md.render(data.CTA ? data.CTA : '')"
        v-if="data.CTA"
        class="btn mt-8 text-center"
      ></div>
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
      titleStyle: "h2",
      sTitleStyle: "h3_sm p-0",
    };
  },
};
</script>

 <style lang="scss">
@layer utilities {
  .twocolList {
    @apply w-full px-4 smd:mx-0 md:w-1/2;
  }
}
</style>