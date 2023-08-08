<template>
<div class="px-4 rxsection-y-space">
</div>
</template>

<script>
// const DynamicComponent = () => import("./dynamic-component.vue");
import DynamicComponent from "./dynamic-component.vue";
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
    props:{
        data: Object
    },
    components: {
        DynamicComponent,
    },
}
</script>
<style lang="scss">
@layer utilities {
    .csTitle {
        @apply absolute w-full text-center bottom-0 px-4 py-8 bg-opacitybg-30 text-white transition-all ease-in-out duration-300;
    }
    .cswraper {
        &:hover {
             .csTitle{
                 @apply transform translate-y-full;
             }
             .casBox {
                opacity: 1;
                &::after, &::before {
                    opacity: 1;    
                    transform: scale(1);
                }
             }
        }
    }
    .casBox {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            text-align: center;
            content: "";
            background: rgba(15,22,40,.7);
            opacity: 0;
            backface-visibility: hidden;
        &::before, &::after {
            position: absolute;
            content: "";
            opacity: 0;
            transition: opacity .3s,transform .6s;
        }         
        &::after {
            top: 2rem;
            right: 3.125rem;
            bottom: 2rem;
            left: 3.125rem;
            border-right: 0.0625rem solid #ffffff;
            border-left: 0.0625rem solid #ffffff;
            transform: scale(1,0);
            transform-origin: 100% 0;
        }
        &::before{
            top: 3.125rem;
            right: 2rem;
            bottom: 3.125rem;
            left: 2rem;
            border-top: 0.0625rem solid #fff;
            border-bottom: 0.0625rem solid #fff;
            transform: scale(0,1);
            transform-origin: 0 0;
        }
    }
}
</style>