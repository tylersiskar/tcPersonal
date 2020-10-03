import React, { useState, useEffect } from 'react';
import brooklyn from '../brooklyn.jpg';
import styled from 'styled-components';
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
  @media screen and (max-width: 767px) {
    background: transparent;
  }
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
  height: 100%;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  justify-content: flex-start;
`;

const ContentWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 500px;
  justify-content: center;

  @media screen and (max-width: 767px) {
      padding-bottom: 50px;
    }
`;

const TitleWrapper = styled.span`
  padding-left: 100px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  @media screen and (max-width: 1024px) {
    padding-left: 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;


const CoverPage = props => {
  const { sections, tiles } = props;

  const [ background, setBackground ] = useState('darkslategray');
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
        {sections.map((section , index ) => {
          const { header, body, id, img } = section;
          return (
              <TitleWrapper key={index}>
                <Section title={header} body={body} id={id} img={img}/>
              </TitleWrapper>
            )
        })}
        </BodyWrapper>
        </Background>
      </Page>
  );
}

export default CoverPage;
