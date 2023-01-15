
import './App.css';
import Weather from'./Weather';

function App() {
  return (
    <div className="App">
    <div className="container">
     
  
       
 <Weather defaultCity="Madrid" />

       <footer>
        This app was coded by Anna Filyakina and is  {""}<a href="https://github.com/Faina4/react-weather-app-from-scratch-hw5">
open-sourced
</a>
{""} on GitHub
       </footer>
    </div>
    </div>
  );
}

export default App;
