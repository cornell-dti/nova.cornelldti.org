import StringsBackend from './stringsBackend';
import { JSONStringsBackendPreview } from './jsonStringsBackend';

export default class StringsFrontend {
  constructor(context, backend) {
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

export class StringsFrontendPreview extends StringsFrontend {
  constructor(context, backend) {
    super(`preview-${context}`, backend);

    if (!(this.backend instanceof JSONStringsBackendPreview)) {
      throw new Error('Backend passed is not an instance of JSONStringsBackendPreview');
    }
  }

  initialize(json) {
    return this.backend.resolveContext(this.context, json);
  }

  get(key) {
    const value = super.get(key);
    return value;
  }
}
