import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'



class App extends Component {
  // нужно наследование от компоненты. Без этого стейт не работает

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2010'}
    ],
    pageTitle: 'Cars list'
  }

render(){
  const divStyle = {
    textAlign: 'center'
  }

  let cars; 
  cars = this.state.cars;
  // не как в уроке. Пришлось создать спера переменную

  return (
    <div className="App">
      <header>
        <h1>{this.state.pageTitle}</h1>
      </header>
      <body style={divStyle}>
        <Car name ={cars[0].name} year={cars[0].year} />
        <Car name ={cars[1].name} year={cars[1].year} />
        <Car name ={cars[2].name} year={cars[2].year} />
      </body>
    </div>
  );
}
}
export default App;
