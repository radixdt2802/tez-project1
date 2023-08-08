  <template>
  <div class="rxsection-y-space cardbg text-center">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div class="row">
        <div
          class="card-row w-full lg:w-1/4 sm:w-1/2 px-4 md:mt-10 mt-8 cursor-default"
          v-for="item in data.TitleContentMediaList"
        >
          <div
            class="
              card-bg
              px-5
              py-10
              h-full
              text-center
              lg:py-16
              lg:px-5
              sxl:px-6
              relative
              bg-cover bg-center
            "
            v-bind:style="[
              item.Image
                ? { backgroundImage: 'url(' + item.Image.url + ')' }
                : '',
            ]"
          >
            <h3 class="text-themelight-0 relative">{{ item.Title }}</h3>
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
};
</script>
<style lang="scss">
@layer utilities {
  .cardbg {
    .card-bg {
      &:before {
        content: "";
        @apply absolute right-0 bottom-0 top-0 left-0 w-full h-full bg-themedark-0 opacity-50;
      }
    }
  }
}
</style>