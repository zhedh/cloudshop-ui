import './App.css'

// import { ListSearch } from '../lib/retail-ui.js'
// import { ListSearch } from '../lib/retail-ui.js'
import { Form } from 'antd'
import ListSearch, { FieldType } from '../packages/ListSearch'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: #f9f9f9;
`

function App() {
  const [form] = Form.useForm()

  const getData = async (v: string) => {
    const { result } = await fetch(
      'https://brand-dev.retailaim.com/tiger/v1/brand-shop-manage/brandShopInfoPage',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'zh-CN,zh;q=0.9',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJicmFuZFNldHRsZUlkIjozMDEwMiwid3dCcmFuZElkIjoxMDAxLCJleHAiOjE2ODYyOTk1MzEsInVzZXJpZCI6IjEifQ.41Bz8FNEzpj3b_C5WTE-6TWr4NpkaXMVAntEYq86FAQ',
          'content-type': 'application/json',
          'sec-ch-ua':
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
        referrer: 'http://localhost:8002/customer/list',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify({
          bizSystem: 2,
          brandSettleId: 30102,
          brandShopName: v,
          pagination: { current: 1, pageSize: 30 },
          brandId: 1001,
        }),
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      }
    ).then((res) => res.json())

    return result.records
  }

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
            options: async (
              searchValue: string,
              values: Record<string, any>,
              type: string
            ) => {
              console.log('searchValue: ', searchValue)
              console.log('values---: ', values)
              console.log('type---: ', type)
              // const data = [
              //   {
              //     value: 18,
              //     label: '18',
              //   },
              //   {
              //     value: 19,
              //     label: '19',
              //   },
              //   {
              //     value: 20,
              //     label: '20',
              //   },
              //   {
              //     value: 21,
              //     label: '21',
              //   },
              // ].filter((i) => i.label.includes(searchValue))

              const data = await getData('')

              console.log(data)

              return data.map((i: any) => ({
                label: i.brandShopName,
                value: i.id,
              }))
            },
            attributes: {
              showSearch: true,
              filterOption : false,
            },
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
