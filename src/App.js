import React, { Fragment } from 'react';
import CoverPage from './pages/CoverPage';
import { Footer } from './components';
import { data, work, cafe, books } from './assets';
import { Switch, Route, Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tiles = [
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
    link: "CAREER GOALS",
    img: data,
    href: "#career goals",
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
  }
];

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  _renderScreen = (route) => {
    return (
      <Fragment>
        <CoverPage {...this.props} sideNavLinks={sideNavLinks} tiles={tiles} />
        <Footer />
      </Fragment>
    );
  }

  render() {
    console.log(this.state, '///');
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => this._renderScreen('coverpage')} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
