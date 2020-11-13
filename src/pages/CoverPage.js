import React, { Fragment } from 'react';
import brooklyn from '../brooklyn.jpg';
import tommy from '../tommy.jpg';
import work from '../work.jpg';
import cafe from '../cafe.jpg';
import books from '../books.jpg';
import styled from 'styled-components';
import TileGroup from '../components/Tile/TileGroup';
import { Title } from '../components/Typography';
import Section from '../components/Section/Section';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { colors } from '../colors';

const Page = styled.div`
  height: 5000px;
  width: 100vw;
  position: relative;
  background-color: black;
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
  padding-bottom: 378px;
  justify-content: center;

  @media screen and (max-width: 767px) {
      padding-bottom: 50px;
    }
`;

const SectionWrapper= styled.span`
  width: 100%;
  height: 100vh;
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


class CoverPage extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  };

   _renderPosts = () => {
      if(this.props.posts && this.props.posts.fields.aboutTitle) {
        const { 
          aboutBody, 
          aboutTitle, 
          // aboutImage, 
          educationTitle, 
          educationBody, 
          // educationImage, 
          workTitle, 
          workBody, 
          // workImage, 
          interestTitle, 
          interestBody, 
          // interestImage 
        } = this.props.posts.fields;
          return (
            <Fragment>
              <SectionWrapper>
                <Section color="darkslategray" title={aboutTitle} body={aboutBody} id={aboutTitle.toLowerCase()} img={tommy}/>
              </SectionWrapper>
              <SectionWrapper>
                <Section color={colors.timberwolf} title={educationTitle} body={educationBody} id={educationTitle.toLowerCase()} img={books}/>
              </SectionWrapper>
              <SectionWrapper>
                <Section color={colors.artichoke} title={workTitle} body={workBody} id={workTitle.toLowerCase()} img={work}/>
              </SectionWrapper>
              <SectionWrapper>
                <Section color="#A0CCDA" title={interestTitle} body={interestBody} id={interestTitle.toLowerCase()} img={cafe}/>
              </SectionWrapper>
            </Fragment>
            )
      } 
    }
      

  render() {
  const { tiles } = this.props;


    return (
      <Page src={brooklyn}>
      <Background>
        <StyledHeader data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
          <Title header color="white" bold>Thomas C. Siskar</Title>
        </StyledHeader>
        <BodyWrapper>
          <ContentWrapper>
            <TileGroup data={tiles} />
          </ContentWrapper>
        {this._renderPosts()}
        </BodyWrapper>
        </Background>
      </Page>
  );
}
}

function mapStateToProps(state) {
  return { posts: state.posts.data };
}
export default connect(mapStateToProps, { fetchPosts })(CoverPage);