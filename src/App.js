import React, { Fragment } from 'react';
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
    home: false
  },
  {
    link: 'education',
    home: false
  },
  {
    link: 'TCS',
    to: 'homepage',
    home: true
  },
  {
    link: 'work',
    home: false
  },
  {
    link: 'interests',
    home: false
  }
];

class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'coverPage':
      default:
        return(
          <CoverPage {...this.props} links={links}/>);
    }

  }

    render() {
        return (
            <Switch>
              <Route 
                path="/" 
                component={() => this._renderScreen('coverpage')}/>
            <Redirect to="/"/>
            </Switch>

    );
  }
}


export default App;
