import { useEffect, useState } from 'react'
import { DatePicker, Input, Select } from 'antd'
import {
  FieldItem,
  FieldOptionType,
  FieldOptions,
  FieldType,
} from './PropsType'

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

    const optionsType = Object.keys(props.changedValues).length
      ? FieldOptionType.VALUES_CHANGE
      : FieldOptionType.INITIALIZE
    updateOptions(searchValue, props.changedValues, optionsType)
  }, [props.changedValues, props.field])

  const handleSearch = (v: string) => {
    setSearchValue(v)

    clearTimeout(timer)
    timer = setTimeout(
      () =>
        updateOptions(v, props.changedValues, FieldOptionType.SEARCH_CHANGE),
      delay ?? 300
    )
  }

  const updateOptions = async (
    searchValue: string,
    changedValues: Record<string, any>,
    type: FieldOptionType
  ) => {
    if (typeof options === 'function') {
      const data = await options(searchValue, changedValues, type)
      if (!data) return
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
          onSearch={attributes.showSearch ? handleSearch : undefined}
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
