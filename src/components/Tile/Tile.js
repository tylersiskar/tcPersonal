import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { tommy } from '../../assets';
import { Title } from '../Typography';
import 'aos/dist/aos.css';

const propTypes = {
	header: Proptypes.string,
	body: Proptypes.string,
	img: Proptypes.string
};

const defaultProps = {
	img: tommy
};

const TileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	min-height: 250px;
	min-width: 250px;
	background-image: none;
	background-position: center;
	background-size: cover;
	border-radius: 20px;
	padding: 16px;
	overflow: hidden;
	opacity: 1;
	&:hover {
		cursor: pointer;
	}
    @media screen and (max-width: 1272px) {
	   min-height: 250px;
	   min-width: 250px;
    }
	@media screen and (max-width: 1024px) {
    	width: 100%;
    	min-width:100px;
    	min-height: 100px;
    }
  	@media screen and (max-width: 767px) {
  		border-radius: 0;
  	}
`;

const AllWrapper = styled.a`
	display: flex;
	position: relative;
	min-height: 250px;
	min-width: 250px;
	text-decoration: none;
	img {
		opacity: 0.25;
	}
	h1 {
		color: #086375
	}
	&:hover {
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
		img {
			opacity: 0.9;
	    	transform: scale(1.1, 1.1);
	    	background-size: 120%;
		}
		h1 {
			color: white;
		}
	}
    @media screen and (max-width: 1272px) {
	   min-height: 250px;
	   min-width: 250px;
    }

	@media screen and (max-width: 1024px) {
    	width: 100%;
	   min-height: 100px;
	   min-width: 100px;
    }
  	@media screen and (max-width: 767px) {
    	height: 25vh;
    }

`;

const ColorWrapper = styled.div`
	position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    opacity: 0.9;

	@media screen and (max-width: 1024px) {
    	width: 100%;
    }
  	@media screen and (max-width: 767px) {
  		border-radius: 0;
  	}
`;

const Image = styled.img`
	position: absolute;
    top: 0px;
    border-radius: 20px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    object-position: top;
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    opacity: 0.5;
    &:hover {
	    transform: scale(1.1, 1.1);
	    background-size: 120%;
    	opacity: 0.9;
    }
    z-index: 1;
	@media screen and (max-width: 1024px) {
    	width: 100%;
    }
  	@media screen and (max-width: 767px) {
  		border-radius: 0;
  	}
`;

const HeaderWrapper = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	text-align: center;
`;

const Tile = props => {

	function _onClick(e) {
		props.onClick && props.onClick(e);
	}

	return (
		<AllWrapper data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay={props.delay}
			onClick={_onClick} id={props.id} href={props.href}>
			<TileWrapper>
				<ColorWrapper>
					<Image src={props.img} />
				</ColorWrapper>
				<div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
					<HeaderWrapper>
						<Title bold size="xSmall" color={"#086375"}> {props.header} </Title>
					</HeaderWrapper>
				</div>
			</TileWrapper>
		</AllWrapper>
	)
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;