export enum FieldType {
  INPUT = 'input',
  SELECT = 'select',
  DATE_RANGE = 'dateRange',
}

export type FieldOptions = { label: string; value: any }[]

export type FieldOptionsFuc = (
  searchValue: string,
  changedValues: Record<string, any>,
  type: 'searchValue' | 'changedValues'
) => Promise<{ label: string; value: any }[]>

export interface FieldItem {
  type: FieldType
  name: string
  label: string
  options?: FieldOptions | FieldOptionsFuc
  attributes?: Record<string, any> & React.RefAttributes<any>
  delay?: number // onSearch 方法防抖时间，默认300毫秒
}
