export enum FieldType {
  INPUT = 'input',
  SELECT = 'select',
  DATE_RANGE = 'dateRange',
}

// export type FieldType = 'input' | 'select' | 'dateRange'

export type FieldOptions = { label: string; value: any }[]

export type FieldOptionsFuc = (
  changedValues: Record<string, any>
) => Promise<{ label: string; value: any }[]>

export interface FieldItem {
  type: FieldType
  name: string
  label: string
  options?: FieldOptions | FieldOptionsFuc
  attributes?: Record<string, any> & React.RefAttributes<any>
}
