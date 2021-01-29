import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Title, Body } from '../Typography';
import 'aos/dist/aos.css';

const propTypes = {
	titleColor: Proptypes.string,
	bodyColor: Proptypes.string,
};

const defaultProps = {
	titleColor: 'white',
	bodyColor: 'white'
};

const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(${({ fromColor }) => fromColor}, ${({ color }) => color});
	padding: 0 32px 24px 32px;
	min-height: 100vh;
	box-sizing: border-box;
	@media screen and (max-width: 1024px) {
		width: 100%;
		min-height: 300px;
	}
`;

const SizeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: transparent;
	min-height: 100vh;
	box-sizing: border-box;
	width: calc(100% - 300px);
	@media screen and (max-width: 1024px) {
		width: 100%;
		min-height: 300px;
	}
`;

const BodyWrapper = styled.span`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 1272px) {
		flex-direction: column;
	}
`;

const TextContainer = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 24px;
	background: transparent;
	margin-right: 24px;
	flex-basis: 50%;
	@media screen and (max-width: 1024px) {
		flex-basis: 100%;	
		margin-right: 0;
	}
`;

const TitleWrapper = styled.span`
	display: flex;
	justify-content: flex-start;
	@media screen and (max-width: 1024px) {
		justify-content: center;
	}
`;

const ImageWrapper = styled.span`
	display: block;
	background-image: url(${({ url }) => url});
	background-size: cover;
	background-position: center;
	min-width: 300px;
	min-height: 300px;
	border-radius: 24px;
	width: 50%;
	margin-left: 24px;
	@media screen and (max-width: 1272px) {
		width: 100%;
		margin-top: 24px;
		margin-left: 0;
	}
`;


const Section = props => {

	return (
		<SectionWrapper color={props.color} fromColor={props.fromColor} id={props.id} >
			<SizeWrapper>
			  <TitleWrapper 
						data-aos="fade-up"
						data-aos-duration="500"
						data-aos-delay="200">
					<Title size="large"  color={props.titleColor}> {props.title} </Title>
			  </TitleWrapper>
			  <BodyWrapper 
						data-aos="fade-up"
						data-aos-duration="500"
						data-aos-delay="200">
					<TextContainer>
						<Body size="medium" textAlign="justify"> {props.body} </Body>
					</TextContainer>
					<ImageWrapper url={props.url} />
			  </BodyWrapper>
		  </SizeWrapper>
		</SectionWrapper>
	)
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;