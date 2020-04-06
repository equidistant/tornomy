import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './style'

export default () => {
  return (
    <>
      <GlobalStyle />
      <Root>
        <Cover img={`${process.env.PUBLIC_URL}/cover.png`}/>
      </Root>
    </>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
