<template>
  <div class="rxsection-y-space emailsection">
    <div class="container">
      <div class="row emailbox">
        <p class="footer-newsletter-subtitle">
          Want to stay on top of technology trends?
        </p>
        <div class="h2">
          Get top Insights and news from our technology experts.
        </div>
        <p class="footer-newsletter-subtitle">
          Delivered to you monthly, straight to your inbox.
        </p>
        <div class="emailtype flex flex-wrap justify-center w-full relative">
          <!-- <form id="zcampaignOptinForm" @submit.prevent="submitNewsletter"> -->
            <form method="POST" id="zcampaignOptinForm" style="margin: 0px; width: 100%" action="https://maillist-manage.com/weboptin.zc" target="_zcSignup">
            <div class="SIGNUP_FLD mailpoet_paragraph">
              <input
                type="email"
                class="mailpoet_text"
                placeholder="Email"
                changeitem="SIGNUP_FORM_FIELD"
                name="CONTACT_EMAIL"
                id="EMBED_FORM_EMAIL_LABEL"
                required
              />
                <!-- @blur.native="v$.CONTACT_EMAIL.$touch()" -->
            </div>
            <!-- <div class="error text-center absolute right-0 left-0">
              <span class="py-4" v-if="v$.CONTACT_EMAIL.$errors.length !== 0">
                {{ v$.CONTACT_EMAIL.$errors[0].$message }}
              </span>
            </div> -->
            <div class="SIGNUP_FLD mailpoet_paragraph last">
              <input
                type="submit"
                name="SIGNUP_SUBMIT_BUTTON"
                id="zcWebOptin"
                value="Join Now"
                class="mailpoet_submit"
              />
            </div>
            <input type="hidden" id="fieldBorder" value="" />
            <input
              type="hidden"
              id="submitType"
              name="submitType"
              value="optinCustomView"
            />
            <input
              type="hidden"
              id="emailReportId"
              name="emailReportId"
              value=""
            />
            <input
              type="hidden"
              id="formType"
              name="formType"
              value="QuickForm"
            />
            <input type="hidden" name="zx" id="cmpZuid" value="12677ee0a" />
            <input type="hidden" name="zcvers" value="3.0" />
            <input
              type="hidden"
              name="oldListIds"
              id="allCheckedListIds"
              value=""
            />
            <input
              type="hidden"
              id="mode"
              name="mode"
              value="OptinCreateView"
            />
            <input
              type="hidden"
              id="zcld"
              name="zcld"
              value="13c0f3c3d32f6e1b"
            />
            <input
              type="hidden"
              id="zctd"
              name="zctd"
              value="13c0f3c3d32f7150"
            />
            <input type="hidden" id="document_domain" value="" />
            <input type="hidden" id="zc_Url" value="xweb.maillist-manage.com" />
            <input type="hidden" id="new_optin_response_in" value="0" />
            <input type="hidden" id="duplicate_optin_response_in" value="0" />
            <input
              type="hidden"
              name="zc_trackCode"
              id="zc_trackCode"
              value="ZCFORMVIEW"
            />
            <input
              type="hidden"
              id="zc_formIx"
              name="zc_formIx"
              value="3z9b30ca5a8d3d7d6611063f90c9d0eb8a910a394139d0d23cdb1eb0b0d86111ec"
            />
            <input type="hidden" id="viewFrom" value="URL_ACTION" />
            <input
              type="hidden"
              id="scriptless"
              name="scriptless"
              value="yes"
            />
          </form>
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
  .emailsection {
    background: url("https://d2ms8rpfqc4h24.cloudfront.net/newsletter_bg_45e419bc6e.png")
      #31bbae;
    @apply bg-no-repeat bg-cover;

    .footer-newsletter-subtitle {
      @apply text-center text-white w-full overflow-hidden py-4;
    }
    .emailbox {
      padding: 0 0.938rem;
    }
    div.h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      margin-bottom: 0.688rem;
      @apply text-center text-white w-full p-0;
      @screen sm {
        font-size: 1.625rem;
      }
      @screen smd {
        font-size: 1.875rem;
      }
    }
    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
      margin-bottom: 0.75rem;
      @screen sm {
        font-size: 1rem;
      }
      @screen smd {
        font-size: 1.25rem;
      }
      @apply p-0;
    }
    .emailtype {
      margin-top: 0.625rem;
      @screen md {
        flex-wrap: nowrap;
      }
      // @screen smd {
      //   margin-top: 2.5rem;
      // }
      /* @apply md{
                    margin-top: 2.5rem;
                } */
      .mailpoet_paragraph {
        @apply flex justify-center w-full;
        @screen md {
          width: auto;
        }
        .mailpoet_text {
          @apply m-0 w-full  text-themedark-0 bg-no-repeat box-border border-2 border-solid border-white font-poppins mb-8;
          background-position: left 1.25rem center;
          padding: 0.625rem 1.563rem 0.625rem 3.438rem;
          font-size: 1rem;
          border-radius: 3.125rem;
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/email_newsletter_d9cd363828.svg");
          background-size: 1.25rem;
          /* overflow: visible; */

          @screen md {
            width: 22.5rem;
            padding: 0.625rem 1.563rem 0.625rem 3.438rem;
            min-height: 3.5rem;
          }
        }
      }
      .error{
        top:43%;
      }
      input.mailpoet_text:focus-visible {
        @apply outline-none;
      }
      .mailpoet_submit {
        @apply font-poppins bg-transparent text-themelight-0;

        font-size: 1rem;
        border: 0.094rem solid #ffffff;
        padding: 0.188rem 1.938rem;
        border-radius: 3.125rem;
        letter-spacing: 0.01rem;
        height: 2.5rem;
        transition: 0.3s ease all;
        margin: 0 0.625rem;
        max-width: 100%;
        &:hover {
          @apply bg-themelight-0 text-primary;
        }
        @screen md {
          min-height: 3.5rem;
        }
      }
    }
  }
}
</style>
