export type StringsData =
  | boolean
  | string
  | number
  | null
  | { [key in string | number]: StringsData }
  | StringsData[];
