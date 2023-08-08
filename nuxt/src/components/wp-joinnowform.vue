<template>
  <div class="rxsection-y-space wp-joinnowform text-center">
    <div class="container">
      <p>{{ data.SubTitle }}</p>
      <h2 class="mx-auto pt-6 pb-10">{{ data.Title }}</h2>
      <div class="pb-8" v-if="data.ShortText" v-rxhtml="data.ShortText"></div>
      <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      <div
        id="mailpoet_form_2"
        class="mailpoet_form mailpoet_form_shortcode mailpoet_form_position_ mailpoet_form_animation_"
      >
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
          <!-- <div class="error block text-center">
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
              class="btn max-w-xs block w-full sm:mt-10 mt-8"
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
          <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
          <input type="hidden" id="zcld" name="zcld" value="13c0f3c3d32f6e1b" />
          <input type="hidden" id="zctd" name="zctd" value="13c0f3c3d32f7150" />
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
          <input type="hidden" id="scriptless" name="scriptless" value="yes" />
        </form>
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
  .wp-joinnowform {
    h2 {
      max-width: 55.625rem;
    }
    input:not([type="submit"]) {
      &::placeholder {
        @apply text-themedark-10 dark:text-themelight-10;
      }
      @apply text-base font-poppins relative border border-solid dark:border-themedark-65 rounded-md w-full bg-no-repeat mx-auto outline-none dark:bg-themedark-70;
      padding: 0.75rem 0 0.75rem 3.4375rem;
      height: 2.875rem;
      line-height: 4.25rem;
      background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/email_eb4263548e.svg");
      background-size: 1.5rem;
      background-position: 0.9375rem 0.6875rem;
      max-width: 40.625rem;
    }
  }
}
</style>
