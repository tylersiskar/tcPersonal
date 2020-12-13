import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: 100%;
	width: 100%;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		width: 100%;
	}
`;

const TileWrapper = styled.div`
  height: 250px;
  width: 250px;
  padding: 24px;
  display: flex;

  @media screen and (max-width: 1272px) {
	 height: 250px;
	 width: 250px;
  }
  @media screen and (max-width: 767px) {
	 width: 100%;
	 padding: 0;
	 height: 25%;
  }
`;


const TileGroup = props => {
	const { data } = props;
	let delay = 200;
	return (
		<Container>
		{data.map((item, index) => {
			delay = delay + 100;
			return (
				<TileWrapper key={index} data={data}>
					<Tile delay={delay} href={item.href} header={item.link} img={item.img} onClick={item.onClick} id={item.id}/>
				</TileWrapper>
				)
			})
		}
		</Container>
	)
}

export default TileGroup;