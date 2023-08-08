<template>
  <div class="rxsection-y-space t-2-col-circle-list">
    <div class="container">
      <h2>Simplified Device Onboarding for Enterprise Mobility Management Solutions</h2>
      <p
        class="para_md"
      >Ease your concerns about app onboarding with our robust streamlining facilities. We have a plethora of options that ensure your teams can access business data securely with on-point authentication</p>
      <div class="flex flex-wrap pt-4">
        <div class></div>
        <ul class="list-dot para_md md:w-6/12 lg:w-5/12 xl:w-4/12 px-4 ml-auto">
          <li>Email-based Enrollment</li>
          <li>Zero-touch Android Enrollment</li>
          <li>ROM-based Enrollment</li>
          <li>Windows Autopilot Enrollment</li>
          <li>IMEI-based Enrollment</li>
        </ul>
        <ul class="list-dot para_md md:w-6/12 lg:5/12 xl:4/12 px-4">
          <li>QR Code/ URL- based Enrollment</li>
          <li>Google AfW-based Enrollment</li>
          <li>GSuite-base Enrollment</li>
          <li>Apple DEP Enrollment</li>
          <li>Office 365-based Enrollment</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {};
</script>
<style lang="scss">
@layer utilities {
  .t-2-col-circle-list {
    @apply dark:bg-themedark-10 text-center;
    .list-dot {
      li {
        @apply relative text-left py-1 pr-4 pl-8;
        &:before {
          content: "";
          @apply bg-primary rounded-md absolute;
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          top: 1rem;
          left: 0;
        }
      }
    }
    .bgCard-row {
      @apply w-full md:mx-4;
    }
    @screen md {
      .bgCard-row {
        width: 45%;
      }
    }
    @screen xl {
      .bgCard-row {
        width: 22%;
      }
    }
  }
}
</style>