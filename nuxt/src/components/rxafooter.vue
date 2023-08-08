<template>
    <footer class="rxa_footer py-4">
        <div class="container">
            <div class="flex md:justify-between sxl:justify- items-center flex-wrap md:flex-nowrap justify-center text-center">
                <div class="xl:w-3/12">
                <tez-link to="/" title="Radixweb">
                     <img
                        v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/radixweb_footer_logo_1119629006.png'
                        "
                        alt="Radixweb – An IT Software and App Development Company"
                        width="65"
                        height="65"
                        class="mx-auto smd:mx-0"
                    />
                </tez-link>
                </div>
                <div class="md:px-4 w-full xl:w-6/12 text-center">
                    <p class=" text-sm text-rxa-gray99 pt-4 pb-0 md:pt-0">Copyright &copy;
                    <span class="inline">{{ new Date().getFullYear() }}</span> Radixweb. All Rights Reserved. An ISO 9001:2015 Certified Company</p>
                </div>
                <div class="flex py-3  xl:w-3/12 smd:justify-end justify-center">
                    <ul class="socialLinks flex">
                        <li>
                        <a
                            title="Facebook"
                            target="_blank"
                            rel="nofollow noopener"
                            href="https://www.facebook.com/radixweb"
                        >
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        </li>
                        <li>
                        <a
                            title="Instagram"
                            target="_blank"
                            rel="nofollow noopener"
                            href="https://www.instagram.com/radixweb"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                        </li>
                        <li>
                        <a
                            title="Linkedin"
                            target="_blank"
                            rel="nofollow noopener"
                            href="https://www.linkedin.com/company/radixweb"
                        >
                            <i class="fab fa-linkedin"></i>
                        </a>
                        </li>
                        <li>
                        <a
                            title="Twitter"
                            target="_blank"
                            rel="nofollow noopener"
                            href="https://twitter.com/radixweb"
                        >
                            <i class="fab fa-twitter-square"></i>
                        </a>
                        </li>
                        <li>
                        <a
                            title="Youtube"
                            target="_blank"
                            rel="nofollow noopener"
                            href="https://www.youtube.com/user/Radixweb2000"
                        >
                            <i class="fab fa-youtube-square"></i>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@layer utilities {
 .socialLinks {
      li {
        display: inline-block;
        line-height: 0;
        &:not(:last-child) {
          margin-right: 0.75rem;
        }
        a {
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/footer_social_6306d1be00_19_7dd3651c2e.svg");
          @apply inline-block bg-cover bg-no-repeat overflow-hidden transition-all ease-in-out duration-500;
          background-size: 3.8125rem;
          background-position: left -1.0005rem top -0.5005rem;
          width: 2rem;
          height: 2rem;
          &:hover {
            @apply transition-all ease-in-out duration-500;
            background-position: left -1.0005rem top -3.563rem;
          }
        }
        &:nth-child(2) {
          a {
            background-position: left -1.0005rem top -6.5625rem;
            &:hover {
              background-position: left -0.938rem top -9.625rem;
            }
          }
        }
        &:nth-child(3) {
          a {
            background-position: left -1.0005rem top -12.5625rem;
            &:hover {
              background-position: left -1.063rem top -15.625rem;
            }
          }
        }
        &:nth-child(4) {
          a {
            background-position: left -1.063rem top -18.6255rem;
            &:hover {
              background-position: left -1.063rem top -21.688rem;
            }
          }
        }
        &:last-child {
          a {
            background-position: left -1.063rem top -24.6255rem;
            &:hover {
              background-position: left -1.063rem top -27.688rem;
            }
          }
        }
      }
    }
}
</style>