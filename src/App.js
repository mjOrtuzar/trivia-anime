import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import logo from './logo.svg';
import './App.css';

//componentes
import Question from './../src/components/quiz/question/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './../src/components/quiz/Quiz';
import Result from './../src/components/quiz/results/results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        nintendo: 0,
        microsoft: 0,
        sony: 0
      },
     result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }
  //muestra al azar las respuestas
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex= Math.floor(Math.random() * currentIndex);
      currentIndex -=1;

      temporaryValue = array [currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  //
  setUserAnswer(answer) {
    const updatedAnswerCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue +1}
    });
    
    this.setState({
      answersCount: updatedAnswerCount,
      answer:answer
    })
  }
  //muestra la siguiente pregunta
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }
 //evento para pasar a la siguiente pregunta
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(()=> this.setNextQuestion(),300);
    } else {
      //esperando a colocar algo :O
      setTimeout(()=>this.setResults(this.getResults()),300);
    }
  }
//obtengo los resultados
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }
//se colocan los resultados
  setResults (result) {
    if (result.length === 1) {
      this.setState({result: result[0]});
    }else {
      this.setState({result: 'Undetermined'});
    }
  }
  
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.result ? this.renderResult() :this.renderQuiz()}
        </div>
      </div>
    );
  }
}

export default App;

