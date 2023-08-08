<template>
    <div class="rxa_iconList border-b-2 border-solid border-color-grayd6 text-rxa-gray rxsection-y-space" id="Numbers">
        <div class="container">
            <div class="title-content-list">
            
            <h2 class="text-center text-rxa-gray">{{data.Title}}</h2>
            <div
                    class="para_sm smd:mb-6 text-center text-rxa-gray"
                    v-if="data.SubTitle"
                    v-html="data.SubTitle"
                >
                </div>
                <div class="count-list text-rxa-gray mt-6 md:mt-8 sxl:pt-12 flex flex-wrap text-center justify-center">
                <div
                    class="count-stucture w-full  xxsm:w-3/6 md:w-2/6 sxl:w-1/6 sm:px-4 lg:px-0 relative pb-4 sxl:pb-0"
                    v-for="item in data.TitleContentMediaList" :key="item.id"
                >
                    <div class="count-block px-5 w-full md:w-full mx-auto sm:h-full smd:max-w-full sxl:w-full">
                        <img
                            class="mx-auto mb-1 smd:mb-6"
                            v-rxlazy="item.Icon.url"
                            :alt="item.alternativeText"
                            :width="item.width"
                            :height="item.height"
                        />
                    <div class="h3 text-rxa-gray font-extrabold pb-0">  
                        {{ item.Title }}
                    </div>
                    <div 
                        class="para_md text-rxa-gray leading-relaxed"
                        v-if="item.LongText"
                        v-rxhtml="item.LongText"
                    ></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props: {
        data: Object,
    },
}
</script>

<style lang="scss">
@layer utilities{
    .rxa_iconList {
        p {
          @apply text-rxa-gray;
          
        }
        .count-stucture {
           @media (max-width: 767px) {
                .count-block {
                    img {
                        width: 3.125rem;
                    }
                }
                &:last-child {
                    padding-bottom: 0px;
                }
           }
            .para_md p, .para_md {
                font-size: 1rem;
                line-height: 1.5rem;
                @screen md{
                    padding-top: 0.25rem;
                }
                @screen sxl{
                    @apply text-lg;
                }
            }
            
                @screen sxl{
                    &::after  {
                            content: '';
                            @apply absolute h-full top-0 right-0;
                            width: 1px;
                            background: linear-gradient(0deg, #4ef1e0 0%, #413778 100%);
                        }
                        &:last-child {
                            &::after  {
                                content: none;
                            }
                        }
                }
            }
            
        }
    }

</style>

