<template>
  <div
    class="rxsection-y-space job-listing bg-themelight-30 dark:bg-themedark-40" id="AllJobs"
  >
    <div class="container">
      <h2>All Jobs Current Openings</h2>
      <div class="pt-6">
        <ul class="square_list list_md listTwoCol flex flex-wrap">
          <li v-for="item in data.dynamicResult" class="smd:w-1/2 w-full" :key="item.id">
            <a
              :href="item.NavURL"
              class="no-underline"
              :title="item.JobTitle"
              >{{ item.JobTitle }}</a
            >
          </li>
        </ul>
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
