<template>
      <div class="right-sidebar">
        
          <!-- Featured Starts Here -->
          <div class="featured-main">
            <h2 class>Featured Post</h2>
            <div class="featured-list">
              <ul class>
                <li>
                  <a
                    href="https://radixweb.com/blog/manufacturing-industry-challenges-and-how-to-overcome-them"
                    title="How Manufacturing Industry Can End Their Woes with Custom Software Solutions"
                    class="d-flex align-items-lg-start align-items-center"
                  >
                    <span>1</span>How Manufacturing Industry Can End Their Woes
                    with Custom Software Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://radixweb.com/blog/why-software-development-outsourcing-is-good-choice"
                    title="Software Development Outsourcing: Going Strong More Than Ever!"
                    class="d-flex align-items-lg-start align-items-center"
                  >
                    <span>2</span>Software Development Outsourcing: Going
                    Strong More Than Ever!
                  </a>
                </li>
                <li>
                  <a
                    href="https://radixweb.com/blog/reduce-software-development-cost-with-dedicated-programmers"
                    title="Hire Dedicated Programmers to Mitigate Software Development Cost"
                    class="d-flex align-items-lg-start align-items-center"
                  >
                    <span>3</span>Hire Dedicated Programmers to Mitigate
                    Software Development Cost
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Categiries Starts Here  -->
          <div class="featured-main">
            <h2 class>Categories</h2>
            <div class="categories-list">
              <ul class>
                 <li v-for="item in data.categories.data.dynamicResult" v-bind:key="item.Title">
                    <a
                      :href="item.NavURL === null ? '#' : item.NavURL"
                      class="nuxt-link-active nuxt-anchore"
                    >{{item.Title}}</a>
                  </li>
              </ul>
            </div>
          </div>

          <!-- Join Now  Starts Here -->
          <div class="featured-main">
            <div class="newsletter">
              <h5>Get top Insights and news from our technology experts.</h5>
              <form>
                <input type="email" placeholder="email here *" />
                <input type="submit" value="Join Now" />
              </form>
            </div>
          </div>
          <!-- Social With Us -->
          <div class="be-social">
            <h2>Be Social with us</h2>
            <ul>
              <li>
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Facebook_cd717a4519.svg'"
                  width="38"
                  height="66"
                />
              </li>
              <li>
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Twitter_cd5daa6d78.svg'"
                  width="38"
                  height="66"
                />
              </li>
              <li>
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Instagram_c881ea1c91.svg'"
                  width="38"
                  height="66"
                />
              </li>
              <li>
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Linked_In_520e158eb3.svg'"
                  width="38"
                  height="66"
                />
              </li>
              <li>
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_You_Tube_9d1c6a355e.svg'"
                  width="38"
                  height="66"
                />
              </li>
            </ul>
          </div>
      </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';  
const blogCategory = defineAsyncComponent(() => import("./blog-categories.vue"));
export default {
  props: {
    data: Object,
  },
  name: "blog-sidebar",
  components: {
    blogCategory,
    blogTags,
  },
};
</script>