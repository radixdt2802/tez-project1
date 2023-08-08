<template>
  <div class="rxsection-y-space ff-con-list">
    <div class="container">
      <div class="row">
        <div class="careersOp_card">
          <div class="careersOp_card_wrap">
            <h2>Featured Jobs We’re Hiring</h2>
            <p>
              Radixweb offers an excellent career where every day is filled with
              great excitement and unmatchable growth. Our industry leaders
              guide in creating next-gen IT solutions by using the latest tools
              and technologies.
            </p>
          </div>
        </div>
        <div class="careersOp_card">
          <div class="careersOp_card_wrap">
            <h3>Job Title</h3>
            <ul class="square_list para_md py-0">
              <li>
                Trainee Software Engineer – (.NET / PHP / QA / Nodejs / Reactjs)
              </li>
              <li>Social Media Executive</li>
              <li>Full Stack Engineer</li>
            </ul>
          </div>
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
  .ff-con-list {
    @apply bg-themelight-10 dark:bg-themedark-10;
    .careersOp_card {
      @apply relative smd:w-6/12 w-full;
      padding: 0 0.938rem;
      &:first-child {
        @apply px-4;
        @screen smd {
          padding-right: 2.813rem;
        }
      }
      &:last-child {
        @apply px-4;
        margin-top: 1.875rem;
        @screen smd {
          padding-left: 3.125rem;
          @apply m-0;
        }
      }
      &:first-child:after {
        @apply absolute h-full bg-primary right-0 top-0 hidden smd:block;
        content: "";
        width: 0.125rem;
      }
      h3 {
        font-size: 1.375rem;
        @apply leading-8 p-0;
        @screen md {
          @apply text-2xl leading-9 mb-0;
        }
        @screen sxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
          margin-bottom: 0.625rem;
        }
        @screen xl {
          font-size: 2rem;
          line-height: 2.75rem;
        }
      }
      .careersOp_card_wrap {
        li {
          padding-bottom: 0.625rem;
          @apply pt-0 md:border-b-0 my-0 border-b border-solid border-opacitybg-15;
          margin-bottom: 0.625rem;
          padding-left: 1.75rem;
          @screen md {
            @apply mb-0 pb-0 mt-5;
          }
          @screen smd {
            margin-top: 1.563rem;
          }
          &:first-child {
            margin-top: 0.625rem;
            @screen smd {
              margin-top: 1.563rem;
            }
          }
          &:last-child {
            @apply border-b-0;
          }
          &:before {
            top: 0.75rem;
            @apply dark:border-themelight-0;
          }
        }
      }
    }
  }
}
</style>