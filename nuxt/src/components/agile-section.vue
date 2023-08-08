<template>
  <div class="rxsection-t-space agile_Section"
    :class="[
        data.VueReferenceCode == 'Agile_Section_Bspace'
        ? 'rxsection-b-space'
        : '',

    ]"
  >
    <div class="container">
      <div class="row">
        <div class="heading lg:w-7/12 w-full px-4">
          <div class="text-left h2">{{ data.Title }}</div>
        </div>
      </div>
      <div class="row">
        <div class="w-full left-con lg:w-7/12 px-4">
          <div
            class="para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <div
            class="btn btn_sm btn-4col flex lg:justify-start justify-center lg:mb-0 mb-4"
            v-html="$md.render(data.CTA ? data.CTA : '')"
          ></div>
        </div>
        <div class="w-full agile-box px-4 lg:w-5/12">
          <div
            class="
              border-2 border-solid
              agile-box-inner
              smd:ml-4
              lg:mt-4
              smd:border-4
              border-primary
              dark:border-themedark-65 dark:bg-themedark-70
            "
          >
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                width="1280"
                height="720"
                enablejsapi="true"
                :src="data.GuideURL"
                frameborder="0"
                class="embed-responsive-item"
                rel="nofollow"
              ></iframe>
            </div>

            <!-- <p class="border-l-4 border-solid h3 border-primary">
              {{ data.CTA }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .agile_Section {
    .left-con {
      div.paramd {
        p:first-child {
          @apply pt-0;
        }
      }
      // a {
      //   @apply text-primary no-underline;
      //   &:hover {
      //     @apply text-primary;
      //   }
      // }
    }
    .agile-box {
      .agile-box-inner {
        // @screen smd {
        //   padding: 20px 20px;
        // }
        // p {
        //   padding: 0 0 0 20px;

        //   @screen sm {
        //     padding: 0 20px;
        //   }
        //   @screen smd {
        //     padding: 0 30px;
        //   }
        // }
      }
    }
  }
}
</style>