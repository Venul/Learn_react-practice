import './App.css';
import Car from './Car/Car'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hell world!</h1>
      </header>
      <body>
        <Car name ={'FORD'} year={2018} />
        <Car name ={'Nissan'} year={2016}>
          <p style={{color:'red'}}>Color</p>
        </Car>
      </body>
    </div>
  );
}

export default App;
