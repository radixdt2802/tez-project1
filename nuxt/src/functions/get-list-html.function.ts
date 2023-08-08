export function getListHtml(
  values: any,
  currentIndex: number,
  isSkipListClose?: boolean
) {
  var html = "";
  var firstValue = values[currentIndex]
  var flag = values[currentIndex].includes("<pre><code>");
  
  for (var i = currentIndex; i < values.length; i++) {
    // console.log(values[i]);
    if (flag) {
      html += values[i] + "<br/>";
    } else {
      html += values[i];
    }

    // console.log();

    currentIndex = i;

    if (
      (!isSkipListClose && (firstValue === "<ol>" && values[i] === "</ol>")) ||
      (firstValue === "<ul>" && values[i] === "</ul>") ||
      (firstValue === "<blockquote>" && values[i] === "</blockquote>") ||   
      (isSkipListClose &&
        ((firstValue === "<table>" && values[i] === "</table>") ||
        (firstValue === "<details>" && values[i] === "</details>") ||
        (firstValue === "<details open>" && values[i] === "</details>") ||
        (firstValue.includes("<code>") && values[i].includes("</code>"))))
    )
      break;
  }

  html = html.replace("<pre><code>","<div class='codeSnipet'><code>")
  html = html.replace("</code></pre>","</code></div>")
// console.log(html);

  return { html: html, currentIndex: currentIndex };
}
