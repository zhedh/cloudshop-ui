import './App.css'

// import { ListSearch } from '../lib/retail-ui.js'
// import { ListSearch } from '../lib/retail-ui.js'
import { Form } from 'antd'
import ListSearch, { FieldType } from '../packages/ListSearch'
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
            options: async(searchValue: string, values: Record<string,any>, type: string)=> {
              console.log('searchValue: ', searchValue)
              console.log('values---: ', values)
              console.log('type---: ', type)
              const data =  [
                {
                  value: 18,
                  label: '18',
                },
                {
                  value: 19,
                  label: '19',
                },
                {
                  value: 20,
                  label: '20',
                },
                {
                  value: 21,
                  label: '21',
                },
              ].filter((i) => i.label.includes(searchValue))

              return new Promise((resolve)=> {
                setTimeout(()=> {
                  resolve(data)
                }, 300)
              })
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
