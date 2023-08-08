<template>
  <div class="blog-details">
    <div class="blog-inner">
      <div class="container">
        <div class="row">
          <div class="blog-left">
            <div class="insight-tabs">
              <ul class="insightDomainList">
                <li class="flex-auto border-2 dark:border-themedark-80 border-themedark-75 rounded-lg md:py-2 py-1 px-4 mb-2 md:mx-2 mx-1">
                  <div
                    class="
                      insightname
                      block
                      leading-normal
                      whitespace-no-wrap
                      cursor-pointer
                      text-center
                    "
                    @click="currentDynamicData = 'dynamicResult' ; tabId = null"
                    :class="currentDynamicData == 'dynamicResult' ? 'active' : ''"
                    >Articles</div>
                </li>
                <li
                  class="flex-auto border-2 dark:border-themedark-80 border-themedark-75 rounded-lg md:py-2 py-1 px-4 mb-2 md:mx-2 mx-1"
                  v-for="(item, index) in arrayTabs"
                  v-bind:key="index"
                >
                  <div
                    class="
                      insightname
                      block
                      leading-normal
                      whitespace-no-wrap
                      cursor-pointer
                      text-center
                    "
                    @click="contentvisiblity(index)"
                    :class="index == tabId && !allDataTrigger ? 'active' : ''"
                    >{{ item }}</div>
                </li>
                <li class="flex-auto border-2 dark:border-themedark-80 border-themedark-75 rounded-lg md:py-2 py-1 px-4 mb-2 md:mx-2 mx-1">
                  <div
                    class="
                      insightname
                      block
                      leading-normal
                      whitespace-no-wrap
                      cursor-pointer
                      text-center
                    "
                    @click="backToAll() , currentDynamicData = 'all-insights'"
                    :class="currentDynamicData == 'all-insights' ? 'active' : ''"
                    >All</div>
                </li>
              </ul>
            </div>
            
            <div class="mt-5">
              <!-- {{data}} -->
              <!-- row justify-center -->
              <div class="">
           
                <div class="blog-size">
                  <div v-if="currentDynamicData == 'video-list'"><video-list :data="data['video-list'].data" /></div>
                    <!-- <news-list :data="data['news-list'].data"/> -->
                  <!-- <div v-if="currentDynamicData == 'news-list'">
                         <div v-for="item in data['news-list'].data.dynamicResult">
                          <div class="blog-back">
                            <div class="post-thumb">
                              <a :href="item.NavURL">
                                <img
                                  class="lazyloaded"
                                  v-if="item.Image"
                                  v-rxlazy="item.Image"
                                  :alt="item.Image.alternativeText"
                                  :width="item.Image.width"
                                  :height="item.Image.height"
                                />
                              </a>
                            </div>
                            <div class="post-body">
                              <span
                                class="post-tag-container"
                                v-if="item.Classification && item.Classification.Title"
                                >{{ item.Classification.Title }}</span
                              >
                              <div
                                class="post-category-container mb-2"
                                v-if="item.Category"
                                v-for="items in item.Category"
                              >
                                <a :href="items.NavURL" class="font-14 post-category pt-0">{{
                                  items.Title
                                }}</a>
                              </div>
                              <a
                                :href="item.NavURL"
                                class="post-title"
                                title="7 Reasons Why a Business Should Embrace SaaS Application Development"
                                >{{ item.Title }}</a
                              >
                            </div>
                            <div class="post-footer">
                              <div class="media flex items-center mt-auto">
                                <a
                                  href="https://radixweb.com/author/pratik-mistry"
                                  title="Pratik Mistry"
                                  v-if="item.BlogAuthor && item.BlogAuthor.Image"
                                >
                                  <img
                                    class="
                                      mr-3
                                      rounded-circle
                                      featured-post-author-thumb
                                      ls-is-cached
                                      lazyloaded
                                    "
                                    v-rxlazy="item.BlogAuthor.Image"
                                    width="60"
                                    height="60"
                                  />
                                </a>
                                <div class="media-body">
                                  <a
                                    href="https://radixweb.com/author/pratik-mistry"
                                    title="Pratik Mistry"
                                    class="mt-0 featured-post-author-title mb-0"
                                    v-if="item.BlogAuthor"
                                    >{{ item.BlogAuthor.Name }}</a
                                  >
                                  <p class="featured-post-author-desc mb-0 pt-0">
                                    {{
                                      new Date(item.PublishedDate).toLocaleString("default", {
                                        month: "short",
                                      })
                                    }}
                                    {{ new Date(item.PublishedDate).getDate() }},
                                    {{ new Date(item.PublishedDate).getFullYear() }}
                                    <i class="author-time-dot fas fa-circle"></i>
                                    <span class="span-reading-time rt-reading-time">
                                      <span class="rt-label rt-prefix"></span>
                                      <span class="rt-time">8</span>
                                      <span class="rt-label rt-postfix"> min read </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div> -->
                 
                  <div v-if="currentDynamicData == 'news-list'">
                        <div class="video-list">
                          <div class="container t-space-40">
                            <div class="row">
                              <div
                                v-for="item in data['news-list'].data.dynamicResult"
                                :key="item.id"
                                class="w-full px-4 mb-16 cursor-pointer smd:w-1/2"
                              >
                                <div class="blog-back">
                            <div class="post-thumb">
                              <tez-link :to="item.NavURL" :title="item.Title" :aria-label="item.Image.alternativeText" v-if="item.NavURL">
                                <img
                                  class="lazyloaded"
                                  v-if="item.Image"
                                  v-rxlazy="item.Image"
                                  :alt="item.Image.alternativeText"
                                  :width="item.Image.width"
                                  :height="item.Image.height"
                                />
                              </tez-link>
                         </div>
            <div class="post-body py-5 px-6 bg-themelight-10 dark:bg-themedark-70">
              <span
                class="post-tag-container"
                v-if="item.Classification && item.Classification.Title"
                >{{ item.Classification.Title }}</span
              >
              <div
                class="post-category-container mb-2"
                v-if="item.Category"
                v-for="items in item.Category"
              >
                <tez-link :to="items.NavURL" :title="items.Title" class="font-14 post-category pt-0 text-themedark-0 dark:text-themedark-75">{{
                  items.Title
                }}</tez-link>
              </div>
              <a
                :href="item.NavURL"
                class="post-title"
                :title="item.Title"
                >{{ item.Title }}</a
              >
            </div>
            <div class="post-footer">
              <div class="media flex items-center mt-auto">
                <div class="media-body">
                  <p class="featured-post-author-desc mb-0 pt-0">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "short",
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                    <!-- <i class="author-time-dot fas fa-circle"></i>
                    <span class="span-reading-time rt-reading-time" v-if="data.ReadingTime">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">{{data.ReadingTime}}</span>
                      <span class="rt-label rt-postfix"> min read </span>
                    </span> -->
                  </p>
                </div>
              </div>
            </div>
                                 </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  
                  <div v-if="currentDynamicData == 'whitepaper-list'">
                    <!-- <whitepaper-list :data="data['whitepaper-list'].data"/> -->
                      <div class="video-list">  
                            <div class="container t-space-40">
                              <div class="row">
                                <div
                                  v-for="item in data['whitepaper-list'].data.dynamicResult"
                                  :key="item.id"
                                  class="w-full px-4 mb-16 cursor-pointer smd:w-1/2"
                                >
                                <div >
                                  <div class="post-thumb">
                                    <tez-link :to="item.NavURL" :title="item.Title" :aria-label="item.Image.alternativeText">
                                      <img
                                        class="lazyloaded"
                                        v-if="item.Image"
                                        v-rxlazy="item.Image"
                                        :alt="item.Image.alternativeText"
                                        :width="item.Image.width"
                                        :height="item.Image.height"
                                      />
                                    </tez-link>
                                  </div>
                                  <div class="post-body py-5 px-6 bg-themelight-10 dark:bg-themedark-70">
                                    <span class="post-tag-container" v-if="item.Classification">{{
                                      item.Classification.Title
                                    }}</span>
                                    <div class="mb-2 post-category-container" v-if="item.Category">
                                      <tez-link
                                        v-if="item.Category.NavURL"
                                        :to="item.Category.NavURL"
                                        :title="item.Category.Title"
                                        class="pt-0 font-14 post-category"
                                      >
                                        {{ item.Category.Title }}
                                      </tez-link>
                                    </div>
                                    <tez-link :to="item.NavURL" :title="item.Title" class="pt-0 font-14 post-category post-title">
                                     {{ item.Title }}
                                      <!-- <div class="h3_sm">{{ item.Title }}</div> -->
                                    </tez-link>
                                    <div class="mailpoet_paragraph">
                                      <button
                                        @click="emitURLEvent(item.NavURL, item.Attachment.url)"
                                        class="mt-4 btn btn_primary btn_sm"
                                      >
                                        Download Now
                                      </button>
                                      <!-- <tez-link :to="item.NavURL" class="mt-4 btn btn_sm">Download Now</tez-link> -->
                                    </div>
                                    <!--  <div class="">
                                      <tcmform :url="item.Attachment" />
                                    </div> -->
                                  </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>

                  <div v-if="currentDynamicData == 'guide-list'">
                    <!-- <whitepaper-list :data="data['whitepaper-list'].data"/> -->
                      <div class="video-list">
                            <div class="container t-space-40">
                              <div class="row">
                                <div
                                  v-for="item in data['guide-list'].data.dynamicResult"
                                  :key="item.id"
                                  class="w-full mb-16 cursor-pointer md:w-1/2 md:px-4"
                                >
                                <div >
                                  <div class="post-thumb">
                                    <tez-link :to="item.NavURL" :title="item.Title" :aria-label="item.Image.alternativeText">
                                      <img
                                        class="lazyloaded"
                                        v-if="item.Image"
                                        v-rxlazy="item.Image"
                                        :alt="item.Image.alternativeText"
                                        :width="item.Image.width"
                                        :height="item.Image.height"
                                      />
                                    </tez-link>
                                  </div>
                                  <div class="post-body py-5 px-6 bg-themelight-10 dark:bg-themedark-70">
                                    <span class="post-tag-container" v-if="item.Classification">{{
                                      item.Classification.Title
                                    }}</span>
                                    <div class="mb-2 post-category-container" v-if="item.Category">
                                      <tez-link
                                        v-if="item.Category.NavURL"
                                        :to="item.Category.NavURL"
                                        :title="item.Category.Title"
                                        class="pt-0 font-14 post-category"
                                      >
                                        {{ item.Category.Title }}
                                      </tez-link>
                                    </div>
                                    <tez-link :to="item.NavURL" :title="item.Title" class="pt-0 font-14 post-category post-title">
                                     {{ item.Title }}
                                      <!-- <div class="h3_sm">{{ item.Title }}</div> -->
                                    </tez-link>
                                    <div class="mailpoet_paragraph">
                                      <button
                                        @click="emitURLEvent(item.NavURL, item.Attachment.url)"
                                        class="mt-4 btn btn_primary btn_sm"
                                      >
                                        Download Now
                                      </button>
                                      <!-- <tez-link :to="item.NavURL" class="mt-4 btn btn_sm">Download Now</tez-link> -->
                                    </div>
                                    <!--  <div class="">
                                      <tcmform :url="item.Attachment" />
                                    </div> -->
                                  </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>

                    <div v-if="currentDynamicData == 'dynamicResult'">
                        <div class="video-list">
                          <div class="container t-space-40">
                            <div class="row">
                              <div
                                v-for="item in data.dynamicResult"
                                :key="item.id"
                                class="w-full px-4 mb-16 cursor-pointer smd:w-1/2"
                              >
                                <div class="blog-back">
            <div class="post-thumb">
              <tez-link :to="item.NavURL" :title="item.Title" :aria-label="item.Image.alternativeText">
                <img
                  class="lazyloaded"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </tez-link>
            </div>
            <div class="post-body py-5 px-6 bg-themelight-10 dark:bg-themedark-70">
              <span
                class="post-tag-container"
                v-if="item.Classification && item.Classification.Title"
                >{{ item.Classification.Title }}</span
              >
              <div
                class="post-category-container mb-2"
              >
                <tez-link :to="item.Category[0].NavURL" :title="item.Category[0].Title" class="font-14 post-category pt-0 text-themedark-0 dark:text-themedark-75">{{
                  item.Category[0].Title
                }}</tez-link>
              </div>
              <tez-link
                :to="item.NavURL"
                class="post-title"
                :title="item.Title"
                >{{ item.Title }}</tez-link
              >
            </div>
            <div class="post-footer">
              <div class="media flex items-center mt-auto blogAuthor">
                <tez-link
                  :to="item.NavURL"
                  :title="item.BlogAuthor.Name"
                  v-if="item.BlogAuthor && item.BlogAuthor.Image"
                >
                  <img
                    class="
                      mr-3
                      rounded-circle
                      featured-post-author-thumb
                      ls-is-cached
                      lazyloaded
                    "
                    v-rxlazy="item.BlogAuthor.Image"
                    width="60"
                    height="60"
                    :alt="item.Image.alternativeText"
                  />
                </tez-link>
                <div class="media-body">
                  <tez-link
                    :to="item.NavURL"
                  :title="item.BlogAuthor.Name"
                    class="mt-0 featured-post-author-title mb-0"
                    v-if="item.BlogAuthor"
                    >{{ item.BlogAuthor.Name }}</tez-link
                  >
                  <p v-if="item.PublishedDate" class="featured-post-author-desc mb-0 pt-0">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "short",
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                    <!-- <i class="author-time-dot fas fa-circle"></i>
                    <span class="span-reading-time rt-reading-time" v-if="data.ReadingTime">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">{{data.ReadingTime}}</span>
                      <span class="rt-label rt-postfix"> min read </span>
                    </span> -->
                  </p>
                  <p v-if="item.LastModifiedDate" class="featured-post-author-desc mb-0 pt-0">
                    {{
                      new Date(item.LastModifiedDate).toLocaleString("default", {
                        month: "short",
                      })
                    }}
                    {{ new Date(item.LastModifiedDate).getDate() }},
                    {{ new Date(item.LastModifiedDate).getFullYear() }}
                    <!-- <i class="author-time-dot fas fa-circle"></i>
                    <span class="span-reading-time rt-reading-time" v-if="data.ReadingTime">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">{{data.ReadingTime}}</span>
                      <span class="rt-label rt-postfix"> min read </span>
                    </span> -->
                  </p>
                </div>
              </div>
            </div>
                                 </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>

                   <div v-if="currentDynamicData == 'all-insights' || currentDynamicData == ''">
                        <div class="video-list">
                          <div class="container t-space-40">
                            <div class="row">
                              <div
                                v-for="item in allInsightsData"
                                :key="item.id"
                                class="w-full px-4 mb-16 cursor-pointer smd:w-1/2"
                              >
                                <div class="blog-back">
            <div class="post-thumb">
              <a :href="item.NavURL" :title="item.Title" :aria-label="item.Image.alternativeText">
                <img
                  class="lazyloaded"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </a>
            </div>
            <div class="post-body py-5 px-6 bg-themelight-10 dark:bg-themedark-70">
              <span
                class="post-tag-container"
                v-if="item.Classification && item.Classification.Title"
                >{{ item.Classification.Title }}</span>
                <div class="post-category-container mb-2" v-if="item.Category">
                  <div v-if="item.Category[0]">
                    <a :href="item.Category[0].NavURL" :title="item.Category[0].Title" class="font-14 post-category pt-0 text-themedark-0 dark:text-themedark-75">{{item.Category[0].Title}}</a>  
                  </div>
                </div>
              <!-- <div
                class="post-category-container mb-2"
                :key="items.id"
                v-for="items in item.Category"
              >
               <template v-if="item.Category">
                <a :href="items.NavURL" :title="items.Title" class="font-14 post-category pt-0 text-themedark-0 dark:text-themedark-75">{{
                  items.Title
                }}</a>
              </template> 
              </div> -->
              <a
                :href="item.NavURL"
                class="post-title"
                :title="item.Title"
                >{{ item.Title }}</a
              >
            </div>
            <div class="post-footer">
              <div class="media flex items-center mt-auto">
                <tez-link
                  :to="item.BlogAuthor.NavURL"
                  :title="item.BlogAuthor.Name"
                  v-if="item.BlogAuthor && item.BlogAuthor.Image"
                >
                  <img
                    class="
                      mr-3
                      rounded-circle
                      featured-post-author-thumb
                      ls-is-cached
                      lazyloaded
                    "
                    v-rxlazy="item.BlogAuthor.Image"
                    width="60"
                    height="60"
                    :alt="item.BlogAuthor.Name"
                  />
                </tez-link>
                <div class="media-body" v-if="item.PublishedDate">
                  <tez-link
                    :to="item.BlogAuthor.NavURL"
                    :title="item.BlogAuthor.Name"
                    class="mt-0 featured-post-author-title mb-0"
                    v-if="item.BlogAuthor"
                    >{{ item.BlogAuthor.Name }}</tez-link
                  >
                  
                  <p class="featured-post-author-desc mb-0 pt-0">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "long",
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                    <!-- <i class="author-time-dot fas fa-circle"></i>
                    <span class="span-reading-time rt-reading-time" v-if="data.ReadingTime">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">{{data.ReadingTime}}</span>
                      <span class="rt-label rt-postfix"> min read </span>
                    </span> -->
                  </p>
                </div>
              </div>
            </div>
                                 </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>

                  <!-- <div v-if="currentDynamicData == 'guide-list'"><news-list :data="data['guide-list'].data"/></div> 
                  <div v-if="currentDynamicData == 'allInsightsData'"><news-list :data="data['guide-list'].data"/></div> -->
                  
                  <!-- <video-list /> -->
                  <!-- <div class="blog-back">
                    <div class="post-thumb">
                      <a :href="item.NavURL">
                        <img
                          class="lazyloaded"
                          v-if="item.Image"
                          v-rxlazy="item.Image"
                          :alt="item.Image.alternativeText"
                          :width="item.Image.width"
                          :height="item.Image.height"
                        />
                      </a>
                    </div>
                    <div class="post-body">
                      <span class="post-tag-container">{{
                        item.Classification.Title
                      }}</span>
                      <div
                        class="mb-2 post-category-container"
                        v-if="item.Category"
                        v-for="items in item.Category"
                      >
                        <a
                          :href="items.NavURL"
                          class="pt-0 font-14 post-category"
                        >
                          {{ items.Title }}
                        </a>
                      </div>
                      <a
                        :href="item.NavURL"
                        class="post-title"
                        :title="item.Title"
                        >{{ item.Title }}</a
                      >
                    </div>
                    <div class="post-footer">
                      <div class="flex items-center mt-auto media">
                        <a
                          :href="item.BlogAuthor.NavURL"
                          :title="item.BlogAuthor.Name"
                          v-if="item.BlogAuthor && item.BlogAuthor.Image"
                        >
                          <img
                            class="
                              mr-3
                              rounded-circle
                              featured-post-author-thumb
                              ls-is-cached
                              lazyloaded
                            "
                            v-rxlazy="item.BlogAuthor.Image"
                            width="60"
                            height="60"
                          />
                        </a>
                        <div class="media-body">
                          <a
                            :href="item.BlogAuthor.NavURL"
                            :title="item.BlogAuthor.Name"
                            class="mt-0 mb-0 featured-post-author-title"
                            v-if="item.BlogAuthor"
                            >{{ item.BlogAuthor.Name }}</a
                          >
                          <p class="pt-0 mb-0 featured-post-author-desc">
                            {{
                              new Date(item.PublishedDate).toLocaleString(
                                "default",
                                {
                                  month: "short",
                                }
                              )
                            }}
                            {{ new Date(item.PublishedDate).getDate() }},
                            {{ new Date(item.PublishedDate).getFullYear() }}
                            <i class="author-time-dot fas fa-circle"></i>
                            <span class="span-reading-time rt-reading-time">
                              <span class="rt-label rt-prefix"></span>
                              <span class="rt-time"
                                >{{ item.ReadingTime }} min read</span
                              >
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!-- </div> -->

              </div>
            </div>
          </div>
          <div class="right-sidebar pb-6 smd:mt-32">
            <!-- Categiries Starts Here  -->
            <div class="featured-main">
              <h2 class>Categories</h2>
              <div class="categories-list">
                
                <ul class>
                  <li
                    v-for="item in data['blog-categories'].data.dynamicResult.slice(0 , 13)"
                    v-bind:key="item.Title"
                  >
                    <a
                      :href="item.NavURL === null ? '#' : item.NavURL"
                      class="tez-link-active nuxt-anchore text-themedark-0"
                      >{{ item.Title }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- Join Now  Starts Here -->
            <div class="featured-main">
              <div class="newsletter">
                <div class="h5">Get top Insights and news from our technology experts.</div>
                <form method="POST" id="zcampaignOptinForm" style="margin: 0px; width: 100%" action="https://maillist-manage.com/weboptin.zc" target="_zcSignup">
            <div class="SIGNUP_FLD ">
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
            <div class="featured-main customCTA">
                <tez-link title="Contact to Radixweb" to="/contact-us">
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/small_banner_cd9f55542a.jpg'"
                  alt="Contact to Radixweb" 
                  width="347"
                  height="438"
                />
                </tez-link>
            </div>

            
            <!-- Social With Us -->
            <div class="be-social">
              <h2 class="text-center">Be Social with us</h2>
              <ul class="justify-center">
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
                      width="38"
                      height="66"
                      alt="Facebook"
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
                      width="38"
                      height="66"
                      alt="Twitter"
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
                      width="38"
                      height="66"
                      alt="Instagram"
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
                      width="38"
                      height="66"
                      alt="Linkedin"
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
                      width="38"
                      height="66"
                      alt="YouTube"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import NewsList from './news-list.vue';
import VideoList from './video-list.vue';
import WhitepaperList from './whitepaper-list.vue';

export default {
  
  props: {
    data: Object,
  },
  data() {
    return {
      tabId: 0,
      allDataTrigger: {
        type: Boolean,
        default: true,
      },
      arrayTabs: ["Guides", "Whitepapers", "News", "Videos"],
      arrayDynamicName: ["guide-list", "whitepaper-list", "news-list", "video-list"],
      currentDynamicData : '' ,
    };
  },
  computed : {
        allInsightsData () {
          return [...this.data['dynamicResult'] , ...this.data['guide-list'].data.dynamicResult , ...this.data['whitepaper-list'].data.dynamicResult , ...this.data['news-list'].data.dynamicResult , ...this.data['video-list'].data.dynamicResult]
        }
  },
  methods: {
    contentvisiblity(value) {
      this.tabId = value;
      this.currentDynamicData = this.arrayDynamicName[value];
      this.allDataTrigger = false;
    },
    backToAll() {
      this.allDataTrigger = true;
      this.tabId = "";
    },
  },
  components: {
    VideoList,
    NewsList,
    WhitepaperList,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .insight-tabs {
    @apply font-medium;
    a {
      @apply no-underline;
    }
    .insightDomainList {
      @apply flex mb-0 list-none overflow-auto pt-3 flex-row cursor-pointer;
    }
    .insightname {
      @apply no-underline cursor-pointer;
      &.active {
        @apply text-primary;
      }
      li > a {
        font-size: 1.125em;
        &.active {
          @apply border-primary;
        }
      }
    }
  }

  .blog-inner {
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    a {
      @apply no-underline;
    }
    .blog-left {
      @apply w-full smd:pr-16;
      /* px-4 */
      @screen smd {
        width: 70%;
      }
      .post-category-container {
        @apply w-full mb-2;
        a {
          @apply font-semibold no-underline;
          &:hover,
          &:active {
            @apply text-themedark-0;
            transition: 0.3s ease all;
          }
        }
      }
      h1 {
        @apply font-poppins font-medium p-0 mb-1;
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

      .blog-auth-detail {
        .featured-post-author-thumb {
          @apply border-2 border-solid border-primary rounded-full;
        }
        .featured-post-author-title {
          @apply font-semibold no-underline transition-all duration-300 ease-in-out;
          &:hover,
          &:active {
            @apply text-primary;
            transition: 0.3s ease all;
          }
        }
        .featured-post-author-desc {
          @apply text-sm leading-6 font-poppins p-0;
          letter-spacing: 0.0175rem;
        }
      }
      .radix-socialmedia,
      .radix-social-share {
        ul {
          @apply items-center;
          li {
            @apply ml-4;
          }
        }
      }
    }

    .row {
      .blog-size {
        @apply w-full;
        transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out,
          -webkit-transform 0.15s ease-in-out;
        min-height: 100%;
        /* padding: 0 0.938rem; */
        @screen md {
          // @apply w-1/2;
        }
        @screen smd {
          // @apply w-1/2 px-6;
        }

        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 1.5rem;
        }

        @screen md {
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4),
          &:nth-child(3) {
            margin-top: 1.5rem;
          }
        }
        @screen smd {
          &:nth-child(3),
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4) {
            margin-top: 3rem;
          }
        }
        .video-list{
          .post-body{
           
              .post-title {
              @apply w-full font-medium;
              font-size: 1.25rem;
              line-height: 2rem;
              &:hover,
              &:active {
                @apply text-primary;
                transition: 0.3s ease all;
              }
              @screen xxsm {
                font-size: 1.375rem;
              }

              @screen xl {
                font-size: 1.75rem;
                line-height: 2.625rem;
              }
            }
            
          }
        }
        .blog-back {
          @apply bg-themelight-10 flex flex-col h-full dark:bg-themedark-10;

          .post-body {
            @apply p-4 flex flex-col items-start flex-grow;
            @screen xsm {
              padding: 1.25rem;
            }

            @screen md {
              padding: 1.5rem;
            }

            @screen sxl {
              padding: 1.25rem 1.5625rem;
            }

            .post-tag-container {
              @apply uppercase text-themedark-0 bg-customcolor-70 rounded mt-0 font-medium;
              font-size: 0.75rem;
              padding: 0.125rem 0.625rem;
              margin-right: 0.313rem;
              line-height: normal;
              margin-bottom: 0.625rem;

              @screen sm {
                font-size: 0.875rem;
                padding: 0.125rem 0.875rem;
              }
            }

            .post-category-container {
              @apply w-full mb-2;
              a {
                @apply font-semibold;
                &:hover,
                &:active {
                  @apply text-themedark-0;
                  transition: 0.3s ease all;
                }
              }
            }

            .post-title {
              @apply w-full font-medium;
              font-size: 1.25rem;
              line-height: 2rem;
              &:hover,
              &:active {
                @apply text-primary;
                transition: 0.3s ease all;
              }
              @screen xxsm {
                font-size: 1.375rem;
              }

              @screen xl {
                font-size: 1.75rem;
                line-height: 2.625rem;
              }
            }
          }
          .post-thumb {
            img {
              &:hover {
                transition: transform 0.6s cubic-bezier(0.11, 0, 0.31, 1),
                  -webkit-transform 0.6s cubic-bezier(0.11, 0, 0.31, 1);
                width: 100%;
              }
            }
          }
        }

        .post-footer {
          @apply border-t-2 border-solid border-white bg-themelight-10 dark:bg-themedark-65 dark:text-themelight-0;
          padding: 1.25rem 1.5625rem;

          .featured-post-author-thumb {
            height:3.75rem;
            width:3.75rem;
            @apply border-2 border-solid border-primary rounded-full;
          }
          .featured-post-author-title {
            @apply font-semibold;
            &:hover,
            &:active {
              @apply text-primary;
              transition: 0.3s ease all;
            }
          }
          .featured-post-author-desc {
            @apply text-sm leading-6 font-poppins p-0;
            letter-spacing: 0.0175rem;
          }
        }
      }
    }

    @apply w-full px-4 smd:pr-16;

    .post-category-container {
      @apply w-full mb-2;
      a {
        @apply  font-semibold no-underline;
        &:hover,
        &:active {
          @apply text-themedark-0;
          transition: 0.3s ease all;
        }
      }
    }
    h1 {
      @apply font-poppins font-medium p-0 mb-1;
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

    .right-sidebar {
      a {
        &:hover {
          color: #025fa2;
        }
      }
      @apply px-4;
      @screen smd {
        width: 30%;
      }
      /* @screen sxl {
        width: 22.9375rem;
      } */
      h2 {
        @apply font-poppins font-semibold text-xl m-0 border-b-2 border-solid border-white leading-6;
        padding: 1.0625rem 1.875rem;
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
          @apply bg-primary dark:bg-themedark-70 text-center bg-cover bg-no-repeat;
          padding: 1.875rem 1.875rem 1.25rem;
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/sidebar_newsletter_bg_2dede30e37.png");
          .h5 {
            @apply text-white font-poppins font-medium text-2xl leading-9 mb-5;
            letter-spacing: 0.0375rem;
          }
          input {
            @apply text-base w-full rounded-full border-none border-0 py-3 pr-6 font-poppins font-light bg-no-repeat outline-none text-themedark-0;
            padding-left: 3.4375rem;
            background-image: url('https://d2ms8rpfqc4h24.cloudfront.net/email_newsletter_d9cd363828.svg');
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
        .twiiter-wraper {
          height: 33.75rem;
          overflow: auto;
        }
        &.customCTA{
          width:18.5rem;
          height:23.375rem;
          @screen smd{
            width:unset;
            height:unset;
          }
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