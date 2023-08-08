import { getPath } from "./get-path";

export function getFilterCollectionPayloadPath(collectionName: string): string {
    return getPath([process.cwd(),"public","payload", "filter-collections", collectionName], true);
}