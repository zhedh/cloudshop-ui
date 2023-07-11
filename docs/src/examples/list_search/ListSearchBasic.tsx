import { Form } from 'antd'
import ListSearch, { FieldItem, FieldType } from 'cloudshop-ui'

const ListSearchBasic: React.FC = () => {
  const [form] = Form.useForm()

  const fields: FieldItem[] = [
    {
      type: FieldType.INPUT,
      name: 'name',
      label: '名字',
    },
    {
      type: FieldType.SELECT,
      name: 'age',
      label: '年龄',
      options: [
        { label: '18', value: 18 },
        { label: '18', value: 18 },
      ],
      attributes: {
        showSearch: true,
        filterOption: false,
      },
    },
    {
      type: FieldType.DATE_RANGE,
      name: 'dateRange',
      label: '注册时间',
    },
  ]

  const handleSearch = (values: Record<string, any>) => {
    console.log('values: ', values)
  }

  return (
    <div className="components">
      <ListSearch form={form} fields={fields} onSearch={handleSearch} />
    </div>
  )
}

export default ListSearchBasic
