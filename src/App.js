import React, { Fragment } from 'react';
import styled from 'styled-components';
import CoverPage from './pages/CoverPage';
import Footer from './components/Footer';
import tommy from './tommy.jpg';
import work from './work.jpg';
import cafe from './cafe.jpg';
import books from './books.jpg';
import { Switch, Route, Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const sideNavLinks = [
    {
      label: "ABOUT",
      href: "#about",
    },
    {
      label: "EDUCATION",
      href: "#education",
    },
    {
      label: "WORK",
      href: "#work",
    },
    {
      label: "INTERESTS",
      href: "#interests",
    }];

const LinkGroup = styled.span`
  display: flex;
`;

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
 _renderScreen = (route) => {
    switch(route) {
      case 'coverPage':
      default:
        return(
          <Fragment>
          <CoverPage {...this.props} sideNavLinks={sideNavLinks} tiles={tiles}/>
          <Footer />
          </Fragment>
          );
    }

  }

    render() {
        return (
            <Switch>
              <Route 
                exact
                path="/" 
                component={() => this._renderScreen('coverpage')}/>
            <Redirect to="/"/>
            </Switch>

    );
  }
}


export default App;
