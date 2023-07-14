import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
`

function withComponent(Component: React.ElementType) {
  return class extends React.Component {
    render() {
      return (
        <Container>
          <Component {...this.props} />
        </Container>
      )
    }
  }
}

export default withComponent
