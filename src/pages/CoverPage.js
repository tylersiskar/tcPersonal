import React from 'react';
import brooklyn from '../brooklyn.jpg';
import buffalo from '../buffalo.jpg';
import psu from '../psu.jpg';
import cafe from '../cafe.jpg';
import books from '../books.jpg';
import styled from 'styled-components';
import TileGroup from '../components/Tile/TileGroup';
import { Title } from '../components/Typography';
import Section from '../components/Section/Section';
import SideNavigation from '../components/SideNavigation';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { colors } from '../colors';
// import useIntersect from './useIntersect';

const WholePage = styled.div`
  display: flex;
  width 100%;
  position: relative;
`;


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


// const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

class CoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scollPosition: window.pageYOffset || 0
    }
  }
  componentDidMount() {
    this.props.fetchPosts();
    window.addEventListener('scroll', () => {
      this.setState({ scollPosition: window.pageYOffset});
    });
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      this.setState({ scollPosition: window.pageYOffset});
    });
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
            <div style={{width: '100%'}}>
                <Section fromColor="#001021" color="#022C35" title={aboutTitle} bodyHeader="Hometown" body={aboutBody} id={aboutTitle.toLowerCase()} url={buffalo}/>
                <Section fromColor="#022C35" color="#034748" title={educationTitle} body={educationBody} bodyHeader="Schools" id={educationTitle.toLowerCase()} url={psu} />
                               <Section fromColor="#034748" color='#085665' title={workTitle} body={workBody} bodyHeader="Experience" id={workTitle.toLowerCase()} url={books} />
                                <Section fromColor='#085665' color='#0C6481' title={interestTitle} body={interestBody} bodyHeader="Hobbies" id={interestTitle.toLowerCase()} url={cafe} />
            </div>
            )
      } 
    }
      

  render() {
  const { tiles, sideNavLinks } = this.props;
  // const [ref, entry] = useIntersect({
  //   threshold: buildThresholdArray()
  // });

  console.log(this.state.scollPosition);
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
      <WholePage>
        {this._renderPosts()}
      <SideNavigation show={this.state.scollPosition > 750} links={sideNavLinks} />
      </WholePage>
      </Page>
  );
}
}

function mapStateToProps(state) {
  return { posts: state.posts.data };
}
export default connect(mapStateToProps, { fetchPosts })(CoverPage);