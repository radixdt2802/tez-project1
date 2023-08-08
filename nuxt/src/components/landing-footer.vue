<template>
  <footer class="bg-secondary landing-footer">
    <div class="container">
      <div class="row">
        <div
          class="w-full smd:w-8/12 sxl:w-7/12 px-4 smd:text-left text-center "
        >
          <p class="text-sm leading-6 text-themelight-0">
            Copyright © {{ new Date().getFullYear() }} Radixweb. All Rights Reserved. An ISO 9001:2015
            Certified Company
          </p>
        </div>
        <div
          class="w-full smd:w-4/12 sxl:w-5/12 px-4 flex items-center justify-center smd:justify-end"
        >
          <ul class="footer_menu ">
            <li class="inline-block">
              <tez-link
                class="text-sm leading-6 no-underline text-themelight-0 hover:text-primary transition-all duration-300 ease-in-out"
                to="/terms-of-use"
                title="Terms of Use"
                >Terms of Use</tez-link>
            </li>
            <li class="inline-block pl-1">
              <tez-link
                class="text-sm leading-6 no-underline text-themelight-0 hover:text-primary transition-all duration-300 ease-in-out"
                to="/privacy-policy"
                title="Privacy Policy"
                >Privacy Policy</tez-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style>

</style>