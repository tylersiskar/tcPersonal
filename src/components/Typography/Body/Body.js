import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	bold: PropTypes.bool,
	children: PropTypes.node,
	color: PropTypes.string
};

const defaultProps = {
	size: 'medium',
	color: 'white'
}

const BodyComponent = styled.span`
	font-family: bodoni;
	font-size: ${({ size }) => size}px;
	font-weight: ${({ bold }) => bold ? 'bold' : '450'};
	color: ${({ color }) => color};
	@media (max-width: 1024px) {
		font-size: ${({ size }) => size - 4}px;
	}
	text-align: ${({ textAlign }) => textAlign};
`;

const Body = props => {
	const { size, children } = props;

	function _determineFontSize(size) {
		if( typeof size === 'number' ) return size;
		switch(size) {
			case "small":
				return 16;
			case "medium":
				return 20;
			case "large":
			default:
				return 24;
		}
	}

	return (
		<BodyComponent {...props} textAlign={props.textAlign} size={_determineFontSize(size)}>
		{children}
		</BodyComponent>
		)
}


Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;