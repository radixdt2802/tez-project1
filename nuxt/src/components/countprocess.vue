<template>
  <div class=" countdigit" :class="[
              data.VueReferenceCode == 'Count-Border-Content5col_BSpace'
                ? 'rxsection-b-space'
                : 'rxsection-y-space'
            ]">
    <div class="container">
      <div class="title-content-list">
        <div v-html="title"></div>
        <p class="text-center para_md mb-5 sxl:mb-10" v-if="data.SubTitle">
          {{ data.SubTitle }}
        </p>
        <div class="count-list flex flex-wrap text-center justify-center">
          <div
            class="count-stucture mt-6 md:mt-8 sm:px-4 lg:px-0"
            v-for="item in data.TitleContentList"
            :class="[
              data.VueReferenceCode == 'Count-Border-Content4col'
                ? 'w-full sm:w-2/4 md:px-4 lg:w-1/4 '
                : '',
                data.VueReferenceCode == 'Count-Border-Content4col_Tspace'
                ? 'w-full sm:w-2/4 sm:px-4 lg:w-1/4'
                : '',
                
              data.VueReferenceCode == 'Count-Border-Content3col'
                ? 'w-full md:w-1/3 md:px-4'
                : '',
              data.VueReferenceCode == 'Count-Border-Content5col'
                ? 'w-full sm:w-5/12 md:px-4 sm:mx-2 md:mx-0 md:w-1/3 sxl:w-1/5'
                : '',
            ]"
          >
            <div class="count-block py-3 px-5 w-full border-solid border-2 border-themelight-10 dark:border-themedark-65 lg:border-none md:w-full mx-auto sm:h-full smd:max-w-full sxl:w-full">
              <div class="h1 text-primary font-extrabold border-solid border-b-2 border-primary dark:border-themedark-65 pb-3">  
                {{ item.Title }}
              </div>
              <div
                class="para_md"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
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
        titleStyle : "h2 titlebar text-center",
        // sTitleStyle: "h3_sm"
      }

  }
};
</script>
<style lang="scss">
@layer components {
  .countdigit {
    .count-list {
      .count-stucture {
        .count-block {
          max-width: 100%;
          p {
            padding-top: 0.625rem;
          }
        }
      }
    }
  }
}
</style>
  