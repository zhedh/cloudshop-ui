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
  display: flex;
  width: var(--content-width);
  margin: 0 auto;

  > article {
    flex: 1;
    box-sizing: border-box;
    height: calc(100vh - var(--header-height));
    padding: var(--block-spacing);
    overflow-y: auto;
    

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 400;
    }

    p {
      color: var(--sub-text-color);
    }

    table {
      border-collapse: collapse;
      width: 100%;
      border: 1px solid var(--border-color);

      tr th,
      tr td {
        border: 1px solid var(--border-color);
        padding: 8px 10px;

        &:first-child {
          font-weight: 500;
        }
      }

      tr th {
        background: #f6f6f6;
      }

      tr td {
        color: var(--sub-text-color);
      }
    }

    .components {
      /* --background-color: #fff;
      --border-color: #f3f3f3; */
      padding: 20px;
      border: 1px solid var(--border-color);
      border-radius: 5px;
    }
  }
`

export default Layout
