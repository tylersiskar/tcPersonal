import React from 'react';
import { brooklyn, buffalo, psu, cafe, neighborhood } from '../assets';
import styled from 'styled-components';
import { TileGroup, Title, Section, Header } from '../components';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/index';
import { InView } from 'react-intersection-observer';

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

const StyledHeader = styled.div`
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
    opacity: 1;
    z-index: 0;
  }
`;

const HeaderContainer = styled.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Tiles = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;
class CoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: true,
      tileInView: true
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  _renderPosts = () => {
    if(this.props.posts && this.props.posts.fields.aboutTitle) {
      const { 
        aboutBody, 
        aboutTitle, 
        educationTitle, 
        educationBody, 
        workTitle, 
        workBody, 
        interestTitle, 
        interestBody, 
      } = this.props.posts.fields;
        return (
          <div style={{width: '100%'}}>
            <Section 
              fromColor="#001021" 
              color="#022C35" 
              title={aboutTitle} 
              body={aboutBody} 
              id={aboutTitle.toLowerCase()} 
              url={buffalo}/>
            <Section 
              fromColor="#022C35" 
              color="#034748" 
              title={educationTitle} 
              body={educationBody} 
              id={educationTitle.toLowerCase()} 
              url={psu} 
              reverse/>
            <Section 
              fromColor="#034748" 
              color='#085665' 
              title={workTitle} 
              body={workBody} 
              id={workTitle.toLowerCase()} 
              url={neighborhood} />
            <Section 
              fromColor='#085665' 
              color='#0C6481' 
              title={interestTitle} 
              body={interestBody} 
              id={interestTitle.toLowerCase()} 
              url={cafe} />
          </div>
        )
    } 
  };
      

  render() {
    const { tiles } = this.props;

    return (
        <Page src={brooklyn}>
        <HeaderContainer>
        <Header showHeader={!this.state.tileInView} tileData={tiles}/>
        </HeaderContainer>
          <Background>
            <StyledHeader data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
              <Title header size="small" color="white" bold>Thomas C. Siskar</Title>
            </StyledHeader>
            <InView onChange={inView => this.setState({ tileInView: inView})}>
              {({ inView, ref, entry }) => (
                <Tiles ref={ref}>
                  <TileGroup data={tiles} />
                </Tiles>
              )}
            </InView>
          </Background>
          <WholePage>
            {this._renderPosts()}
          </WholePage>
        </Page>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.data };
}

export default connect(mapStateToProps, { fetchPosts })(CoverPage);