import React from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const ThemeContext = React.createContext({
  theme: Theme.LIGHT,
  // setTheme: (_) => {},
})

export default ThemeContext
