 <template>
  <div class="rxsection-t-space trendtech">
    <div class="container">
      <h2 class="pb-0">{{ data.Title }}</h2>
      <div class="row t-space-60">
        
        <div
          class="w-full techBlock smd:w-1/2 sxl:w-1/4 sm:w-1/2"
          v-for="item in data.TitleContentMediaList"
          @click="anchor(item.CTA)"
          :title="item.Title"
          :key="item.id"
        >
          <div class="innerTech">
            <div class="techLogos mb-4">
            <img
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
              class="light-image"
            />
          
            <img
              v-rxlazy="item.HoverImage"
              :width="item.HoverImage.width"
              :height="item.HoverImage.height"
              :alt="item.HoverImage.alternativeText"
              class="dark-image"
            />
            </div>
            <div class="h3_sm">{{ item.Title }}</div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
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
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .trendtech{
      .innerTech{
        .light-image{
          @apply hidden;
        }
        .dark-image{
          @apply block;
        }
      }
    }
  }
  .trendtech {
    img {
      @apply mb-4;
    }
    .innerTech {
      .techLogos{
        height:2.625rem;
      width:2.75rem;
      }
      padding: 0.9375rem;
      .light-image{
          @apply block;
        }
        .dark-image{
          @apply hidden;
        }
    }
    .techBlock {
      @apply cursor-pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 0rem 0rem 0.1875rem 0rem #dadada8c, 0rem 0rem 0.9375rem 0rem #dadada8c;
      }
      padding: 0 0.938rem;
      p {
        @apply text-base;
        line-height: 1.625rem;
        @screen xsm {
          font-size: 1.063rem;
          @apply leading-7;
        }
        @screen sm {
          @apply text-lg;
          line-height: 1.875rem;
        }
      }
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-8;
      }
      @screen sm {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>