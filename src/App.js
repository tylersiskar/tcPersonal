import React from 'react';
import CoverPage from './pages/CoverPage';
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

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
 _renderScreen = (route) => {
    switch(route) {
      case 'coverPage':
      default:
        return(
          <CoverPage {...this.props} tiles={tiles}/>);
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
