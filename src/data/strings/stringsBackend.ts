/* eslint-disable class-methods-use-this, no-unused-vars */

export default class StringsBackend {
  /**
   * Retrieves the default context for the backend. This function should be implemented by
   * child classes.
   *
   * @returns null
   */
  getDefaultContext(): string {
    return '';
  }

  /**
   * Retrieves a given string for any given key or context. This function is meant for
   * public, stable use and should be considered final and never overriden by children.
   *
   * @param key
   * @param context the desired context or the result of getDefaultContext() if no context
   * is provided
   *
   * @returns the given string for the key in context or null if not found
   */
  getString(key: string, context: string = this.getDefaultContext()): string | null {
    return this._getString(key, context);
  }

  getChildrenKeysFor(key: string, context: string = this.getDefaultContext()): string[] | null {
    return this._getChildrenKeysFor(key, context);
  }

  exists(key: string, context: string = this.getDefaultContext()): boolean {
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
  _getString(key: string, context: string): string | null {
    return '';
  }

  _getChildrenKeysFor(key: string, context: string): string[] | null {
    return [] as string[];
  }

  _exists(key: string, context: string): boolean {
    return false;
  }

  resolveContext(context: string, ..._: any[]): Promise<any> {
    return Promise.resolve(true);
  }
}
