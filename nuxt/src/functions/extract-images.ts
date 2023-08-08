export function getImages(htmlString:string) {
    const imgRex = /<img.*?src="(.*?)"[^>]+>/g;
    const images = [];
      let img;
      while ((img = imgRex.exec(htmlString))) {
           images.push(img[1]);
      }
    return images;
  }