<template>
    <section class="confabbanner contentWhite box-border overflow-x-hidden">
        <div class="mt-0 m-auto md:px-4 bg-cover bg-center" v-for="item in data.SimpleContentBanner" :key="item.Title" v-bind:style="[
      item.BGImage
        ? {
            backgroundImage: 'url(' + item.BGImage.url + ')',
            backgroundSize: '100%',
          }
        : '',
    ]">
    <div class="banner container">
            <p class="">{{ item.SubTitle }}</p>
            <h1 class="w-1/3">{{ item.Title }}</h1>
            <div v-rxhtml="item.LongText" class=""></div>
        </div>
        </div>
        <div>
            <img class="absolute"
                  v-rxlazy="
                    'https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Mask_group_banner_c6f02006ba.svg'
                  "
                />
        </div>
        <div>
            <img class="icon"
                  v-rxlazy="
                    'https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Confab_2023_logo_1_f28f439ea0.png'
                  "
                />
        </div>
    </section>
</template>

<script>
export default {
  props: {
    data: Object,
  }
}
</script>

<style lang="scss">
    .banner{
        padding-top: 303px;
        padding-bottom: 303px;
    }
    .confabbanner{
        position: relative;
    }
    .absolute{
        position: absolute;
        top: -100px;
        right: -400px;
    }
    .icon{
        position: absolute;
        width: 195px;
        height: 105px;
        top: 400px;
        right: 350px;
    }
</style>