export function lightHouse() {
    var botPattern = "(Chrome-Lighthouse)";
    var re = new RegExp(botPattern, 'i');
    if (typeof navigator === 'undefined')
      return false;
    return re.test(navigator.userAgent);
  }