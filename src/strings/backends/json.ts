import StringsBackend from '../backend';
import { StringsData } from '../types';

const DEFAULT_CONTEXT = 'default';

/**
 * @param {string} key
 * @param {*} json
 */
function searchKey(key: string, json: StringsData) {
  if (typeof json !== 'object') {
    return json;
  }

  if (json == null) {
    return null;
  }

  let val = Array.isArray(json) ? json : json[key];

  let path: string | null = '';

  const replacements = [] as Array<string | number>;

  if (typeof val === 'undefined' || val === null) {
    const keys = key.split('.');

    let currentChild: StringsData = json;

    for (const _childKey of keys) {
      let childKey: string | number = _childKey;
      const asInt = Number.parseInt(`${childKey}`, 10);

      if (Number.isInteger(asInt)) {
        childKey = asInt - 1;
      }

      if (currentChild === null) {
        break;
      }

      if (
        typeof currentChild === 'object' &&
        ((Array.isArray(currentChild) &&
          ((typeof childKey === 'number' && currentChild[childKey] == null) ||
            typeof childKey === 'string')) ||
          (!Array.isArray(currentChild) && currentChild[childKey] == null))
      ) {
        if (!Array.isArray(currentChild) && typeof currentChild['*'] !== 'undefined') {
          path += `/${childKey}`;
          replacements.push(childKey);
          currentChild = currentChild['*'];
          continue;
        } else if (
          Array.isArray(currentChild) &&
          typeof childKey === 'string' &&
          childKey.includes('=')
        ) {
          const [k, v] = childKey.split('=');
          const found = currentChild.find(
            m => m != null && typeof m === 'object' && !Array.isArray(m) && m[k] === v
          );

          if (typeof found !== 'undefined' && found !== null) {
            path += `/${v}`;
            currentChild = found;
            continue;
          }
        }
        currentChild = null;
        path = null;
        break;
      }

      path += `/${childKey}`;
      if (currentChild != null && typeof currentChild === 'object') {
        if (!Array.isArray(currentChild)) {
          currentChild = currentChild[childKey];
        } else if (typeof childKey === 'number') {
          currentChild = currentChild[childKey];
        }
      }
    }

    if (typeof currentChild !== 'undefined' && currentChild !== null) {
      val = currentChild;
    }
  } else {
    path = `/${key.split('.').join('/')}/`; // todo
  }

  if (typeof val === 'string') {
    if (path !== null && val.startsWith('~')) {
      val = `${path}${val.substring(1)}`;
    }

    let replacementIndex = 1;
    let newStr = val.replace(`$${replacementIndex}$`, `${replacements[replacementIndex - 1]}`);

    replacementIndex += 1;

    while (val !== newStr) {
      val = newStr;

      newStr = val.replace(`$${replacementIndex}$`, `${replacements[replacementIndex - 1]}`);

      replacementIndex += 1;
    }
  } else if (typeof val === 'object') {
    val = JSON.parse(JSON.stringify(val));
  }

  return val;
}

/* eslint-disable class-methods-use-this */

export default class JSStringsBackend extends StringsBackend {
  protected map = new Map<string, {}>();

  getDefaultContext() {
    return DEFAULT_CONTEXT;
  }

  resolveContext(context: string, ...args: unknown[]) {
    const [strings] = args;
    if (!this.map.has(context)) {
      this.map.set(context, strings as {});
    }

    return this.map.get(context);
  }

  _getString(key: string | null, context: string) {
    const json = this.map.get(context);

    if (json) {
      if (key === '' || key === null) {
        return json;
      }
      const AssetsJSON = this.map.get('assets');
      if (context === 'assets' && AssetsJSON) {
        return `${searchKey(key, AssetsJSON)}`;
      }

      if (context === 'assets') {
        throw new Error('No assets JSON initialized');
      }

      return searchKey(key, json);
    }

    return null;
  }

  _exists(key: string, context: string) {
    const str = this._getString(key, context);
    return typeof str !== 'undefined' && str !== null;
  }

  _getChildrenKeysFor(key: string, context: string) {
    const json = this.map.get(context);

    if (json) {
      const obj = searchKey(key, json);

      if (obj != null && typeof obj === 'object') {
        return Object.keys(obj);
      }

      return [];
    }

    return null;
  }
}
