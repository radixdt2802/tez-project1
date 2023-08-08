<template>
  <div class="rxsection-y-space bg-secondary contentWhite dark:bg-themedark-70">
    <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
    <div v-html="title"></div>
    <div class="text-center pt-2 w-4/5 mx-auto para_md" v-if="data.LongText" v-rxhtml="data.LongText"></div>
    <div class="container">
      <div class="row">
        <div
          class="md:w-1/2 w-full mt-6 smd:mt-8 px-4"
          v-if="data.TitleContentList"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="flex items-start">
            <img
              v-rxlazy="
                'https://d2ms8rpfqc4h24.cloudfront.net/quality_assurance_check_dd740b3779.svg'
              "
              width="38"
              height="32"
              alt="checkList"
              class="mt-2"
            />
            <div class="content pl-5">
              <!-- <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3>
              <h3
                class="ctaLink h3 para_lg"
                v-if="item.CTA"
                v-html="$md.render(item.CTA)"
              ></h3> -->
              <div v-html="sTitles[i]"></div>
              <div v-rxhtml="item.LongText"></div>
            </div>
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
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
  data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle: "h3_sm pb-2"
    }
  },
};
</script>