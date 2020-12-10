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
	font-size: ${({ fontSize, size }) => fontSize(size)}px;
	font-weight: ${({ bold }) => bold ? 'bold' : '450'};
	color: ${({ color }) => color};
	font-family: bodoni;
	margin: 0;
	text-transform: uppercase;
	z-index: ${({ header }) => header ? 999 : 0};
	@media screen and (max-width: 1024px) {
		font-size: ${({ mobileSize, size }) => mobileSize(size)}px;
	}
`;

const Title = (props) => {
	const { children, customFontSize, header } = props;

	function _determineFontSize(size) {
		if( typeof size === 'number' ) return size;
		if(header) return 64;
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

	function _determineMobileSize(size) {
		if( typeof size === 'number' ) return size;
		switch(size) {
			case "xSmall":
				return 24;
			case "small":
				return 32;
			case "medium":
				return 48;
			case "large":
			default:
				return 64;
		}
	}
	return (
		<TitleComponent {...props} fontSize={_determineFontSize} mobileSize={_determineMobileSize} customFontSize={customFontSize}>
		{children}
		</TitleComponent>
		)
}


Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;