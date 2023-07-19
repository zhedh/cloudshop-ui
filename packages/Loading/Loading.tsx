import { Spin, SpinProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

type LoadingProps = {
  loading: boolean
  type?: 'page' | 'container'
  background?: string
  spin?: SpinProps
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { type = 'page', loading, background, spin = {} } = props

  if (!loading) return

  if (type === 'page') {
    return (
      <PageComponent background={background}>
        <Spin {...spin} />
      </PageComponent>
    )
  }

  return (
    <ContainerComponent background={background}>
      <Spin {...spin} />
    </ContainerComponent>
  )
}

const StyledComponent = styled.div<{ background?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.background || 'transparent'};
`

const PageComponent = styled(StyledComponent)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

const ContainerComponent = styled(StyledComponent)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`

export default React.memo(Loading)
