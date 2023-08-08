<template>
  <div class="navi-para">
    <div class="container flex flex-wrap">
      <div class="spaceback width-style">
        <p class="para_md">
          With approximate spending of $30,000-$35,000 already contributed
          towards the engagement, this Real Estate Software firm has entered
          into a long-standing relationship with Radixweb – the engagement that
          began in May 2019 continues to surge ahead with sporadic project
          requirements.
        </p>
        <p class="para_md">
          The firm rates Radixweb an overall 5 Star in terms of
          cost-effectiveness, timeliness in delivering projects, quality of
          project solutions, and technical expertise.
        </p>
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
  .navi-para {
    .width-style {
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;

      @media (min-width: 576px) {
        max-width: calc(100% - 20px);
        width: 74.375rem;
      }

      @screen xl {
        width: 74.375rem;
      }
    }

    .spaceback {
      @apply bg-secondary;
      padding: 0.9375rem 1.25rem 1.25rem;

      @screen sm {
        padding: 1.5625rem 2.1875rem 2.1875rem;
      }

      @screen md {
        padding: 2.1875rem 2.8125rem 2.8125rem;
      }

      @screen xl {
        padding: 3.4375rem 4.0625rem 4.0625rem;
      }

      p {
        @apply text-white pt-2 pb-0;
        margin-bottom: 0.9375rem;
        &:last-child {
          @apply mb-0;
        }
      }
    }
  }
}
</style>