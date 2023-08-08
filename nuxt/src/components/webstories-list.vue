<template>
  <section>
    <!-- {{data.dynamicResult}} -->
    <div>
      <div class="container">
        <div class="p-12 text-center">
          <h1>Our Web Stories</h1>
        </div>
        <div class="row lg:items-center mb-8">
          <div
            class="w-full md:w-1/2 lg:w-1/3 my-4 px-4"
            v-for="item in data.dynamicResult"
            :key="item.Title"
          >
            <tez-link :to="item.NavURL" class="no-underline">
              <div class="max-w-xl m-auto bg-gray-100 rounded-lg shadow-sm">
                <div>
                  <img
                    v-if="item.Image"
                    v-rxlazy="item.Image.url"
                    :alt="item.Title"
                    :width="item.Image.width"
                    :height="item.Image.height"
                  />
                  <div class="pt-4 mx-8 text-3xl sm:flex sm:items-center">
                    <h3 class="h3_sm pb-0">{{ item.Title }}</h3>
                  </div>
                  <div>
                    <div
                      class="px-8 pb-4 nobottom"
                      v-if="item.LongText"
                      v-rxhtml="item.LongText"
                    ></div>
                  </div>
                </div>
              </div>
            </tez-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
</style>