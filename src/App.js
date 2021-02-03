import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'



class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2010'}
    ],
    pageTitle: 'Cars list'
  }

  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + ' Blablacars';
    this.setState({
      pageTitle: newTitle
    });
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars; 
    cars = this.state.cars;

    return (
      <div className="App">
        <div>
          <h1>{this.state.pageTitle}</h1>

          <button onClick={this.changeTitleHandler}>Change title</button>
        </div>
        <div style={divStyle}>
          <Car name ={cars[0].name} year={cars[0].year} />
          <Car name ={cars[1].name} year={cars[1].year} />
          <Car name ={cars[2].name} year={cars[2].year} />
        </div>
      </div>
    );
  }
}
export default App;
