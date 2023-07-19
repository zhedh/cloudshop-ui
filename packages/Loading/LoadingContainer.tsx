import React from 'react'
import styled from 'styled-components'
import Loading from './Loading'
import { SpinProps } from 'antd'

interface LoadingContainerProps {
  className?: string
  style?: React.CSSProperties
  loading: boolean
  background?: string
  children?: React.ReactNode
  spin?: SpinProps
}

const LoadingContainer: React.FC<LoadingContainerProps> = (props) => {
  const { loading, background, spin } = props

  return (
    <StyledComponent className={props.className} style={props.style}>
      <Loading
        type="container"
        loading={loading}
        background={background}
        spin={spin}
      />
      {props.children}
    </StyledComponent>
  )
}

const StyledComponent = styled.div`
  position: relative;
  overflow: hidden;
`

export default React.memo(LoadingContainer)
