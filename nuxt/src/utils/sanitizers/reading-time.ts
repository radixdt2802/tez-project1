export default function(longText:any, wordsPerMinute:any, regex:any) {
  let minutesBlogDetail = 0;
  var contentString = JSON.stringify(longText);
  var resultString = contentString.replace(regex, "");
  let resultJSON = JSON.parse(resultString);
  let words;
  if (Array.isArray(resultJSON)) {
    words = resultJSON.reduce((x, y) => x + " " + y, []).trim().split(" ").length;
  } else {
    words = resultJSON.split(/[.\n\s]/).filter((x:any) => String(x).trim()).length;
  }
  minutesBlogDetail = Math.round(words / wordsPerMinute);
  return minutesBlogDetail;
};
