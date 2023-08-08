  <template>
  <div class="rxsection-y-space card-iconcontent">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row">
        <div
          class="card-row md:mt-10 mt-8 w-full sxl:w-1/4 sm:w-1/2 px-4"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="card-bg p-8 h-full">
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.width"
              class="mb-5"
            />
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor square_list primary_list list_sm noBs"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
    data(){
    return {
      sTitleStyle : "para_lg h3",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .card-iconcontent {
    .card-bg {
      @screen sxl {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
      }
    }
  }
}
</style>