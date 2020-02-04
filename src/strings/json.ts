import StringsFrontend from '@/strings/strings';
import SingleBackend from '@/strings/lib';

// eslint-disable-next-line import/prefer-default-export
export function fromJSON(id: string, json: any) {
  const StringInstance = new StringsFrontend(id, SingleBackend);
  StringInstance.initialize(json);
  return StringInstance;
}
