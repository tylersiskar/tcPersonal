import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './Title/Title';

const propTypes = {
  text: PropTypes.string
};

const defaultProps = {
  text: "Thomas C. Siskar"
};

const StyledHeader = styled.div`
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
  margin-bottom: 0;
  opacity: ${({ show }) => (show === true || show === undefined) ? '1' : '0'};
  transition: all 0.35s ease;
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

const Logo = props => {
  const { text } = props;
	return (
    <StyledHeader show={props.show}>
    	<Title header size={36} color="white" bold>{text}</Title>
    </StyledHeader>
	)
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;
export default Logo;

