<template>
  <div
    class="bg-title-two-list rxsection-y-space beforeDark relative imgBottom bg-no-repeat"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')',backgroundSize:'100%' } : '',
    ]"
  >
    <div class="container relative">
      <h2>{{ data.Title }}</h2>
      <p class="para_md" v-if="data.ShortText">
        {{ data.ShortText }}
      </p>
      <div class="row">
        <div class="w-full mx-auto px-4">
          <div
            class="circle_list para_sm list_sm"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .imgBottom{
    position: relative;
  }
  .bg-title-two-list {
    @apply bg-no-repeat;
    p {
      text-align: center;
      @apply md:pb-10 pb-8;
    }
    ul {
      @apply flex flex-wrap;
      li {
        @apply w-full mt-4 ;
        &::before {
          width: 1.15rem;
          height: 1.15rem;
          @apply mt-1 sm:w-5 sm:h-5;
        }
      }
    }
  }
}
</style>