<template>
  <div class="contactus-section y-space-40" :id="data.SubTitle">
    <div class="container">
      <div class="tex-center">
        <h2 class="text-center">{{ data.Title }}</h2>
        <div
          class="h3 text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="row">
        <div class="">
          <div class="formContact">
            <div id="crmWebToEntityForm" class="radix-zoho">
              <form @submit.prevent="recaptcha">
                <div class="rdx-form row">
                  <div class="w-full px-4 form-group sm:w-1/2">
                    <input
                      type="text"
                      maxlength="80"
                      v-model.trim="LastName"
                      class="form-control"
                      placeholder="Name *"
                      @blur.native="v$.LastName.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.LastName.$errors.length !== 0">
                        {{ v$.LastName.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 form-group sm:w-1/2">
                    <input
                      type="text"
                      maxlength="100"
                      v-model.trim="Company"
                      placeholder="Company"
                      class="form-control"
                      @blur.native="v$.Company.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Company.$errors.length !== 0">
                        {{ v$.Company.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 form-group sm:w-1/2">
                    <input
                      type="email"
                      maxlength="100"
                      id="email_check"
                      v-model.trim="Email"
                      class="form-control"
                      placeholder="Email *"
                      @blur.native="v$.Email.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Email.$errors.length !== 0">
                        {{ v$.Email.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 form-group sm:w-1/2">
                    <input
                      type="text"
                      maxlength="100"
                      v-model.trim="Designation"
                      placeholder="Designation"
                      class="form-control"
                      @blur.native="v$.Designation.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Designation.$errors.length !== 0">
                        {{ v$.Designation.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 form-group sm:w-1/2">
                    <input
                      type="tel"
                      maxlength="10"
                      placeholder="Phone"
                      v-model.trim="Phone"
                      class="form-control"
                      @input="acceptNumber"
                      @blur.native="v$.Phone.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Phone.$errors.length !== 0">
                        {{ v$.Phone.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 form-group sm:w-1/2">
                    <select
                      placeholder="Country"
                      class
                      v-model.trim="LEADCF16"
                      @blur.native="v$.LEADCF16.$touch()"
                    >
                      <option value disabled selected hidden>-Country-</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruban">Aruban</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium (Dutch)">Belgium (Dutch)</option>
                      <option value="Belgium (French)">Belgium (French)</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="British Virgin Islands">
                        British Virgin Islands
                      </option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos Islands">Cocos Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Cote d&#x27;Ivoire">
                        Cote d&#x27;Ivoire
                      </option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="GuineaBissau">GuineaBissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and McDonald Islands">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg(French)">
                        Luxembourg(French)
                      </option>
                      <option value="Luxembourg(German)">
                        Luxembourg(German)
                      </option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="North Korea">North Korea</option>
                      <option value="Northern Ireland">Northern Ireland</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Serbia and Montenegro">
                        Serbia and Montenegro
                      </option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option
                        value="South Georgia and the South Sandwich Islands"
                      >
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="South Korea">South Korea</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland(French)">
                        Switzerland(French)
                      </option>
                      <option value="Switzerland(German)">
                        Switzerland(German)
                      </option>
                      <option value="Switzerland(Italian)">
                        Switzerland(Italian)
                      </option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="The Democratic Republic of Congo">
                        The Democratic Republic of Congo
                      </option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Virgin Islands">Virgin Islands</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican">Vatican</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Aland Islands">Aland Islands</option>
                    </select>

                    <div class="error">
                      <span v-if="v$.LEADCF16.$errors.length !== 0">
                        {{ v$.LEADCF16.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 form-group sm:w-1/2">
                    <textarea
                      maxlength="2000"
                      placeholder="Brief your Requirement *"
                      class="form-control"
                      v-model.trim="LEADCF14"
                      @blur.native="v$.LEADCF14.$touch()"
                    ></textarea>
                    <div class="error">
                      <span v-if="v$.LEADCF14.$errors.length !== 0">
                        {{ v$.LEADCF14.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                  <div v-if="data.GuideURL" class="zcwf_row hidden">
                    <div
                      class="zcwf_col_lab"
                      style="font-size: 12px; font-family: Arial"
                    >
                      <label for="LEADCF11">UTM Content</label>
                    </div>
                    <div class="zcwf_col_fld">
                      <div id="LEADCF11" name="LEADCF11" maxlength="255">
                        {{ data.GuideURL }}
                      </div>
                      <div class="zcwf_col_help"></div>
                    </div>
                  </div>
                 
                  <div class="w-full px-4 mb-0">
                    <div
                      v-if="submitted && errorMessage"
                      class="text-red-800 dark:text-white text-center border border-red-800 dark:border-white font-bold py-4 my-2"
                    >
                      {{ errorMessage }}
                    </div>
                    <div class="submitCntcWrap">
                      <div class="mb-0 mt-4 frmactns text-center">
                        <button
                          type="submit"
                          value="Submit"
                          class="btn primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div
                class="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen customLoader bg-opacitybg-35"
                v-if="isLoading"
              >
                <div
                  class="w-12 h-12 border-4 border-t border-solid rounded-full animate-spin border-primary"
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
import staticImg from "../mixins/staticimg.mixin";
import { defineAsyncComponent } from "@vue/runtime-core";
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
import "swiper/scss";
import "swiper/scss/pagination";
import { getUri } from "../utils/api-request";
import { load } from "recaptcha-v3";
export default {
  mixins: [staticImg],
  props: {
    data: Object,
  },
  async created() {
    try {
      await load(import.meta.env.VITE_GOOGLE_SITEKEY, {});
    } catch (error) {
      // console.log(" form error", error);
    }
  },
  data() {
    return {
      submitted: false,
      xnQsjsdp:
        "d7e7f1c4eee964f4c8d101542b9bac94903228b407d7fc834686355f5ac645de",
      zc_gad: "",
      xmIwtLD:
        "2d55eed370387cca922cd89738132b2cce204a0c6aa8482ae0a9189be28ae280",
      actionType: "TGVhZHM=",
      returnURL: "http&#x3a;//radixweb.com/thankyou?",
      ldeskuid: "",
      LDTuvid: "radixweb.com",
      LeadSource: "WebSite Visit",
      LeadStatus: "Expression of Interest",
      LastName: "",
      Company: "",
      Email: "",
      Designation: "",
      Phone: "",
      LEADCF2: "radixweb.com",
      LEADCF4: "",
      LEADCF7: "",
      LEADCF8: "",
      LEADCF9: "",
      LEADCF10: "",
      LEADCF11: this.data.GuideURL,
      LEADCF12: "",
      LEADCF13: "",
      LEADCF14: "",
      LEADCF16: "",
      LEADCF20: "",
      LEADCF23: "Custom Sales",
      // enterdigest: "",
      errorMessage: "",
      invalidCaptcha: false,
      isLoading: false,
      buttonSubmitStatus: false,
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
    Designation: {},
    // requirement validation
    LEADCF14: {
      required: helpers.withMessage("This field is required", required),
    },
    // country validation
    LEADCF16: {},
    Email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Please Enter correct Email Id.", email),
    },
    // enterdigest: {
    //   required: helpers.withMessage("This field is required", required),
    // },
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
        bodyFormData.append("Company", this.Company);
        bodyFormData.append("Designation", this.Designation);
        bodyFormData.append("Phone", this.Phone);
        bodyFormData.append("LEADCF14", this.LEADCF14);
        bodyFormData.append("LEADCF16", this.LEADCF16);
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
            self.$tezRouter.push({
              path: "/thankyou",
              query: { location: this.data.GuideURL },
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
<style lang="scss" scoped>
@layer utilities {
  .contactus-section {
    .customerSuccess_content {
      .square_list {
        li {
          @apply mb-0;
          &:before {
            @apply border-primary bg-primary;
          }
        }
      }
    }
    .testimonialContact {
      @apply smd:py-16 smd:px-12 xsm:py-8 xsm:px-6 px-4 py-4 bg-themelight-10 dark:bg-themedark-70 h-full;
    }
    .square_list {
      ul {
        @apply sxl:ml-4;
        li {
          &:before {
            top: 0.875rem;
          }
        }
      }
    }
    .testimonialContact-content {
      @apply text-center;
      img {
        @apply mx-auto rounded-full border border-primary;
      }
    }
    .formContact {
      .rdx-form {
        margin-top: 1.25rem;
        .form-group {
          @apply mb-6 relative;
        }
        select {
          @apply appearance-none bg-no-repeat bg-center bg-themelight-0;
          background-image: url(https://d2ms8rpfqc4h24.cloudfront.net/down_grey_1330c18ec1.svg);
          background-position: center right 1.25rem;
          background-size: 0.9375rem;
        }
        input,
        select,
        textarea {
          @apply w-full text-base leading-5 text-themedark-65 rounded-md border border-opacitybg-15 py-3 px-4 inline-block outline-none focus:border-black;
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
      input[type="submit"] {
        @apply sm:text-2xl sm:leading-8 text-xl leading-7 border border-primary bg-primary text-black rounded-xl px-16 py-3 transition-all ease-in-out duration-75 inline-block sm:w-auto w-full cursor-pointer;
      }
    }
    .slick-dots {
      li {
        @apply mx-3;
        button {
          @apply border-transparent border-2 border-solid bg-transparent rounded-2xl p-0;
          width: 1.5rem;
          height: 1.5rem;
          &:before {
            @apply flex items-center justify-center text-primary;
            font-size: 2.5rem;
            width: 1.5rem;
            height: 1.5rem;
          }
        }
        &.slick-active {
          button {
            @apply border-primary;
          }
        }
      }
    }
    .formContact {
      @apply smd:py-16 smd:px-12 xsm:py-8 xsm:px-6 px-4 py-4 bg-opacitybg-25 dark:bg-themedark-80 h-full dark:text-themelight-0;
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
}
</style>
