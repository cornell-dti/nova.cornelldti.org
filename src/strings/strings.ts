import StringsBackend from './backend';

export default class Strings {
  backend: StringsBackend;
  context: string;

  constructor(context: string, backend: StringsBackend | null) {
    this.context = context;

    if (typeof backend === 'undefined' || backend === null) {
      throw new Error('Undefined or null passed for backend to a Strings instance.');
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
   * @param key
   */
  get<K>(key: string): K {
    return this.backend.getString<K>(key, this.context);
  }

  initialize(...args: unknown[]) {
    return this.backend.resolveContext(this.context, ...args);
  }

  /**
   * Determines if a string exists for a given key and optional context.
   *
   * @param {string} key
   */
  exists(key: string) {
    return this.backend.exists(key, this.context);
  }

  /**
   * Retrieves all direct children for a given key in an optional context.
   *
   * @param {string} key
   */
  childrenOf(key: string) {
    return this.backend.getChildrenKeysFor(key, this.context);
  }
}
