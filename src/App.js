import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayButton from './components/mainTrivia';
<<<<<<< c2719585f3f390ebbed6093fd1b93f2edb0f7877
import Logo from './components/mainTrivia/Logo.png';
import './App.css';
=======
import Welcome from './components/mainTrivia/WelcomeMessage'
import { TrueAnswerButton, FalseAnswerButton } from './components/QuestionsTrivia/AnswersButtons';
>>>>>>> arreglando trivia

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
        <Row>
          <Col xs={12} md={12}>
          <h2>Prueba tus conocimientos ñoños con...</h2>
          </Col>
        </Row>
        <Row>
<<<<<<< c2719585f3f390ebbed6093fd1b93f2edb0f7877
          <Col xs={12} md={12}>
            <img src={Logo} className="logo" alt="logo"/>
=======
          <Col>
            <Welcome/>
>>>>>>> arreglando trivia
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <PlayButton/>
          </Col>
        </Row>
        <Row>
          <Col xs= {6}>
            <TrueAnswerButton/>
          </Col>
          <Col xs= {6}>
            <FalseAnswerButton/>
          </Col>
        </Row>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
