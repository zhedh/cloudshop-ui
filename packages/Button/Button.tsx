import { Button as AntdButton, Space } from 'antd'
import {
  ButtonProps as AntdButtonProps,
  Dropdown,
  SpaceProps,
  DropDownProps,
} from 'antd'

export interface ButtonProps {
  items?: ColumnsProps[]
  spaceProps?: SpaceProps
  buttonProps?: AntdButtonProps
}

export interface ColumnsProps {
  label?: JSX.Element | string
  dropdown?: boolean
  onClick?: () => unknown
  propsField?: AntdButtonProps | DropDownProps
}

function Button(props: ButtonProps): any {
  const { items } = props

  const clickHandle = (item: ColumnsProps) => {
    item?.onClick && item?.onClick()
  }

  return (
    <Space {...props.spaceProps}>
      {items?.map((i, index: number) =>
        !i?.dropdown ? (
          <AntdButton
            onClick={() => {
              clickHandle(i)
            }}
            key={index}
            {...props.buttonProps}
            {...i?.propsField}
          >
            {i?.label}
          </AntdButton>
        ) : (
          <Dropdown.Button
            onClick={() => {
              clickHandle(i)
            }}
            key={index}
            {...props.buttonProps}
            {...i?.propsField}
          >
            {i?.label}
          </Dropdown.Button>
        )
      )}
    </Space>
  )
}

export default Button
