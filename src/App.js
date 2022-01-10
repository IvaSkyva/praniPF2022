import logo from './vlocka1.png';
import './App.css';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div className="App">
      <Snowfall />
      <header className="App-header">
      
      <div className='napis'>
        <p> Úspěšný nový rok </p>
        <p> 2022 s Reactem </p>
        </div> 
        
        <img src={logo} className="App-logo" alt="logo" />
 

       
      </header>
    </div>
  );
}

export default App;
