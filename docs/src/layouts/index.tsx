import { styled } from 'styled-components'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sider from './Sider'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Sider />
        <article>
          <Outlet />
        </article>
      </Content>
    </>
  )
}

const Content = styled.main`
  position: relative;
  width: var(--content-width);
  margin: 0 auto;
  display: flex;

  > article {
    padding: var(--block-spacing);
  }
`

export default Layout
