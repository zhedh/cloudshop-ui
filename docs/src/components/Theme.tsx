import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import ThemeContext, { Theme } from '../contexts/theme'

const DarkStyle = createGlobalStyle`
  :root {
    /* 字体定义 */
    --text-color: #fff;
    --sub-text-color: #f6f6f6;
    --desc-text-color: #f0f0f0;

    /* 主题定义 */
    --primary-color: #3975c6;
    --success-color: #52c41a;
    --warning-color: #faad14;
    --error-color: #ff4d4f;

    --background-color: #000;
    --border-color: #333;

    /* 其他定义 */
    --edge-distance: 12px;
    --border-radius: 4px;
  }
`

const LightStyle = createGlobalStyle`
  :root {
    /* 字体定义 */
    --text-color: #333;
    --sub-text-color: #666;
    --desc-text-color: #999;

    /* 主题定义 */
    --primary-color: #3975c6;
    --success-color: #52c41a;
    --warning-color: #faad14;
    --error-color: #ff4d4f;

    --background-color: #fff;
    --border-color: #f3f3f3;

    /* 其他定义 */
    --edge-distance: 12px;
    --border-radius: 4px;
  }
`

function ThemeStyle() {
  const themeContext = useContext(ThemeContext)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return themeContext.theme === Theme.DARK ? <DarkStyle /> : <LightStyle />
}

export default ThemeStyle
