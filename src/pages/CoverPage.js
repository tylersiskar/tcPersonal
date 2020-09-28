import React, { Fragment } from 'react';
import brooklyn from '../brooklyn.jpg';
import work from '../work.jpg';
import tommy from '../tommy.jpg';
import cafe from '../cafe.jpg';
import books from '../books.jpg';
import styled from 'styled-components';
import {LinkGroup} from '../components/Links';
import TileGroup from '../components/Tile/TileGroup';
import { Title } from '../components/Typography';
import Section from '../components/Section/Section';

const Page = styled.div`
  height: 100%;
  position: relative;
  overflow: scroll;
  background-image: url(${brooklyn});
  background-size: cover;
  background-position: center;
`;

//background transparent wrapper height 50000px;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-top: 100px;
  color: white;
  font-size: 64px;
  font-family: bodoni;
  text-transform: uppercase;
  font-weight: bold;
`;

const BodyWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  justify-content: flex-start;
`;

const TileWrapper = styled.div`
  height: 300px;
  width: 300px;
  padding: 24px;
`;

const ContentWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

const TitleWrapper = styled.span`
  padding-top: 200px;
  padding-left: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const tiles = [
  {
    header: "ABOUT",
    img: tommy,
    onClick: () => window.scrollTo({ top: 400, behavior: 'smooth' })
  },
  {
    header: "EDUCATION",
    img: books
  },
  {
    header: "WORK",
    img: work
  },
  {
    header: "INTERESTS",
    img: cafe
  }
];
const CoverPage = props => {
  let text = `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`;
    return (
      <Page src={brooklyn}>
        <StyledHeader>
        <h1 style={{fontSize: '64px', margin: 0}}>Thomas C. Siskar</h1>
        </StyledHeader>
        <BodyWrapper>
          <ContentWrapper>
            <TileGroup data={tiles} />
          </ContentWrapper>
          <TitleWrapper>
            <Section title="ABOUT" body={text} />
          </TitleWrapper>
        </BodyWrapper>
      </Page>
  );
}

export default CoverPage;
