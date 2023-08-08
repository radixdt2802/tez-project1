<template>
<div class="threeboxtwotitle text-white">
<div class="container">
<div class="row">
<div class="w-full lg:w-1/3 px-4 md:py-14 py-5">
<h3 class="h3_md text-white mb-3 md:mb-0">{{ data.Title }}</h3>
<div class="">{{data.ShortText}}</div>
</div>
<div class="w-full lg:w-1/3 px-4 md:px-8 bg-themelight-10 dark:bg-themedark-10 md:py-14 py-5">
<h3 class="h3_md">{{ data.SubTitle }}</h3>
<div
            class="rxa-dashed "
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
      
</div>
<div class="w-full lg:w-1/3 px-4 md:px-8 md:py-14 py-5">
 <div v-for="item in data.TitleContentMediaList" :key="item.id">
 <h2 class="h3_sm pb-2">{{ item.Title }}</h2>
 <div class="text-black dark:text-white">{{item.ShortText}}</div>
  <div class="btn btn_sm mb-3 mt-5 font-semibold" v-html="$md.render(item.CTA ? item.CTA : '')"></div>
<div class="primary-arrowBtn flex items-center">
<div class="font-semibold"  v-if="item.LongText"
            v-rxhtml="item.LongText">
</div>
<img
    class=" inline-block"
    v-rxlazy="arrowImage"
    width="18"
    height="10"
    alt="Arrow"
      />
</div>
 </div>
</div>
</div>
</div>
</div>
 
</template>
<script type="text/javascript">
import staticImg from '../mixins/staticimg.mixin';
export default {
     mixins: [staticImg],
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
.threeboxtwotitle{
 background: linear-gradient(to bottom,#31bbae 0%,#31bbae 50%,rgba(182,217,213,.3) 50%,rgba(182,217,213,.3) 100%);
    @screen lg{
    background: linear-gradient(to right,#31bbae 0%,#31bbae 50%,rgba(182,217,213,.3) 50%,rgba(182,217,213,.3) 100%);
    }
   .primary-arrowBtn {
    a{
      @apply text-primary no-underline text-base;
    }
      img {
        @apply inline-block ml-4 transition-all duration-300 ease-in-out;
      }
      &:hover{
      img {
          @apply ml-6;
        }
      }
    }
    .rxa-dashed li {
      @apply relative mb-2 pl-5 list-none text-black dark:text-white;
      &:before {
        content: "";
        @apply bg-themedark-0 dark:bg-themelight-0 inline-block absolute left-0;
        margin-right: 0.75rem;
        width: 0.625rem;
        height: 0.125rem;
        top: 0.625rem;
        
      }
    }
  }
}
</style>