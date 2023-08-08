<template>
  <div
    class="rxa_awards bg-no-repeat bg-right-bottom rxsection-y-space"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <h2 class="text-center text-rxa-gray">{{ data.Title }}</h2>
      <div
        class="para_sm text-rxa-gray mb-6 text-center"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="technoList row justify-center flex items-center">
        <div
          class="technoBox mt-3 sxl:mt-6 text-center px-4 py-4 w-3/6 md:w-2/6 sxl:w-1/6"
          v-for="item in data.ImageCollection"
          :key="item.id"
          v-if="data.ImageCollection"
        >
          <div
            class="text-center"
            @click="anchor(item.caption)"
            :title="item.alternativeText"
            v-bind:class="{ 'cursor-pointer': item.caption }"
          >
            <img
              class="mx-auto"
              v-rxlazy="item.url"
              :alt="item.alternativeText"
              :width="item.width"
              :height="item.height"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@layer utilities {
  .rxa_awards {
    background-size: auto 30%;
    @screen sm {
      background-size: auto 50%;
    }
    @screen lg {
      background-size: auto 60%;
    }
    p {
      @apply text-rxa-gray;
    }
    .technoBox {
      img {
        max-width: 100%;
        width: auto;
        object-fit: contain;
        @media (max-width: 767px) {
          max-height: 5rem;
        }
        @media (min-width: 767px) {
          max-height: 6.25rem;
        }
        @media (min-width: 1200px) {
          max-height: 6.25rem;
        }
      }
    }
  }
}
</style>
