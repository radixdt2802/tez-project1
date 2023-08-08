declare const dataLayer:any;
function getSelector(node:any, maxLen?:any) {
    maxLen = maxLen || 100;
    var sel = '';
    try {
      while (node && node.nodeType !== 9) {
        var part = node.id ? '#' + node.id : node.nodeName.toLowerCase() + (
          (node.className && node.className.length) ?
          '.' + Array.from(node.classList.values()).join('.') : '');
        if (sel.length + part.length > maxLen - 1) return sel || part;
        sel = sel ? part + '>' + sel : part;
        if (node.id) break;
        node = node.parentNode;
      }
    } catch (err) {
      // Do nothing...
    }
    return sel;
  }
   
  function getLargestLayoutShiftEntry(entries:any) {
    return entries.reduce(function(a:any, b:any) {return a && a.value > b.value ? a : b});
  }
   
  function getLargestLayoutShiftSource(sources:any) {
    return sources.reduce(function(a:any, b:any) {
      return a.node && a.previousRect.width * a.previousRect.height >
          b.previousRect.width * b.previousRect.height ? a : b;
    });
  }
   
  function wasFIDBeforeDCL(fidEntry:any) {
    var navEntry:any = performance.getEntriesByType('navigation')[0];
    return navEntry && fidEntry.startTime < navEntry.domContentLoadedEventStart;
  }
   
  function getDebugInfo(name:any, entries:any) {
    entries = entries || []; 
    // In some cases there won't be any entries (e.g. if CLS is 0,
    // or for LCP after a bfcache restore), so we have to check first.
    if (entries.length) {
      if (name === 'LCP') {
        var lastEntry = entries[entries.length - 1];
        return {
          debug_target: getSelector(lastEntry.element),
          event_time: lastEntry.startTime,
        };
      } else if (name === 'FID') {
        var firstEntry = entries[0];
        return {
          debug_target: getSelector(firstEntry.target),
          debug_event: firstEntry.name,
          debug_timing: wasFIDBeforeDCL(firstEntry) ? 'pre_dcl' : 'post_dcl',
          event_time: firstEntry.startTime,
        };
      } else if (name === 'CLS') {
        var largestEntry = getLargestLayoutShiftEntry(entries);
        if (largestEntry && largestEntry.sources) {
          var largestSource = getLargestLayoutShiftSource(largestEntry.sources);
          if (largestSource) {
            return {
              debug_target: getSelector(largestSource.node),
              event_time: largestEntry.startTime,
            };
          }
        }
      }
    }
    // Return default/empty params in case there are no entries.
    return {
      debug_target: '(not set)',
    };
  }


  function getRating(name:any, value:any) {
    switch (name) {
        case 'LCP': return calculateRating(value,2500,4000);
        case 'FID': return calculateRating(value,100,300);
        case 'CLS': return calculateRating(value,0.1,0.25);
        case 'FCP': return calculateRating(value,2000,4000); // Page Speed Insights is 1000 and 3000, lighthouse and web.dev does 2000 and 4000
        case 'TTFB': return calculateRating(value,500,1500); // CrUX Data Studio report says NI is 500ms to 1500ms
        default: return '(not set)';
    }
}
function calculateRating(value:any, good:any, poor:any) {
    if (!value && value !== 0) return '(not set)';
    if (value > poor) return 'poor';
    if (value > good) return 'ni';   
    return 'good';
}
 

function sendToDataLayer(metric:any) {
    var webVitalsMeasurement:any =  {
      name: metric.name,
      id: metric.id, 
      value: metric.value,
      delta: metric.delta,
      rating: getRating(metric.name, metric.value),
      valueRounded: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      deltaRounded: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
    };
   
    var debugInfo = getDebugInfo(metric.name, metric.entries);
   
    if(debugInfo.debug_target) webVitalsMeasurement.debugTarget = debugInfo.debug_target;
    if(debugInfo.debug_event) webVitalsMeasurement.debugEvent = debugInfo.debug_event;
    if(debugInfo.debug_timing) webVitalsMeasurement.debugTiming = debugInfo.debug_timing;
    if(debugInfo.event_time) webVitalsMeasurement.eventTime = debugInfo.event_time;
   if(typeof dataLayer !== "undefined"){
    dataLayer.push({
      event: 'coreWebVitals', 
      webVitalsMeasurement: webVitalsMeasurement
  });
   }
  }
  export function webVitalGaReporter(){
      if(window.rxWebVital){
        if(window.rxWebVital.cls)
            sendToDataLayer({name:'CLS',value:window.rxWebVital.cls,delta:window.rxWebVital.cls,id:Math.random(),entries:window.rxWebVital.entries.cls})
        if(window.rxWebVital.lcp)
            sendToDataLayer({name:'LCP',value:window.rxWebVital.lcp,delta:window.rxWebVital.lcp,id:Math.random(),entries:window.rxWebVital.entries.lcp})
        if(window.rxWebVital.fid)
            sendToDataLayer({name:'FID',value:window.rxWebVital.fid,delta:window.rxWebVital.fid,id:Math.random(),entries:window.rxWebVital.entries.fid})
      }
  }