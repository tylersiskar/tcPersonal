import React, { Fragment, useState, useRef, useEffect } from 'react';
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
import Header from '../components/Header';

const Page = styled.div`
  height: 5000px;
  width: 100vw;
  position: relative;
  // overflow: auto;
  background-color: ${({ color }) => color};
  transition: background-color 0.3s ease;
`;

//background transparent wrapper height 50000px;
const Background = styled.div`
  height: 1000px;
  background-image: url(${brooklyn});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeader = styled.header`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  justify-content: center;
  background: transparent;
  padding-top: 100px;
  color: white;
  font-size: 64px;
  font-family: bodoni;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  &::after {
    content: '';
    bottom: calc(0% + 2px);
    position: absolute;
    width: 100%;
    height: 22px;
    background-color: #086375;
    opacity: 0.7;
    z-index: 0;
  }
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
  padding-bottom: 500px;
`;

const TitleWrapper = styled.span`
  padding-left: 100px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
`;


const CoverPage = props => {
  const [ background, setBackground ] = useState('darkslategray');
  const inputRef = useRef();
  const [aboutOffset, setAbout ] = useState(0);
  const [eduOffset, setEdu ] = useState(0);
  const [workOffset, setWork ] = useState(0);
  const [interestOffset, setInt ] = useState(0);
  const [header, showHeader ] = useState(false);

  useEffect(() => {
    if(window.scrollY > 1000) showHeader(true);
    const _setBackgroundColor = () => {
      let scrollY = window.scrollY;
      if(scrollY >= 3250) {
        setBackground('#A0CCDA');
      } else if(scrollY >= 2700) {
        setBackground('gray');
      } else if(scrollY >= 1700) {
        setBackground('darkgray');
      } else if (scrollY >= 1000){
        showHeader(true);
        setBackground('darkslategray');
      } else {
        showHeader(false);
        setBackground('black');
      }
    }
    window.addEventListener('scroll', _setBackgroundColor);
    return () => window.removeEventListener('scroll', _setBackgroundColor)
  }, [background] );

  const tiles = [
    {
      link: "ABOUT",
      img: tommy,
      href: "#about",
    },
    {
      link: "EDUCATION",
      img: books,
      href: "#education",
    },
    {
      link: "WORK",
      img: work,
      href: "#work",
    },
    {
      link: "INTERESTS",
      img: cafe,
      href: "#interests",
    }
  ];

  let text = `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`;
    return (
      <Page src={brooklyn} color={background}>
      <Background>
        {header && <Header links={tiles} />}
        <StyledHeader>
        <Title header color="white" bold>Thomas C. Siskar</Title>
        </StyledHeader>
        <BodyWrapper>
          <ContentWrapper>
            <TileGroup data={tiles} />
          </ContentWrapper>
          <TitleWrapper>
            <Section title="ABOUT" body={text} id="about" img={tommy}/>
          </TitleWrapper>
          <TitleWrapper>
            <Section title="EDUCATION" body={text} id="education"/>
          </TitleWrapper>
          <TitleWrapper>
            <Section title="WORK" body={text} id="work"/>
          </TitleWrapper>
          <TitleWrapper>
            <Section title="INTERESTS" body={text} id="interests"/>
          </TitleWrapper>
        </BodyWrapper>
        </Background>
      </Page>
  );
}

export default CoverPage;
