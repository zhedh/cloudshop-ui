import { useEffect, useState } from 'react'
import { DatePicker, Input, Select } from 'antd'
import { FieldItem, FieldOptions, FieldType } from './types'

const { RangePicker } = DatePicker

interface ListSearchFeildProps {
  field: FieldItem
  changedValues: Record<string, any>
  value?: any
  onChange?: <T = any>(value: T) => void
}

const ListSearchFeild: React.FC<ListSearchFeildProps> = (props) => {
  const WIDTH = 180
  const { attributes = {} } = props.field
  const [feildOptions, setFeildOptions] = useState([] as FieldOptions)

  useEffect(() => {
    const { options, type } = props.field

    if (type !== FieldType.SELECT) return
    if (typeof options === 'function') {
      options &&
        options(props.changedValues).then((data) => setFeildOptions(data ?? []))
      return
    }

    setFeildOptions(options ?? [])
  }, [props.changedValues, props.field, props.field.options])

  switch (props.field.type) {
    case 'select':
      return (
        <Select
          style={{ minWidth: WIDTH }}
          placeholder="请选择"
          {...attributes}
          options={feildOptions}
          value={props.value}
          onChange={props.onChange}
        />
      )

    case 'dateRange':
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
