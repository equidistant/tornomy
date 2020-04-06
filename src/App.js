import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './style'

export default () => {
  return (
    <>
      <GlobalStyle />
      <Root>
        <Cover img={`${process.env.PUBLIC_URL}/cover.png`}>
          <CenterCover>
            <Logo img={{ src: `${process.env.PUBLIC_URL}/logo-smaller.png`}} />
            <CoverText>Professional custodial solutions for digital assets</CoverText>
          </CenterCover>
        </Cover>
        <TextSection>
          <CenterTextSection>
            <Text>
              Tornomy offers in-house developed and third-party software exclusively focused on B2B clients looking for professional custodial solutions for their digital assets.
            </Text>
            <Divider />
            <Text>
              Tornomy is an Estonia-licensed virtual currency wallet service provider (License number FRK001070) which greatly broadens our services and capabilities as well as proves our reputation and long-term commitment to service our clients needs.
            </Text>
            <Divider />
            <Text>
              Tornomy supports B2B custodial services for the following digital assets:
            </Text>
            <List>
              <ListItem>Bitcoin</ListItem>
              <ListItem>Ethereum</ListItem>
              <ListItem>Bitcoin cash</ListItem>
              <ListItem>Ethereum classic</ListItem>
              <ListItem>Ripple</ListItem>
              <ListItem>Cardano</ListItem>
            </List>
          </CenterTextSection>
        </TextSection>
        <Footer>
          <CenterFooter>
            Copyrights © 2020. All Rights Reserved by Tornomy Wallet Co. OÜ
          </CenterFooter>
        </Footer>
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

const CenterCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  object-fit: cover;
  width: 300px;
`

const CoverText = styled.div`
  color: white;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  text-align: center;
  margin-top: 16px;
`

const TextSection = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  color: rgb(18,27,35);
`

// background-color: #f2f2f2;

const CenterTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin: 24px;
  padding: 40px;
  border-radius: 4px;
`

const Text = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  text-align: justify;
  word-break: break-word;
`

const Divider = styled.div`
  border-bottom: 1px solid rgba(18,27,35, 0.6);
  width: 150px;
  margin-top 32px;
  margin-bottom: 32px;
`

const List = styled.ul`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  margin-top: 16px;
  padding-left: 32px;
  align-self: flex-start;
`

const ListItem = styled.li`

`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: rgb(18,27,35);

`

const CenterFooter = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.4;
  color: #FAFAFA;
  font-family: Roboto;
  width: 75%;
`
