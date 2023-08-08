<template>
    <tez-link v-bind="$props"><slot /></tez-link>
</template>
<script type="text/javascript">
import  urlReplacer from "../utils/url-replacer";
const requestIdleCallback = window.requestIdleCallback ||
  function (cb) {
    const start = Date.now()
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      })
    }, 1)
  }

const cancelIdleCallback = window.cancelIdleCallback || function (id) {
  clearTimeout(id)
}
import {RouterLink} from "vue-router"
export default  {
    name: 'TezLink',
    props:{ ...RouterLink.props },
    // mounted () {
    //     this.handleId = requestIdleCallback(this.observe, { timeout: 2e3 })
    // },
    // beforeDestroy () {
    //   cancelIdleCallback(this.handleId)
    //   this.elementObserver.unobserve(this.$el);
    // },
    // methods: {
    //   observe () {
    //     // this.elementObserver = new IntersectionObserver(
    //     //     async ([{ isIntersecting }]) => {
    //     //       if (isIntersecting) {
    //     //         this.elementObserver.unobserve(this.$el);
    //     //         cancelIdleCallback(this.handleId)
    //     //         webWorker.postMessage({uri:urlReplacer(this.to),host:window.location.host,action:'load-payload'})
    //     //       }
    //     //     },
    //     //     {}
    //     //   );
    //       this.elementObserver.observe(this.$el);
    //   }
    // }
  }
</script>
