export default function(imageContent:any) {
      if(imageContent.formats && imageContent.formats.medium)
            return imageContent.formats.medium.url;
return `${process.env.IMAGE_CDN_URL}${imageContent.name}`;
}
