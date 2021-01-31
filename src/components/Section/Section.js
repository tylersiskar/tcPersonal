import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Title, Body } from '../Typography';
import { IconGroup } from '../Icons';
import 'aos/dist/aos.css';
import ReactMarkdown from 'react-markdown'

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
	padding: 148px 5vw 5vh;
	min-height: 100vh;
	box-sizing: border-box;
	@media screen and (max-width: 1024px) {
		width: 100%;
		min-height: 300px;
		padding-top: 48px;
	}
`;

const SizeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: transparent;
	min-height: 100vh;
	box-sizing: border-box;
	@media screen and (max-width: 1024px) {
		width: 100%;
		min-height: 300px;
	}
`;

const BodyWrapper = styled.span`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
	p {
		margin: 0;
	}
`;

const TextContainer = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border-radius: 24px;
	background: transparent;
	margin-${({ reverse }) => reverse ? 'left' : 'right'}: 24px;
	flex-basis: 50%;
	@media screen and (max-width: 1024px) {
		margin-${({ reverse }) => reverse ? 'bottom' : 'top'}: 24px;
		flex-basis: 100%;	
		margin: 0;
	}
	a {
		color: #4C74B9;
		&:hover {
			color: white;
		}
	}
`;

const TitleWrapper = styled.span`
	display: flex;
	justify-content: flex-start;
	padding-bottom: 32px;
	@media screen and (max-width: 1024px) {
		justify-content: center;
		padding-bottom: 16px;
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
	margin-${({ reverse }) => reverse ? 'right' : 'left'}: 24px;
	@media screen and (max-width: 1024px) {
		width: 100%;
		margin-${({ reverse }) => reverse ? 'bottom' : 'top'}: 24px;
		margin-left: 0;
		margin-right: 0;
	}
`;

const StyledDiv = styled.div`
	width: 50%;
	@media screen and (max-width: 1024px) {
		width: 100%;
	}
`;

const Section = props => {
	const { 
		color, 
		fromColor, 
		id, 
		titleColor, 
		title, 
		body, 
		url, 
		reverse,
		interests
	} = props;

	return (
		<SectionWrapper color={color} fromColor={fromColor} id={id} >
			<SizeWrapper>
			  <TitleWrapper 
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="200" >
					<Title size="medium"  color={titleColor}> {title} </Title>
			  </TitleWrapper>
			  <BodyWrapper 
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="200">
					{reverse && !interests && <ImageWrapper url={url} reverse={reverse} />}
					<TextContainer reverse={reverse}>
						<Body size="medium">
							<ReactMarkdown linkTarget="_blank" parserOptions={{ commonmark: true }} style={{margin: 0}}>{body}</ReactMarkdown> 
						</Body>
					</TextContainer>

					{!reverse && !interests && <ImageWrapper url={url} reverse={reverse} />}

					{interests && 
						<StyledDiv>
						<IconGroup />
						</StyledDiv>}
			  </BodyWrapper>
		  </SizeWrapper>
		</SectionWrapper>
	)
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;