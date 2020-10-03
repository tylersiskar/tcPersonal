import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #086375;
  font-size: 28px;
  font-family: botoni;
  text-decoration: none;

  &:hover {
    color: gray;

  }
  transition: color 0.35s ease;
  padding-right: 64px;
  ${({ home }) => home && `
    font-family: cursive;
    font-size: 44px;
  `};
`;

const Link = props => {
	return <StyledLink home={props.home}  href={props.href} onClick={props.onClick}> {props.children} </StyledLink>
}

export default Link;