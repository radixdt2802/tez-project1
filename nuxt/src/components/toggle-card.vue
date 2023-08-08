<template>
  <div class="pt-20 pb-12 image">
    <div class="container">
      <div class="pb-4">
        <h3 class="text-white text-center" v-html="data.Title"></h3>
      </div>
      <div class="pl-0 flex flex-col lg:flex-row justify-between w-full px-48">
        <div class="card w-80 rounded-3xl lg:w-1/3 p-9" v-for="(item) in data.TitleContentMediaList">
          <div>
            <p>{{ item.SubTitle }}</p>
          </div>
          <div>
            <p>{{ item.Title }}</p>
          </div>
          <div>
            <p>{{ item.ShortText }}</p>
          </div>
          <div
            v-html="$md.render(item.CTA ? item.CTA : '')"
            v-if="item.CTA"
            class="btn btn_sm rounded-xl max-w-xl button mt-4"
          ></div>
          <div class="long">
            <div
              class="text-gray-300 text-base longtext"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    data: Object
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .card {
    background-color: rgb(37 37 41);
  }
  .image {
    background-color: rgb(26 26 26/1);
  }
  .long {
    .longtext {
      ul {
        li {
          @apply relative pl-4 text-white;
          &::before {
            @apply bg-no-repeat left-0 pr-4;
            content: "";
            position: absolute;
            background-image: url("https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/tick_arrow_a8630184ba.png");
            width: 24px;
            height: 24px;
          }
          &::after {
            @apply bg-no-repeat right-0;
            content: "";
            position: absolute;
            background-image: url("https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/tick_arrow_a8630184ba.png");
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
}
</style>