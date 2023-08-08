declare global {
    interface Window {
        rxWebVital:any;
    }
}
export const webVital:
{
    subscribeWebVital():void
} = new (class{
    subscribeWebVital(){
        if(typeof window !== "undefined"){
            if(!window.rxWebVital)
                this.refresh()
        }
        this.refresh();
        this.lcp();
        this.fid();
        this.cls();
    }
    refresh(){
        window.rxWebVital = {entries:{cls:[],lcp:[]}};
    }

    cls(){
        let clsValue = 0;
        let clsEntries = [];
        let sessionValue = 0;
        let sessionEntries:any = [];
        new PerformanceObserver((entryList:any) => {
        for (const entry of entryList.getEntries()) {
            let sourceItems = entry.sources.filter((t:any)=>t.node === null);
            if(sourceItems.length === 0){
                if (!entry.hadRecentInput) {
                const firstSessionEntry = sessionEntries[0];
                const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                if (sessionValue &&
                    entry.startTime - lastSessionEntry.startTime < 1000 &&
                    entry.startTime - firstSessionEntry.startTime < 5000) {
                    sessionValue += entry.value;
                    sessionEntries.push(entry);
                } else {
                    sessionValue = entry.value;
                    sessionEntries = [entry];
                }
                if (sessionValue > clsValue) {
                    clsValue = sessionValue;
                    clsEntries = sessionEntries;
                    window.rxWebVital.cls = sessionValue;
                    window.rxWebVital.entries.cls.push(...clsEntries)
                    //console.log('CLS:', clsValue, clsEntries)
                }
                }
            }
        }
        }).observe({type: 'layout-shift', buffered: true});
    }

    lcp(){
        new PerformanceObserver((entryList) => {
            console.log("lcp called",entryList.getEntries())
        for (const entry of entryList.getEntries() as any) {
            if(entry.element !== null){
                window.rxWebVital.lcp = entry.startTime;
                window.rxWebVital.entries.lcp.push(entry)
                //console.log('LCP candidate:', entry.startTime, entry);
            }
        }
        }).observe({type: 'largest-contentful-paint', buffered: true});
    }

    fid(){
        new PerformanceObserver((entryList:any) => {
            for (const entry of entryList.getEntries()) {
              const delay = entry.processingStart - entry.startTime;
              if(window.rxWebVital.fid === undefined || window.rxWebVital.fid !== delay){
                window.rxWebVital.fid = delay;
              }
                
            }
          }).observe({type: 'first-input', buffered: true});
    }
})