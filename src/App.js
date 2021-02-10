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
    pageTitle: 'Cars list',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }
    

    // let cars = null;
    // if (this.state.showCars) {
    //   cars = this.state.cars.map((car, index) => {
    //     return (
    //       <Car 
    //         key = {index}
    //         name = {car.name}
    //         year = {car.year} 
    //         onChangeTitle = {() => this.changeTitleHandler(car.name)}
    //       />
    //     )
    //   })
    // }

    return (
      <div className="App">
        <div>
          <h1>{this.state.pageTitle}</h1>
        </div>

        <div style={divStyle}>
          <button 
            onClick={this.toggleCarsHandler}>Toggle cars
          </button>
          
          {/* {cars} */}
          { this.state.showCars 
              ? this.state.cars.map((car, index) => {
                return (
                  <Car 
                    key = {index}
                    name = {car.name}
                    year = {car.year} 
                    onChangeTitle = {() => this.changeTitleHandler(car.name)}
                  />
                )
              })
            : null
          }
        </div>
      </div>
    );
  }
}
export default App;
