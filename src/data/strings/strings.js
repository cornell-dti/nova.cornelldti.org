import StringsBackend from './stringsBackend';

export default class StringsFrontend {
  constructor(context, backend) {
    if (typeof context === 'undefined' || context === null) {
      throw new Error('Undefined or null passed for context to a StringsFrontend instance.');
    }
    this.context = context;
    if (typeof backend === 'undefined' || backend === null) {
      throw new Error('Undefined or null passed for backend to a StringsFrontend instance.');
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
  get(key) {
    return this.backend.getString(key, this.context);
  }

  initialize() {
    return this.backend.resolveContext(this.context);
  }

  /**
   * Determines if a string exists for a given key and optional context.
   *
   * @param {*} key
   * @param {*} context
   */
  exists(key) {
    return this.backend.exists(key, this.context);
  }

  /**
   * Retrieves all direct children for a given key in an optional context.
   *
   * @param {*} key
   * @param {*} context
   */
  childrenOf(key) {
    return this.backend.getChildrenKeysFor(key, this.context);
  }
}
