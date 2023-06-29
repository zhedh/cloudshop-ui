import { styled } from 'styled-components'
import LOGO_GITHUB from '../assets/github.svg'
import ICON_MOON from '../assets/moon.svg'
import ICON_SUNNY from '../assets/sunny.svg'
import React from 'react'
import SVG from '../components/SVG'

const Actions: React.FC = () => {
  return (
    <ActionsContainer>
      <SVG src={ICON_MOON} color="var(--text-color)" width={32} />
      <SVG src={ICON_SUNNY} color="var(--text-color)" width={32} />
      <SVG src={LOGO_GITHUB} color="var(--text-color)" width={32} />
    </ActionsContainer>
  )
}

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          <img src="/logo.png" alt="" />
          <span>Cloudshop UI</span>
        </Title>
        <Actions />
      </Content>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  height: var(--header-height);
  border-bottom: 1px solid var(--border-color);
  background: var(--background-color);
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: var(--content-width);
  padding: 0 16px;
  background-color: var(--background-color);

  @media screen and (max-width: var(--content-width)) {
    width: 100%;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    margin-left: 10px;
    font-size: 18px;
  }
`

export default Header
