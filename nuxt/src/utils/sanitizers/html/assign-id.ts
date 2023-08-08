export default function (elementString: string, elementStrings: string[]) {
  let idRegex = new RegExp("{#.*?}");
  let elementRegex = new RegExp("<h2");
  let h3elementRegex = new RegExp("<h3");
  let extractId = idRegex.exec(elementString);

  let extractElement = elementRegex.exec(elementString);
  if (!extractElement) {
    extractElement = h3elementRegex.exec(elementString);
  }
  if (
    extractId &&
    extractId.length > 0 &&
    extractElement &&
    extractElement.length > 0
  ) {
    let id = extractId[0].replace(/({|#|})/g, "");
    elementString = elementString.replace(extractId[0], "");
    elementString = elementString.replace(
      extractElement[0],
      `${extractElement[0]} id="${id}"`
    );
    elementStrings.push(elementString);
  } else elementStrings.push(elementString);
}
