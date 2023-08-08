<template>
    <div class="inner-submenu container" id="scroll">
        <ul class="flex justify-center overflow-auto" v-if="data.TitleContentList">
            <li v-for="item in data.TitleContentList" class="px-5 py-5" :title="item.Title" :key="item.id">
                <tez-link :to="item.CTA"  class="para_md pb-0 inline-block font-semibold no-underline whitespace-no-wrap" >{{item.Title}}</tez-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        data: Object
    }
}
</script>
<style lang="scss">
@layer utilities{
    .inner-submenu{
        ul{
            li{
                 @apply border-b-2 border-transparent;
                &:hover{
                    @apply border-b-2 border-primary;
                }
            }
        }
    }
}
</style>