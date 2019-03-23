import axios from 'axios';
import StringsBackend from './stringsBackend';

const DEFAULT_CONTEXT = 'default';

const base = 'https://dti-nova-cms-api.herokuapp.com/';
const JSONMap = {};


function searchKey(key, json) {
  let val = json[key];

  let path = '';

  const replacements = [];

  if (typeof val === 'undefined' || val === null) {
    const keys = key.split('.');

    let currentChild = json;

    for (const childKey of keys) {
      if (
        typeof currentChild[childKey] === 'undefined' ||
        currentChild[childKey] === null
      ) {
        if (typeof currentChild['*'] !== 'undefined') {
          path += `/${childKey}`;
          replacements.push(childKey);
          currentChild = currentChild['*'];

          continue;
        } else {
          currentChild = null;
          path = null;
          break;
        }
      }

      path += `/${childKey}`;
      currentChild = currentChild[childKey];
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
    let newStr = val.replace(
      `$${replacementIndex}$`,
      replacements[replacementIndex - 1]
    );

    replacementIndex += 1;

    while (val !== newStr) {
      val = newStr;

      newStr = val.replace(
        `$${replacementIndex}$`,
        replacements[replacementIndex - 1]
      );

      replacementIndex += 1;
    }
  } else if (typeof val === 'object') {
    val = Object.keys(val);
  }

  return val;
}

/* eslint-disable class-methods-use-this */

export default class JSONStringsBackend extends StringsBackend {
  getDefaultContext() {
    return DEFAULT_CONTEXT;
  }

  resolveContext(context) {
    const splitArr = context.split('.');
    if (context === 'assets') {
      return axios.get(`${base}global/`)
        .then(response => {
          JSONMap[context] = response.data;
        });
    } else if (splitArr.length > 1 && splitArr[0] === 'projects') {
      return axios.get(`${base}project/${splitArr[1]}`)
        .then(response => {
          JSONMap[context] = response.data;
        });
    }
    return axios.get(`${base}page/${context}`)
      .then(response => {
        JSONMap[context] = response.data;
      });
  }

  _getString(key, context) {
    const json = JSONMap[context];

    if (json) {
      if (key === '' || key === null) {
        return json;
      }
      const AssetsJSON = JSONMap.assets;
      if (context === 'assets' && AssetsJSON) { // TODO should we error out if null?
        return `/static${searchKey(key, AssetsJSON)}`;
      }

      return searchKey(key, json);
    }

    return null;
  }

  _exists(key, context) {
    const str = this._getString(key, context);
    return typeof str !== 'undefined' && str !== null;
  }

  _getChildrenKeysFor(key, context) {
    const json = this.resolveContext(context);

    if (json) {
      return searchKey(key, json);
    }

    return null;
  }
}
