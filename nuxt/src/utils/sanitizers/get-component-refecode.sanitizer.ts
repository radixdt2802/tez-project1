export default function (VueReferenceCode:any) {
    return VueReferenceCode.includes("#") ? VueReferenceCode.split("#")[0] : VueReferenceCode; 
}