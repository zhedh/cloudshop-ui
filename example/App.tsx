import './App.css'

import { ListSearch } from '../packages'
import { Form } from 'antd'
import { FieldType } from '../packages/ListSearch'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: #F9F9F9;
`

function App() {
  const [form] = Form.useForm()

  return (
    <Container>
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
            options: async(searchValue, values: Record<string,any>, type: string)=> {
              console.log('searchValue: ', searchValue)
              console.log('values---: ', values)
              console.log('type---: ', type)
              return [
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
              ]
            },
            attributes: {
              showSearch: true
            }
          },
        ]}
        onSearch={function (values: any): void {
          console.log('values: ', values)
        }}
      ></ListSearch>
    </Container>
  )
}

export default App
