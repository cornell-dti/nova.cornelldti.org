import StringsBackend from './stringsBackend';

export default class StringsFrontend {
  constructor(backend) {
    if (typeof backend === 'undefined' || backend === null) {
      throw new Error(
        'Undefined or null passed for backend to a StringsFrontend instance.'
      );
    }

    if (backend instanceof StringsBackend) {
      this.backend = backend;
    } else {
      throw new Error('Backend passed is not an instance of StringsBackend');
    }
  }

  /**
   * Gets a string for a given key in a given context.
   *
   * @param {*} key
   * @param {*} context
   */
  get(key, context) {
    return this.backend.getString(key, context);
  }

  /**
   * Determines if a string exists for a given key and optional context.
   *
   * @param {*} key
   * @param {*} context
   */
  exists(key, context) {
    return this.backend.exists(key, context);
  }

  /**
   * Retrieves all direct children for a given key in an optional context.
   *
   * @param {*} key
   * @param {*} context
   */
  childrenOf(key, context) {
    return this.backend.getChildrenKeysFor(key, context);
  }
}
