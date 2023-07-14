import { Button } from 'antd'
import { useState } from 'react'
import { ListModal } from 'cloudshop-ui'
import withComponent from '../../components/withComponent'

function ListModalBasic() {
  const [visible, setVisible] = useState(false)

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '吴彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]

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
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开列表弹层
      </Button>
      <ListModal
        open={visible}
        rowKey="name"
        columns={columns}
        dataSource={dataSource}
        onCancel={() => setVisible(false)}
      />
    </>
  )
}

export default withComponent(ListModalBasic)
