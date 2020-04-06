import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './style'

export default () => {
  return (
    <>
      <GlobalStyle />
      <Root>
        <Cover src={`${process.env.PUBLIC_URL}/cover.png`}>
          <CenterCover>
            <Logo src={`${process.env.PUBLIC_URL}/logo-smaller.png`} />
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
            <Image src={`${process.env.PUBLIC_URL}/safe.jpg`} />
            <Text>
              Additionally, we provide consulting and advisory services to our business customers who need help or solutions around topics such as:
            </Text>
            <List>
              <ListItem>online security and audits</ListItem>
              <ListItem>self-storage solutions of digital assets and similar</ListItem>
            </List>
            <ContactText>
              If you are interested to learn more about how we can help your business, please <Link href={'mailto:info@tornomy.com'}>contact us</Link>.
            </ContactText>
            <Image src={`${process.env.PUBLIC_URL}/shield.jpg`} />
              <SmallHeader>Privacy and Cookie Policy</SmallHeader>
            <SmallText>
              At Tornomy, we’re committed to protecting and respecting your privacy and govern your access to and use of this website, and associated content.
            </SmallText>
            <SmallDivider />
            <SmallText>
              Therefore, Tornomy does not collect personal or any other information about its website visitors, data or cookies about people who visit our website or use our services.
              We also do not collect information related to your including IP address, geographic location, and date and time of your request.
            </SmallText>
            <SmallDivider />
            <SmallText>We may change this Privacy Policy from time to time so please check this page occasionally to ensure that you are happy with any changes.</SmallText>
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
  background-color: #f2f2f2;
`

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
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
  margin-bottom: 80px;
`

const Logo = styled.img.attrs(props => ({
  src: props.src
  }))`
  object-fit: cover;
  width: 300px;
  @media only screen and (min-width: 1250px) {
    width: 550px;
  }
`

const CoverText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  text-align: center;
  margin-top: 8px;
  color: rgba(255,255,255,0.8);
  max-width: 250px;
  @media only screen and (min-width: 1250px) {
    font-size: 20px;
    max-width: 500px;
  }
`

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(18,27,35);
  max-width: 690px;
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

const ContactText = styled(Text)`
  margin-bottom: 32px;
`

const Divider = styled.div`
  border-bottom: 1px solid rgba(18,27,35, 0.4);
  width: 100px;
  margin-top 32px;
  margin-bottom: 32px;
`

const List = styled.ul`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  margin-top: 16px;
  padding-left: 40px;
  align-self: flex-start;
  margin-bottom: 32px;
`

const ListItem = styled.li`

`

const Image = styled.img.attrs(props => ({
  src: props.src
  }))`
  object-fit: cover;
  width: 100%;
  margin-bottom: 32px;
  border-radius: 4px;
`

const SmallHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const SmallHeader = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 32px;
`

const SmallText = styled.div`
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  text-align: justify;
  word-break: break-word;
  opacity: 0.8;
`

const SmallDivider = styled.div`
  border-bottom: 1px solid rgba(18,27,35, 0.4);
  width: 100px;
  margin-top 24px;
  margin-bottom: 24px;
`

const Link = styled.a`
  font-weight: bold;
  color: rgb(18,27,35);
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
