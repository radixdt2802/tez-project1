<template>
        <slot></slot>
        <div ref="lastNode" :style="defaultHeight"></div>
</template>

<script>
export default {
        //emits: ['updateClick'],
        data() {
        return {items: [],isInViewPort:false,index:0,pages:0,isFirstTime:true,observer:undefined,

       defaultHeight: {
        "min-height": `${
          2 * 250
        }px`,
      }
        }
    },
    props:["sourcePath","currentPage","disabledLazy"],
    watch:{
        currentPage(value){
            if(this.index != value){
            this.index = value;    
            this.loadJson(this.index);
            }
            
        },
        sourcePath(value){
            if(!this.observer)
                this.subscribeElement();
            //this.loadJson(this.index+1)
        }
    },
        mounted() {
        if(!this.disabledLazy){
            this.subscribeElement();
        }
        
        },
        methods: {
            subscribeElement(){
              this.observer = new IntersectionObserver(async ([{ isIntersecting }]) => {
            this.isInViewPort = isIntersecting;
            if (isIntersecting) {
                this.index = this.isFirstTime ? this.index + this.currentPage : this.index + 1;
                this.isFirstTime =false;
                this.loadJson(this.index);
                
            }
        });
        this.observer.observe(this.$refs.lastNode, { rootMargin: "0px" });
            },
            async loadJson(){
                if(this.sourcePath){
                        // this.index = this.index+1;
                        var response = await fetch(`\\payload\\${this.sourcePath}\\${this.index}.json`);
                        var data= await response.json();
                        this.pages = parseInt(data.totalCount / 9);
                        this.$emit("addItems",{items:data.items,pages:this.pages,currentPage:this.index});
                if(this.pages === this.index)
                {
                this.defaultHeight= {
                        "min-height": `${
                            0
                        }px`
                    };
                }
                }else{
                   this.defaultHeight= {
                        "min-height": `${
                            0
                        }px`
                    }; 
                }
            },
        }
};</script>
