import React from 'react';
import styled from 'styled-components';
import { Logo, Title } from '../Typography';

const HeaderComponent = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5vw;
	box-sizing: border-box;
	position: fixed;
	width: 100vw;
	z-index: 1;
	height: 0;
	background: #001021;
	opacity: 0;
	transition: all 0.35s ease;
	${({ show }) => show && `
		height: 100px;
		opacity: 1;
	`};
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Link = styled.a`
	text-decoration: none;
	color: ${({ color }) => color ? color : 'white'};
	padding: ${({ noPadding }) => noPadding ? 0 : '0 2vw'};

	&:hover {
		color: gray;
	}
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LinkWrapper = styled.span`
	display: flex;
	cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Links = styled.div`
	display: flex;
	justify-content: center;
	opacity: ${({ showHeader }) => showHeader ? 1 : 0};
	transition: all 0.35s ease;
	flex: 1;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const ContactButton = styled.div`
	flex: 1;
	justify-content: flex-end;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
	flex: 1;
	justify-content: flex-start;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Header = props => {
	const { showHeader, tileData } = props;

	function _renderChildren() {
		return tileData.map((item, index) => {
			return (
				<LinkWrapper key={index}>
					<Title size={16} color="white">
					<Link href={item.href} smooth>{item.link}</Link>
					</Title>
				</LinkWrapper>)
		})
	}

	return (
		<HeaderComponent {...props} show={props.showHeader} showHeader={showHeader}>
			<LogoWrapper>
				<Logo show={showHeader} text="TCS"/>
			</LogoWrapper>
			<Links showHeader={showHeader}>
			{_renderChildren()}
			</Links>
			<ContactButton>
				<Title size="2xSmall" textAlign="right"> 
					<Link href="#footer" color={"#0C6481"} noPadding> Get in touch </Link>
				</Title>
			</ContactButton>
		</HeaderComponent>
		)
};

export default Header;