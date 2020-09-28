import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(ReactLink)`
  color: white;
  font-size: 28px;
  font-family: Helvetica;
  text-decoration: none;

  &:hover {
    color: gray;
  }
  padding-right: 64px;
  ${({ home }) => home && `
    font-family: cursive;
    font-size: 44px;
  `};
`;

const Link = props => {
	return <StyledLink home={props.home} to={props.to}> {props.children} </StyledLink>
}

export default Link;