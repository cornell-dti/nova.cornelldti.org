import JSONStringsBackend from './json';

export default class JSONStringsBackendPreview extends JSONStringsBackend {
  resolveContext(context, json) {
    this.map.set(context, json);
    return json;
  }

  unresolve(context) {
    this.map.delete(context);
  }
}
