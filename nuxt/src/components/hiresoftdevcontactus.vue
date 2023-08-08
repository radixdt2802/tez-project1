<template>
  <div class="rxsection-y-space hiresoftdevcontactus" id="contact-us">
    <div class="container">
      <div class="row">
        <div class="w-full px-4 md:w-7/12">
          <div class="remotedev_contactform">
            <h2>Contact Us</h2>
            <p>
              Your mission of <b>‘Hire Remote Team’</b> is success here. Embrace
              our expertise to make superior deliverable for your business
            </p>
            <div id="crmWebToEntityForm">
              <form @submit.prevent="recaptcha">
                <div class="row">
                  <div class="w-full px-4 smd:w-1/2">
                    <label class="sr-only" for="first_name">First Name</label>
                    <div class="mb-8 field_group">
                      <input
                        id="first_name"
                        type="text"
                        maxlength="40"
                        v-model.trim="FirstName"
                        name="First Name"
                        placeholder="Name *"
                        @blur.native="v$.FirstName.$touch()"
                      />
                      <div class="error">
                        <span v-if="v$.FirstName.$errors.length !== 0">
                          {{ v$.FirstName.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="w-full px-4 smd:w-1/2">
                    <label class="sr-only" for="email">Email</label>
                    <div class="mb-8 field_group">
                      <input
                        id="email_check"
                        v-model.trim="Email"
                        type="text"
                        maxlength="100"
                        name="Email"
                        placeholder="Email *"
                        @blur.native="v$.Email.$touch()"
                      />
                      <div class="error">
                        <span v-if="v$.Email.$errors.length !== 0">
                          {{ v$.Email.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="w-full px-4 mb-8 smd:w-1/2 field_group">
                    <label class="sr-only" for="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      v-model.trim="Company"
                      maxlength="100"
                      name="Company"
                      placeholder="Company"
                      @blur.native="v$.Company.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Company.$errors.length !== 0">
                        {{ v$.Company.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 mb-8 smd:w-1/2 field_group">
                    <label class="sr-only" for="designation">Designation</label>
                    <input
                      type="text"
                      maxlength="100"
                      v-model.trim="Designation"
                      name="Designation"
                      placeholder="Designation"
                      @blur.native="v$.Designation.$touch()"
                    />
                    <div class="error">
                      <span v-if="v$.Designation.$errors.length !== 0">
                        {{ v$.Designation.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 mb-8 smd:w-1/2 field_group">
                    <label class="sr-only" for="phone">Phone</label>
                    <div class="field_group">
                      <input
                        type="text"
                        v-model.trim="Phone"
                        maxlength="30"
                        name="Phone"
                        placeholder="Phone"
                        @input="acceptNumber"
                        @blur.native="v$.Phone.$touch()"
                      />
                    </div>
                    <div class="error">
                      <span v-if="v$.Phone.$errors.length !== 0">
                        {{ v$.Phone.$errors[0].$message }}
                      </span>
                    </div>
                  </div>

                  <div class="w-full px-4 smd:w-1/2">
                    <label class="sr-only" for="country">Country</label>

                    <div class="mb-8 field_group">
                      <select
                        id="country"
                        v-model.trim="LEADCF16"
                        @blur.native="v$.LEADCF16.$touch()"
                      >
                        <option value disabled selected hidden>
                          -Country-
                        </option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American&#x20;Samoa">
                          American Samoa
                        </option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua&#x20;and&#x20;Barbuda">
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
                        <option value="Belgium&#x20;&#x28;Dutch&#x29;">
                          Belgium &#x28;Dutch&#x29;
                        </option>
                        <option value="Belgium&#x20;&#x28;French&#x29;">
                          Belgium &#x28;French&#x29;
                        </option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia&#x20;and&#x20;Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet&#x20;Island">
                          Bouvet Island
                        </option>
                        <option value="Brazil">Brazil</option>
                        <option
                          value="British&#x20;Indian&#x20;Ocean&#x20;Territory"
                        >
                          British Indian Ocean Territory
                        </option>
                        <option value="British&#x20;Virgin&#x20;Islands">
                          British Virgin Islands
                        </option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina&#x20;Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape&#x20;Verde">Cape Verde</option>
                        <option value="Cayman&#x20;Islands">
                          Cayman Islands
                        </option>
                        <option value="Central&#x20;African&#x20;Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas&#x20;Island">
                          Christmas Island
                        </option>
                        <option value="Cocos&#x20;Islands">
                          Cocos Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook&#x20;Islands">Cook Islands</option>
                        <option value="Costa&#x20;Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech&#x20;Republic">
                          Czech Republic
                        </option>
                        <option value="Cote&#x20;d&#x27;Ivoire">
                          Cote d&#x27;Ivoire
                        </option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican&#x20;Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El&#x20;Salvador">El Salvador</option>
                        <option value="Equatorial&#x20;Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland&#x20;Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe&#x20;Islands">
                          Faroe Islands
                        </option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French&#x20;Guiana">
                          French Guiana
                        </option>
                        <option value="French&#x20;Polynesia">
                          French Polynesia
                        </option>
                        <option value="French&#x20;Southern&#x20;Territories">
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
                        <option
                          value="Heard&#x20;Island&#x20;and&#x20;McDonald&#x20;Islands"
                        >
                          Heard Island and McDonald Islands
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong&#x20;Kong">Hong Kong</option>
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
                        <option value="Luxembourg&#x28;French&#x29;">
                          Luxembourg&#x28;French&#x29;
                        </option>
                        <option value="Luxembourg&#x28;German&#x29;">
                          Luxembourg&#x28;German&#x29;
                        </option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall&#x20;Islands">
                          Marshall Islands
                        </option>
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
                        <option value="Netherlands&#x20;Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New&#x20;Caledonia">
                          New Caledonia
                        </option>
                        <option value="New&#x20;Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk&#x20;Island">
                          Norfolk Island
                        </option>
                        <option value="North&#x20;Korea">North Korea</option>
                        <option value="Northern&#x20;Ireland">
                          Northern Ireland
                        </option>
                        <option value="Northern&#x20;Mariana&#x20;Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua&#x20;New&#x20;Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto&#x20;Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint&#x20;Helena">Saint Helena</option>
                        <option value="Saint&#x20;Kitts&#x20;and&#x20;Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint&#x20;Lucia">Saint Lucia</option>
                        <option
                          value="Saint&#x20;Pierre&#x20;and&#x20;Miquelon"
                        >
                          Saint Pierre and Miquelon
                        </option>
                        <option
                          value="Saint&#x20;Vincent&#x20;and&#x20;the&#x20;Grenadines"
                        >
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San&#x20;Marino">San Marino</option>
                        <option value="Sao&#x20;Tome&#x20;and&#x20;Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi&#x20;Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Serbia&#x20;and&#x20;Montenegro">
                          Serbia and Montenegro
                        </option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra&#x20;Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon&#x20;Islands">
                          Solomon Islands
                        </option>
                        <option value="Somalia">Somalia</option>
                        <option value="South&#x20;Africa">South Africa</option>
                        <option
                          value="South&#x20;Georgia&#x20;and&#x20;the&#x20;South&#x20;Sandwich&#x20; Islands"
                        >
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South&#x20;Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri&#x20;Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard&#x20;and&#x20;Jan&#x20;Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland&#x28;French&#x29;">
                          Switzerland&#x28;French&#x29;
                        </option>
                        <option value="Switzerland&#x28;German&#x29;">
                          Switzerland&#x28;German&#x29;
                        </option>
                        <option value="Switzerland&#x28;Italian&#x29;">
                          Switzerland&#x28;Italian&#x29;
                        </option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option
                          value="The&#x20;Democratic&#x20;Republic&#x20;of&#x20;Congo"
                        >
                          The Democratic Republic of Congo
                        </option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad&#x20;and&#x20;Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks&#x20;and&#x20;Caicos&#x20;Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Virgin&#x20;Islands">
                          Virgin Islands
                        </option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United&#x20;Arab&#x20;Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United&#x20;Kingdom">
                          United Kingdom
                        </option>
                        <option value="United&#x20;States">
                          United States
                        </option>
                        <option
                          value="United&#x20;States&#x20;Minor&#x20;Outlying&#x20;Islands"
                        >
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican">Vatican</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Wallis&#x20;and&#x20;Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western&#x20;Sahara">
                          Western Sahara
                        </option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                        <option value="Aland&#x20;Islands">
                          Aland Islands
                        </option>
                      </select>
                      <div class="error">
                        <span v-if="v$.LEADCF16.$errors.length !== 0">
                          {{ v$.LEADCF16.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="w-full px-4">
                    <label class="sr-only" for="description"
                      >Brief Requirement</label
                    >
                    <div class="mb-8 field_group">
                      <textarea
                        id="description"
                        type="text"
                        maxlength="32000"
                        name="Description"
                        v-model.trim="LEADCF14"
                        placeholder="Message"
                        @blur.native="v$.LEADCF14.$touch()"
                      />
                      <div class="error">
                        <span v-if="v$.LEADCF14.$errors.length !== 0">
                          {{ v$.LEADCF14.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="w-full px-4 mt-5 form_submit">
                    <div
                      class="py-4 my-2 font-bold text-center text-red-800 border border-red-800 dark:text-white dark:border-white"
                      v-if="submitted && errorMessage"
                    >
                      {{ errorMessage }}
                    </div>
                    <button type="submit" value="Submit" class="btn primary">
                      Submit
                    </button>
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
              <!-- Do not remove this code. -->
              <iframe name="captchaFrame" style="display: none"></iframe>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-5/12">
          <div class="flex flex-wrap justify-between ml-auto box-main-div">
            <div
              class="flex flex-wrap items-center w-full px-8 py-5 text-center transition-all duration-300 ease-in-out box-main md:w-full md:flex-no-wrap md:text-left"
              v-for="item in data.TitleContentMediaList"
              :key="item.Title"
            >
              <img
                class="mx-auto mb-4 sxl:mr-8 md:mr-5 md:mb-0"
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
              <div class="w-full">
                <h3 class="text-primary">{{ item.Title }}</h3>
                <div
                  class="font-semibold"
                  v-if="item.LongText"
                  v-rxhtml="item.LongText"
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
        "2d55eed370387cca922cd89738132b2c7412eaa67e9d95112cce12a0e150df90",
      actionType: "TGVhZHM=",
      returnURL: "https://radixweb.com/start/hire-remote-developers-thankyou",
      ldeskuid: "",
      LDTuvid: "radixweb.com",
      LeadSource: "WebSite Visit",
      LeadStatus: "Expression of Interest",
      FirstName: "",
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
  async created() {
    try {
      await load(import.meta.env.VITE_GOOGLE_SITEKEY, {});
    } catch (error) {
      // console.log(" form error", error);
    }
  },
  validations: {
    FirstName: {
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
      // required: helpers.withMessage("This field is required", required),
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
  mounted: function () {
    fetch("https://jsonip.com/?callback=").then(async (response) => {
      var data = await response.json();
      var x = data.ip;
      this.LEADCF12 = x;
    });
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  methods: {
    getUrl() {
      try {
        // const route = this.$route.params.pathMatch; // ['start', 'custom-software-application-development']
        var urlPath = window.location.pathname;
        var pairs = urlPath[0] === "/" ? urlPath.substr(1) : urlPath;
        var route = pairs.split("/");

        const data = [
          {
            url: "custom-software-application-development",
            thankyou: "custom-software-thankyou",
          },
          {
            url: "hire-remote-developers",
            thankyou: "hire-remote-developers-thankyou",
          },
          {
            url: "engineering-services",
            thankyou: "engineering-thankyou",
          },
          {
            url: "product-engineering",
            thankyou: "engineering-thankyou",
          },
        ];
        const url = data.find((i) => i.url === route[1]);
        if (!url) {
          return "/thankyou";
        }
        const thankyouPage = route[0] + "/" + url.thankyou;
        return thankyouPage;
      } catch (error) {
        console.log("getting url error", error);
      }
    },
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
        console.log("recaptcha ", error);
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
        bodyFormData.append("First Name", this.FirstName);
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
            const returnRoute = "/" + this.getUrl();
            self.$tezRouter.push(returnRoute);
          }
        }
      } catch (error) {
        console.log("zoho submission error", error);
        this.isLoading = false;
      }
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .hiresoftdevcontactus {
    input,
    textarea {
      &::placeholder {
        color: #646464;
      }
    }
    input,
    select,
    textarea {
      width: 100%;
      font-size: 1.125rem;
      line-height: 3.4375rem;
      padding: 0 1.25rem;
      background: 0 0;
      color: #646464;
      border: 0.0813rem solid #eee;
      border-radius: 0.375rem;
      outline: none;
      height: 2.75rem;
      @screen sxl {
        height: 3.4375rem;
      }
    }
    textarea {
      min-height: 7.875rem;
      padding-top: 0.9375rem;
      padding-bottom: 0.9375rem;
      line-height: 1.75rem;
      vertical-align: top;
    }
    select {
      height: 3.4375rem;
    }
    .re-btn {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: #646464;
    }
    .remotedev_captcha-group {
      flex-basis: 0;
      flex-grow: 1;
      .field_group {
        flex-grow: 1;
        input {
          margin-bottom: 0;
        }
      }
    }
    .form_submit {
      input {
        width: 14.375rem;
        height: auto;
      }
    }
    .box-main-div {
      @screen md {
        max-width: 27.125rem;
      }
    }
    .box-main {
      @apply w-full dark:border-themelight-10 border-transparent border border-solid rounded-md;
      &:hover {
        box-shadow: 0 0 0.4063rem 0rem rgba(117, 117, 117, 0.3);
      }
      @screen xsm {
        width: 48%;
      }
      @screen md {
        width: 100%;
      }
      margin-top: 1.875rem;
      @screen md {
        + .box-main {
          margin-top: 1.875rem;
        }
      }
      box-shadow: 0 0 0.1563rem rgba(3, 3, 3, 0.1);
    }
  }
}
</style>
