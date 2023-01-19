
import './App.css';
import Weather from'./Weather';

function App() {
  return (
    <div className="App">
    <div className="container">
     
  
       
 <Weather defaultCity="Kyiv" />

       <footer>
        This app was coded by FaIna and is {""}<a href="https://github.com/Faina4/react-weather-app-from-scratch-hw5/tree/weather-info">
open-sourced
</a>
{""} on GitHub
       </footer>
    </div>
    </div>
  );
}

export default App;
