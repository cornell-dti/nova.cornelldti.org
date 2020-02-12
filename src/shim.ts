/* eslint-disable import/prefer-default-export */

import Vue from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import { ExtendedVue } from 'vue/types/vue';

export function Component<Data, Methods, Computed, Props, V extends Vue = Vue>(
  definition?: ThisTypedComponentOptionsWithRecordProps<V, Data, Methods, Computed, Props>
): ExtendedVue<V, Data, Methods, Computed, Props> {
  return (definition as unknown) as ExtendedVue<V, Data, Methods, Computed, Props>;
}
