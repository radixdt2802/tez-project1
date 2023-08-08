import generator from '../config/pre-build/generate-routes';

export function strapiDataExtractor() {
    return {
      name: 'strapi-data-extractor',
      async buildStart() {
        console.log("Generating Payload")
        await generator();
        console.log("Payload Generated")
      }
    }
  }