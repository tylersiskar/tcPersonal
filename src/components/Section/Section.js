import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Title, Body } from '../Typography';

const propTypes = {
	titleColor: Proptypes.string,
	bodyColor: Proptypes.string,

};

const defaultProps = {
	titleColor: 'white',
	bodyColor: 'white'
}
const SectionWrapper = styled.div`
	padding-top: 300px;
	padding-left: 100px;
	padding-right: 100px;
	padding: 300px 100px;
	display: flex;
	flex-direction: column;
`;

const HeaderWrapper = styled.span`
	display: flex;
	justify-content: flex-start;
	padding-bottom: 16px;
`;

const BodyWrapper = styled.span``;

const Section = props => {
	return (
		<SectionWrapper>
			<HeaderWrapper>
				<Title size="large" bold color={props.titleColor}> {props.title} </Title>
			</HeaderWrapper>
			<BodyWrapper>
				<Body color={props.bodyColor}> {props.body} </Body>
			</BodyWrapper>
		</SectionWrapper>
	)
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;