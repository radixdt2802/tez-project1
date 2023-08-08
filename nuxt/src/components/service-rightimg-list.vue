<template>
  <div
    class="service-rightimg-list rxsection-y-space bg-right-bottom bg-no-repeat"
    :class="{
      'bg-secondary contentWhite': data.VueReferenceCode == 'TCMLR_Dark_List',
      'bg-themelight-10 dark:bg-themedark-10':
        data.VueReferenceCode == 'TCMLR_Grey_List',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TCMLR_White_List',
    }"
    v-bind:style="[
      data.Icon ? { backgroundImage: 'url(' + data.Icon.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div class="row">
        <div class="smd:w-4/12 w-full px-4">
          <h2>{{ data.Title }}</h2>
          <p>{{ data.ShortText }}</p>
          <div
            v-if="data.CTA"
            v-html="$md.render(data.CTA)"
            class="btn btn_md mt-10 smd:block hidden"
          ></div>
        </div>
        <div
          class="
            smd:w-8/12
            w-full
            px-4
            listTwoCol
            circle_list
            list_md
            font-semibold
            smd:mt-0
            mt-8
          "
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div
          v-if="data.CTA"
          v-html="$md.render(data.CTA)"
          class="btn btn_md mt-10 smd:hidden block ml-4"
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
<style lang="scss">
@layer components {
  .service-rightimg-list {
    background-size: 10rem;
    @screen sxl {
      background-size: 16rem;
    }
    ul {
      @apply items-start;
      li {
        p {
          padding: 0;
          a {
            &:hover {
              @apply text-primary;
            }
          }
        }
        @apply sm:w-1/2 w-full;
      }
    }
  }
}
</style>