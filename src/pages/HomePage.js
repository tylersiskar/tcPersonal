import React, { Fragment } from 'react';
import brooklyn from '../brooklyn.jpg';
import tommy from '../tommy.jpg';
import styled from 'styled-components';
import {LinkGroup} from '../components/Links';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, Dot, DotGroup, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Page = styled.div`
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(${({ src }) => src});
`;

const CarouselWrapper = styled.div`
  background: transparent;
  padding: 64px;
  .carousel {
    display: flex;
    flex-direction: column;
    height: 350px;
    background: transparent;
  }
`;
const Card = styled.div`
  display: flex;
  min-height: 300px;
  width: 100%;
  background-color: white;
  opacity: 0.9;
  border-radius: 100px;
  box-sizing: border-box;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-self: center;
  .carousel__dot {
    background-color: white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #9E2B25;
  }
  .carousel__dot--selected {
    background-color: darkGray;
  }
`;

const StyledHeader = styled.header`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: center;
   background-color: black;
   color: white;
   font-size: 44px;
   font-family: Helvetica;
`;

const StyledButton = styled(ButtonNext)`
    position: absolute;
    top: 0;
    right: -64px;
    width: 80px;
    height: 300px;
    background: none;
    border: none;
    outline: none;
`;

const StyledButtonBack = styled(ButtonBack)`
    position: absolute;
    top: 0;
    left: -64px;
    width: 80px;
    height: 300px;
    background: none;
    border: none;
    outline: none;
`;

const StyledSlider = styled(Slider)`
  .horizontalSlider___281Ls {
    height: inherit;
  }
`;

const Circle = styled.span`
  display: flex;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid black;
  margin-left: 24px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  padding-left: 16px;
  width: 100%;
`;

const Title = styled.span`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 16px;
`;

const Body = styled.span`
  display: flex;
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 28px;
  font-family: Helvetica;
  text-decoration: none;

  &:hover {
    color: gray;
  }
  padding-right: 64px;
  ${({ home }) => home && `
    padding: 64px;
    padding-left: 0;
    font-family: cursive;
    font-size: 44px;
  `};
`;

const HomePage = props => {
  let text = `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`;
    return (
    <div style={{height: '100vh'}}>
      <Page src={brooklyn}>
        <StyledHeader>
          <LinkGroup data={props.links} />
        </StyledHeader>
        <CarouselWrapper style={{display: 'block'}} >
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
          <span style={{display: 'flex', fontFamily: 'Helvetica', fontSize: 44, paddingLeft: 82}}> ABOUT </span>
          <div style={{position: 'relative', height: '100%'}}>
            <StyledButtonBack > Back </StyledButtonBack>
            <Slider style={{height: 'inherit'}}>
              <Slide index={0}style={{display: 'flex'}}> 
                <Card> 
                  <Circle src={tommy}/>
                  <TextWrapper>
                    <Title>
                    Bio
                    </Title>
                    <Body>
                    {text}
                    </Body>
                  </TextWrapper>
                </Card> 
              </Slide>
              <Slide index={1}style={{display: 'flex'}}> <Card /> </Slide>
              <Slide index={2}style={{display: 'flex'}}> <Card /> </Slide>
            </Slider>
            <StyledButton > Next </StyledButton>
            </div>
            <Div >
              <Dot slide={0} />
              <Dot slide={1} />
              <Dot slide={2} />
            </Div>
          </CarouselProvider>
        </CarouselWrapper>
      </Page>
    </div>
  );
}

export default HomePage;
