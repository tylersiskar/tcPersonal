import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TileWrapper = styled.div`
  height: 300px;
  width: 300px;
  padding: 24px;
  display: flex;

  @media screen and (max-width: 767px) {
	 width: 100%;
  }
`;


const TileGroup = props => {
	const { data } = props;
	return (
		<Container>
		{data.map((item, index) => {
			return (
				<TileWrapper key={index}>
					<Tile  href={item.href} header={item.link} img={item.img} onClick={item.onClick} id={item.id}/>
				</TileWrapper>
				)
			})
		}
		</Container>
	)
}

export default TileGroup;