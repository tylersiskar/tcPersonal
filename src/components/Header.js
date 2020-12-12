import React from 'react';
import styled from 'styled-components';
import { LinkGroup } from './Links';

const HeaderWrapper = styled.span`
	display: flex;
	width: 100%;
	position: fixed;
	height: 64px;
	align-items: center;
	justify-content: flex-end;
	background-color: transparent;
	  @media screen and (max-width: 1024px) {
	    display: none;
	  }
`;
const Header = props => {
	return (
		<HeaderWrapper>
			<LinkGroup data={props.links}/>
		</HeaderWrapper>
	)
}

export default Header;