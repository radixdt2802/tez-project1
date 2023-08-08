<template>
  <div
    class="
      anvrsry-footer-design
      bg-themedark-0
      py-3
      flex flex-wrap
      items-center
    "
  >
    <div class="footer-design w-full">
      <div
        class="container-fluid flex flex-wrap justify-between items-center px-8"
      >
        <div class="social-media-icon w-full mb-3 md:mb-0 md:w-1/2">
          <ul class="social-media flex justify-center md:justify-start">
            <li class="px-1 bg-themedark-0">
              <a
                target="_blank"
                href="https://www.facebook.com/radixweb"
                title="Facebook"
                rel="nofollow noopener"
              >
                <img
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/facebook_black_Height_Footer_16_cba5fd54ba.svg'"
                />
              </a>
            </li>
            <li class="px-1 bg-themedark-0">
              <a
                target="_blank"
                href="https://twitter.com/radixweb"
                title="Twitter"
                rel="nofollow noopener"
              >
                <img
                  class="square"
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/twitter_black_Height_Footer_16_9a22006129.svg'"
                />
              </a>
            </li>
            <li class="px-1 bg-themedark-0">
              <a
                target="_blank"
                href="https://www.instagram.com/radixweb"
                title="Instagram"
                rel="nofollow noopener"
              >
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/instagram_black_Height_Footer_16_343a097f6b.svg'"
                />
              </a>
            </li>
            <li class="px-1 bg-themedark-0">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/radixweb"
                title="Linkedin"
                rel="nofollow noopener"
              >
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/linkedin_black_Height_Footer_16_f602020423.svg'"
                />
              </a>
            </li>
            <li class="px-1 bg-themedark-0">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC0iY-yQ7tGEFK0GXGPIu9Dg"
                title="YouTube"
                rel="nofollow noopener"
              >
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/youtube_black_Height_Footer_16_5abd83e458.svg'"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-list w-full md:w-1/2">
          <ul
            class="
              social-media
              text-themelight-0
              flex
              justify-center
              md:justify-end
            "
          >
            <li>
              <tez-link
                class="
                  text-themelight-0
                  border-r-2 border-themelight-0 border-solid
                  no-underline
                  px-2
                  menu-link
                "
                target="_blank"
                to="/"
                title="Radixweb"
                >Home</tez-link
              >
            </li>
            <li>
              <tez-link
                class="
                  text-themelight-0
                  border-r-2 border-themelight-0 border-solid
                  no-underline
                  px-2
                  menu-link
                "
                target="_blank"
                to="/insights"
                title="Insights"
                >Insights</tez-link
              >
            </li>
            <li>
              <tez-link
                class="
                  text-themelight-0
                  border-r-2 border-themelight-0 border-solid
                  no-underline
                  px-2
                  menu-link
                "
                target="_blank"
                to="/contact-us"
                title="Contact Us"
                >Contact Us</tez-link
              >
            </li>
          </ul>
        </div>
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
  .anvrsry-footer-design {
    .footer-design {
      .menu-list {
        li {
          &:last-child {
            a {
              @apply border-0;
            }
          }
        }
        a.menu-link {
          &:hover {
            @apply text-themelight-0 underline;
            transition: 0.3s all ease;
          }
        }
      }
    }
  }
}
</style>