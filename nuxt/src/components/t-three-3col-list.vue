<template>
  <div class="rxsection-y-space sec-network">
    <div class="container">
      <div class="row">
        <div class="bgCard-row">
          <div class="Bg-card">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/servers_1c5e0dd090.svg'"
              width="65"
              height="65"
            />
            <h3 class="para_lg">Servers</h3>
            <ul class="square_list">
              <li>Dell poweredge servers</li>
              <li>Dedicated cloud-based demo servers for application demonstration</li>
            </ul>
          </div>
        </div>
        <div class="bgCard-row">
          <div class="Bg-card">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/OS_Servers_a5d26a2c3e.svg'"
              width="65"
              height="65"
            />
            <h3 class="para_lg">Server Os Environment</h3>
            <ul class="square_list">
              <li>Ubuntu</li>
              <li>CentOS</li>
              <li>Window 2016 and 2019</li>
            </ul>
          </div>
        </div>
        <div class="bgCard-row">
          <div class="Bg-card">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Virtualization_47366d414d.svg'"
              width="65"
              height="65"
            />
            <h3 class="para_lg">Virtualization</h3>
            <ul class="square_list">
              <li>Hyperv</li>
              <li>Openstack</li>
              <li>Citrix</li>
            </ul>
          </div>
        </div>
        <div class="bgCard-row">
          <div class="Bg-card">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Network_e8324870d8.svg'"
              width="65"
              height="65"
            />
            <h3 class="para_lg">Network</h3>
            <ul class="square_list">
              <li>Gigabit ethernet and fiber optics</li>
              <li>HP aruba switches with L2 and L3 for secured network</li>
              <li>VLAN for secured network traffic</li>
              <li>CAT6 network cables</li>
            </ul>
          </div>
        </div>
        <div class="bgCard-row">
          <div class="Bg-card">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Database_f707130383.svg'"
              width="65"
              height="65"
            />
            <h3 class="para_lg">Databases</h3>
            <ul class="square_list">
              <li>MySQL</li>
              <li>MS SQL</li>
              <li>PostgreSQL</li>
              <li>NoSQL</li>
            </ul>
          </div>
        </div>
        <div class="bgCard-row">
          <div class="Bg-card">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Security_7de59bc2d0.svg'"
              width="65"
              height="65"
            />
            <h3 class="para_lg">Security and Connectivity</h3>
            <ul class="square_list">
              <li>Uninterruptible power supply – UPS</li>
              <li>Matrix security system</li>
              <li>Redundant fiber connections</li>
              <li>Electric panel room, solar panel</li>
              <li>Redundant internet and power supply -DG set</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {};
</script>
<style lang="scss">
@layer utilities {
  .sec-network {
    .bgCard-row {
      @apply smd:w-4/12 md:w-6/12 w-full px-4;
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-10;
      }
      @screen md {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
      .Bg-card {
        @apply h-full py-10 px-8 border-solid;
        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5;
        img {
          padding-bottom: 1.375rem;
        }
        h3 {
          @apply xl:pb-3 p-0;
          @screen smd {
            font-size: 1.375rem;
            @apply leading-8;
          }
          @screen xl {
            @apply text-2xl leading-9;
          }
          @screen xxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
        }
        .square_list {
          @apply sxl:pt-0;
          li {
            @apply mb-0 text-lg;
            &::before {
              top: 0.875rem;
              @apply border-primary;
            }
          }
        }
      }
    }
  }
}
</style>