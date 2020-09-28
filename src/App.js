import React, { Fragment } from 'react';
import HomePage from './pages/HomePage';
import CoverPage from './pages/CoverPage';
import styled from 'styled-components';
import brooklyn from './brooklyn.jpg';
import { Switch, Route, Redirect } from 'react-router-dom';

const Page = styled.div`
  height: 100vh;
`;

const links = [
  {
    link: 'about',
    to: '/about',
    home: false
  },
  {
    link: 'education',
    to: '/about',
    home: false
  },
  {
    link: 'Thomas C. Siskar',
    to: 'homepage',
    home: true
  },
  {
    link: 'work',
    to: '/about',
    home: false
  },
  {
    link: 'interests',
    to: '/about',
    home: false
  }
];

class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'coverpage':
        return( 
          <Page page={route}>
            <CoverPage {...this.props} links={links}/>
          </Page>)
      case 'homepage':
      default:
        return( <Page page={route}>
          <HomePage {...this.props} links={links}/>
        </Page>);
    }

  }

    render() {
        return (
            <Switch>
              <Route 
                path="/homepage" 
                component={() => this._renderScreen('homepage')}/>
              <Route 
                path="/about" 
                component={() => this._renderScreen('coverpage')}/>
            <Redirect to="/about"/>
            </Switch>

    );
  }
}


export default App;
