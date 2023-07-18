import styled from 'styled-components'

interface CardProps {
  className?: string
  style?: React.CSSProperties
  title: string | JSX.Element
  actions?: JSX.Element | JSX.Element[]
  children?: JSX.Element | JSX.Element[]
  footer?: JSX.Element | JSX.Element[]
}

function Card(props: CardProps) {
  return (
    <StyledCard className={props.className} style={props.style}>
      <Header>
        <Title>{props.title}</Title>
        <Actions>{props.actions}</Actions>
      </Header>
      {props.children && <article>{props.children}</article>}
      {props.footer && <Footer>{props.footer}</Footer>}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgba(69, 92, 198, 0.06);

  > article {
    padding: var(--padding);
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 var(--padding);
  border-bottom: 1px solid var(--background-color);
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`

const Actions = styled.div``

const Footer = styled.footer`
  padding: calc(var(--padding) / 2) var(--padding);
  border-top: 1px solid var(--border-color);
`

export default Card
