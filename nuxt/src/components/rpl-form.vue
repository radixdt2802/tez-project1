<template>
  <div class="rpl-form">
    <div class="text-center">
      <h2>Let the RPL excitement begin and Cheer loud.</h2>
    </div>
    <div class="rxsection-t-space container">
      <h2 class="form-title mx-auto">REGISTRATION FORM</h2>
      <div class="responsive-iframe">
    <iframe
              width="1280"
              height="720"
              :src="data.SubTitle"
              frameborder="0"
              class="aspect-video mx-auto"
              rel="nofollow"
            ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
    data:Object
}
}
</script>

<style lang="scss">
@layer utilities{
  .rpl-form{
    h2{
      color: #5b177b;
      &:not(.form-title){
        color: #f5deb3;
        background: #c21d00;
        margin: 0;
        padding: 33px;
        
    }
    }
  }
}
</style>