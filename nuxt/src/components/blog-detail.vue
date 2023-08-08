<template>
  <div id="blog-details" class="blog-details mt-16">
    <div class="container">
      <div class="row">
        <div class="smd:pt-0 pt-4 px-4 blog-left">
          <div class="newPublicationDetails flex flex-wrap items-center">
            <div class="categories w-auto sxl:py-0 py-1 mb-2">
              <p class="p-0">
                <tez-link
                  class="no-underline font-semibold"
                  :title="data.Category[0].Title"
                  :to="data.Category[0].NavURL"
                  >{{ data.Category[0].Title }}</tez-link
                >
              </p>
            </div>
          </div>
          <h1 class="font-medium">{{ data.Title }}</h1>
          <div
            class="
              newPublicationDetails
              flex flex-wrap
              items-center
              md:my-4
              my-2
              p-2
            "
          >
            <div class="blogAuthor w-auto flex items-center">
              <div class="mr-4 w-16 h-16">
                <img
                  class="inline-block mr-3 border-2 border-primary rounded-full"
                  v-rxlazy="data.BlogAuthor.Image"
                  :alt="data.BlogAuthor.Name"
                  width="60"
                  height="60"
                />
              </div>
              <div class="authorName">
                <p class="dark:text-themelight-0">
                  <a
                    class="text-base"
                    :href="data.BlogAuthor.NavURL"
                    :title="data.BlogAuthor.Name"
                    v-if="data.BlogAuthor && data.BlogAuthor.Image"
                  >
                    {{ data.BlogAuthor.Name }}</a
                  >
                </p>
              </div>
            </div>
            <div class="updateDate w-auto sxl:my-0 my-1 sxl:mx-2 mx-0">
              <span
                class="
                  author-time-dot
                  w-1
                  h-1
                  inline-block
                  rounded-full
                  align-middle
                  bg-primary
                  mx-3
                "
              ></span>
              <span v-if="data.LastModifiedDate"
                >Updated :
                {{
                  new Date(data.LastModifiedDate).toLocaleString("default", {
                    month: "short",
                  })
                }}
                {{ new Date(data.LastModifiedDate).getDate() }},
                {{ new Date(data.LastModifiedDate).getFullYear() }}</span
              >
              <span v-if="data.PublishedDate"
                >Published :
                {{
                  new Date(data.PublishedDate).toLocaleString("default", {
                    month: "short",
                  })
                }}
                {{ new Date(data.PublishedDate).getDate() }},
                {{ new Date(data.PublishedDate).getFullYear() }}</span
              >
            </div>
            <!-- <div class="readingTime w-auto sxl:my-0 my-1">
              <span
                class="
                  author-time-dot
                  align-middle
                  w-1
                  h-1
                  inline-block
                  rounded-full
                  bg-primary
                  mx-3
                "
              ></span>
              <span>{{ data.ReadingTime }} mins read</span>
            </div> -->
            <div
              v-if="data.ViewCount"
              class="blogViews w-auto sxl:py-0 py-1 sxl:px-2 px-0 ml-2"
            >
              <img
                class="inline-block mr-2"
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/eye_30x30_teal_01_cad88441cc.svg'
                "
                alt="Blog Views"
                width="30"
                height="30"
              />
              <span>{{ data.ViewCount }}</span>
            </div>
          </div>

          <img
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
            class="w-full"
          />
          <div class="blog-inner-main min-h-screen">
          <a
            v-if="data.bannerImage"
            v-bind:href="
                      'https://tezjs.io/?utm_source=radix-blog&amp;utm_medium=banner&amp;utm_campaign=' + data.NavURL
                    "
            title="TezJS for Fastest Performance"
            target="_blank"
            rel="noopener nofollow"
            ><img
              class="mb-4"              
              v-rxlazy="data.bannerImage.url"
              :alt="data.bannerImage.alternativeText"
              :width="data.bannerImage.width"
              :height="data.bannerImage.height"
          /></a>
            <div v-rxhtml="data.LongText"></div>
          </div>
          <!-- start faq -->
          <div class="mt-6" v-if="data.FAQs" id="faq">
            <h2 class="h3">{{ data.FAQs.Title }}</h2>

            <div
              class="rounded-sm dark:bg-themedark-0 mb-4 cursor-pointer"
              v-for="item in data.FAQs.FAQs"
              :class="[
                item.id == faqId
                  ? 'bg-themelight-10 dark:bg-themedark-10'
                  : 'bg-themelight-0 dark:bg-themedark-0 border border-themelight-50 dark:border-themedark-65',
              ]"
              :key="item.id"
            >
              <div
                class="border border-transparent p-4"
                @click="contentvisiblity(item.id)"
              >
                <div class="pb-0 flex text-left">
                  <h5 class="para_md font-semibold pb-0 faqtoggle w-full">
                    {{ item.Title }}
                  </h5>
                  <svg
                    v-if="item.id == faqId"
                    class="inline-block faqIcon align-middle items-end mt-2"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                    width="1.25rem"
                    height="1.25rem"
                    enable-background="new 6 6 10 10"
                  >
                    <path
                      id="Layer_1"
                      class="fill-current"
                      d="M5 2.37C5.18 2.37 5.36 2.44 5.49 2.58L9.75 6.92C10.03 7.19 10.02 7.64 9.75 7.91C9.47 8.18 9.03 8.17 8.76 7.9L4.99 4.06L1.15 7.83C0.87 8.1 0.43 8.1 0.16 7.82C-0.11 7.55 -0.11 7.1 0.16 6.83L4.5 2.57C4.64 2.44 4.82 2.37 5 2.37Z"
                    />
                  </svg>
                  <svg
                    v-else
                    class="inline-block faqIcon align-middle items-end mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0rem"
                    y="0rem"
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="6 6 10 10"
                    enable-background="new 6 6 10 10"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        class="fill-current"
                        d="M11,13.85c-0.18,0-0.358-0.068-0.495-0.205l-4.3-4.299c-0.273-0.273-0.273-0.717,0-0.99s0.717-0.273,0.99,0   L11,12.159l3.804-3.804c0.274-0.273,0.718-0.273,0.991,0s0.273,0.717,0,0.99l-4.3,4.299C11.358,13.781,11.179,13.85,11,13.85z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div
                v-bind:id="item.id"
                v-show="item.id == faqId"
                class="
                  border border-transparent
                  bg-themelight-10
                  dark:bg-themedark-10
                  border-t-0
                  pt-0
                  p-8
                  list_sm
                "
                :class="[
                  item.VueReferenceCode == 'ListTwoCol'
                    ? 'listTwoCol square_list noBs'
                    : 'square_list noBs',
                ]"
                v-rxhtml="item.LongText ? item.LongText : ''"
              ></div>
            </div>
          </div>
          <!-- end faq -->
          <!--  share this post! Starts -->
          <div class="rx-social-container mt-5">
            <div class="mr-auto">
              <div class="h4 font-normal">Don't Forget to share this post!</div>
            </div>
            <div
              class="radix-social-share flex flex-wrap"
              id="footer-social-menu"
            >
              <img
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/Social_Share_e47e21d3dd.svg'
                "
                width="20"
                height="36"
                alt="Share"
                @click="shareSocialClick2"
                :class="{ 'share-icon-b ': istoggle == true }"
                class="
                  cursor-pointer
                  smd:pointer-events-none
                  pointer-events-auto
                "
                aria-label="Shareicon"
              />
              <ul class="hidden smd:flex">
                <li class="smd:pb-0 pb-2">
                  <a
                    v-bind:href="
                      'https://www.facebook.com/sharer.php?u=' +
                      hostname +
                      data.NavURL
                    "
                    title="Share on Facebook"
                    :data-title="data.Title"
                    aria-label="Share on Facebook"
                    target="_blank"
                    rel="external nofollow"
                  >
                    <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/Social_Facebook_cd717a4519.svg'
                      "
                      alt="Facebook"
                      width="30"
                      height="36"
                    />
                  </a>
                </li>
                <li class="smd:py-0 py-2">
                  <a
                    v-bind:href="
                      'https://twitter.com/share?url=https://radixweb.com' +
                      data.NavURL +
                      '&text=' +
                      data.Title +
                      '&via=radixweb'
                    "
                    target="_blank"
                    title="Share on Twitter"
                    :data-title="data.Title"
                    aria-label="Share on Twitter"
                    rel="external nofollow"
                  >
                    <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/Social_Twitter_cd5daa6d78.svg'
                      "
                      alt="Twitter"
                      width="30"
                      height="36"
                    />
                  </a>
                </li>
                <li class="smd:py-0 py-2">
                  <a
                    v-bind:href="
                      'https://www.linkedin.com/shareArticle?mini=true&url=' +
                      hostname +
                      data.NavURL
                    "
                    target="_blank"
                    title="Share on LinkedIn"
                    :data-title="data.Title"
                    aria-label="Share on LinkedIn"
                    rel="external nofollow"
                  >
                    <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/Social_Linked_In_520e158eb3.svg'
                      "
                      alt="LinkedIn"
                      width="30"
                      height="36"
                    />
                  </a>
                </li>
                <li class="smd:pt-0 pt-2">
                  <a
                    v-bind:href="
                      'https://www.pinterest.com/pin/create/button/?url=https://radixweb.com' +
                      '&media=' +
                      data.Image.url +
                      '&description=' +
                      data.Title
                    "
                    target="_blank"
                    title="Share on Pintrest"
                    :data-title="data.Title"
                    aria-label="Share on Pintrest"
                    rel="external nofollow"
                  >
                    <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/Social_Pinterest_9295d1f4d7.svg'
                      "
                      alt="Pinterest"
                      width="30"
                      height="36"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--  share this post! End -->
          <!--  Blog Author Starts -->
          <div class="flex items-center mt-auto media blog-detail-author">
            <tez-link
              :to="data.BlogAuthor.NavURL"
              :title="data.BlogAuthor.Name"
            >
              <img
                class="mr-3 rounded-circle featured-post-author-thumb"
                v-rxlazy="data.BlogAuthor.Image"
                :alt="data.BlogAuthor.Name"
                width="80"
                height="80"
              />
            </tez-link>
            <div class="media-body">
              <tez-link
                :to="data.BlogAuthor.NavURL"
                :title="data.BlogAuthor.Name"
                class="mt-0 mb-0 featured-post-author-title"
                v-if="data.BlogAuthor.NavURL"
                >{{ data.BlogAuthor.Name }}</tez-link
              >
              <p
                class="pt-0 mb-0 featured-post-author-desc flex items-center"
                v-if="data.PublishedDate"
              >
                {{
                  new Date(data.PublishedDate).toLocaleString("default", {
                    month: "long",
                  })
                }}
                {{ new Date(data.PublishedDate).getDate() }},
                {{ new Date(data.PublishedDate).getFullYear() }}
                <span
                  class="
                    author-time-dot
                    w-1
                    h-1
                    block
                    rounded-full
                    bg-themedark-0
                    mx-2
                  "
                ></span>
                <span class="span-reading-time rt-reading-time">
                  <span class="rt-label rt-prefix"></span>
                  <span class="rt-time" v-if="data.LongText"
                    >{{ data.ReadingTime }} min read</span
                  >
                </span>
              </p>
              <p
                class="pt-0 mb-0 featured-post-author-desc flex items-center"
                v-if="data.LastModifiedDate"
              >
                {{
                  new Date(data.LastModifiedDate).toLocaleString("default", {
                    month: "long",
                  })
                }}
                {{ new Date(data.LastModifiedDate).getDate() }},
                {{ new Date(data.LastModifiedDate).getFullYear() }}
                <span
                  class="
                    author-time-dot
                    w-1
                    h-1
                    block
                    rounded-full
                    bg-themedark-0
                    mx-2
                  "
                ></span>
                <span class="span-reading-time rt-reading-time">
                  <span class="rt-label rt-prefix"></span>
                  <span class="rt-time" v-if="data.LongText"
                    >{{ data.ReadingTime }} min read</span
                  >
                </span>
              </p>
            </div>
          </div>
          <div
            class="py-2 author-content py-md-4 mb-lg-5 mb-5"
            v-if="data.BlogAuthor.ShortText"
          >
            <p>{{ data.BlogAuthor.ShortText }}</p>
            <div>
              <tez-link
                v-if="data.BlogAuthor.NavURL"
                :to="data.BlogAuthor.NavURL"
                class="mt-4 btn"
                >View All Posts</tez-link
              >
            </div>
          </div>
          <!--  Blog Author End -->
        </div>
        <div class="right-sidebar mt-6 pb-6 smd:mt-0 max-w-full">
          <!-- Featured Starts Here -->
          <div class="featured-main">
            <!-- {{FeaturedPost}} -->
            <div class="h3_sm text-left">Featured Post</div>
            <div class="featured-list" v-if="FeaturedPost.length > 0">
              <!-- {{sortedBlogList}} -->
              <ul class>
                <!-- v-if="data['blog-list'].data.dynamicResult.length > 0" -->
                <!-- v-for="(item,index) in data.RelatedFeaturedBlogs" .slice(0,3)-->
                <li v-for="(item, index) in FeaturedPost" :key="index">
                  <tez-link
                    :to="item.NavURL"
                    class="d-flex align-items-lg-start align-items-center"
                  >
                    <span>{{ index + 1 }} </span>
                    {{ item.Title }}
                    <!-- {{ item.Title }} -->
                  </tez-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- Categiries Starts Here  -->
          <div class="featured-main">
            <div class="h3_sm">Categories</div>
            <div class="categories-list">
              <ul class>
                <li
                  v-for="item in data['blog-categories']"
                  v-bind:key="item.Title"
                >
                  <tez-link
                    :to="item.NavURL === null ? '#' : item.NavURL"
                    class="nuxt-link-active nuxt-anchore text-themedark-0"
                    >{{ item.Title }}</tez-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- Join Now  Starts Here -->
          <div class="featured-main hidden smd:block">
            <div class="newsletter p-8">
              <div class="text-xl sxl:text-2xl text-white font-medium h5">
                Get top Insights and news from our technology experts.
              </div>
              <form
                method="POST"
                id="zcampaignOptinForm"
                style="margin: 0px; width: 100%"
                action="https://maillist-manage.com/weboptin.zc"
                target="_zcSignup"
              >
                <div class="SIGNUP_FLD">
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
                <input
                  type="hidden"
                  id="zc_Url"
                  value="xweb.maillist-manage.com"
                />
                <input type="hidden" id="new_optin_response_in" value="0" />
                <input
                  type="hidden"
                  id="duplicate_optin_response_in"
                  value="0"
                />
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
          <!-- Contactus Starts Here -->
          <div
            class="getInTouch bg-themelight-10 p-4 mb-14"
            :class="{
              'lg:fixed customWidth top-custom overflow-y-auto importantVisible':
                scrollPosition > 1398 && scrollPercentage < 80,
              importantHidden: scrollPercentage > 80,
            }"
          >
            <!-- form starts here -->
            <div class="h3 text-left">Get in Touch</div>
            <form @submit.prevent="recaptcha">
              <div class="rdx-form row">
                <div class="w-full px-4 form-group mt-4">
                  <input
                    type="text"
                    maxlength="80"
                    v-model.trim="LastName"
                    class="
                      form-control
                      w-full
                      max-w-sm
                      py-3
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                    "
                    placeholder="Name *"
                    @blur.native="v$.LastName.$touch()"
                  />
                  <div class="error">
                    <span v-if="v$.LastName.$errors.length !== 0">
                      {{ v$.LastName.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group mt-4">
                  <input
                    type="text"
                    maxlength="100"
                    v-model.trim="Company"
                    placeholder="Company"
                    class="
                      form-control
                      w-full
                      max-w-sm
                      py-3
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                    "
                    @blur.native="v$.Company.$touch()"
                  />
                  <div class="error">
                    <span v-if="v$.Company.$errors.length !== 0">
                      {{ v$.Company.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group mt-4">
                  <input
                    type="email"
                    maxlength="100"
                    id="email_check"
                    v-model.trim="Email"
                    class="
                      form-control
                      w-full
                      max-w-sm
                      py-3
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                    "
                    placeholder="Email *"
                    @blur.native="v$.Email.$touch()"
                  />
                  <div class="error">
                    <span v-if="v$.Email.$errors.length !== 0">
                      {{ v$.Email.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group mt-4">
                  <input
                    type="text"
                    maxlength="100"
                    v-model.trim="Designation"
                    placeholder="Designation"
                    class="
                      form-control
                      w-full
                      max-w-sm
                      py-3
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                    "
                    @blur.native="v$.Designation.$touch()"
                  />
                  <div class="error">
                    <span v-if="v$.Designation.$errors.length !== 0">
                      {{ v$.Designation.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group mt-4">
                  <input
                    type="tel"
                    maxlength="10"
                    placeholder="Phone"
                    v-model.trim="Phone"
                    class="
                      form-control
                      w-full
                      max-w-sm
                      py-3
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                    "
                    @input="acceptNumber"
                    @blur.native="v$.Phone.$touch()"
                  />
                  <div class="error">
                    <span v-if="v$.Phone.$errors.length !== 0">
                      {{ v$.Phone.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="w-full px-4 form-group mt-4 overflow-hidden">
                  <select
                    placeholder="Country"
                    class="
                      w-full
                      max-w-sm
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                      py-3
                    "
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
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
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
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
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

                <div class="w-full px-4 form-group mt-4">
                  <textarea
                    maxlength="2000"
                    placeholder="Brief your Requirement *"
                    class="
                      form-control
                      w-full
                      max-w-sm
                      py-3
                      bg-white
                      border border-primary
                      rounded-md
                      px-4
                    "
                    v-model.trim="LEADCF14"
                    @blur.native="v$.LEADCF14.$touch()"
                  ></textarea>
                  <div class="error">
                    <span v-if="v$.LEADCF14.$errors.length !== 0">
                      {{ v$.LEADCF14.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="zcwf_row hidden">
                  <div
                    class="zcwf_col_lab"
                    style="font-size: 12px; font-family: Arial"
                  >
                    <label for="LEADCF11">UTM Content</label>
                  </div>
                  <div class="zcwf_col_fld">
                    <div id="LEADCF11" name="LEADCF11" maxlength="255">
                      Blog Details
                    </div>
                    <div class="zcwf_col_help"></div>
                  </div>
                </div>

                <div class="w-full px-4 mb-0">
                  <div
                    v-if="submitted && errorMessage"
                    class="
                      text-red-800
                      dark:text-white
                      text-center
                      border border-red-800
                      dark:border-white
                      font-bold
                      py-4
                      my-2
                    "
                  >
                    {{ errorMessage }}
                  </div>
                  <div class="submitCntcWrap my-4">
                    <div class="mb-0 frmactns text-center sm:text-left">
                      <button
                        type="submit"
                        value="Submit"
                        class="w-full btn primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
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
            <!-- form ends here -->
          </div>
          <!-- Contactus Ends Here -->
          <!-- Social With Us -->
          <div class="be-social">
            <div class="h3_sm socialIcons">Be Social with us</div>
            <ul class="justify-start">
              <li>
                <a
                  href="https://www.facebook.com/radixweb"
                  title="Facebook"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Social_Facebook_cd717a4519.svg'
                    "
                    alt="Radixweb on Facebook"
                    width="38"
                    height="66"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/radixweb"
                  title="Twitter"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Social_Twitter_cd5daa6d78.svg'
                    "
                    alt="Radixweb on Twitter"
                    width="38"
                    height="66"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/radixweb"
                  title="Instagram"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Social_Instagram_c881ea1c91.svg'
                    "
                    alt="Radixweb on Twitter"
                    width="38"
                    height="66"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/radixweb?trk=top_nav_home"
                  title="Linkedin"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Social_Linked_In_520e158eb3.svg'
                    "
                    alt="Radixweb on LinkedIn"
                    width="38"
                    height="66"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC0iY-yQ7tGEFK0GXGPIu9Dg"
                  title="YouTube"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Social_You_Tube_9d1c6a355e.svg'
                    "
                    alt="Radixweb on Youtube"
                    width="38"
                    height="66"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
const blogSidebar = defineAsyncComponent(() => import("./blog-sidebar.vue"));
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
// const DynamicComponent = defineAsyncComponent( () => import("./dynamic-component"));
import DynamicComponent from "./dynamic-component.vue";
export default {
  head: {
    script: [
      {
        hid: "twitter",
        type: "text/javascript",
        src: "https://platform.twitter.com/widgets.js",
      },
    ],
  },
  props: {
    data: Object,
  },
  data() {
    return {
      blogSidebar: blogSidebar,
      sortedBlogList: [],
      show: true,
      faqId: null,
      submitted: false,
      xnQsjsdp:
        "d7e7f1c4eee964f4c8d101542b9bac94903228b407d7fc834686355f5ac645de",
      zc_gad: "",
      xmIwtLD:
        "2d55eed370387cca922cd89738132b2cce204a0c6aa8482ae0a9189be28ae280",
      actionType: "TGVhZHM=",
      returnURL: "http&#x3a;//radixweb.com/thankyou",
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
      LEADCF11: "Blog Details",
      LEADCF12: "",
      LEADCF13: "",
      LEADCF14: "",
      LEADCF16: "",
      LEADCF20: "",
      LEADCF23: "Custom Sales",
      // enterdigest: "",
      errorMessage: "",
      invalidCaptcha: false,
      scrollPosition: null,
      scrollPercentage: null,
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
  //  created() {
  //   window.addEventListener("scroll", function(){
  //     this.updateScroll
  //   },false);
  //   console.log("log from created()",window.addEventListener("scroll", this.updateScroll));
  // },
  mounted() {
    // window.addEventListener("scroll", function(){
    //   this.updateScroll
    // },false);
    setTimeout(() => {
      var Blockquotes = document.getElementsByTagName("blockquote");
      for (var i = 0; i < Blockquotes.length; i++) {
        var firstElement = Blockquotes[i].firstElementChild;
        if (firstElement.children.length != 0) {
          firstElement.firstChild.nodeName == "STRONG"
            ? Blockquotes[i].classList.add("TweetBlock")
            : "";
          firstElement.firstChild.nodeName == "EM"
            ? Blockquotes[i].classList.add("BlockquoteSimple")
            : "";
          firstElement.firstChild.nodeName == "U"
            ? Blockquotes[i].classList.add("conclusion")
            : "";
          // firstElement.firstChild.nodeName == "DIV"
          //   ? Blockquotes[i].classList.add("blogImgCTA")
          //   : "";
        } else {
          // console.log(Blockquotes[i].firstChild.nodeName);
          Blockquotes[i].firstChild.nodeName == "H4"
            ? Blockquotes[i].classList.add("BlogCTA")
            : "";
          Blockquotes[i].firstChild.nodeName == "P"
            ? Blockquotes[i].classList.add("BlockquoteSimple")
            : "";
          Blockquotes[i].firstChild.nodeName == "EM"
            ? Blockquotes[i].classList.add("BlockquoteSimple")
            : "";
          Blockquotes[i].firstChild.nodeName == "STRONG"
            ? Blockquotes[i].classList.add("TweetBlock")
            : "";
          Blockquotes[i].firstChild.nodeName == "U"
            ? Blockquotes[i].classList.add("conclusion")
            : "";
        }
        // need to set diffrent styling block based on their first Element
      }
    }, 5000);
    // setTimeout(() => {
    //   var elems = document.getElementsByClassName("imgwrapper");
    //   for (var elem in elems) {
    //     var newElem = `<a href="https://www.linkedin.com/shareArticle?mini=true&url=https://radixweb.com${this.data.NavURL}" rel="nofollow noopener" target="_blank" class="linkedin-share">${elems[elem].innerHTML}</a>`;
    //   }
    // }, 5000);
    setTimeout(() => {
      var arr_elms = [];
      arr_elms = document.body.getElementsByTagName("th");

      var elms_len = arr_elms.length;

      for (var i = 0; i < elms_len; i++) {
        if (arr_elms[i].getAttribute("style") != null) {
          console.log(arr_elms[i]);
          arr_elms[i].parentElement
            .closest("table")
            .classList.add("tablePrimary");
        }
      }
    }, 5000);
  },
  props: {
    data: Object,
  },
  components: {
    DynamicComponent,
  },
  computed: {
    hostname() {
      if (typeof window === "undefined") return process.env.SITE_URL;
      else return "https://" + window.location.hostname;
    },
    FeaturedPost() {
      if (this.data["blog-list"]) {
        this.sortedBlogList = this.data["blog-list"].data.dynamicResult;
        return this.sortedBlogList;
        // .sort((a, b) => new Date(b.PublishedDate) - new Date(a.PublishedDate))
        // .slice(0, 10);

        // console.log("bLOGliST" ,this.data["blog-list"]);
        // console.log(this.sortedBlogList);
        // if (this.sortedBlogList.length > 2) {
        //   var max = this.sortedBlogList.length;
        //   var blogIndexes = [];
        //   for (var i = 0; blogIndexes.length < 3; i++) {
        //     var blog = Math.floor(Math.random() * max);
        //     if (!blogIndexes.includes(blog)) {
        //       blogIndexes.push(blog);
        //     }
        //     //ex.- [0 , 11 , 12] of career category
        //     // this.data['blog-list'].data.dynamicResult.slice(0 ,3) => for first three blog of career
        //   }
        //   return blogIndexes;
        // } else {
        //   // error : - no blog found
        // }
      }
    },
  },
  methods: {
    // update the scroll function
    // updateScroll() {
    //   this.scrollPosition = window.scrollY;
    //   this.scrollPercentage = parseInt(
    //     (window.scrollY /
    //       (window.document.body.scrollHeight - window.innerHeight)) *
    //       100,
    //     10
    //   );
    // },
    // form function start
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
          this.isLoading = false;
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
    // form function end
    contentvisiblity(id) {
      if (this.faqId == id) {
        this.faqId = null;
      } else {
        this.faqId = id;
      }
    },
    anchor(value) {
      return this.$tezRouter.push(value);
    },
    shareSocialClick() {
      this.IsDark = !this.IsDark;
      if (!this.IsDark) {
        document
          .querySelector(".radix-socialmedia ul")
          .classList.remove("icon-visible");
      } else {
        document
          .querySelector(".radix-socialmedia ul")
          .classList.add("icon-visible");
      }
    },
    shareSocialClick2() {
      var div = document.querySelector("#footer-social-menu");
      // console.log(
      //   "hello",
      //   window.innerHeight - div.getBoundingClientRect().bottom < 100
      // );
      if (window.innerHeight - div.getBoundingClientRect().bottom < 100) {
        this.IsDark = !this.IsDark;
        if (!this.IsDark) {
          document
            .querySelector(".radix-social-share ul")
            .classList.remove("icon-visible-upward");
        } else {
          document
            .querySelector(".radix-social-share ul")
            .classList.add("icon-visible-upward");
        }
      } else {
        this.IsDark = !this.IsDark;
        if (!this.IsDark) {
          document
            .querySelector(".radix-social-share ul")
            .classList.remove("icon-visible");
        } else {
          document
            .querySelector(".radix-social-share ul")
            .classList.add("icon-visible");
        }
      }
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .blog-details {
    .newPublicationDetails {
      .authorName {
        p {
          a {
            @apply dark:text-white;
          }
        }
      }
    }
    // @media only screen and (min-width: 1230px) {
    //   .container {
    //     max-width: 100%;
    //     width: 76.875rem;
    //   }
    // }
    .blog-left {
      .categories {
        p {
          a {
            @apply text-themelight-75 dark:text-themelight-10;
          }
        }
      }
      a {
        color: #000000;
      }
      @apply w-full px-4 smd:pr-16;
      @screen lg {
        width: 70%;
      }
      .post-category-container {
        a {
          @apply text-primary no-underline font-semibold;
          &:hover,
          &:active {
            @apply text-themedark-0;
            transition: 0.3s ease all;
          }
        }
      }
      h1 {
        @apply font-poppins p-0 mb-1;
        font-size: 1.625rem;
        line-height: 2.375rem;

        @screen xxsm {
          font-size: 1.75rem;
          line-height: 2.5rem;
        }
        @screen xsm {
          font-size: 1.875rem;
          line-height: 2.625rem;
        }
        @screen md {
          font-size: 2rem;
          line-height: 2.75rem;
        }
        @screen smd {
          font-size: 2.125rem;
          line-height: 3rem;
        }
        @screen sxl {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
      }
      p {
        img {
          @apply mx-auto;
        }
      }
      .media-body {
        .post-category {
          a {
            @apply text-themedark-10 dark:text-themelight-10;
          }
        }
      }
      .blog-auth-detail {
        .featured-post-author-thumb {
          @apply border-2 border-solid border-primary rounded-full;
        }
        .featured-post-author-title {
          @apply font-normal hover:no-underline transition-all duration-300 ease-in-out;
        }
        .featured-post-author-desc {
          @apply text-sm leading-6 font-poppins p-0;
          letter-spacing: 0.0175rem;
        }
      }
      .radix-socialmedia,
      .radix-social-share {
        @apply relative;
        ul {
          @apply items-center h-0;
          transition: 0.5s all;

          @screen smd {
            @apply h-auto;
          }
          li {
            @apply ml-4;
          }
          &.icon-visible {
            @apply flex absolute right-0 flex-col justify-center items-center z-10 p-2 bg-white w-12 h-auto;
            top: calc(100% + 15px);
            box-shadow: 0 0 4px #ccc;
            transition: 0.5s all;
            li {
              @apply ml-0 my-1;
            }
          }
          &.icon-visible-upward {
            @apply flex absolute right-0 flex-col justify-center items-center z-10 p-2 bg-white w-12 h-auto;
            bottom: calc(100% + 15px);
            box-shadow: 0 0 4px #ccc;
            transition: 0.5s all;
            li {
              @apply ml-0 my-1;
            }
          }
        }
      }
      .imageShare {
        @apply relative;
        .linkedin-share {
          &::before {
            content: "";
            background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/linkedin_966ad60913.svg");
            background-repeat: no-repeat;
            background-position: center;
            right: 0;
            left: 0;
            position: absolute;
            height: 25px;
            width: 25px;
            top: 0;
            display: none;
          }
          &:hover {
            &::before {
              display: block;
            }
          }
        }
      }
      .blog-inner-main {
        @apply mt-5;
        @screen md {
          margin-top: 3.125rem;
        }
        h2,
        h3 {
          scroll-margin-top: 70px;
          @screen sxl {
            scroll-margin-top: 100px;
          }
        }
        .details-table {
          span {
            display: block;
            height: 5.875rem;
            margin-top: -5.875rem;
            visibility: hidden;
          }
        }
        p,
        td,
        th {
          @apply m-0 p-0 pb-5 font-poppins font-normal;
          strong {
            line-height: 1.3125rem;
            @apply font-semibold;
          }
          em {
            font-weight: 400;
          }
          a {
            color: #025fa2;
            @apply font-semibold;
          }
          code {
            @apply px-4 bg-themelight-10 dark:bg-themedark-65 mb-2 inline-block italic;
          }
        }
        div.codeSnipet {
          @apply bg-themelight-10 dark:bg-themedark-65  p-4 text-xl break-words leading-loose;
          code {
            @apply block;
          }
        }
        p,
        li,
        td,
        th {
          font-size: 1.0625rem;
          line-height: 1.75rem;
          letter-spacing: 0.0437rem;
          @screen xxl {
            font-size: 1.3125rem;
            line-height: 2.375rem;
          }
        }
        h2 {
          @apply text-themedark-0 dark:text-themedark-75 text-2xl leading-9 mt-3 mb-5 p-0 font-medium;
          @screen xsm {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          @screen smd {
            font-size: 1.75rem;
            @apply leading-10;
          }
          @screen sxl {
            @apply text-3xl;
            line-height: 2.875rem;
          }
        }
        ol {
          @apply pl-6 pb-4 m-0;
          list-style: number;
          li {
            @apply relative ml-5 mb-0 pt-1 pb-2;
            a {
              color: #025fa2;
              @apply font-medium;
            }
          }
        }
        ul {
          @apply pl-6 pb-4 m-0;
          li {
            a {
              color: #025fa2;
              @apply font-medium;
            }
            em {
              font-weight: 400;
            }
            strong {
              @apply font-semibold;
            }
            @apply relative ml-5 mb-0 pb-2;
            &::before {
              @apply bg-primary pr-0 absolute top-0 ml-0 rounded-full;
              content: "";
              top: 0.625rem;
              width: 0.5rem;
              height: 0.5rem;
              left: -1.25rem;
              @screen xxl {
                top: 0.9375rem;
              }
            }
          }
        }
        h3 {
          @apply md:text-2xl;
          font-size: 1.375rem;

          strong {
            @apply font-semibold;
          }
        }
        h3 + p img {
          @apply mt-6;
        }
        //Styling for table of content
        details,
        details[open] {
          @apply my-8 md:p-8 p-4 bg-themelight-10 dark:bg-themedark-10 cursor-pointer;
          summary {
            @apply py-2 px-4 md:p-4 text-left bg-primary mb-0 rounded-lg md:text-2xl xsm:text-xl text-lg text-themedark-0 dark:text-themedark-75;
          }
          h2,
          h3 {
            margin-left: 0.625rem;
          }
          ol {
            @apply pt-4 list-decimal;
            li {
              a {
                @apply no-underline text-themedark-0 dark:text-themelight-0;
              }
            }
          }
          ul {
            @apply pl-12 pb-0;
            li {
              a {
                @apply no-underline text-themedark-0 dark:text-themelight-0 font-normal;
              }
            }
          }
        }
        //styling for blockqoutes
        .conclusion {
          @apply bg-themelight-70 p-5;
          p {
            u:first-child {
              @apply no-underline block font-bold pb-4;
              font-size: 1.625rem;
              line-height: 2.25rem;
            }
            u {
              @apply no-underline block pb-4;
            }
          }
        }
        .TweetBlock {
          p {
            strong {
              @apply font-normal;
            }
          }
          @apply border-t-2 border-b-2 border-solid border-themelight-10 dark:border-themedark-65 relative my-5 bg-no-repeat block;
          padding: 0.9375rem 0.9375rem 0.9375rem 3.75rem;
          font-size: 1.0625rem;
          line-height: 1.75rem;
          letter-spacing: 0.0437rem;
          word-break: break-word;
          @screen xxl {
            font-size: 1.3125rem;
            line-height: 2.375rem;
          }
          @apply relative bg-no-repeat font-poppins;
          &::before {
            content: "";
            @apply absolute bg-no-repeat;
            width: 2.8125rem;
            height: 2.8125rem;
            background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/twitter_icon_47f92bdca5.svg");
            left: 0;
            background-size: 2.1875rem;
            @screen xsm {
              left: 0;
              background-size: 2.5rem;
            }
            @screen md {
              background-size: 2.8125rem;
            }
          }
          a {
            // margin-left: 0.625rem;
            color: #025fa2;
          
          } 
        }

        .BlogCTA {
          text-align: center;
          @apply bg-primary dark:bg-themedark-70;
          background-color: #31bbae;
          margin: 1rem 0rem 3rem 0rem;
          padding: 1.875rem 0.625rem;
          @screen xxsm {
            padding: 1.875rem 1.25rem;
          }

          color: #ffffff;
          font-weight: 700;

          h4 {
            @apply text-xl xsm:text-2xl xsm:leading-8 leading-7;
            margin-bottom: 1.875rem;
          }
          a {
            background-color: #025fa2;
            padding: 0.3125rem 0.625rem;
            border-radius: 0.5rem;
            font-size: 1.125rem;
            color: #ffffff !important;
            text-decoration: none;
            display: inline-block;
            @screen md {
              padding: 0.625rem 1.875rem;
            }
          }
        }
        div.customCta {
          // blockquote{
          //   text-align: center;
          // @apply bg-themelight-10 dark:bg-themedark-70;
          // margin: 3rem 0;
          // padding: 1.875rem 0.625rem;
          // @screen xxsm {
          //   padding: 1.875rem 1.25rem;
          // }

          // color: #ffffff;
          // font-weight: 700;

          // }
          div.blockCTA {
            @apply flex flex-wrap;
          }
          img {
            @apply px-4 md:w-5/12 w-full;
            height: 175px;
          }
          div.Title {
            @apply w-7/12 md:text-right text-center mx-auto;
            h4 {
              @apply text-xl xsm:text-2xl xsm:leading-8 leading-7 text-themedark-0 dark:text-themelight-0 font-medium mb-16;
            }
            a {
              @apply bg-primary rounded-lg no-underline inline-block;

              padding: 0.3125rem 0.625rem;

              font-size: 1.125rem;
              color: #ffffff !important;

              @screen md {
                padding: 0.625rem 1.875rem;
              }
            }
          }
        }
        .blogImgCTA {
          p {
            u {
              @apply block no-underline w-1/2;
              a {
                @apply inline-block text-left;
              }
            }
            img {
              @apply px-4;
              float: right;
              height: 150px;
              width: 50%;
            }
            a {
              display: block !important;
            }
          }
          text-align: center;
          @apply bg-themelight-10 dark:bg-themedark-70;
          margin: 1rem 0rem 3rem 0rem;
          padding: 1.875rem 0.625rem;
          @screen xxsm {
            padding: 1.875rem 1.25rem;
          }

          color: #ffffff;
          font-weight: 700;

          h4 {
            @apply text-xl xsm:text-2xl xsm:leading-8 leading-7;
            margin-bottom: 1.875rem;
          }
          a {
            background-color: #025fa2;
            padding: 0.3125rem 0.625rem;
            border-radius: 0.5rem;
            font-size: 1.125rem;
            color: #ffffff !important;
            text-decoration: none;
            display: inline-block;
            @screen md {
              padding: 0.625rem 1.875rem;
            }
          }
        }
        .BlockquoteSimple {
          @apply border-t-2 border-b-2 border-solid border-themelight-10 dark:border-themedark-65 relative font-normal bg-no-repeat;
          background-size: 2.8125rem;
          // background-position: 0.375rem 1.25rem;
          padding: 0.9375rem 0.9375rem 0.9375rem 3.75rem;
          margin: 1.25rem 0rem;
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/quote_orange_70cb1ad6fb.svg");
          font-size: 1.3125rem;
          line-height: 1.857em;
          background-position: 0 1rem;
          // @screen md {
          //   margin: 1.25rem 0 1.875rem;
          // }
          // font-family: "roboto-slab-regular";
          // @screen xsm {
          //   padding: 0.9375rem 0.9375rem 0.9375rem 3.25rem;
          //   background-size: 2.5rem;
          // }
          // @screen md {
          //   padding: 0.9375rem 0.9375rem 0.9375rem 3.75rem;
          //   background-size: 2.8125rem;
          //   background-position: 0 1rem;
          // }
          // p {
          //   padding: 0.625rem 0;
          //   a {
          //     display: inline-block;
          //   }
          // }
          p {
            @apply pb-0;
            strong {
              @apply font-medium;
              a {
                @apply font-semibold ml-0 sm:ml-3;
              }
            }
          }
        }
        //iframe styling
        .responsive-iframe {
          max-inline-size: 100%;
          block-size: auto;
          margin-bottom: 40px;
          iframe {
            max-inline-size: 100%;
            @screen sxl {
              max-inline-size: unset;
            }
            &.aspect-video {
              aspect-ratio: 16 / 9;
            }
          }
        }
        //iframe styling
        .tablewrapper {
          @apply my-6;
          overflow-x: auto;
          table {
            width: 100%;
            table-layout: fixed;
            td {
              strong {
                @apply font-semibold;
              }
              a {
                color: #025fa2;
                font-weight: 600;
              }
            }
            thead {
              tr {
                th {
                  @apply font-semibold;
                }
              }
            }
            @apply mb-5 overflow-x-auto;
            table,
            th,
            td {
              @apply border border-solid border-themedark-75;
            }
            th,
            td {
              @apply p-3 text-left;
            }
          }
          .tablePrimary {
            th {
              color: #ffffff !important;
              @apply bg-primary;
            }
            tbody {
              tr {
                td {
                  text-align: left !important;
                }
                &:nth-child(even) {
                  @apply bg-themelight-70;
                }
              }
            }
          }
        }
        /* code {
          @apply p-4 bg-themelight-10 dark:bg-themedark-65 mb-4 block;
        } */
        //On image hover linkedin share styling here
      }
      .rx-social-container {
        @apply flex items-start md:items-center py-6 md:px-4 border-t-2 border-b-2 border-solid border-themelight-10 dark:border-themedark-65;
        margin-top: 0.625rem;
        margin-bottom: 1.875rem;
        @screen md {
          margin-top: 2.5rem;
          margin-bottom: 3.75rem;
        }
        h4 {
          @apply font-poppins font-medium mb-0 text-lg;
          letter-spacing: 0.025rem;
          line-height: 1.625rem;
          @screen sxl {
            @apply text-xl leading-6;
          }
        }
      }
      .blog-detail-author {
        .featured-post-author-thumb {
          @apply border-2 border-solid border-primary rounded-full;
        }
        .featured-post-author-title {
          &:hover,
          &:active {
            @apply text-primary;
            transition: 0.3s ease all;
          }
        }
        .featured-post-author-title {
          @apply text-xl font-normal leading-7 no-underline transition-all duration-300 ease-in-out;
          @screen md {
            font-size: 1.375rem;
          }
        }
        .featured-post-author-desc {
          @apply text-sm leading-6 font-poppins p-0;
          @screen md {
            font-size: 0.9375rem;
            letter-spacing: 0.0175rem;
          }
        }
      }
      .author-content {
        @apply lg:mb-12 md:py-6 py-2 md:text-lg text-base md:leading-8 leading-7;
        .btn {
          @apply text-black dark:text-white bg-transparent rounded-full text-base font-semibold md:py-3 md:px-12 md:text-lg;
          padding: 0.1875rem 1rem;
          @screen md {
            padding: 0.6875rem 3.25rem;
          }

          &:hover {
            @apply bg-primary text-white;
          }
        }
      }
    }
    .right-sidebar {
      a {
        &:hover {
          color: #025fa2;
        }
      }
      @apply px-4 xsm:w-full;
      @screen lg {
        width: 30%;
      }
      /* @screen sxl {
        width: 22.9375rem;
      } */
      div.h3_sm {
        @apply font-poppins font-semibold text-xl m-0 leading-6;
        padding: 1.0625rem 1.875rem;
        &.socialIcons {
          padding: 1.0625rem 0rem;
        }
      }
      .getInTouch {
        div.h3 {
          padding: 1.0625rem;
        }
        &.customWidth {
          max-width: 406px;
        }
        &.top-custom {
          top: 97px;
        }
      }
      .featured-main {
        @apply w-full max-w-full bg-themelight-10 dark:bg-themedark-10;
        margin-bottom: 3.75rem;
        a {
          @apply text-lg leading-7 font-poppins font-medium no-underline flex smd:items-start items-center transition-all duration-300 ease-in-out;
          &:hover {
            color: #025fa2;
          }
          span {
            @apply font-medium font-poppins border-b-2 border-solid mr-5 sxl:mr-8 text-2xl leading-7 md:text-3xl md:leading-9 smd:text-4xl smd:leading-10;
            border-bottom: 0.125rem solid;
            min-width: 1.125rem;
            text-align: center;
          }
        }

        .featured-list {
          padding: 0.9375rem;
          @screen smd {
            padding: 1.5625rem 1.875rem;
          }
          ul {
            li {
              + li {
                padding-top: 1.5625rem;
                margin-top: 1.5625rem;
                border-top: 0.0625rem solid #e0e0e0;
              }
            }
          }
        }
        .categories-list {
          padding: 1.0625rem 1.875rem;
          ul {
            li {
              + li {
                margin-top: 0.9375rem;
              }
              a {
                font-size: 0.9375rem;
                @apply font-poppins font-normal;
                &:hover {
                  margin-left: 0.3125rem;
                }
              }
            }
          }
        }
        .newsletter {
          @apply bg-primary dark:bg-themedark-70 bg-cover bg-no-repeat;
          /* padding: 1.875rem 1.875rem 1.25rem; */
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/sidebar_newsletter_bg_2dede30e37.png");
          h5 {
            @apply text-white font-poppins font-medium text-2xl leading-9 mb-5;
            letter-spacing: 0.0375rem;
          }
          input {
            @apply text-base w-full rounded-full border-none border-0 py-3 pr-6 font-poppins font-light bg-no-repeat outline-none text-themedark-0;
            padding-left: 3.4375rem;
            background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/email_newsletter_d9cd363828.svg");
            background-size: 1.25rem;
            background-position: 1.25rem 1.125rem;
            min-height: 3.5rem;
          }
          input[type="submit"] {
            @apply bg-transparent cursor-pointer px-8 py-1 font-semibold text-base text-white w-auto min-h-full border border-solid border-white mt-5 transition-all duration-300 ease-in-out;
            background-image: none;
            &:hover {
              @apply text-primary bg-themelight-0;
            }
          }
        }
        .twitter-wraper {
          height: 33.75rem;
          overflow: auto;
        }
      }
      .be-social {
        h2 {
          @apply p-0 mb-3 border-none;
        }
        ul {
          @apply flex items-center;
          li {
            + li {
              @apply ml-5;
            }
          }
        }
      }
    }
  }
}
</style>