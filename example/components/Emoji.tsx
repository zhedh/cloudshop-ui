import { Button } from 'antd'
import { Emoji } from '../../packages'
import { useCallback } from 'react'

function App() {
  const handleSelect = useCallback((value: string) => {
    console.log('value: ', value)
  }, [])

  return (
    <Emoji onSelect={handleSelect}>
      <Button type="primary">选择表情</Button>
    </Emoji>
  )
}

export default App
