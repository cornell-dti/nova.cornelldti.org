import { StringsData } from './types';

/* eslint-disable class-methods-use-this, no-unused-vars */

export default abstract class StringsBackend {
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
  getString<K>(key: string, context = this.getDefaultContext()): K {
    return (this._getString(key, context) as unknown) as K;
  }

  getChildrenKeysFor(key: string, context = this.getDefaultContext()) {
    const keys = this._getChildrenKeysFor(key, context);

    if (keys != null) {
      return keys;
    }

    throw new Error(`Context not found: ${context}!`);
  }

  exists(key: string, context = this.getDefaultContext()) {
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
  abstract _getString(key: string, context: string): StringsData;

  abstract _getChildrenKeysFor(key: string, context: string): string[] | null;

  abstract _exists(key: string, context: string): boolean;

  abstract resolveContext(context: string, ..._: unknown[]): unknown;
}
