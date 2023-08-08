<template>
  <div class="rxsection-y-halfspace opening-page">
    <div class="container">
      <div class="md:row md:flex md:flex-wrap">
        <div class="w-full md:px-4 md:w-8/12">
          <div class="p-4 careerDtl_left CareerForm">
            <h1 class="pb-0 break-words dark:text-white">You're Just a Step Away from Awesomeness!</h1>
            <div
              class="
                py-4
                font-bold
                text-center text-red-800
                border border-red-800
                dark:text-white dark:border-white
              "
              v-if="submitted && errorMessage"
            >
              {{ errorMessage }}
            </div>

            <form
              action="https://crm.zoho.com/crm/WebForm"
              name="WebForm2404939000185091803"
              id="WebForm2404939000185091803"
              method="POST"
              enctype="multipart/form-data"
              accept-charset="UTF-8"
              @submit.prevent="recaptcha"
            >
              <!-- Do not remove this code. -->
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
                value="2d55eed370387cca922cd89738132b2c860410bd2b3440ba519a2c383182f68b"
              />
              <input
                type="text"
                style="display: none"
                name="actionType"
                value="Q3VzdG9tTW9kdWxlNA=="
              />
              <input
                type="text"
                style="display: none"
                name="returnURL"
                :value="
                  'https&#x3a;&#x2f;&#x2f;radixweb.com&#x2f;careerform-thank-you?ref=' +
                  `${data.GuideURL}`
                "
              />
              <!-- Do not remove this code. -->
              <div class="rdx-form row">
                <div class="hidden w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="COBJ4CF2">Job Code</label>
                  <input
                    id="COBJ4CF2"
                    type="text"
                    maxlength="255"
                    v-model.trim="JobCode"
                    class="form-control"
                    name="COBJ4CF2"
                    readonly
                  />
                  <div class="error">
                    <span v-if="v$.JobCode.$errors.length !== 0">
                      {{ v$.JobCode.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="hidden w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="COBJ4CF3">Job Title</label>
                  <input
                    type="text"
                    maxlength="255"
                    readonly
                    id="COBJ4CF3"
                    name="COBJ4CF3"
                    v-model.trim="JobTitle"
                    class="form-control"
                  />
                  <div class="error">
                    <span v-if="v$.JobTitle.$errors.length !== 0">
                      {{ v$.JobTitle.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="NAME">
                    Full Name
                    <span class="font-bold"> * </span>
                  </label>
                  <input
                    type="text"
                    maxlength="120"
                    id="NAME"
                    name="NAME"
                    v-model.trim="FullName"
                    @blur.native="v$.FullName.$touch()"
                    class="form-control"
                    @focus="setFname = true"
                    @blur="setFname = false"
                  />
                  <div class="error">
                    <span v-if="v$.FullName.$errors.length !== 0">
                      {{ v$.FullName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="Email">
                    Email ID
                    <span class="font-bold"> * </span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    v-model.trim="Email"
                    @blur.native="v$.Email.$touch()"
                    class="form-control"
                    @focus="setEmail = true"
                    @blur="setEmail = false"
                  />
                  <div class="error">
                    <span v-if="v$.Email.$errors.length !== 0">
                      {{ v$.Email.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="COBJ4CF4">
                    Contact Number
                    <span class="font-bold"> * </span>
                  </label>
                  <div class="relative flex items-center">
                    <span class="absolute pt-2 pl-1 placeholder">+91-</span>
                    <input
                      type="tel"
                      maxlength="10"
                      id="COBJ4CF4"
                      name="COBJ4CF4"
                      v-model.trim="Phone"
                      class="form-control"
                      @blur.native="v$.Phone.$touch()"
                      @input="acceptNumber"
                      :style="{ paddingLeft: '42px' }"
                      @focus="(setPlaceholder = true), (setContactNum = true)"
                      @blur="
                        () => {
                          if (Phone.length == 10) {
                            setPlaceholder = true;
                          } else {
                            setPlaceholder = false;
                          }
                          setContactNum = false;
                        }
                      "
                    />
                  </div>
                  <div class="error">
                    <span v-if="v$.Phone.$errors.length !== 0">
                      {{ v$.Phone.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="COBJ4CF5">
                    State<span class="font-bold"> * </span>
                  </label>

                  <select
                    id="COBJ4CF5"
                    name="COBJ4CF5"
                    v-model.trim="State"
                    @blur.native="v$.State.$touch()"
                    @change="getCity"
                  >
                    <option value="">Select Your State</option>
                    <option
                      v-for="item in array"
                      :key="item.name"
                      :value="item.name"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="error">
                    <span v-if="v$.State.$errors.length !== 0">
                      {{ v$.State.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="COBJ4CF6">
                    City<span class="font-bold"> * </span>
                  </label>

                  <select id="COBJ4CF6" name="COBJ4CF6" v-model.trim="City">
                    <option value="">Select Your City</option>
                    <template v-if="cityArray.length > 0">
                      <option
                        v-for="item in cityArray"
                        :key="item"
                        :value="item"
                      >
                        {{ item }}
                      </option>
                    </template>
                  </select>
                  <div class="error">
                    <span v-if="v$.City.$errors.length !== 0">
                      {{ v$.City.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="hidden w-full px-4 form-group smd:w-1/2">
                  <label class="font-medium" for="COBJ4CF7"
                    >Turbohire Job Email</label
                  >
                  <input
                    type="text"
                    maxlength="80"
                    readonly
                    id="COBJ4CF7"
                    name="COBJ4CF7"
                    v-model.trim="TurboEmail"
                    class="form-control"
                  />
                  <div class="error">
                    <span v-if="v$.TurboEmail.$errors.length !== 0">
                      {{ v$.TurboEmail.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 mb-0 form-group">
                  <label class="font-medium" for="theFile">
                    Upload your CV<span class="font-bold"> * </span>
                  </label>
                  <input
                    type="file"
                    class="w-2/5 border-none form-control"
                    name="theFile"
                    id="theFile2404939000185091803"
                    @change="setCV"
                    accept=" .odt, .pdf, .doc, .docx, .rtf, .txt"
                  />
                  <div class="">
                    <span v-if="v$.CV.$errors.length !== 0">
                      {{ v$.CV.$errors[0].$message }}
                    </span>
                    <span v-if="filemessage.length > 0 && CV" class="">{{
                      filemessage
                    }}</span>
                  </div>

                  <p class="p-0">
                    Accepted file types: odt, pdf, doc, docx, rtf, txt. Max.file
                    size: 2 MB.
                  </p>
                </div>

                <div class="px-4 mb-0">
                  <div class="submitCntcWrap">
                    <div class="mb-0 text-center frmactns sm:text-left">
                      <button
                        type="submit"
                        value="Submit"
                        class="btn primary btn_md dark:text-themelight-0"
                        :class="submitting || v$.$invalid ? '' : ''"
                        :disabled="submitting || v$.$invalid"
                      >
                        {{ buttonSubmitText }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="w-full md:px-4 md:w-4/12 md:relative">
          <div
            class="
              relative
              careerDtl_right
              md:absolute md:h-full md:overflow-y-auto
            "
          >
            <h3 class="para_lg">Current Openings</h3>
            <currentOpeningSidebar
              :data="data['current-opening-sidebar'].data"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";
import currentOpeningSidebar from "./current-opening-sidebar.vue";
import { stateCityData } from "../../public/stateCityData";
import axios from "axios";

import useVuelidate from "@vuelidate/core";
import { getUri } from "../utils/api-request";
import { load } from "recaptcha-v3";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  components: {
    currentOpeningSidebar,
  },
  data() {
    return {
      xnQsjsdp:
        "d7e7f1c4eee964f4c8d101542b9bac94903228b407d7fc834686355f5ac645de",
      zc_gad: "",
      xmIwtLD:
        "2d55eed370387cca922cd89738132b2c860410bd2b3440ba519a2c383182f68b",
      actionType: "Q3VzdG9tTW9kdWxlNA==",
      returnURL: "/careerform-thank-you?ref=" + this.data.GuideURL,
      ldeskuid: "",
      LDTuvid: "",
      FullName: "",
      JobTitle: "Common CareerForm",
      JobCode: "commoncareerform",
      Email: "",
      Phone: "",
      State: "",
      City: "",
      CV: "",
      TurboEmail: "job-0f331ffe-30ca-4095-b8d4-8b6a92a02609-0@inbound.justdropyourcv.in",
      submitted: false,
      errorMessage: "",

      fbIcon: "https://d2ms8rpfqc4h24.cloudfront.net/fb_teal_db75df1a37.svg",
      darkFbIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/dark_fb_b33e1af23f.svg",
      twitterIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/twit_teal_62ae09f150.svg",
      darkTwitterIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/dark_twit_fa0ce3d0bc.svg",
      linkedinIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/lnk_teal_e228e7d9cd.svg",
      darkLinkedinIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/dark_lnkd_d36efd43cc.svg",
      cityArray: [],
      prevState: "",
      filemessage: "",
      setPlaceholder: false,
      setFname: false,
      setEmail: false,
      setContactNum: false,
      errorMessage: false,
      array: stateCityData,
      buttonSubmitText: "Submit",
      submitting: false,
    };
  },
  mounted() {
    window.location.search;
  },
  async created() {
    try {
      // let { job_code, emailid, subject } = this.$tezRoute.queryparams;
      let job_code = this.JobCode;
      let emailid = this.TurboEmail;
      let subject = this.JobTitle;
      console.log(job_code);
      console.log(emailid);
      console.log(subject);

      this.JobCode = job_code || "";
      this.JobTitle = subject || "";
      this.TurboEmail = emailid || "";
      await load(import.meta.env.VITE_GOOGLE_SITEKEY, {
        // useRecaptchaNet: true,
        // autoHideBadge: true,
      });
    } catch (error) {
      console.log("career form error", error);
    }
  },
  validations: {
    FullName: {
      required: helpers.withMessage("This field is required", required),
      minLength: helpers.withMessage(
        "Full name must be 3 charatcter long",
        minLength(3)
      ),
      maxLength: maxLength(50),
    },
    JobTitle: { required },
    JobCode: { required },
    State: {
      required: helpers.withMessage("This field is required", required),
    },
    City: { required: helpers.withMessage("This field is required", required) },
    Email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Please Enter correct Email Id.", email),
    },
    Phone: {
      // minLength: helpers.withMessage("enter only 10 numbers", minLength(10)),
      // maxLength: helpers.withMessage("enter only 10 numbers", maxLength(10)),
      required: helpers.withMessage("This field is required", required),
      alpha: helpers.withMessage(
        "enter only 10 numbers",
        helpers.regex(
          // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          /^\d{10}$/im
        )
      ),
      // numeric: helpers.withMessage("enter only numbers", numeric),
    },
    CV: {
      required: helpers.withMessage("This field is required", required),
    },
    filemessage: {
      maxLength: maxLength(0),
    },
    TurboEmail: {
      required: helpers.withMessage("This field is required", required),
    },
  },
  methods: {
    getQueryParam(name) {
      var queryString = window.location.search;
      var value = "";
      var pairs = (
        queryString[0] === "?" ? queryString.substr(1) : queryString
      ).split("&");
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        var key = decodeURIComponent(pair[0].toString());
        if (key == name) {
          value = decodeURIComponent(pair[1] || "");
          break;
        }
      }
      return value;
    },
    acceptNumber() {
      var x = this.Phone.replace(/\D/g, "").match(/(\d{0,5})(\d{0,5})/);
      this.Phone = !x[2] ? x[1] : x[1] + x[2] + (x[3] ? "-" + x[3] : "");
    },
    async recaptcha() {
      try {
        this.submitted = true;
        this.v$.$touch();
        this.submitting = true;
        if (this.v$.$invalid) {
          this.submitting = false;
          return;
        } else {
          // await this.$recaptchaLoaded();
          const recaptcha = await load(import.meta.env.VITE_GOOGLE_SITEKEY, {
            // useRecaptchaNet: true,
            // autoHideBadge: true,
          });
          // const token = await this.$recaptcha("login");
          const token = await recaptcha.execute("login");

          var JOBS_POST = getUri(`jobs/validate-captcha?token=${token}`);
          const captchaResponse = await axios.get(JOBS_POST);
          if (captchaResponse.data.success) {
            this.submitForm();
          } else {
            this.submitting = false;
            this.errorMessage = "Are you a robot?";
          }
        }
      } catch (error) {
        this.submitting = false;
        this.errorMessage = "Are you a robot?";
      }
    },
    async submitForm() {
      try {
        var JOBS_POST = getUri("jobs");
        const formData = new FormData();
        formData.append("11", this.$data.CV);
        const sendMailWithAttachment = await axios.post(JOBS_POST, formData, {
          params: {
            FullName: this.$data.FullName,
            JobTitle: this.$data.JobTitle,
            JobCode: this.$data.JobCode,
            State: this.$data.State,
            City: this.$data.City,
            Email: this.$data.Email,
            Phone: this.$data.Phone,
            TurboEmail: this.$data.TurboEmail,
            ToEmail: "",
          },
        });
        // await this.submitToZoho();

        if (sendMailWithAttachment.status === 200) {
          this.submitting = false;
          document.getElementById("WebForm2404939000185091803").submit();
          // console.log("mail sent successfully", sendMailWithAttachment.data);
        }
      } catch (error) {
        this.submitting = false;
        // console.log("Form submit error:", error);
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
        bodyFormData.append("COBJ4CF2", this.JobCode);
        bodyFormData.append("COBJ4CF3", this.JobTitle);
        bodyFormData.append("Name", this.FullName);
        bodyFormData.append("Email", this.Email);
        bodyFormData.append("COBJ4CF4", this.Phone);
        bodyFormData.append("COBJ4CF5", this.State);
        bodyFormData.append("COBJ4CF6", this.City);
        bodyFormData.append("theFile", this.CV);
        bodyFormData.append("COBJ4CF7", this.TurboEmail);

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
            this.errorMessage = "invalid captcha";
          } else if (response.data.search("location.assign") !== -1) {
            this.errorMessage = "";
            // console.log("form submitted successfully");
            self.$tezRouter.push({
              path: "/careerform-thank-you",
              query: { ref: this.data.GuideURL },
            });
          }
        }
      } catch (error) {
        // console.log("zoho submission error", error);
      }
    },
    setCV(e) {
      if (e.target.files) {
        this.filemessage = "";
        this.CV = e.target.files[0] || "";
        // console.log(e.target.files[0]);

        if (this.CV != "") {
          var extFile = this.CV.name.split(".")[1];

          if (
            extFile == "pdf" ||
            extFile == "odt" ||
            extFile == "doc" ||
            extFile == "docx" ||
            extFile == "rtf" ||
            extFile == "txt"
          ) {
            const fsize = this.CV.size;
            const file = Math.round(fsize / 1024);
            if (file > 2 * 1024) {
              this.filemessage = `${this.CV.name} - File exceeds size limit`;
            } else {
              this.filemessage = "";
              this.CV = e.target.files[0];
            }
          } else {
            this.filemessage = "The uploaded file type is not allowed.";
          }
        }
      }
    },
    getCity: function () {
      this.City = "";
      if (this.State == "") {
        this.cityArray = [];
      } else {
        this.array.map((item) => {
          if (item.name == this.State) {
            this.cityArray = item.city;
          }
        });
      }
    },
    Capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    },
  },
  props: {
    data: Object,
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .dark {
    .darkIcon {
      @apply block;
    }
    .lightIcon {
      @apply hidden;
    }
  }
  .darkIcon {
    @apply hidden;
  }
  .lightIcon {
    @apply block;
  }
  .opening-page {
    @screen smd {
      margin-top: -2rem;
    }
    @screen sxl {
      @apply mt-0;
    }
    .CareerForm {
      h3 {
        padding-bottom: 0rem;
        font-size: 1.25rem;
      }
      .rdx-form {
        margin-top: 1.875rem;
        .form-group {
          @apply mb-8 relative;
        }
        select {
          @apply appearance-none bg-no-repeat bg-center bg-themelight-0;
          background-image: url(https://d2ms8rpfqc4h24.cloudfront.net/down_grey_1330c18ec1.svg);
          background-position: center right 1.25rem;
          background-size: 0.9375rem;
        }
        label {
          @apply dark:text-themedark-75;
        }
        input,
        select,
        textarea {
          @apply w-full text-base leading-5 mt-2 text-themedark-65 rounded-md border border-opacitybg-15 py-3 px-4 inline-block outline-none focus:border-black;
        }
        ::-webkit-input-placeholder {
          @apply text-themedark-65;
        }
        textarea {
          height: 4.375rem;
          @screen sm {
            height: 9.375rem;
          }
        }
      }
      input[type="submit"] {
        @apply md:text-2xl sm:leading-8 text-base sm:text-lg leading-7 border border-primary bg-primary text-white rounded-xl px-6 py-2 smd:px-8 md:py-3 transition-all ease-in-out duration-75 inline-block sm:w-auto w-full cursor-pointer;
      }
      input[type="file"] {
        @apply dark:text-white pl-0;
      }
      .error {
        @apply absolute mt-1;
      }
      span {
        @apply text-red-800;
      }
      span.placeholder {
        @apply text-themedark-10;
      }
    }
    .careerDtl_left {
      @apply bg-themelight-10 dark:text-themedark-0 dark:bg-themedark-10;
      @media (min-width: 360px) {
        padding: 1.563rem 0.938rem;
      }
      @media (min-width: 768px) {
        padding: 2.188rem 2.188rem;
      }
      /* @media (min-width: 1200px) {
          padding: 3.4375rem 2.1875rem;
        } */
      .social-media-career {
        p {
          @apply dark:text-white;
        }
        ul {
          @apply flex flex-wrap items-center ml-6;
          li {
            @apply p-0 mr-4 dark:text-themedark-0;
          }
        }
        padding-top: 1.875rem;
        @screen sm {
          margin-top: 2.188rem;
          padding-top: 2.188rem;
        }
        @apply border-t border-solid border-customcolor-5 mt-10 flex flex-wrap items-center;
      }
    }
    .careerDtl_right {
      margin-top: 1.875rem;
      @apply bg-themelight-20 dark:bg-themedark-70 h-full p-5 sxl:py-10 sxl:pr-4 sxl:pl-8 md:mt-0 dark:text-themedark-0;
      a {
        @apply no-underline transition-all duration-300 ease-in-out;
      }
      ul {
        li {
          @apply pl-5;
          a {
            @apply dark:text-white;
          }
          &:hover {
            a {
              margin-left: 0.313rem;
            }
          }
          &:before {
            top: 0.875rem;
          }
          @screen md {
            padding-left: 1.875rem;
          }
          margin-bottom: 0.625rem;
        }
      }
      /* @screen sxl{
          max-height: 53.5rem;
          overflow-y: scroll;
        } */
    }
  }
}
</style>  