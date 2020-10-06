import React from 'react';
import CoverPage from './pages/CoverPage';
import tommy from './tommy.jpg';
import work from './work.jpg';
import cafe from './cafe.jpg';
import books from './books.jpg';
import { Switch, Route, Redirect } from 'react-router-dom';

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
// let text = `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`;

// const sections = [
//   {
//     header: 'ABOUT',
//     body: text,
//     img: tommy,
//     id: 'about'
//   },
//   {
//     header: 'EDUCATION',
//     body: text,
//     img: books,
//     id: 'education'
//   },
//   {
//     header: 'WORK',
//     body: text,
//     img: work,
//     id: 'work'
//   },
//   {
//     header: 'INTERESTS',
//     body: text,
//     img: cafe,
//     id: 'interests'
//   }
// ];

class App extends React.Component {

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
