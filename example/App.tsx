import './App.css'

import { ListSearch } from '../packages'
import { Form } from 'antd'
import { FieldType } from '../packages/ListSearch'

function App() {
  const [form] = Form.useForm()

  return (
    <>
      <ListSearch
        form={form}
        fields={[
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
              {
                value: 18,
                label: '18',
              },
              {
                value: 19,
                label: '19',
              },
              {
                value: 120,
                label: '20',
              },
            ],
          },
        ]}
        onSearch={function (values: any): void {
          console.log('values: ', values)
        }}
      ></ListSearch>
    </>
  )
}

export default App
