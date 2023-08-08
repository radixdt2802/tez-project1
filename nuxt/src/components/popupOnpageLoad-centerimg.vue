<template>
<transition name="fade">
  <div class="popup-wrapper">
    <div class="popup sm:w-5/6 sxl:w-1/2 pb-8">
      <button id="close">&times;</button>
       <div class="">
        <div class="w-full user-img">
            <img
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
              class="w-3/6 md:w-2/6 h-auto popup-img absolute"
            />
        </div>
         <div class="w-full p-4 sm:px-6 sm:py-8 sxl:p-3 sxl:px-8 sxl:pb-10">
              <h3 v-html="data.Title" class="sxl:pb-4 text-center"></h3>
              <div class="para_lg text-center md:pb-5" v-rxhtml="data.LongText"></div>
              <form method="POST" id="zcampaignOptinForm" style="margin: 0px; width: 100%" action="https://maillist-manage.com/weboptin.zc" target="_zcSignup">
          <div class="SIGNUP_FLD mailpoet_paragraph input-wrapper">
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
              value="Subscribe"
              class="btn inline-block btn btn_md mt-5 sm:mt-0 ml-3"
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
              <!-- <div v-html="$md.render(data.CTA ? data.CTA : '')" class="btn btn_md  mt-6 md:mt-8 "></div> -->
         </div>
       </div>
    </div>
  </div>
</transition>
</template>

<script>
import staticImg from "../mixins/staticimg.mixin";
export default {
  mixins: [staticImg],
    props: {
    data: Object,
  },
  mounted() {
    console.log("in mounted");
    // window.addEventListener("load", function () {
      setTimeout(function open(event) {
        // console.log("started");
        document.querySelector("body").style.overflow = "hidden";
        document.body.classList.add("bg-custom");
        document.querySelector(".popup-wrapper").style.display = "flex";
        document.querySelector(".popup-wrapper").style.opacity = "1";
      }, 5000);
    // });
    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".popup-wrapper").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
      document.body.classList.remove("bg-custom");
      // console.log("completed");
    });
  },
};
</script>
<style lang="scss">
@layer utilities{
  .popup-wrapper {
    h3 {
      @apply text-primary;
    }
    .btn a {
      position: relative;
      &::before {
          content: "";
          position: absolute;
          left: calc(100% + 10px);
          z-index: 11;
          background-image: url(https://d2ms8rpfqc4h24.cloudfront.net/left_arrow_68aedbf003.png);
          background-repeat: no-repeat;
          background-size: contain;
          width: 50px;
          height: 66px;
          background-position: bottom;
          bottom: 50%;
          transform: rotateZ(30deg);
      }
    }

        input:not([type="submit"]) {
      &::placeholder {
        @apply text-themedark-10 dark:text-themelight-10;
      }
      @apply text-base font-poppins relative border border-solid dark:border-themedark-65 rounded-md w-full bg-no-repeat mx-auto outline-none dark:bg-themedark-70;
    outline: 2px solid transparent;
    outline-offset: 2px;
    padding: 0.35rem 0.75rem;
    height: 3.2rem;
    line-height: 4.25rem;
    border-color: #333333;
    color: #333333;
    font-size: 18px;
    max-width: 43.625rem;
    margin-right: 12px;
    width: 100%;
      // background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/email_eb4263548e.svg");
      // background-size: 1.5rem;
      // background-position: 0.9375rem 0.6875rem;
    }
    .user-img {
      padding: 100px;
       @media (max-width: 1199px) {
          padding: 85px;
       }
       @media (max-width: 991px) {
          padding: 50px;
       }
      img {
        left: 50%;
        transform: translate(-50%, 0px);
        top: -75px;
         @media (max-width: 576px) {
              width: 11.25rem;
                  top: -55px;
       }
      }
    }
    form {
      width: 100%;
      margin: 0 auto;
      justify-content: center;
      display: flex;
        @media (max-width: 576px) {
           display: block;
       }
      .input-wrapper  {
        width: 40%;
         @media (max-width: 991px) {
            width: 60%;
       }
        @media (max-width: 576px) {
           width: 100%;
       }
      }
    }
  }
 
  .fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
  .popup-wrapper{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:50;
    display:none;
    align-items:center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    transition: ease-in-out 0.5s;
    opacity:0;
        height: 100vh;
    overflow: auto;
        padding: 30px 0px;
  }
.popup {
  background-color: #ffffff;
  max-width:900px;
  padding: 0px;

  border-radius: 8px;
  // max-height: 95vh;
  // overflow: auto;
  font-family: "Poppins", sans-serif;
  text-align: center;
  position: relative;
      top: 30px;
    margin-bottom: 30px;
   @media (max-width: 575px) {
     width: calc(100% - 30px);
    }
}
.popup button {
  display: block;
  margin: 0 0 20px auto;
  background-color: transparent;
  font-size: 30px;
  color: #333333;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 24px;
  top: 24px;
  
  @media (max-width: 991px) {
      right: 0px;
  top: 0px;
    }
}
.popup-img {
    border-top-left-radius: 8px;
}
/* .popup p {
  font-size: 14px;
  text-align: justify;
  margin: 20px 0;
  line-height: 25px;
} */
/* a {
  display: block;
  width: 150px;
  position: relative;
  margin: 10px auto;
  text-align: center;
  background-color: #0f72e5;
  color: #ffffff;
  text-decoration: none;
  padding: 5px 0;
} */
}
</style>
