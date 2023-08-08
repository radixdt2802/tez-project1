<template>
  <div>
    <div
      class="text-center csd-banner xsm:text-left"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      v-bind:style="[
        item.BGImage
          ? { backgroundImage: 'url(' + item.BGImage.url + ')' }
          : '',
      ]"
      :class="[item.BGImage ? '' : 'bg-secondary']"
    >
      <div class="container">
        <div class="items-center row">
          <div class="w-full px-4 sxl:w-7/12 smd:w-1/2">
            <div class="head-content banner-dashed">
              <h1>{{ item.Title }}</h1>
              <div
                class="contentWhite list_md"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
          <div
            class="
              relative
              w-full
              mt-5
              sxl:w-5/12
              smd:w-1/2 smd:px-4 smd:bg-transparent
              bg-themelight-10
              smd:mt-0
            "
          >
            <div class="form-block smd:bg-opacitybg-65 dark:bg-themedark-65">
              <h3 class="text-center">Get Free Consultation</h3>
              <form @submit.prevent="recaptcha">
                <div class="pt-3 form_row row justify-content-center">
                  <div class="w-full px-4 pb-5">
                    <label style="display: none" class="d-none">Name</label>
                    <input
                      type="text"
                      id="Last_Name"
                      name="Last Name"
                      maxlength="80"
                      placeholder="Name *"
                      v-model.trim="LastName"
                      @blur.native="v$.LastName.$touch()"
                    />
                    <div class="text-left text-black error">
                      <span v-if="v$.LastName.$errors.length !== 0">
                        {{ v$.LastName.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                  <div class="w-full px-4 pb-5">
                    <label style="display: none">Email</label>
                    <input
                      type="text"
                      ftype="email"
                      id="email_check"
                      name="Email"
                      maxlength="100"
                      placeholder="Email *"
                      v-model.trim="Email"
                      @blur.native="v$.Email.$touch()"
                    />
                    <div class="text-left text-black error">
                      <span v-if="v$.Email.$errors.length !== 0">
                        {{ v$.Email.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 pb-5">
                    <label style="display: none" class="d-none">Phone</label>
                    <input
                      type="text"
                      maxlength="30"
                      name="Phone"
                      placeholder="Phone"
                      v-model.trim="Phone"
                      @input="acceptNumber"
                      @blur.native="v$.Phone.$touch()"
                    />
                    <div class="text-left text-black error">
                      <span v-if="v$.Phone.$errors.length !== 0">
                        {{ v$.Phone.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 pb-5">
                    <label style="display: none" class="d-none"
                      >Brief your Requirement</label
                    >
                    <textarea
                      name="LEADCF14"
                      maxlength="2000"
                      placeholder="Brief your Requirement *"
                      v-model.trim="LEADCF14"
                      @blur.native="v$.LEADCF14.$touch()"
                    ></textarea>
                    <div class="text-left text-black error">
                      <span v-if="v$.LEADCF14.$errors.length !== 0">
                        {{ v$.LEADCF14.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 pt-0 pb-0 mb-5 formActions">
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
                      type="submit"
                      value="Submit"
                      class="w-full btn primary mt-4"
                    >
                      Submit
                    </button>
                    <input
                      class="d-none"
                      type="reset"
                      style="display: none"
                      value="Reset"
                    />
                  </div>
                </div>
              </form>
              <div
                class="
                  fixed
                  top-0
                  left-0
                  z-10
                  flex
                  items-center
                  justify-center
                  w-full
                  h-screen
                  customLoader
                  bg-opacitybg-35
                "
                v-if="isLoading"
              >
                <div
                  class="
                    w-12
                    h-12
                    border-4 border-t border-solid
                    rounded-full
                    animate-spin
                    border-primary
                  "
                ></div>
              </div>
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
  },
  data() {
    return {
      xnQsjsdp:
        "d7e7f1c4eee964f4c8d101542b9bac94903228b407d7fc834686355f5ac645de",
      zc_gad: "",
      xmIwtLD:
        "2d55eed370387cca922cd89738132b2cb6e1ed245437927c8158ff009e03fd71",
      actionType: "TGVhZHM=",
      returnURL: "http&#x3a;//radixweb.com/start/custom-software-thankyou",
      ldeskuid: "",
      LDTuvid: "radixweb.com",
      LeadSource: "WebSite Visit",
      LeadStatus: "Expression of Interest",
      LastName: "",
      Email: "",
      Phone: "",
      LEADCF2: "radixweb.com",
      LEADCF4: "",
      LEADCF7: "",
      LEADCF8: "",
      LEADCF9: "",
      LEADCF10: "",
      LEADCF11: "",
      LEADCF12: "",
      LEADCF13: "",
      LEADCF14: "",
      LEADCF20: "",
      LEADCF23: "Custom Sales",
      // enterdigest: "",
      errorMessage: "",
      invalidCaptcha: false,
      submitted: false,
      isLoading: false,
      buttonSubmitStatus: false,
    };
  },
  async created() {
    try {
      await load(import.meta.env.VITE_GOOGLE_SITEKEY, {});
    } catch (error) {
      // console.log(" form error", error);
    }
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
    // requirement validation
    LEADCF14: {
      required: helpers.withMessage("This field is required", required),
    },
    //Email validation
    Email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Please Enter correct Email Id.", email),
    },
    Phone: {
      // minLength: helpers.withMessage("enter only 10 numbers", minLength(10)),
      // maxLength: helpers.withMessage("enter only 10 numbers", maxLength(10)),
      alpha: helpers.withMessage(
        "enter only 10 numbers",
        helpers.regex(
          // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          /^\d{10}$/im
        )
      ),
      // numeric: helpers.withMessage("enter only numbers", numeric),
    },
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  mounted: function () {
    fetch("https://jsonip.com/?callback=").then(async (response) => {
      var data = await response.json();
      var x = data.ip;
      this.LEADCF12 = x;
    });
  },
  methods: {
    acceptNumber() {
      var x = this.Phone.replace(/\D/g, "").match(/(\d{0,5})(\d{0,5})/);
      this.Phone = !x[2] ? x[1] : x[1] + x[2] + (x[3] ? "-" + x[3] : "");
    },
    async recaptcha() {
      try {
        this.submitted = true;
        this.isLoading = true;
        this.v$.$touch();
        if (this.v$.$invalid) {
          this.isLoading = false;
          return;
        } else {
          // await this.$recaptchaLoaded();
          const recaptcha = await load(import.meta.env.VITE_GOOGLE_SITEKEY, {
            useRecaptchaNet: true,
            autoHideBadge: true,
          });
          // const token = await this.$recaptcha("login");
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
        this.isLoading = false;
        this.errorMessage = "Are you a robot?";
      }
    },
    reloadImg() {
      if (document.getElementById("imgid").src.indexOf("&d") !== -1) {
        document.getElementById("imgid").src =
          document
            .getElementById("imgid")
            .src.substring(
              0,
              document.getElementById("imgid").src.indexOf("&d")
            ) +
          "&d" +
          new Date().getTime();
      } else {
        document.getElementById("imgid").src =
          document.getElementById("imgid").src + "&d" + new Date().getTime();
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
        bodyFormData.append("ldeskuid", this.ldeskuid);
        bodyFormData.append("LDTuvid", this.LDTuvid);
        bodyFormData.append("Last Name", this.LastName);
        bodyFormData.append("Email", this.Email);

        bodyFormData.append("Phone", this.Phone);
        bodyFormData.append("LEADCF14", this.LEADCF14);

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
        bodyFormData.append("LEADCF9", this.LEADCF9);
        bodyFormData.append("LEADCF20", this.LEADCF20);
        bodyFormData.append("LEADCF23", this.LEADCF23);
        // bodyFormData.append("enterdigest", this.enterdigest);
        console.log(bodyFormData);
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
            // console.log("Something went wrong! form cannot be submitted");
            this.invalidCaptcha = true;
            this.errorMessage = "invalid captcha";
            this.reloadImg();
          } else if (response.data.search("location.assign") !== -1) {
            this.invalidCaptcha = false;
            this.errorMessage = "";
            // console.log("form submitted successfully");
            self.$tezRouter.push("/thankyou");
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
@layer utilities {
  .csd-banner {
    @apply text-themelight-0 relative bg-no-repeat bg-center bg-cover overflow-hidden flex items-center pt-20 smd:pb-16;
    &::before {
      @apply absolute top-0 left-0 w-full h-full block;
      background: rgba(15, 22, 40, 0.8);
      content: "";
    }
    .head-content {
      max-width: 32.5625rem;
      @apply relative smd:max-w-full mx-auto;
      p {
        @apply text-base p-0 text-themelight-0;
        line-height: 1.625rem;
        @screen md {
          @apply text-lg leading-7;
        }
        @screen sxl {
          @apply leading-8;
          font-size: 1.375rem;
        }
        @screen xl {
          font-size: 1.625rem;
          @apply leading-9;
        }
      }
    }
    .form-block {
      width: 31.3125rem;
      max-width: 100%;
      margin: 0 auto;
      padding: 2.1875rem 0.9375rem 0.9375rem;
      @screen xsm {
        padding: 2.1875rem 1.875rem 0.9375rem;
      }
      border-radius: 0.4375rem;
      text-align: center;
      .form_row {
        input,
        textarea {
          &::placeholder {
            color: #757575;
          }
        }
        input:not([type="submit"]),
        select,
        textarea,
        option {
          box-shadow: 0 0.125rem 0.3125rem 0 inset rgba(0, 0, 0, 0.13);
          border: 0.0625rem solid #ccc;
          color: #757575;
          height: 2.8125rem;
          @apply bg-themelight-0 rounded-lg py-3 px-4 text-sm w-full leading-5 outline-none;
        }
        textarea {
          min-height: 7.125rem;
        }
        input[type="submit"] {
          &.btn {
            @apply block w-full;
          }
        }
        select {
          background: url("https://d2ms8rpfqc4h24.cloudfront.net/download_7f974511fb.png")
            no-repeat right 0.9375rem center #fff;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-right: 1.6875rem;
        }
      }
      .captcha-field {
        @apply bg-themelight-10 border border-opacitybg-15 rounded-md p-2;
        .captcha_groupbtn {
          @apply flex items-center;
          input {
            max-width: 9.375rem;
          }
          button {
            @apply bg-transparent text-sm p-0 text-center mx-auto border-0;
            width: 1rem;
          }
        }
      }
    }
    .form-group {
      @apply relative;
      .error {
        @apply absolute top-100 text-sm text-primary;
        &#CaptchaerrorMsg {
          @apply left-4;
        }
      }
    }
  }
  .contentWhite ul {
    padding-top: 1.3125rem;
  }
  .banner-dashed li {
    position: relative;

    &:before {
      content: "";
      margin-right: 12px;
      width: 10px;
      height: 2px;
      background-color: #fff;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
