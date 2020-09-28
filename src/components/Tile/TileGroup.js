import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import Tile from './Tile';

const Container = styled.div`
	display: flex;
`;

const TileWrapper = styled.div`
  height: 300px;
  width: 300px;
  padding: 24px;
`;


const TileGroup = props => {
	const { data } = props;
	return (
		<Container>
		{data.map((item, index) => {
			return (
				<TileWrapper>
					<Tile header={item.header} img={item.img} onClick={item.onClick} />
				</TileWrapper>
				)
			})
		}
		</Container>
	)
}

export default TileGroup;