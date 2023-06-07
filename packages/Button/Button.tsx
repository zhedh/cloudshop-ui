import styled from 'styled-components'

const SButton = styled.button`
  color: red;
  border: none;
  background-color: green;
`

const Button: React.FC<{ children: JSX.Element | string }> = () => {
  return <SButton>这是一个按钮</SButton>
}

export default Button
