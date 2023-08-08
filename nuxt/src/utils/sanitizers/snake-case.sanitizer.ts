export default function (text:any) {
    var newText = '';
    for (var char in text) {
        var charCode:any = text.charAt(char);
        if (charCode === charCode.toUpperCase() && char != "0")
            newText += '-' + charCode.toLowerCase();
        else
            newText += charCode.toLowerCase();
    }
    return newText;
}
