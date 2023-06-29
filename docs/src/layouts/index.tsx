import { styled } from 'styled-components'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sider from './Sider'

const Layout: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Content>
        <Sider></Sider>
        <article>
          <Outlet></Outlet>
        </article>
      </Content>
    </>
  )
}

const Content = styled.main`
  display: flex;

  > article {
    padding: var(--block-spacing);
  }
`


export default Layout
