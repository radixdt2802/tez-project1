import COMPONENT_NAMES from '../config/component-names';
import removeSpace from './remove-space';
export default function(collection:any){
    var result:any =[];
    collection.forEach((t:any)=>{
        let componentName = removeSpace(t['VueReferenceCode']);
        let splitComponentNames = componentName.split(",");
        if((splitComponentNames.length === 1 && COMPONENT_NAMES[splitComponentNames[0]]))
        result.push({name:COMPONENT_NAMES[splitComponentNames[0]]})
        else if((splitComponentNames.length === 2 && COMPONENT_NAMES[splitComponentNames[0]] && COMPONENT_NAMES[splitComponentNames[1]]))
        result.push({ name: COMPONENT_NAMES[splitComponentNames[0]], data: { mobileComponentName: COMPONENT_NAMES[splitComponentNames[1]] } })
    })
    return result;
}