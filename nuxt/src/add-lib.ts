import { addLib,tagManager,addStylesheet } from "@tezjs/js"

function getTagId(){
    const gtmCodes= [
      { host: "radixweb.com", code: "GTM-TV9MZ5M" },
      { host: "radixweb-dev.web.app", code: "GTM-NCCTFLQ" },
      { host: "radixweb-stage.web.app", code: "GTM-WFDZFDK" },
      { host: "radixweb-prelive.web.app", code: "GTM-PCDWR6G" },
      { host: "web-vital-test.web.app", code: "GTM-NXV9DCF" },
    ];
      const hostName = window.location.host;
        const gtmCode = gtmCodes.filter((t) => t.host == hostName)[0];
        return gtmCode ? gtmCode.code :""
}
export default addLib({
    afterUserInteraction:[tagManager(getTagId()),addStylesheet("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap")]
})