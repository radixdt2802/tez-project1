import { getFilterCollectionPayloadPath } from "./folder-utils/get-filter-collection-payload-path";
import { writeFileSync } from "./folder-utils/write-file";
import removeUnwantedSanitizer from "./sanitizers/remove-unwanted.sanitizer";

var filterCollectionState:any = {};
var collectionState:any = {};
export function paginate(source: Array<{ [key: string]: any }>, collectionName: string, filterString: string) {
    let index = 1;
    const filterKey = `${collectionName}-${filterString}`.toLowerCase();;
    let folderKey: string = String(parseInt(String(Math.random() * 10000000)));
    if ((filterString && !filterCollectionState[filterKey]) || (!filterString && !collectionState[collectionName])) {
        let totalCount = source.length;
        do {
            const pageSize = source.length > 9 ? 9 : source.length;
            const sourceItems = source.splice(0, pageSize);
            let filePath = ``;
            if (filterString)
                filePath = `${getFilterCollectionPayloadPath(folderKey)}/${index}.json`
            else
                collectionState[collectionName] = true;
            writeFileSync(filePath,removeUnwantedSanitizer({ items:sourceItems, totalCount:totalCount }));
            index++;
        } while (source.length > 0)
    }

    if (filterString) {
        if (!filterCollectionState[filterKey])
            filterCollectionState[filterKey] = folderKey;
        else
            folderKey = filterCollectionState[filterKey]
    }
    return filterString ? `filter-collections/${folderKey}` : `collections/${collectionName}`;
}

function getCollectionPayloadPath(collectionName: string) {
    throw new Error("Function not implemented.");
}
