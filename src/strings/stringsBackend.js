/* eslint-disable class-methods-use-this, no-unused-vars */

export default class StringsBackend {
  /**
   * Retrieves the default context for the backend. This function should be implemented by
   * child classes.
   *
   * @returns null
   */
  getDefaultContext() {
    return null;
  }

  /**
   * Retrieves a given string for any given key or context. This function is meant for
   * public, stable use and should be considered final and never overriden by children.
   *
   * @param {*} key
   * @param {*} context the desired context or the result of getDefaultContext() if no context
   * is provided
   *
   * @returns the given string for the key in context or null if not found
   */
  getString(key, context = this.getDefaultContext()) {
    return this._getString(key, context);
  }

  getChildrenKeysFor(key, context = this.getDefaultContext()) {
    return this._getChildrenKeysFor(key, context);
  }

  exists(key, context = this.getDefaultContext()) {
    return this._exists(key, context);
  }

  /**
   * Internal implementation function for child classes to override. Retrieves a given string
   * for any given key or context.
   *
   * @param {*} key the key of the desired string
   * @param {*} context the context from which to derive the string from
   *
   * @returns the given string for the key in context or null if not found
   *
   */
  _getString(key, context) {
    return null;
  }

  _getChildrenKeysFor(key, context) {
    return null;
  }

  _exists(key, context) {
    return false;
  }
}
