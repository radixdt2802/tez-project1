  <template>
  <header
    class="
      right-0
      left-0
      top-0
      w-full
      transition
      duration-300
      ease-in-out
    "
  >
    <div class="relative py-2">
      <div class="container">
        <div class="items-center justify-between row">
          <div class="w-2/6 px-4 sm:w-1/4">
            <tez-link to="/">
              <img
                class="logo"
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Logo_80x81_ec6628aba0.png'"
                alt="Logo of Radixweb – An IT Software and App Development Company"
                width="80"
                height="81"
              />
            </tez-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  }
};
</script>

<style lang="scss">

</style>
