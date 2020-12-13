import React from 'react';
import styled from 'styled-components';
import { Title, Body } from './Typography';

const FooterWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
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

const LinkContainer = styled.span`
  display: flex;
`;

const Link = styled.a`
  width: fit-content;
  color: white;
  text-decoration: none;
  text-transform: lowercase;
  font-family: bodoni;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 2px;
  padding: 0 20px;
  opacity: 1;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const Footer = props => {
	return (
          <FooterWrapper>
	          <StyledHeader>
	          	<Title header size={36} color="white" bold>Thomas C. Siskar</Title>
	          </StyledHeader>
	          <div style={{paddingBottom: 16}}>
	          	<Body size="medium"> Investment Strategist & MBA Student </Body>
	          </div>
	          <LinkContainer>
		          <Link href="mailto:tomcsiskar@gmail.com"> email </Link>
		          <Link href="https://www.linkedin.com/in/thomas-siskar/" target="_blank"> linkedin </Link>
		          <Link href="file:///C:Users\tylersiskar\Desktop\development\tommysite\public\resume.html" onClick={e => alert('Sorry, resume is unavailable right now!')}> 
		          resume 
		          </Link>
	          </LinkContainer>
          </FooterWrapper>
	)
};

export default Footer;