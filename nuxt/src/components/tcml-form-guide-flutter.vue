<template>
  <div class="relative form-content y-space-60 rxsection-b-space">
    <div class="container">
      <div class="row">
        <div
          class="flex-grow w-full px-4 flex-base-0 customHeight"
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
        >
          <div
            class="circle_list list_sm"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
        <div class="flex-initial w-full px-4 smd:w-auto mt-4">
          <div class="white_guide_form-wrapper">
            <div id="crmWebToEntityForm" class="white_guide_form-main">
              <form
                @submit.prevent="recaptcha"
                action="https://crm.zoho.com/crm/WebToLeadForm"
                name="WebToLeads2404939000114865062"
                id="WebToLeads2404939000114865062"
                method="POST"
                accept-charset="UTF-8"
              >
                <input
                  type="text"
                  style="display: none"
                  name="xnQsjsdp"
                  value="d7e7f1c4eee964f4c8d101542b9bac94903228b407d7fc834686355f5ac645de"
                />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input
                  type="text"
                  style="display: none"
                  name="xmIwtLD"
                  value="2d55eed370387cca922cd89738132b2cea1dbbc78818a9b6e6c059f84b63373f"
                />
                <input
                  type="text"
                  style="display: none"
                  name="actionType"
                  value="TGVhZHM="
                />
                <input
                  type="text"
                  style="display: none"
                  name="returnURL"
                  value="http&#x3a;//radixweb.com/whitepapers-thankyou?whitpaper=Flutter-Approach-Whitepaper"
                />
                <div class="white_guide_form">
                  <h2
                    class="
                      mb-4
                      text-center
                      h3
                      text-themedark-0
                      dark:text-themedark-0
                    "
                    v-for="item in data.TitleContentMediaList"
                    :key="item.id"
                  >
                    {{ item.Title }}
                  </h2>
                  <div class="form-group form-group-name">
                    <label class="hidden sr-only">Last Name</label>
                    <input
                      type="text"
                      v-model.trim="LastName"
                      maxlength="80"
                      placeholder="Name"
                      name="Last Name"
                      class="dark:text-themedark-0"
                      @blur.native="v$.LastName.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.LastName.$errors.length !== 0">
                        {{ v$.LastName.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group form-group-email">
                    <label class="sr-only">Email</label>
                    <input
                      v-model.trim="Email"
                      type="text"
                      placeholder="Email"
                      id="email"
                      maxlength="100"
                      name="Email"
                      class="dark:text-themedark-0"
                      @blur.native="v$.Email.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Email.$errors.length !== 0">
                        {{ v$.Email.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group form-group-phone">
                    <label class="sr-only">Company</label>
                    <input
                      type="text"
                      v-model.trim="Company"
                      placeholder="Company"
                      maxlength="100"
                      name="Company"
                      class="dark:text-themedark-0"
                      @blur.native="v$.Company.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Company.$errors.length !== 0">
                        {{ v$.Company.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                  <div
                    class="
                      flex
                      items-center
                      form-group form-group-checkbox
                      custom-checkbox
                    "
                  >
                    <input
                      type="checkbox"
                      name="LEADCF109"
                      class="custom-control-input"
                      id="customCheck-white"
                      v-model.trim="LEADCF109"
                    />
                    <label
                      class="custom-control-label text-themedark-0"
                      for="customCheck-white"
                    >
                      I want to receive updates once in a while
                    </label>
                  </div>
                  <div class="pt-4 form-group frmdownload">
                    <div
                      class="
                        py-4
                        my-2
                        font-bold
                        text-center text-red-800
                        border border-red-800
                        dark:text-white dark:border-white
                      "
                      v-if="submitted && errorMessage"
                    >
                      {{ errorMessage }}
                    </div>
                    <button
                      id="formsubmit"
                      type="submit"
                      class="w-full cursor-pointer btn btn-primary"
                      title="Download Now"
                    >
                      Download Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import axios from "axios";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { getUri } from "../utils/api-request";
import { load } from "recaptcha-v3";
export default {
  props: {
    data: Object,
    url: Object,
  },
  // created() {
  //   this.$root.$on("", (attachmentURL) => {
  //     this.pdfURL = attachmentURL;
  //   });
  //   console.log("params :" + this.$route.params.attachmentURL);
  // },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      pdfURL: "",
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },

      submitted: false,
      xnQsjsdp:
        "d7e7f1c4eee964f4c8d101542b9bac94903228b407d7fc834686355f5ac645de",
      zc_gad: "",
      xmIwtLD:
        "2d55eed370387cca922cd89738132b2cea1dbbc78818a9b6e6c059f84b63373f",
      actionType: "TGVhZHM=",
      returnURL:
        "http&#x3a;//radixweb.com/whitepapers-thankyou?whitpaper=Flutter-Approach-Whitepaper",
      ldeskuid: "",
      LDTuvid: "radixweb.com",
      LeadSource: "WebSite Visit",
      LeadStatus: "Nurturing",
      LastName: "",
      Company: "",
      Email: "",
      eo: "14f4ec16431e0686150daa43f3210513",
      te: "true",
      LEADCF122: "Create a Robust Flutter App with Industry Experts",
      LEADCF123:
        "https://d2ms8rpfqc4h24.cloudfront.net/Flutter_Ebook_74e87358cb.pdf",
      LEADCF2: "White Paper",
      LEADCF4: "",
      LEADCF7: "",
      LEADCF8: "",
      LEADCF9: "",
      LEADCF10: "",
      LEADCF124: "Create a Robust Flutter App with Industry Experts",
      LEADCF125:
        "https://d2ms8rpfqc4h24.cloudfront.net/Flutter_Ebook_74e87358cb.pdf",
      LEADCF11: "",
      LEADCF12: "",
      LEADCF13: "",
      LEADCF14: "",
      LEADCF16: "",
      LEADCF20: "",
      LEADCF23: "Custom Sales",
      LEADCF109: "",
      enterdigest: "",
      errorMessage: "",
    };
  },
  validations: {
    LastName: {
      required: helpers.withMessage("This field is required", required),
      minLength: helpers.withMessage(
        "Full name must be 3 character long",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "Full name must not be 50 character long",
        maxLength(50)
      ),
    },
    Company: {},
    Email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Please Enter correct Email Id.", email),
    },
  },
  mounted: function () {
    fetch("https://jsonip.com/?callback=").then(async (response) => {
      var data = await response.json();
      var x = data.ip;
      this.LEADCF12 = x;
    });
  },
  methods: {
    async recaptcha() {
      try {
        this.submitted = true;
        this.v$.$touch();
        if (this.v$.$invalid) {
          return;
        } else {
          const recaptcha = await load(import.meta.env.VITE_GOOGLE_SITEKEY, {
            useRecaptchaNet: true,
            autoHideBadge: true,
          });
          const token = await recaptcha.execute("login");
          var JOBS_POST = getUri(`jobs/validate-captcha?token=${token}`);
          const captchaResponse = await axios.get(JOBS_POST);
          if (captchaResponse.data.success) {
            this.submitToZoho();
          } else {
            this.errorMessage = "Are you a robot?";
          }
        }
      } catch (error) {
        this.errorMessage = "Are you a robot?";
      }
    },
    async submitToZoho() {
      try {
        var bodyFormData = new FormData();
        bodyFormData.append("xnQsjsdp", this.xnQsjsdp);
        bodyFormData.append("zc_gad", this.zc_gad);
        bodyFormData.append("xmIwtLD", this.xmIwtLD);
        bodyFormData.append("actionType", this.actionType);
        bodyFormData.append("returnURL", this.returnURL);
        bodyFormData.append("Last Name", this.LastName);
        bodyFormData.append("Email", this.Email);
        bodyFormData.append("Company", this.Company);
        bodyFormData.append("LEADCF12", this.LEADCF12);
        bodyFormData.append("Lead Source", this.LeadSource);
        bodyFormData.append("LEADCF2", this.LEADCF2);
        bodyFormData.append("Lead Status", this.LeadStatus);
        bodyFormData.append("LEADCF7", this.LEADCF7);
        bodyFormData.append("LEADCF4", this.LEADCF4);
        bodyFormData.append("LEADCF13", this.LEADCF13);
        bodyFormData.append("LEADCF11", this.LEADCF11);
        bodyFormData.append("LEADCF10", this.LEADCF10);
        bodyFormData.append("LEADCF8", this.LEADCF8);

        bodyFormData.append("LEADCF23", this.LEADCF23);
        bodyFormData.append("LEADCF109", this.LEADCF109);
        bodyFormData.append("LEADCF124", this.LEADCF124);
        bodyFormData.append("LEADCF125", this.LEADCF125);

        bodyFormData.append("LEADCF123", this.LEADCF123);
        bodyFormData.append("LEADCF122", this.LEADCF122);

        bodyFormData.append("eo", this.eo);
        bodyFormData.append("te", this.te);

        let self = this;
        const response = await axios({
          method: "post",
          url: "https://crm.zoho.com/crm/WebToLeadForm",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
          processData: false,
          contentType: false,
        });
        const status = response.status;
        if (status == "200") {
          if (response.data.search("history.back()") !== -1) {
            this.errorMessage = "Something went wrong! try again later";
          } else if (response.data.search("location.assign") !== -1) {
            this.errorMessage = "";
            //add a feature in tez.js
            self.$tezRouter.push({
              path: "/guides-thankyou",
              query: { guide: "mobile-app-using-flutter" },
            });
          }
        }
      } catch (error) {
        // console.log("zoho submission error", error);
      }
    },
  },
};
</script>
<style lang="scss">
@layer components {
  .form-content {
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    .flex-base-0 {
      flex-basis: 0;
    }
    .customHeight {
      @screen md {
        min-height: unset;
      }
      min-height: 49.125rem;
    }

    .white_guide_form-wrapper {
      margin-bottom: 5.1875rem;
      max-width: 25.75rem;
      .white_guide_form-main {
        @apply bg-themelight-0;
        padding: 1.5625rem 1.875rem 2.5rem;
        @screen smd {
          margin-top: -44%;
        }
        filter: drop-shadow(3.277px 2.294px 10px rgba(0, 0, 0, 0.1));
        .form-group-name input {
          @apply bg-themelight-0;
          background: url("https://d2ms8rpfqc4h24.cloudfront.net/download_1_5ae271efd4.png")
            no-repeat 17px center;
        }
        .form-group-email input {
          @apply bg-themelight-0;
          background: url("https://d2ms8rpfqc4h24.cloudfront.net/download_2_3aeb9c672e.png")
            no-repeat 17px center;
        }
        .form-group-phone input {
          @apply bg-themelight-0;
          background: url("https://d2ms8rpfqc4h24.cloudfront.net/download_3_3f508fd1b8.png")
            no-repeat 17px center;
        }
        input:not([type="submit"]) {
          width: 100%;
          border-radius: 0.25rem;
          border: 1px solid #d7d7d7;
          height: 3rem;
          padding-left: 3rem;
          font-size: 1rem;
          transition: all 0.3s;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group-checkbox {
          label {
            font-size: 0.9rem;
            letter-spacing: 0rem;
            line-height: 1.5rem;
            margin-bottom: 0;
            font-family: "poppins-light", sans-serif;
            padding-left: 1.2rem;

            user-select: none;
            cursor: pointer;
          }
          input[type="checkbox"] {
            width: 1.5rem;
            height: 1.5rem;

            &:checked ~ .custom-control-label:before {
              border-color: #31bbae;
              background-color: #31bbae;
            }
            &.custom-control-label:after {
              position: absolute;
              top: 0;
              left: 0;
              display: block;
              width: 1.5rem;
              height: 1.5rem;
              content: "";
              background: no-repeat 50%/50% 50%;
            }
            &.custom-control-label:before {
              border-radius: 0.25rem;
            }
          }
          input[type="submit"] {
            @apply w-full;
          }
        }
      }
    }
  }
}
</style>
