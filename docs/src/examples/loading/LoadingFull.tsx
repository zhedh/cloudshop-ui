import { Button, Table } from 'antd'
import { Loading } from 'cloudshop-ui'
import { useState } from 'react'

const DATA_LIST = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

function LoadingFull() {
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState(
    [] as {
      key: string
      name: string
      age: number
      address: string
    }[]
  )

  const getRecords = () => {
    setLoading(true)

    setTimeout(() => {
      setRecords(DATA_LIST)
      setLoading(false)
    }, 2000)
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <div style={{ padding: 16 }}>
      <Loading loading={loading} background="rgba(0,0,0,0.3)" />
      <Button onClick={() => getRecords()}>刷新</Button>
      <br />
      <br />
      <Table dataSource={records} columns={columns} />
    </div>
  )
}

export default LoadingFull
