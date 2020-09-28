import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const GroupContainer = styled.span`
	display: flex;
	padding: 64px;
	align-items: center;
`;

const LinkGroup = props => {
	const { data } = props;
	return (
		<GroupContainer>
		{data.map((item, index) => {
			console.log(item.link)
			return(
			<Link home={item.home} to={item.to}> {item.link} </Link>
			)
		})}
		</GroupContainer>
	)
}

export default LinkGroup;