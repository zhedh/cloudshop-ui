import { styled } from 'styled-components'

const Header: React.FC = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  )
}

const Container = styled.header`
  border-bottom: 1px solid var(--border-color);
  background: var(--background-color);
`

const Content = styled.div``

export default Header
