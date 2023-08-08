<template>
  <div class="rxsection-y-space title-con-3iconcol">
    <div class="container">
      <div class="row">
        <div class="smd:w-6/12 w-full px-4 smd:mr-auto">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="smd:w-5/12 w-full px-4 smd:mt-0 mt-6">
          <img
            class="mx-auto"
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
        </div>
      </div>
      <div class="row process-list-icon">
        <div class="bg-card" v-for="(item,i) in data.TitleContentMediaList">
          <div class="heading">
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              class="mr-5"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <!-- <h3 class="pb-0 h3_sm">{{ item.Title }}</h3> -->
             <div v-html="sTitles[i]"></div>
          </div>
          <div
            class="square_list primary_list list_sm"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "pb-0 h3_sm",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .title-con-3iconcol {
    .process-list-icon {
      margin-top: 1.875rem;
      @screen smd {
        margin-top: 3.125rem;
      }
      @screen xl {
        margin-top: 3.75rem;
      }
      .bg-card {
        @apply smd:w-4/12 md:w-6/12 w-full px-4 flex flex-col;
        &:nth-child(n + 3),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen md {
          &:nth-child(2) {
            margin-top: 0;
          }
          @screen sxl {
            &:nth-child(n + 3) {
              margin-top: 0;
            }
          }
        }
        .heading {
          @apply flex items-center;
        }
      }
    }
  }
}
</style>