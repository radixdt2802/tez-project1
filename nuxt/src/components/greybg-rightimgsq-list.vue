<template>
  <div class="rxsection-y-space right-con-list-left-img">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="left-con">
          <h2>Challenges of Software Application Support</h2>
          <p class="para_md">
            When it comes to effective Support and Maintenance of Software
            Applications, as an enterprise you might face the following
            challenges:
          </p>
          <ul class="square_list para_sm">
            <li>
              Failure to craft solutions that reduce support costs to reduce
              total cost ownership in the longer run
            </li>
            <li>
              Lack of bespoke features in software solutions to graph the
              demands of changing business scenarios
            </li>
            <li>
              Continued usage of old mainframes for maintaining legacy apps
              leading to glitches
            </li>
            <li>
              Unavailability of talents to develop apps with both modern and
              legacy platforms
            </li>
            <li>
              Poor code quality and non-compliance with development standards
            </li>
          </ul>
        </div>
        <div class="img-right">
          <img
          v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/challenges_software_application_f1d6382b8d.jpg'"
            alt="Clutch-Top-Software-Developers"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
};
</script>
<style lang="scss">
@layer utilities {
  .left-con-list-right-img {
    .left-con {
      @apply smd:w-7/12 w-full px-5;
      li {
        margin-bottom: 0;
        &:before {
          top: 0.875rem;
        }
      }
    }
    .img-right {
      @apply smd:w-5/12 w-full px-5;
      img {
        @apply mx-auto smd:mr-0 smd:mt-0  w-full smd:w-auto;
      }
    }
  }
}
</style>