import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Title, Body } from '../Typography';
import useIntersect from '../../pages/useIntersect';
import 'aos/dist/aos.css';

const propTypes = {
	titleColor: Proptypes.string,
	bodyColor: Proptypes.string,

};

const defaultProps = {
	titleColor: 'white',
	bodyColor: 'white'
}
const SectionWrapper = styled.div`
	padding-left: 100px;
	padding-right: 100px;
	padding-bottom: 350px;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1024px) {
		padding: 0px;
	}

	@media screen and (max-width: 767px) {
    	align-items: center;
    }
    background-color: ${({ ratio, color }) => ratio > 0.75 ? color : 'black'};
    transition: background-color 0.35s ease;
`;

const HeaderWrapper = styled.span`
	display: flex;
	justify-content: flex-start;
	padding-bottom: 16px;
	height: 100%;
`;

const TextWrapper = styled.span`
	display: flex;
	min-height: 300px;
	width: 100%;
	height: 100%;
	padding-right: 100px;
	justify-content: space-between;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		padding: 0;
		align-items: center;
	}
`;

const BodyWrapper = styled.span`
	display: flex;
	flex-basis: 50%;
	width: 50%;
	height: 100%;
	padding-right: 24px;
	box-sizing: border-box;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const Center = styled.span`
	display: flex;
	flex-basis: 50%;
	width: 50%;
	padding: 0 44px;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 767px) {
    	justify-content: center;
    	padding: 0;
    }
`;
const ImageWrapper = styled.img`
	display: flex;
	border-radius: 20px;
	max-width: 400px;
`;


const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const Section = props => {

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });

	return (
		<SectionWrapper color={props.color} id={props.id} ref={ref} ratio={entry.intersectionRatio}>
			<HeaderWrapper>
				<Title size="large"  color={props.titleColor}> {props.title} </Title>
			</HeaderWrapper>
			<TextWrapper>
				<BodyWrapper>
					<Body color={props.bodyColor} size="large"> {props.body} </Body>
				</BodyWrapper>
				<Center>
				<ImageWrapper src={props.img}/>
				</Center>
			</TextWrapper>
		</SectionWrapper>
	)
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;