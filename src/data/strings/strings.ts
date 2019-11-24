import StringsBackend from './stringsBackend';
import { JSONStringsBackendPreview } from './jsonStringsBackend';

export default class StringsFrontend {
  backend: StringsBackend;

  context: string;

  constructor(context: string, backend: StringsBackend) {
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
   * @param key
   */
  get(key: string) {
    return this.backend.getString(key, this.context);
  }

  initialize(...args) {
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

export class StringsFrontendPreview extends StringsFrontend {
  constructor(context: string, backend: StringsBackend) {
    super(`preview-${context}`, backend);

    if (!(this.backend instanceof JSONStringsBackendPreview)) {
      throw new Error('Backend passed is not an instance of JSONStringsBackendPreview');
    }
  }

  initialize(json): Promise<any> {
    return this.backend.resolveContext(this.context, json);
  }

  get(key: string): string | null {
    const value = super.get(key);
    return value;
  }
}
