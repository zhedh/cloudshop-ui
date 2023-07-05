import React from 'react'
import routes from '../routes/routes'
import { styled } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const Sider: React.FC = () => {
  const navs = routes[0].children!

  const location = useLocation()
  const navigator = useNavigate()

  return (
    <SiderContainer>
      {navs.map((nav) => (
        <React.Fragment key={nav.path}>
          <label>{nav.name}</label>
          <ul>
            {(nav.children || []).map((subNav) => (
              <li
                key={subNav.path}
                className={
                  '/' + nav.path + '/' + subNav.path === location.pathname
                    ? 'active'
                    : ''
                }
                onClick={() => navigator(nav.path + '/' + subNav.path)}
              >
                {subNav.name}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </SiderContainer>
  )
}

const SiderContainer = styled.aside`
  box-sizing: border-box;
  overflow-y: auto;
  width: var(--sider-width);
  height: calc(100vh - var(--header-height));
  padding: calc(var(--block-spacing) * 2);

  border-right: 1px solid var(--border-color);
  text-align: left;

  > label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
  }

  ul {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;

    li {
      padding: 5px 0;
      line-height: 1.6;
      color: var(--sub-text-color);

      &.active {
        color: var(--primary-color);
      }
    }
  }
`

export default Sider
