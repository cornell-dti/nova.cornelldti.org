import { Prop } from 'vue-property-decorator';

export const objectDefault = () => ({});
export const arrayDefault = () => [];

type PropParams = Parameters<ReturnType<typeof Prop>>;

export function ObjectProp(required = false) {
  return function _(...params: PropParams) {
    return Prop({
      required,
      type: Object,
      default: objectDefault
    })(...params);
  };
}

export function BooleanProp({
  required = false,
  defaultValue
}: {
  required: boolean;
  defaultValue: boolean;
}) {
  return function _(...params: PropParams) {
    return Prop({
      ...(defaultValue != null ? { default: defaultValue } : {}),
      required,
      type: Boolean
    })(...params);
  };
}