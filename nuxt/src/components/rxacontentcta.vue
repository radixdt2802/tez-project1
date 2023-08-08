<template>
   <div class="rx_contentcta rxsection-y-space" id="scroll">
    <div class="container">
      <div class="row">
        <div class=" lg:w-7/12 w-full px-4">
          <div class="text-left h2 text-rxa-gray w-11/12">{{ data.Title }}</div>
        </div>
      </div>
      <div class="row">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="para_sm mb-4 md:mb-6 text-rxa-gray"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <div
            class="btn rxa_btn_sm btn-4col flex lg:justify-start justify-center lg:my-0 my-4"
            v-html="$md.render(data.CTA ? data.CTA : '')"
          ></div>
        </div>
        <div class="w-full agile-box px-4 lg:w-6/12">
          <div
            class="border-solid
              blockquote-box-inner
              lg:ml-4
              lg:mt-4
              border-rxa-graycc
              p-4
              md:p-8
              lg:px-16 lg:py-8
              xl:p-16
              text-rxa-gray
              relative
              mt-4 md:mt-6 sxl:mt-0
            "
          >
            <div class="text-rxa-gray blockquote h3_sm"  v-html="$md.render(data.ShortText ? data.ShortText : '')">
            </div>
            <div class="blockQuote-name text-rxa-gray para_md_semib pt-3 smd:pt-5" v-if="data.SubTitle">
                - {{data.SubTitle}}
            </div>
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
}
</script>

<style  lang="scss">
@layer utilities {
  .rx_contentcta {
    .h3_sm{
      p{
        font-weight:normal !important;
      }
    }
    p {
      @apply text-rxa-gray;
    }
    .blockquote-box-inner {
        border-width: 0.025rem;
        .blockquote {
          p {
            @media (min-width: 767px) {
              font-size: 1.5rem;
              line-height: 2.5rem;
              padding-top: 0px;
            }
            @media (min-width: 1200px) {
              font-size: 2.25rem;
              line-height: 2.875rem;
            }
          }
        }
        &::before {
            content: ' ';
            position: absolute;
            left: 1.75rem;
            background: linear-gradient(0deg, #4ef1e0 0%, #413778 100%);
            width: 6px;
            @media(min-width: 1025px) {
              height: calc(100% - 4rem);
              top: 2rem;
            }
            @media(min-width: 1371px) {
              height: calc(100% - 8rem);
              top: 4rem;
              
            }
        }
    }  
  }
}
</style>