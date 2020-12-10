import React, { Fragment } from 'react';
import brooklyn from '../brooklyn.jpg';
import buffalo from '../buffalo.jpg';
import psu from '../psu.jpg';
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
  width: 100vw;
  position: relative;
  background-color: black;
  height: 100%;
`;

//background transparent wrapper height 50000px;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  box-sizing: border-box;
  height: 100vh;
  background-image: url(${brooklyn});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 767px) {
    padding: 0;
    background: lightgray;
  }
`;

const StyledHeader = styled.header`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  justify-content: flex-start;
  background: transparent;
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

const ContentWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 0;
    height: 100%;
  }  
  @media screen and  (max-width: 1024px) {
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
                <Section color="darkslategray" title={aboutTitle} bodyHeader="Hometown" body={aboutBody} id={aboutTitle.toLowerCase()} url={buffalo}/>
                <Section color={colors.timberwolf} title={educationTitle} body={educationBody} bodyHeader="Schools" id={educationTitle.toLowerCase()} url={psu} />
                <Section color={colors.artichoke} title={workTitle} body={workBody} bodyHeader="Experience" id={workTitle.toLowerCase()} url={books} />
                <Section color='#EADDA6' title={interestTitle} body={interestBody} bodyHeader="Hobbies" id={interestTitle.toLowerCase()} url={cafe} />
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
          <Title header size="small" color="white" bold>Thomas C. Siskar</Title>
        </StyledHeader>
        <ContentWrapper>
          <TileGroup data={tiles} />
        </ContentWrapper>
        </Background>
        {this._renderPosts()}
      </Page>
  );
}
}

function mapStateToProps(state) {
  return { posts: state.posts.data };
}
export default connect(mapStateToProps, { fetchPosts })(CoverPage);