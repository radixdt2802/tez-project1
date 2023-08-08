import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

import { myPlugin } from './src/modules/generator.module'
import { generateServiceWorker } from './src/modules/generate-service-worker'
import { strapiDataExtractor } from './src/modules/strapi-data-extractor'
// import { strapiDataExtractor } from './src/modules/strapi-data-extractor'
// https://vitejs.dev/config/
import {  loadEnv } from 'vite';
import { IndexHtmlTransformResult, IndexHtmlTransformContext } from "vite"
import { Plugin } from "vite"
import { OutputChunk, OutputAsset } from "rollup"
export function viteSingleFile(): Plugin {
	return {
		name: "vite:singlefile",
		transformIndexHtml: {
			enforce: "post",
			transform(html: string, ctx?: IndexHtmlTransformContext): IndexHtmlTransformResult {
				// Only use this plugin during build
				if (!ctx || !ctx.bundle) return html
				// Get the bundle
				let extraCode = ""
				for (const [, value] of Object.entries(ctx.bundle)) {
					const o = value as OutputChunk
					const a = value as OutputAsset
					if (o.code) {
						// const reScript = new RegExp(`<script type="module"[^>]*?src="/?${value.fileName}"[^>]*?></script>`)
						// const code = `<script type="module">\n//${o.fileName}\n${o.code}\n</script>`
						// html = html.replace(reScript, (_) => code)
					} else if (value.fileName.endsWith(".css")) {
						const reCSS = new RegExp(`<link rel="stylesheet"[^>]*?href="/?${value.fileName}"[^>]*?>`)
						const code = `<!-- ${a.fileName} --><style type="text/css">\n${a.source}\n</style>`
						html = html.replace(reCSS, (_) => code)
					} else {
						extraCode += "\n<!-- ASSET NOT INLINED: " + a.fileName + " -->\n"
					}
				}
				return html.replace(/<\/body>/, extraCode + "</body>")
			},
		},
	}
}
import { VitePWA } from 'vite-plugin-pwa'
export function tezGenBundle(): Plugin {
	return {
		name: "vite:tez-gen-bundle",
		async generateBundle(_outputOptions, bundle) {
            if(bundle["/assets/banner.js"]){
				console.log("bundle called first")
				bundle["/assets/banner.component.js"] = bundle["/assets/banner.js"]
				delete bundle["/assets/banner.js"]
			}
			if(bundle["assets/banner.js"]){
				console.log("bundle called second")
				bundle["assets/banner.component.js"] = bundle["assets/banner.js"]
				delete bundle["assets/banner.js"]
				console.log(bundle["assets/banner.component.js"])
			}
        }
	}
}
import { build, dev } from "@tezjs/vite"
export default async ({ mode }) => {
	
	console.log(mode)
	let viteConfig:any = {};
	if(mode === "dev"){
		viteConfig = await dev();
	}
	if(mode === "stage" || mode === "pre.live"){
		var environmentVariables = loadEnv(mode, `${process.cwd()}\\environments`);
  
		var jObject = {};
		Object.keys(environmentVariables).forEach(t=>{
		  jObject[t.replace("VITE_","")]=environmentVariables[t];
		})
		
		process.env = {...process.env,...jObject };
		viteConfig = await build({mode:mode,configOnly:true});
		  viteConfig.plugins.push(myPlugin());
		  return defineConfig(viteConfig)
	}
  return defineConfig(viteConfig)
}

// export default defineConfig({
//   envDir:'./environments',
//   
// })
