import Strings, { StringsData } from './strings';
import JSONStringsBackendPreview from './backends/preview';

export default class StringsFrontendPreview extends Strings {
  constructor(context, backend) {
    super(`preview-${context}`, backend);

    if (!(this.backend instanceof JSONStringsBackendPreview)) {
      throw new Error('Backend passed is not an instance of JSONStringsBackendPreview');
    }
  }

  initialize(json) {
    return this.backend.resolveContext(this.context, json);
  }

  get<K extends StringsData>(key): K {
    const value = super.get<K>(key);
    return value;
  }
}
