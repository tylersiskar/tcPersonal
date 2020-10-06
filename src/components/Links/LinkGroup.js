import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const GroupContainer = styled.span`
	display: flex;
	padding: 64px;
	align-items: center;
	background: transparent;
`;

const LinkGroup = props => {
	const { data } = props;
	return (
		<GroupContainer>
		{data && data.map((item, index) => {
			return(
			<Link key={index} onClick={item.onClick} href={item.href}> {item.link} </Link>
			)
		})}
		</GroupContainer>
	)
}

export default LinkGroup;