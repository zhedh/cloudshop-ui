import { Button } from '../../packages'
import type { MenuProps } from 'antd'

function App() {
  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e)
  }
  const items = [
    {
      label: '按钮一',
      propsField: {
        type: 'primary',
        danger: false,
      },

      onClick: () => {
        console.log('按钮一')
      },
    },
    {
      label: '按钮二',
      onClick: () => {
        console.log('按钮二')
      },
      propsField: {
        danger: true,
      },
    },
    {
      label: '按钮组',
      dropdown: true,
      propsField: {
        menu: {
          items: [
            {
              key: '1',
              label: '1st item',
            },
            {
              key: '2',
              label: '2nd item',
            },
            {
              key: '3',
              label: '3rd item',
            },
          ],
          onClick: onMenuClick,
        },
      },
    },
  ]

  return (
    <Button
      buttonProps={{ danger: false }}
      spaceProps={{
        wrap: true,
      }}
      items={items}
    />
  )
}

export default App
