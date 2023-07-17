import { Button } from 'antd'
import { Card } from '../../packages'

function App() {
  return (
    <Card
      title="默认卡片"
      actions={<Button>Action</Button>}
      footer={
        <div style={{textAlign: 'right'}}>
          <Button>取消</Button>
          &nbsp;&nbsp;
          <Button type="primary">确定</Button>
        </div>
      }
    >
      <p>这是卡片内容...</p>
      <p>这是卡片内容...</p>
      <p>这是卡片内容....</p>
    </Card>
  )
}

export default App
