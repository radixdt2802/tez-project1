  <template>
  <div
    class="
      rxsection-y-space
      contentWhite
      beforeDark
      relative
      bg-cover bg-no-repeat bg-secondary
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.VueReferenceCode == 'BgCustom_4icon_Card'
        ? 'bgCustomCard bg-fixed'
        : 'bgcustom-card',
    ]"
  >
    <div class="container relative">
      <sectionHeading :data="data" />
      <div class="row">
        <div
          class="card-row"
          v-for="(item,i) in data.TitleContentMediaList"
          :class="[
            data.VueReferenceCode == 'BgCustom_4icon_Card'
              ? 'w-full sxl:w-1/2 sm:w-1/2 px-4  mt-8'
              : '',
            data.VueReferenceCode == 'BgCustom_3icon_CardNoHover'
              ? 'w-full sxl:w-1/3 md:w-1/2 px-4  mt-8'
              : 'hoverIconVisible',
            data.VueReferenceCode == 'BgCustom_3icon_Card'
              ? 'w-full sxl:w-1/3 md:w-1/2 px-4  mt-8'
              : '',
          ]"
        >
          <div class="card-bg bg-opacitybg-40 relative sxl:px-7 p-5 xl:p-8 h-full">
            <img
              class="
                pb-5
                light-image
                opacity-100
                transition-all
                duration-300
                ease-in-out
              "
              v-if="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              v-rxlazy="item.Icon"
            />
            <img
              v-if="item.HoverIcon"
              class="
                hoverIcons
                invisible
                transition-all
                duration-300
                ease-in-out
                dark-image
                top-8
              "
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
              v-rxlazy="item.HoverIcon"
            />

            <!-- <h3 v-if="!item.CTA" class="para_lg break-all">{{ item.Title }}</h3>
            <h3
              v-if="item.CTA"
              class="para_lg"
              v-html="$md.render(item.CTA)"
            ></h3> -->
            <div v-html="sTitles[i]"></div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [titleMixin],
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

  .dark {
    .bgCustomCard {
      .dark-image {
        @apply block;
      }
      .light-image {
        @apply hidden;
      }
    }
  }
  .h3_sm {
    p {
      @apply py-0;
    }
  }

  .bgcustom-card {
    .dark-image {
      @apply hidden;
    }
    .light-image {
      @apply block;
    }

    .hoverIconVisible {
      .card-bg {
        &:hover {
          @apply text-primary transition-all duration-300 ease-linear;
          .hoverIcons {
            @apply opacity-100 visible;
          }
          .darkIcon {
            @apply opacity-0;
          }
        }
      }
    }
  }
  .bgCustomCard {
    .dark-image {
      @apply hidden;
    }
    .light-image {
      @apply block;
    }
    .card-bg {
      /* padding: 0; */
      p {
        margin-right: 0.625rem;
      }
    }
  }
}
</style>