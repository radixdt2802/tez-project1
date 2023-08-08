<template>
  <main>
    <section
      v-for="comp in components"
      :style="comp.style"
      :class="comp.sectionClass"
      :key="comp.id"
      v-rxbind="comp"
    >
      <keep-alive>
        <component
          v-if="comp.hide && comp.component"
          v-bind:is="comp.component"
          v-bind:data="comp.data"
        />
      </keep-alive>
    </section>
  </main>
</template>

<script type="text/javascript">
import TagsModule from "~/config/tags-module";

import nuxtLink from "~/utils/nuxt-link";
import isBot from "~/utils/is-bot";
import DynamicComponent from "~/components/dynamic-component";
import urlReplacer from "~/utils/url-replacer";
export default {
  layout: "landingPage",
  head: TagsModule,
  data: {},
  components: {
    DynamicComponent,
  },
  async asyncData({ route }) {
    var url = urlReplacer(route.path);
    var splitUrl = url.split("/");
    var lastUrlNode = "/" + splitUrl[splitUrl.length - 1];
    const componentsJson = () =>
      import("~/static/payload" + url + "" + lastUrlNode + ".json").then(
        (m) => m.default || m
      );
    var components = await componentsJson();
    const tagsJson = () =>
      import("~/static/payload" + url + "/tags.json").then(
        (m) => m.default || m
      );
    var tagsResult = await tagsJson();
    var componentsData = {};
    //var length = process.env.FULL_PRERENDER == true ? components.length : 3
    //console.log(process.env.FULL_PRERENDER === true)
    //console.log(process.env.FULL_PRERENDER)
    //console.log(url);
    //console.log(length)

    for (var i = 0; i < 3; i++) {
      if (components[i]) {
        var componentId = components[i];
        var jsonComponent = () =>
          import("~/static/payload" + url + "/" + componentId + ".json").then(
            (m) => m.default || m
          );
        var data = await jsonComponent();
        componentsData[componentId] = data;
      }
    }
    return {
      components: components.map((t) => {
        return {
          data: componentsData[t],
          id: t,
          hide: process.env.FULL_PRERENDER,
          url: url,
          style: { "min-height": "auto" },
        };
      }),
      url: url,
      tags: tagsResult,
    };
  },
  mounted() {
    nuxtLink();
  },
};
</script>
