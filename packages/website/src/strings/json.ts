import StringsFrontend from './strings';
import SingleBackend from './lib';

// eslint-disable-next-line import/prefer-default-export
export function fromJSON(id: string, json: unknown) {
  const StringInstance = new StringsFrontend(id, SingleBackend);
  StringInstance.initialize(json);
  return StringInstance;
}
