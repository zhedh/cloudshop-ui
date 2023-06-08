import { useEffect, useState } from 'react'
import { DatePicker, Input, Select } from 'antd'
import { FieldItem, FieldOptions, FieldType } from './PropsType'

const { RangePicker } = DatePicker

interface ListSearchFeildProps {
  field: FieldItem
  changedValues: Record<string, any>
  value?: any
  onChange?: <T = any>(value: T) => void
}

let timer: string | number | NodeJS.Timeout

const ListSearchFeild: React.FC<ListSearchFeildProps> = (props) => {
  const WIDTH = 180
  const { attributes = {}, options, type, delay } = props.field
  const [feildOptions, setFeildOptions] = useState(
    typeof options === 'function' ? [] : (options as FieldOptions)
  )
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (type !== FieldType.SELECT) return
    updateOptions(searchValue, props.changedValues, 'changedValues')
  }, [props.changedValues, props.field])

  const handleSearch = (v: string) => {
    setSearchValue(v)

    clearTimeout(timer)
    timer = setTimeout(
      () => updateOptions(v, props.changedValues, 'searchValue'),
      delay ?? 300
    )
  }

  const updateOptions = async (
    searchValue: string,
    changedValues: Record<string, any>,
    type: 'searchValue' | 'changedValues'
  ) => {
    if (typeof options === 'function') {
      const data = await options(searchValue, changedValues, type)
      setFeildOptions(data ?? [])
    }
  }

  switch (props.field.type) {
    case FieldType.SELECT:
      return (
        <Select
          style={{ minWidth: WIDTH }}
          placeholder="请选择"
          {...attributes}
          searchValue={searchValue}
          options={feildOptions}
          value={props.value}
          onChange={props.onChange}
          onSearch={handleSearch}
        />
      )

    case FieldType.DATE_RANGE:
      return (
        <RangePicker
          {...attributes}
          value={props.value}
          onChange={props.onChange}
        />
      )

    default:
      return (
        <Input
          style={{ minWidth: WIDTH }}
          placeholder="请输入"
          {...attributes}
          value={props.value}
          onChange={props.onChange}
        />
      )
  }
}

export default ListSearchFeild
