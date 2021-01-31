import React from 'react';
import styled from 'styled-components';
import { Title, Body, LogoMenu } from '../';

const FooterWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;
  background-color: #000E1B;
`;


const StyledHeader = styled.header`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  justify-content: flex-start;
  background: transparent;
  color: white;
  font-size: 64px;
  font-family: bodoni;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  margin-bottom: 24px;
  &::after {
    content: '';
    bottom: calc(0% + 2px);
    position: absolute;
    width: 100%;
    height: 22px;
    background-color: #086375;
    opacity: 0.7;
    z-index: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5vw 10vh;
  text-align: center;

`;

const BodyWrapper = styled.div`
  padding-top: 2vh;
  text-align: center;
`;

const LinkContainer = styled.span`
  display: flex;
`;
const Footer = props => {
	return (
          <FooterWrapper id="footer">
            <Wrapper>
              <Title header size="medium" color="white">Thanks for visiting.</Title>
              <BodyWrapper>
              <Body>Contact me via email or LinkedIn or view my resume by clicking the icons below.</Body>
              </BodyWrapper>
            </Wrapper>
	          <StyledHeader>
	          	<Title header size={36} color="white" bold>Thomas C. Siskar</Title>
	          </StyledHeader>
	          <div style={{paddingBottom: 16}}>
	          	<Body size="medium"> Investment Strategist & MBA Student </Body>
	          </div>
	          <LinkContainer>
		          <LogoMenu />
	          </LinkContainer>
          </FooterWrapper>
	)
};

export default Footer;