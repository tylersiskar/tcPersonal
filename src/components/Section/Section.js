import React, { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Link  from '../Links/Link';
import { Title, Body } from '../Typography';
import { colors } from '../../colors';
import useIntersect from '../../pages/useIntersect';
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
	background-color: ${({ ratio, color }) => ratio > 0.5 ? color : 'black'};
	transition: background-color 0.35s ease;
	padding: 0 32px 24px 32px;
	min-height: 100vh;
	box-sizing: border-box;
`;

const BodyWrapper = styled.span`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const TextContainer = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 24px;
	background-color: #7AA095;
	padding: 16px;
	margin-right: 24px;
	box-shadow: 0 0 2px white;
	flex-basis: 50%;
	@media screen and (max-width: 767px) {
		flex-basis: 100%;	
		margin-right: 0;
	}
`;

const TitleWrapper = styled.span`
	display: flex;
	justify-content: flex-start;
	@media screen and (max-width: 767px) {
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
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const Section = props => {
  const { img, img2 } = props;

  const [ href ] = useState(_determineHref());
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });
  function _determineHref() {
  	switch(props.id){
  		case "about":
  			return "#education";
  		case "education":
  			return "#work";
  		case "work":
  			return "#interests";
  		case "interests":
  		default:
  			return "#about";
  	}
  }

	return (
		<SectionWrapper color={props.color} id={props.id} ref={ref} ratio={entry.intersectionRatio}>
			{/*<LinkWrapper> 
				<Link color="white" href={href}> 
				{`${href.substring(1, href.length).toUpperCase()}`} 
				</Link> 
			</LinkWrapper>*/}
		  <TitleWrapper>
			<Title size="large"  color={props.titleColor}> {props.title} </Title>
		  </TitleWrapper>
		  <BodyWrapper>
			{/*<TextWrapper>
					<Body color={props.bodyColor} size="large"> {props.body} </Body>
			</TextWrapper>*/}
			<TextContainer>
				<Body size="large" bold>{props.bodyHeader}</Body>
				<Body textAlign="center"> {props.body} </Body>
			</TextContainer>
			<ImageWrapper url={props.url} />
		  </BodyWrapper>
		</SectionWrapper>
	)
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;