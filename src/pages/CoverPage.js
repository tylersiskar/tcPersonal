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
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

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

const SectionWrapper= styled.span`
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


class CoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      background: 'black',
      header: false
    }
  }


  _setBackgroundColor = () => {
      let scrollY = window.scrollY;
      if(scrollY >= 3250) {
        this.setState({ background: '#A0CCDA' });
      } else if(scrollY >= 2700) {
        this.setState({ background: 'gray' });
      } else if(scrollY >= 1700) {
        this.setState({ background: 'darkgray' });
      } else if (scrollY >= 1000){
        this.setState({ background: 'darkslategray', header: true });
      } else {
        this.setState({ background: 'black', header: false });
      }
  }

  componentDidMount() {
    this.props.fetchPosts();
    if(window.scrollY > 1000) this.setState({ header: true });
    window.addEventListener('scroll', this._setBackgroundColor);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this._setBackgroundColor);
  }


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
                <Section title={aboutTitle} body={aboutBody} id={aboutTitle.toLowerCase()} img={tommy}/>
              </SectionWrapper>
              <SectionWrapper>
                <Section title={educationTitle} body={educationBody} id={educationTitle.toLowerCase()} img={books}/>
              </SectionWrapper>
              <SectionWrapper>
                <Section title={workTitle} body={workBody} id={workTitle.toLowerCase()} img={work}/>
              </SectionWrapper>
              <SectionWrapper>
                <Section title={interestTitle} body={interestBody} id={interestTitle.toLowerCase()} img={cafe}/>
              </SectionWrapper>
            </Fragment>
            )
      } 
    }
      

  render() {
  const { tiles } = this.props;


    return (
      <Page src={brooklyn} color={this.state.background}>
      <Background>
        {this.state.header && <Header links={tiles} />}
        <StyledHeader>
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