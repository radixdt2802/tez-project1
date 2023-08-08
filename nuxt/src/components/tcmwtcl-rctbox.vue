<template>
    <div class="rxsection-y-space rectangleBoxWrap beforeDark relative" v-bind:style="[ data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '', ]" >
        <div class="container relative contentWhite">
            <div class="text-center">
                <!-- <h2>{{ data.Title }}</h2> -->
                <div v-html="title"></div>
            </div>
            <div class="row mt-5">
                <div v-if="data.TitleContentList" v-for="(item, index) in data.TitleContentList" class="smd:w-1/2 w-full px-4 borderBetween">
                    <div
                        :class="[(index % 2 ? 'lg:pl-16 lg:py-8 pt-5' : 'lg:pr-16 pt-5 lg:py-8')]"
                    >
                        <!-- <div class="h3_sm text-themelight-0">{{item.Title}}</div> -->
                        <div v-html="sTitles[index]"></div>
                        <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
    mixins: [titleMixin],
    props:{
        data: Object
    },
    data(){
    return {
        titleStyle : "h2",
        sTitleStyle: "h3_sm text-themelight-0"
        }
    },
}
</script>
<style lang="scss">
@layer utilities {
    .borderBetween {
        &:nth-child(odd)  {
            @apply smd:border-r border-opacitybg-0;        
        }
        &:first-child, &:nth-child(2) {
            @apply smd:border-b border-opacitybg-0;
        }        
    }
}
</style>