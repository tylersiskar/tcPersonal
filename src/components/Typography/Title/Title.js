import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
	bold: PropTypes.bool,
	children: PropTypes.node,
	color: PropTypes.string
};

const defaultProps = {
	size: 'medium',
	color: 'white'
}

const TitleComponent = styled.h1`
	font-family: bodoni;
	z-index: ${({ header }) => header ? 999 : 0};
	margin: 0;
	font-weight: ${({ bold }) => bold ? 'bold' : '450'};
	text-transform: uppercase;
	color: ${({ color }) => color};
	@media (min-width: 967px) {
		font-size: ${({ size }) => size}px;
	}
	@media (max-width: 967px) {
		font-size: ${({ size }) => 44}px;
	}
	@media (min-width: 1150px) {
		font-size: ${({ logo, size }) => logo ? 44 : size}px;
	}
`;

const Title = props => {
	const { size, children } = props;

	function _determineFontSize(size) {
		if( typeof size === 'number' ) return size;
		switch(size) {
			case "xSmall":
				return 32;
			case "small":
				return 44;
			case "medium":
				return 64;
			case "large":
			default:
				return 128;
		}
	}

	return (
		<TitleComponent {...props} logo={props.logo}size={_determineFontSize(size)}>
		{children}
		</TitleComponent>
		)
}


Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;