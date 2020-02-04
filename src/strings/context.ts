import StringsFrontend from '@/strings/strings';
import SingleBackend from '@/strings/lib';

// eslint-disable-next-line import/prefer-default-export
export function makeStrings($context: { contextId: string; strings: any }) {
  const StringInstance = new StringsFrontend($context.contextId, SingleBackend);
  StringInstance.initialize($context.strings);
  return StringInstance;
}
