// pass below request header if you want to pass form data
//          'Content-Type': 'application/x-www-form-urlencoded',

export const request: { [key: string]: any } = {
  async get(uri: string) {
    return onRequest(uri, { method: "GET" });
  },

  async post(uri: string, body: any, headers?: { [key: string]: any }) {
    return onRequest(uri, getRequestObject(uri, body, "POST", headers));
  },

  async put(uri: string, body: any, headers?: { [key: string]: any }) {
    return onRequest(uri, getRequestObject(uri, body, "PUT", headers));
  },

  async delete(uri: string) {
    return onRequest(uri, { method: "DELETE" });
  },
};
function getRequestObject(
  uri: string,
  body: any,
  method: string,
  headers?: { [key: string]: any }
) {
  let requestObject: any = { method: method };
  if (
    headers &&
    headers["Content-Type"] &&
    headers["Content-Type"] === "application/x-www-form-urlencoded"
  )
    requestObject.body = body;
  else requestObject.body = JSON.stringify(body);

  return requestObject;
}
function onRequest(uri: string, requestObject: any) {
  let baseObject = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(getUri(uri), { ...baseObject, ...requestObject });
}

export function getUri(uri: string) {
  var baseUri: any = import.meta.env.VITE_BACKEND;
  // return import.meta.env.DEV
  //   ? `${baseUri.replace(new RegExp(/'/g), "")}/${uri}`
  //   : `${uri}`;
  return `${baseUri.replace(new RegExp(/'/g), "")}/${uri}`;
}
