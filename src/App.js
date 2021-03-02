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

  onChangeName(name, index) {
    const car = this.state.cars[index];
    // получили машину
    car.name = name;
    // поменяли имя
    const newCars = [...this.state.cars];
    // клонируем массив, для того, чтобы можно было изменить стейт
    newCars[index] = car
    // присваиваем машину с новым имененем в новый массив
    this.setState({
      cars: newCars
    })
    // сетим в стейт
  }

  deleteHandler(index) {
    const newCars = this.state.cars.concat();
    // кллонируем массив
    newCars.splice(index, 1);

    this.setState({
      cars: newCars
    })
  }

  componentWillMount() {
    // 1
    console.log('componentWillMount')
  }

  componentDidMount() {
        // 3
    console.log('componentDidMount')
  }

  render() {
        // 2
    console.log('render')
    const divStyle = {
      textAlign: 'center'
    }
    

    return (
      <div className="App">
        <div>
          <h1>{this.props.title}</h1>
        </div>

        <div style={divStyle}>
          <button 
            onClick={this.toggleCarsHandler}>Toggle cars
          </button>
          <div style ={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>

          
          { this.state.showCars 
              ? this.state.cars.map((car, index) => {
                return (
                  <Car 
                    key = {index}
                    name = {car.name}
                    year = {car.year} 
                    onChangeName = {event => this.onChangeName(event.target.value, index)}
                    onDelete = {this.deleteHandler.bind(this, index)}
                  />
                )
              })
            : null
          }
          </div>
        </div>
      </div>
    );
  }
}
export default App;
