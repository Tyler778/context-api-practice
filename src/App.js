import React, { Component } from 'react';
import './App.css';

//BootSwatch 
import 'bootswatch/dist/superhero/bootstrap.min.css'
//Jquery and Bootstrap JS Library CDN inside index.html

//Components
import Jumbotron from './Jumbotron.js'
import FirstExampleComponent from './FirstComponent/FirstExampleComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Jumbotron>

      </Jumbotron>

      <FirstExampleComponent>
        
      </FirstExampleComponent>
      </React.Fragment>
    );
  }
}

export default App;




