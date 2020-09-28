import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import {colors} from '../Theme/colors';
import tommy from '../../tommy.jpg';
import { Title } from '../Typography';

const propTypes = {
	backgroundColor: Proptypes.string,
	header: Proptypes.string,
	body: Proptypes.string,
	img: Proptypes.string
};

const defaultProps = {
	backgroundColor: colors.white,
	img: tommy
};

const TileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	min-height: 300px;
	min-width: 300px;
	background-image: none;
	background-position: center;
	background-size: cover;
	border-radius: 20px;
	padding: 16px;
	opacity: 1;
	&:hover {
		cursor: pointer;
	}
`;

const AllWrapper = styled.div`
	display: flex;
	position: relative;
	min-height: 300px;
	min-width: 300px;
`;

const ColorWrapper = styled.div`
	position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    opacity: 0.7;
    	transition: opacity 0.5s ease;
    &:hover {
    	opacity: 0;
    }
`;

const Image = styled.img`
	position: absolute;
    top: 0px;
    border-radius: 20px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
    	transition: opacity 0.5s ease;
    &:hover {
    	opacity: 0.7;
    }
    z-index: 3;
`;

const HeaderWrapper = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%:
`;

const Tile = props => {
	
	function _onClick(e) {
		props.onClick && props.onClick(e);
	}

	return (
		<AllWrapper onClick={_onClick}>
			<TileWrapper>
				<Image src={props.img} />
				<ColorWrapper>
				<div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
				<HeaderWrapper>
					<Title  bold size="small" color={"#086375"}> {props.header} </Title>
				</HeaderWrapper>
				</div>
				</ColorWrapper>
			</TileWrapper>
		</AllWrapper>
	)
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;