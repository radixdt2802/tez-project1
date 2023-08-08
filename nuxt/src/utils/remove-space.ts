export default function(value:any) {
    var regex = new RegExp("[ ]+", "g");
    return value ? value.replace(regex, '') : '';
}