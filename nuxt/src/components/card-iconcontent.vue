  <template>
  <div class="rxsection-y-space card-iconcontent">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row">
        <div
          class="card-row mt-8 w-full sxl:w-1/4 md:w-1/2 px-4"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div
            class="card-bg p-8 sxl:px-7 h-full"
            :class="[
              data.VueReferenceCode == 'TCWithTCML_3icon_TealCard'
                ? 'bg-primary dark:bg-themedark-70 contentWhite'
                : 'bg-themelight-10 dark:bg-themedark-70',
            ]"
          >
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              class="mb-5 light-image"
            />
            <img
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
              class="mb-5 dark-image"
            />
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor square_list"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      sTitleStyle: "h3_sm h3"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .card-iconcontent{
    .light-image{
      @apply hidden;
    }
    .dark-image{
      @apply block;
    }
  }
  }
  .card-iconcontent {
    .light-image{
      @apply block;
    }
    .dark-image{
      @apply hidden;
    }

  }
  .h3_sm {
    p {
      @apply py-0;
    }
  }
}
</style>